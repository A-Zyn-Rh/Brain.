/**
 * Brain — konfigurasi frontend
 */
window.BRAIN_CONFIG = {
  // Jika dibuka di komputer sendiri (lokal), pakai port 5000 (Flask/Python).
  // Jika dibuka di internet, pakai URL Vercel milikmu.
  backendUrl:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:5000"
      : "https://brainai-pro.vercel.app",
};
