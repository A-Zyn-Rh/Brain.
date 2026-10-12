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

    // Menggunakan model flagship utama Groq yang stabil
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: fullMessages,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        error: `Groq Error: ${data.error?.message || response.statusText}`,
      });
    }

    return res.status(200).json({
      text: data.choices[0].message.content,
      usage: data.usage?.total_tokens || 0,
      modelUsed: "llama-3.3-70b-versatile",
    });

  } catch (error) {
    return res.status(500).json({
      error: `Server Error: ${error.message || error}`,
    });
  }
}
