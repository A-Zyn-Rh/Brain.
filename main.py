"""
Brain — backend (FastAPI)
=====================================================================
- Menyimpan API key di server (file .env), TIDAK pernah dikirim ke browser.
- Meneruskan chat dari brain.html ke provider AI yang dipilih.
- Memiliki sistem Auto-Fallback: Prioritas Gemini 1.5 Flash -> GPT-4o Mini -> Model Awal.
"""

import os
import time
from collections import defaultdict, deque
from pathlib import Path
import json
from typing import Any, Dict, List, Optional, Union

import httpx
import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BASE_DIR / "frontend"
load_dotenv(BASE_DIR / ".env")

PORT = int(os.getenv("PORT", "3001"))
REQUEST_TIMEOUT = 120.0

PROVIDERS = {
    "openrouter": "OPENROUTER_API_KEY",
    "claude": "ANTHROPIC_API_KEY",
    "openai": "OPENAI_API_KEY",
    "gemini": "GEMINI_API_KEY",
    "grok": "XAI_API_KEY",
}


def env(name: str, default: str = "") -> str:
    return (os.getenv(name) or default).strip()


def get_key(provider: str) -> str:
    return env(PROVIDERS[provider])


app = FastAPI(title="Brain Backend")

_origins = [o.strip() for o in env("CORS_ORIGINS", "*").split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

RATE_LIMIT = int(env("RATE_LIMIT_PER_MIN", "20"))
_hits = defaultdict(deque)


def client_ip(request: Request) -> str:
    fwd = request.headers.get("x-forwarded-for", "")
    return (fwd.split(",")[0].strip() if fwd else (request.client.host if request.client else "?"))


def rate_limited(ip: str) -> bool:
    now = time.time()
    q = _hits[ip]
    while q and now - q[0] > 60:
        q.popleft()
    if len(q) >= RATE_LIMIT:
        return True
    q.append(now)
    if len(_hits) > 5000:
        for k in [k for k, v in _hits.items() if not v or now - v[-1] > 60]:
            _hits.pop(k, None)
    return False


class Msg(BaseModel):
    role: str
    content: Union[str, List[Dict[str, Any]]]


class ChatRequest(BaseModel):
    provider: str
    messages: List[Msg]
    system: Optional[str] = None


class UpstreamError(Exception):
    def __init__(self, message: str, status: int = 502):
        super().__init__(message)
        self.message = message
        self.status = status


def error_message(data, fallback: str) -> str:
    try:
        err = data.get("error") if isinstance(data, dict) else None
        if isinstance(err, dict):
            return str(err.get("message") or fallback)
        if isinstance(err, str):
            return err
    except Exception:
        pass
    return fallback


def clean_messages(messages: List[Msg]):
    out = []
    for m in messages:
        role = "assistant" if m.role == "assistant" else "user"
        if isinstance(m.content, str):
            text = m.content.strip()
            if text:
                out.append({"role": role, "content": text})
            continue
        parts = []
        for p in m.content:
            if p.get("type") == "text" and str(p.get("text", "")).strip():
                parts.append({"type": "text", "text": str(p["text"])})
            elif p.get("type") == "image_url":
                url = str((p.get("image_url") or {}).get("url", ""))
                if url.startswith("data:image/") and ";base64," in url:
                    parts.append({"type": "image_url", "image_url": {"url": url}})
        if parts:
            out.append({"role": role, "content": parts})
    return out


def split_data_url(url: str):
    head, data = url.split(",", 1)
    return head[5:].split(";")[0], data


def to_claude_content(content):
    if isinstance(content, str):
        return content
    out = []
    for p in content:
        if p["type"] == "text":
            out.append({"type": "text", "text": p["text"]})
        else:
            mt, data = split_data_url(p["image_url"]["url"])
            out.append({"type": "image", "source": {"type": "base64", "media_type": mt, "data": data}})
    return out


def to_gemini_parts(content):
    if isinstance(content, str):
        return [{"text": content}]
    out = []
    for p in content:
        if p["type"] == "text":
            out.append({"text": p["text"]})
        else:
            mt, data = split_data_url(p["image_url"]["url"])
            out.append({"inlineData": {"mimeType": mt, "data": data}})
    return out


async def post_json(client: httpx.AsyncClient, url: str, headers: dict, body: dict):
    try:
        r = await client.post(url, headers=headers, json=body)
    except httpx.TimeoutException:
        raise UpstreamError("Provider terlalu lama merespons. Coba lagi.", 504)
    except httpx.HTTPError:
        raise UpstreamError("Tidak bisa terhubung ke provider AI. Periksa koneksi internet server.", 502)
    try:
        data = r.json()
    except Exception:
        data = None
    return r, data


# --------------------------------------------------------------------------
# OpenRouter (model gratis)
# --------------------------------------------------------------------------
async def call_openrouter(key: str, messages: list, system: Optional[str]):
    base = env("OPENROUTER_BASE_URL", "https://openrouter.ai/api/v1").rstrip("/")
    model = env("OPENROUTER_MODEL", "openrouter/free")
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + key,
        "HTTP-Referer": env("OPENROUTER_REFERER", "http://localhost:3001"),
        "X-Title": "Brain",
    }

    def build(with_system_role: bool):
        msgs = [dict(m) for m in messages]
        if system:
            if with_system_role:
                msgs = [{"role": "system", "content": system}] + msgs
            elif msgs and msgs[0]["role"] == "user":
                c0 = msgs[0]["content"]
                if isinstance(c0, str):
                    msgs[0]["content"] = system + "\n\n" + c0
                else:
                    msgs[0]["content"] = [{"type": "text", "text": system}] + c0
            else:
                msgs = [{"role": "user", "content": system}] + msgs
        return {"model": model, "max_tokens": 2048, "messages": msgs}

    async with httpx.AsyncClient(timeout=REQUEST_TIMEOUT) as client:
        r, data = await post_json(client, base + "/chat/completions", headers, build(True))
        if r.status_code == 400 and system:
            r, data = await post_json(client, base + "/chat/completions", headers, build(False))

    if r.status_code == 429:
        raise UpstreamError("Batas pemakaian model gratis tercapai. Tunggu sebentar lalu coba lagi.", 429)
    if r.status_code in (401, 403):
        raise UpstreamError("API key OpenRouter ditolak.", 401)
    if not r.is_success:
        msg = error_message(data, "OpenRouter error %d" % r.status_code)
        raise UpstreamError(msg, 502)

    choices = (data or {}).get("choices") or []
    text = ((choices[0].get("message") or {}).get("content")) or "" if choices else ""
    usage = (data or {}).get("usage") or {}
    tokens = int(usage.get("prompt_tokens") or 0) + int(usage.get("completion_tokens") or 0)
    return {"text": text.strip() or "(tidak ada respons)", "usage": tokens}


