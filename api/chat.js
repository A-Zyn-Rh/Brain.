// File: api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = (process.env.GEMINI_API_KEY || "").trim();

  if (!apiKey) {
    return res.status(500).json({
      error: "GEMINI_API_KEY belum dipasang di Environment Variables Vercel!",
    });
  }

  try {
    const body = req.body || {};
    const { messages, system } = body;

    const contents = Array.isArray(messages)
      ? messages.map((msg) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content || "" }],
        }))
      : [];

    // Daftar model cadangan otomatis jika salah satu model sedang padat (high demand)
    const modelsToTry = ["gemini-1.5-flash", "gemini-2.5-flash", "gemini-3.8-flash"];
    let lastError = null;
    let successData = null;
    let usedModel = "";

    for (const model of modelsToTry) {
      try {
        const payload = { contents };
        if (system) {
          payload.system_instruction = {
            parts: [{ text: system }],
          };
        }

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          successData = data.candidates[0].content.parts[0].text;
          usedModel = model;
          break; // Berhenti looping jika berhasil
        }

        lastError = data.error?.message || `HTTP ${response.status}`;
      } catch (err) {
        lastError = err.message;
      }
    }

    if (!successData) {
      return res.status(503).json({
        error: `Semua model Gemini sedang sibuk. Silakan coba kirim ulang pesan dalam 1-2 detik. (${lastError})`,
      });
    }

    return res.status(200).json({
      text: successData,
      modelUsed: usedModel,
    });

  } catch (error) {
    return res.status(500).json({
      error: `Server Internal Error: ${error.message || error}`,
    });
  }
}
