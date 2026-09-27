/**
 * Brain — konfigurasi frontend
 * -----------------------------------------------------------------
 * File ini AMAN untuk dipublikasikan/di-commit ke publik — tidak
 * ada API key di sini sama sekali. API key sesungguhnya disimpan
 * di server (lihat server.js + .env), bukan di browser.
 *
 * Isi "backendUrl" dengan alamat backend proxy Brain:
 *  - saat development lokal: "http://localhost:3001"
 *  - setelah backend di-deploy: ganti dengan URL publiknya,
 *    misalnya "https://brain-backend-milikmu.onrender.com"
 */
window.BRAIN_CONFIG = {
  // Jika dibuka di komputer sendiri (localhost), pakai port 3001.
  // Jika dibuka di internet, otomatis pakai URL backend publikmu.
  backendUrl:
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:3001"
      : "https://brain-backend-kamu.onrender.com", // Ganti dengan URL backend publikmu
};
