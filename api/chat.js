// File: api/chat.js (Vercel Serverless Function)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error:
        "OPENROUTER_API_KEY belum dipasang di Environment Variables Vercel!",
    });
  }

  try {
    const body = req.body || {};
    const { model, messages, system } = body;

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "system", content: system });
    }

    const selectedModel =
      model || "google/gemini-2.0-flash-exp:free";
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: fullMessages,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error:
          data.error?.message ||
          `Error dari OpenRouter (Status ${response.status})`,
      });
    }

    const textOutput = data.choices?.[0]?.message?.content || "";
    const totalTokens = data.usage?.total_tokens || 0;

    return res.status(200).json({
      text: textOutput,
      usage: totalTokens,
    });
  } catch (error) {
    console.error("API Chat Error:", error);
    return res.status(500).json({
      error: `Gagal terhubung ke API: ${error.message || error}`,
    });
  }
}
