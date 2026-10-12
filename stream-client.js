// Frontend: baca stream dari /api/chat dan tampilkan token satu per satu.
//
// Contoh pakai:
//   const box = document.querySelector("#jawaban");
//   box.textContent = "";
//   await streamChat({
//     messages: [{ role: "user", content: "Halo!" }],
//     onToken: (t) => (box.textContent += t),
//     onModel: (m) => console.log("Model:", m),
//   });

async function streamChat({ messages, system, onToken, onModel, signal }) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, system }),
    signal,
  });

  // Error sebelum stream mulai datang sebagai JSON biasa.
  if (!res.ok) {
    let msg = `HTTP ${res.status}`;
    try {
      msg = (await res.json()).error || msg;
    } catch {}
    throw new Error(msg);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let modelReported = false;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop(); // sisa baris yang belum lengkap

    for (const raw of lines) {
      const line = raw.trim();
      // Abaikan baris kosong dan komentar keep-alive (": OPENROUTER PROCESSING")
      if (!line.startsWith("data:")) continue;

      const payload = line.slice(5).trim();
      if (payload === "[DONE]") return;

      let json;
      try {
        json = JSON.parse(payload);
      } catch {
        continue; // potongan JSON rusak, lewati
      }

      if (json.error) {
        throw new Error(json.error.message || "Stream error");
      }

      if (!modelReported && json.model && onModel) {
        onModel(json.model);
        modelReported = true;
      }

      const token = json.choices?.[0]?.delta?.content;
      if (token && onToken) onToken(token);
    }
  }
}
