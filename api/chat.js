// File: api/chat.js

// Daftar model gratis OpenRouter (urut: utama -> cadangan).
// Daftar free sering berubah, jadi yang terakhir pakai router otomatis.
const FREE_MODELS = [
  "nvidia/nemotron-3.5-lightning:free",
  "thinkingmachines/inkling-small:free",
  "google/gemma-4-31b-it:free",
  "openrouter/free",
];

// Batas waktu per model, biar model yang macet tidak menahan semuanya.
// Sesuaikan dengan batas durasi function di Vercel kamu.
const TIMEOUT_MS = 12000;

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

  try {
    const body = req.body || {};
    const { messages, system } = body;

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "system", content: system });
    }

    let lastError = "";

    for (const modelCandidate of FREE_MODELS) {
      try {
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "HTTP-Referer": "https://brainai-pro.vercel.app",
              "X-Title": "Brain Orbit",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: modelCandidate,
              messages: fullMessages,
            }),
            signal: AbortSignal.timeout(TIMEOUT_MS),
          }
        );

        const data = await response.json();
        const text = data.choices?.[0]?.message?.content;

        // Lek sukses nemu respons
        if (response.ok && typeof text === "string" && text.trim()) {
          return res.status(200).json({
            text,
            // Kalau pakai openrouter/free, data.model berisi model asli yang dipilih
            modelUsed: data.model || modelCandidate,
          });
        }

        lastError =
          data.error?.message || `HTTP ${response.status} (${modelCandidate})`;
      } catch (err) {
        lastError = `${modelCandidate}: ${err.message}`;
      }
    }

    return res.status(500).json({
      error: `OpenRouter Error: ${lastError}`,
    });

  } catch (error) {
    return res.status(500).json({
      error: `Server Internal Error: ${error.message || error}`,
    });
  }
}
