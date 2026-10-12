// File: api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Mengambil API Key langsung dari Environment Variables Vercel
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "GROQ_API_KEY belum dipasang di Environment Variables Vercel!",
    });
  }

  try {
    const body = req.body || {};
    const { messages, system } = body;

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "system", content: system });
    }

    // Daftar model Groq terbaru yang aktif dan stabil
    const freeModelsFallback = [
      "llama-3.3-70b-versatile",
      "mixtral-8x7b-32768"
    ];

    let lastError = null;

    // Loop mencoba model satu per satu sampai ada yang berhasil
    for (const currentModel of freeModelsFallback) {
      try {
        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: currentModel,
              messages: fullMessages,
            }),
          }
        );

        const data = await response.json();

        // Jika berhasil (200 OK)
        if (response.ok && data.choices?.[0]?.message?.content) {
          return res.status(200).json({
            text: data.choices[0].message.content,
            usage: data.usage?.total_tokens || 0,
            modelUsed: currentModel,
          });
        }

        lastError =
          data.error?.message ||
          `Status ${response.status} dari model ${currentModel}`;
      } catch (err) {
        lastError = err.message;
      }
    }

    return res.status(500).json({
      error: `Semua model gagal merespon. Error terakhir: ${lastError}`,
    });
  } catch (error) {
    return res.status(500).json({
      error: `Server Error: ${error.message || error}`,
    });
  }
}
