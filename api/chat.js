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

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "user", content: `[System Instruction]: ${system}` });
    }

    // Daftar model Gemini yang akan dicoba berurutan jika ada yang 'high demand'
    const models = ["gemini-3.8-flash", "gemini-2.5-flash", "gemini-1.5-flash"];
    let lastError = null;

    for (const model of models) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: fullMessages.map((msg) => ({
                role: msg.role === "assistant" ? "model" : "user",
                parts: [{ text: msg.content || "" }],
              })),
            }),
          }
        );

        const data = await response.json();

        // Jika sukses (200 OK)
        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return res.status(200).json({
            text: data.candidates[0].content.parts[0].text,
            modelUsed: model,
          });
        }

        lastError = data.error?.message || `HTTP ${response.status}`;
      } catch (err) {
        lastError = err.message;
      }
    }

    // Jika semua model dalam antrean gagal
    return res.status(503).json({
      error: `Semua model Gemini sedang sibuk. Coba lagi dalam beberapa detik. Detail: ${lastError}`,
    });

  } catch (error) {
    return res.status(500).json({
      error: `Server Internal Error: ${error.message || error}`,
    });
  }
}