# --------------------------------------------------------------------------
# Anthropic (Claude)
# --------------------------------------------------------------------------
async def call_claude(key: str, messages: list, system: Optional[str]):
    headers = {
        "Content-Type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
    }
    body = {
        "model": env("ANTHROPIC_MODEL", "claude-sonnet-5"),
        "max_tokens": 4096,
        "messages": [{"role": x["role"], "content": to_claude_content(x["content"])} for x in messages],
    }
    if system:
        body["system"] = system
    async with httpx.AsyncClient(timeout=REQUEST_TIMEOUT) as client:
        r, data = await post_json(client, "https://api.anthropic.com/v1/messages", headers, body)
    if not r.is_success:
        raise UpstreamError(error_message(data, "Anthropic error %d" % r.status_code), 502)
    blocks = (data or {}).get("content") or []
    text = "\n".join(b.get("text", "") for b in blocks if b.get("type") == "text")
    usage = (data or {}).get("usage") or {}
    tokens = int(usage.get("input_tokens") or 0) + int(usage.get("output_tokens") or 0)
    return {"text": text.strip() or "(tidak ada respons)", "usage": tokens}


# --------------------------------------------------------------------------
# OpenAI & xAI
# --------------------------------------------------------------------------
async def call_chat_completions(url: str, key: str, model: str, label: str, messages: list, system: Optional[str]):
    msgs = ([{"role": "system", "content": system}] if system else []) + messages
    headers = {"Content-Type": "application/json", "Authorization": "Bearer " + key}
    body = {"model": model, "max_tokens": 4096, "messages": msgs}
    async with httpx.AsyncClient(timeout=REQUEST_TIMEOUT) as client:
        r, data = await post_json(client, url, headers, body)
    if not r.is_success:
        raise UpstreamError(error_message(data, "%s error %d" % (label, r.status_code)), r.status_code)
    choices = (data or {}).get("choices") or []
    text = ((choices[0].get("message") or {}).get("content") or "") if choices else ""
    usage = (data or {}).get("usage") or {}
    tokens = int(usage.get("prompt_tokens") or 0) + int(usage.get("completion_tokens") or 0)
    return {"text": text.strip() or "(tidak ada respons)", "usage": tokens}


async def call_openai(key: str, messages: list, system: Optional[str], model_name: Optional[str] = None):
    model = model_name or env("OPENAI_MODEL", "gpt-4o-mini")
    return await call_chat_completions(
        "https://api.openai.com/v1/chat/completions", key, model, "OpenAI", messages, system)


