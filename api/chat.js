// File: api/chat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ 
      error: "OPENROUTER_API_KEY belum dipasang di Environment Variables Vercel!" 
    });
  }

  try {
    const body = req.body || {};
    const { model, messages, system } = body;

    let fullMessages = Array.isArray(messages) ? [...messages] : [];
    if (system) {
      fullMessages.unshift({ role: "system", content: system });
    }

    // List model gratis resmi & paling stabil di OpenRouter saat ini
    const freeModelsFallback = [
      model, // Prioritas 1: Model pilihan dari frontend
      "meta-llama/llama-3.3-70b-instruct:free",
      "google/gemini-2.0-flash-lite-001:free",
      "qwen/qwen-2.5-coder-32b-instruct:free",
      "deepseek/deepseek-r1:free"
    ].filter(Boolean); // Hapus jika undefined

    let lastError = null;

    // Loop mencoba model satu per satu sampai ada yang berhasil
    for (const currentModel of freeModelsFallback) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: currentModel,
            messages: fullMessages,
          }),
        });

        const data = await response.json();

        // Jika berhasil (200 OK)
        if (response.ok && data.choices?.[0]?.message?.content) {
          return res.status(200).json({
            text: data.choices[0].message.content,
            usage: data.usage?.total_tokens || 0,
            modelUsed: currentModel // Info model mana yang berhasil menjawab
          });
        }

        // Simpan error lalu coba model berikutnya di loop
        lastError = data.error?.message || `Status ${response.status} dari model ${currentModel}`;
      } catch (err) {
        lastError = err.message;
      }
    }

    // Jika SEMUA model di daftar fallback gagal
    return res.status(500).json({
      error: `Semua model gratisan gagal merespon. Error terakhir: ${lastError}`
    });

  } catch (error) {
    return res.status(500).json({ 
      error: `Server Error: ${error.message || error}` 
    });
  }
}
