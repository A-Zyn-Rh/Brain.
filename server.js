require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "2mb" }));

// Pemetaan 4 Model Spesialis di OpenRouter
const MODEL_MAP = {
  claude: "google/gemini-2.0-flash-001:free", // Chat Cepat & Ringan
  openai: "qwen/qwen-2.5-coder-32b-instruct:free", // Khusus Coding & Program
  gemini: "deepseek/deepseek-r1:free", // Penalaran & Logika Rumit
  grok: "black-forest-labs/flux-1-schnell:free", // Generasi Gambar (Text-to-Image)
};

app.post("/api/chat", async (req, res) => {
  try {
    const { provider, messages, system } = req.body || {};

    const openRouterKey = process.env.OPENROUTER_API_KEY;
    if (!openRouterKey) {
      return res.status(400).json({
        error: "OPENROUTER_API_KEY belum diisi di file .env server.",
      });
    }

    // Default ke Chat Cepat jika pilihan tidak ditemukan
    const selectedModel = MODEL_MAP[provider] || "google/gemini-2.0-flash-001";

    const chatMessages = [];
    if (system) chatMessages.push({ role: "system", content: system });
    messages.forEach((m) =>
      chatMessages.push({ role: m.role, content: m.content }),
    );

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openRouterKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: chatMessages,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        (data && data.error && data.error.message) || "OpenRouter error",
      );
    }

    const text = data.choices[0]?.message?.content || "(tidak ada respons)";
    const usage = data.usage?.total_tokens || 0;

    res.json({ text, usage });
  } catch (err) {
    console.error("[chat error]", err);
    res
      .status(502)
      .json({ error: err.message || "Gagal menghubungi OpenRouter." });
  }
});

app.listen(PORT, () => {
  console.log("Brain backend proxy jalan di http://localhost:" + PORT);
});
