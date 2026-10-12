// File: api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Ambil API Key dari Vercel
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

    // Menggunakan model Gemini 3.8 Flash sesuai instruksi error terbaru Google
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`,
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

    if (!response.ok) {
      const errMsg =
        data.error?.message ||
        `HTTP Error Status: ${response.status} ${response.statusText}`;
      return res.status(response.status || 500).json({
        error: `Google Gemini Error: ${errMsg}`,
      });
    }

    // Mengambil teks balasan dari struktur data Gemini
    const textResult =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "Tidak ada respon.";

    return res.status(200).json({
      text: textResult,
      modelUsed: "gemini-3.8-flash",
    });
  } catch (error) {
    return res.status(500).json({
      error: `Server Internal Error: ${error.message || error}`,
    });
  }
}