async def call_grok(key, messages, system):
    return await call_chat_completions(
        "https://api.x.ai/v1/chat/completions", key, env("XAI_MODEL", "grok-4"), "Grok", messages, system)


# --------------------------------------------------------------------------
# Google (Gemini)
# --------------------------------------------------------------------------
async def call_gemini(key: str, messages: list, system: Optional[str], model_name: Optional[str] = None):
    model = model_name or env("GEMINI_MODEL", "gemini-1.5-flash")
    contents = [
        {"role": "model" if m["role"] == "assistant" else "user", "parts": to_gemini_parts(m["content"])}
        for m in messages
    ]
    body = {"contents": contents}
    if system:
        body["systemInstruction"] = {"parts": [{"text": system}]}
    headers = {"Content-Type": "application/json", "x-goog-api-key": key}
    url = "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent" % model
    async with httpx.AsyncClient(timeout=REQUEST_TIMEOUT) as client:
        r, data = await post_json(client, url, headers, body)
    if not r.is_success:
        raise UpstreamError(error_message(data, "Gemini error %d" % r.status_code), r.status_code)
    cands = (data or {}).get("candidates") or []
    parts = ((cands[0].get("content") or {}).get("parts") or []) if cands else []
    text = "".join(p.get("text", "") for p in parts)
    meta = (data or {}).get("usageMetadata") or {}
    tokens = int(meta.get("promptTokenCount") or 0) + int(meta.get("candidatesTokenCount") or 0)
    return {"text": text.strip() or "(tidak ada respons)", "usage": tokens}


CALLERS = {
    "openrouter": call_openrouter,
    "claude": call_claude,
    "openai": call_openai,
    "gemini": call_gemini,
    "grok": call_grok,
}


# --------------------------------------------------------------------------
# Routes & Auto-Fallback Logic
# --------------------------------------------------------------------------
@app.get("/api/health")
async def health():
    configured = [p for p in PROVIDERS if get_key(p)]
    return {"ok": True, "providersConfigured": configured}


@app.post("/api/chat")
async def chat(req: ChatRequest, request: Request):
    if rate_limited(client_ip(request)):
        return JSONResponse({"error": "Terlalu banyak permintaan. Tunggu sebentar lalu coba lagi."}, status_code=429)
    if req.provider not in PROVIDERS:
        return JSONResponse({"error": "Provider tidak dikenali: %s" % req.provider}, status_code=400)

    messages = clean_messages(req.messages)
    if not messages:
        return JSONResponse({"error": "Pesan kosong."}, status_code=400)

    if sum(len(json.dumps(x["content"])) for x in messages) > 14_000_000:
        return JSONResponse({"error": "Lampiran terlalu besar. Kurangi jumlah atau ukuran gambar."}, status_code=413)

    system_prompt = (req.system or "").strip() or None

    # 1. PRIORITAS UTAMA: Coba Gemini 1.5 Flash
    gemini_key = get_key("gemini")
    if gemini_key:
        try:
            res = await call_gemini(gemini_key, messages, system_prompt, model_name="gemini-1.5-flash")
            return res
        except UpstreamError as e:
            print(f"[Fallback Log] Gemini 1.5 Flash gagal/limit ({e.message}). Menuju ke GPT-4o Mini...")

    # 2. PRIORITAS KEDUA: Coba GPT-4o Mini (OpenAI)
    openai_key = get_key("openai")
    if openai_key:
        try:
            res = await call_openai(openai_key, messages, system_prompt, model_name="gpt-4o-mini")
            return res
        except UpstreamError as e:
            print(f"[Fallback Log] GPT-4o Mini gagal/limit ({e.message}). Menuju ke model awal provider...")

    # 3. FALLBACK TERAKHIR: Pakai model awal dari provider yang dipilih di frontend
    key = get_key(req.provider)
    if not key:
        return JSONResponse(
            {"error": "Semua model prioritas gagal/limit, dan %s belum diisi di file .env." % PROVIDERS[req.provider]}, 
            status_code=400
        )

    try:
        result = await CALLERS[req.provider](key, messages, system_prompt)
        return result
    except UpstreamError as e:
        return JSONResponse({"error": e.message}, status_code=e.status)
    except Exception:
        return JSONResponse({"error": "Terjadi kesalahan tak terduga di server."}, status_code=500)


# --------------------------------------------------------------------------
# Frontend
# --------------------------------------------------------------------------
if FRONTEND_DIR.is_dir():

    @app.get("/", include_in_schema=False)
    async def index():
        return FileResponse(FRONTEND_DIR / "brain.html")

    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR)), name="frontend")


if __name__ == "__main__":
    print("Brain jalan di http://localhost:%d" % PORT)
    uvicorn.run(app, host="0.0.0.0", port=PORT)
