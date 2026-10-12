// File: api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = (process.env.OPENROUTER_API_KEY || "").trim();

  if (!apiKey) {
    return res.status(500).json({
      error: "OPENROUTER_API_KEY belum dipasang di Environment Variables Vercel!",
    });
  }

  try {
    const body = req.body || {};
    const { messages, system } = body;

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "system", content: system });
    }

    // Daftar model gratis terbaik dan aktif di OpenRouter
    const freeModels = [
      "meta-llama/llama-3.3-70b-instruct:free",
      "deepseek/deepseek-chat:free",
      "google/gemini-2.0-flash-exp:free"
    ];

    let lastError = null;

    for (const modelCandidate of freeModels) {
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
          }
        );

        const data = await response.json();

        if (response.ok && data.choices?.[0]?.message?.content) {
          return res.status(200).json({
            text: data.choices[0].message.content,
            modelUsed: modelCandidate,
          });
        }

        lastError = data.error?.message || `HTTP ${response.status}`;
      } catch (err) {
        lastError = err.message;
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
