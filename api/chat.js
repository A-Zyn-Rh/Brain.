// File: api/chat.js  (versi streaming)

// Biar function tidak mati terlalu cepat saat model lambat.
// Kalau deploy error karena batas plan, turunkan angkanya.
export const config = { maxDuration: 60 };

// Urut: utama -> cadangan. OpenRouter yang mencoba berikutnya
// secara otomatis di sisi server (tanpa round trip tambahan).
const FREE_MODELS = [
  "nvidia/nemotron-3.5-lightning:free",
  "thinkingmachines/inkling-small:free",
  "google/gemma-4-31b-it:free",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = (process.env.OPENROUTER_API_KEY || "").trim();

  if (!apiKey) {
    return res.status(500).json({
      error: "OPENROUTER_API_KEY durung dipasang nang Environment Variables Vercel!",
    });
  }

  const controller = new AbortController();
  // Kalau pengguna menutup tab / menekan stop, hentikan request ke OpenRouter.
  res.on("close", () => controller.abort());

  try {
    const body = req.body || {};
    const { messages, system } = body;

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "system", content: system });
    }

    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://brainai-pro.vercel.app",
        "X-Title": "Brain Orbit",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        models: FREE_MODELS,              // fallback otomatis di OpenRouter
        messages: fullMessages,
        stream: true,                     // kirim token satu per satu
        provider: { sort: "throughput" }, // pilih provider tercepat
        reasoning: { effort: "low" },     // kurangi "mikir" sebelum menjawab
      }),
      signal: controller.signal,
    });

    // Gagal sebelum stream mulai -> balas JSON error biasa.
    if (!upstream.ok || !upstream.body) {
      let msg = `HTTP ${upstream.status}`;
      try {
        const data = await upstream.json();
        msg = data.error?.message || msg;
      } catch {}
      return res.status(upstream.status || 500).json({
        error: `OpenRouter Error: ${msg}`,
      });
    }

    res.status(200);
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders?.();

    // Teruskan stream SSE dari OpenRouter apa adanya ke browser.
    for await (const chunk of upstream.body) {
      res.write(chunk);
    }
    res.end();
  } catch (error) {
    if (error?.name === "AbortError") return; // klien berhenti, normal
    if (!res.headersSent) {
      return res.status(500).json({
        error: `Server Internal Error: ${error.message || error}`,
      });
    }
    // Stream sudah mulai: kirim error sebagai event lalu tutup.
    res.write(
      `data: ${JSON.stringify({ error: { message: String(error.message || error) } })}\n\n`
    );
    res.end();
  }
}
