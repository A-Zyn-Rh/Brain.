/**
 * Brain — Auth logic (login / register)
 * =====================================================================
 * SKEMA PENYIMPANAN (localStorage, bisa dibaca lintas halaman di domain
 * yang sama — inilah yang menghubungkan login dengan brain.html):
 *
 *   "brain_auth_session"  -> { id, name, email, loginAt }   sesi aktif
 *   "brain_auth_users"    -> [{ id, name, email, password }] "database" demo
 *
 * brain.html membaca "brain_auth_session" untuk tahu siapa yang login,
 * lalu menyimpan riwayat chat dengan awalan kunci "brain:<id>:...", jadi
 * tiap akun punya riwayat obrolan sendiri-sendiri.
 *
 * GANTI DENGAN BACKEND ASLI:
 * Semua fungsi yang perlu diganti untuk produksi ditandai "TODO(backend)".
 * Cukup ganti isi AuthService.login / .register / .oauth — bagian UI
 * (validasi, animasi, toggle) tidak perlu diubah sama sekali.
 * =====================================================================
 */

const SESSION_KEY = "brain_auth_session";
const USERS_KEY = "brain_auth_users";

/* Brain (brain.html) menyimpan chat tamu di bawah kunci "brain:guest:...".
   Begitu tamu itu masuk/daftar, riwayatnya dipindahkan ke "brain:<id>:..."
   supaya obrolan yang sudah dimulai sebagai tamu tidak hilang. Tidak akan
   menimpa riwayat yang sudah ada kalau akun ini sebelumnya sudah pernah login. */
function migrateGuestChatsTo(userId) {
  try {
    const guestPrefix = "brain:guest:";
    const targetPrefix = "brain:" + userId + ":";
    if (localStorage.getItem(targetPrefix + "index")) return; // akun ini sudah punya riwayat sendiri
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.indexOf(guestPrefix) === 0) keys.push(k);
    }
    keys.forEach((k) => {
      const suffix = k.slice(guestPrefix.length);
      localStorage.setItem(targetPrefix + suffix, localStorage.getItem(k));
    });
  } catch (e) {
    /* migrasi bersifat best-effort, jangan sampai gagal login gara-gara ini */
  }
}

/* ============================= ICONS ============================= */
const AUTH_ICONS = {
  google:
    '<svg viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 0 1 3.68 9c0-.593.102-1.17.284-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z"/></svg>',
  github:
    '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  apple:
    '<svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 37 59 127.6 107.2 126.1 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-83 102.6-120.1-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>',
  microsoft:
    '<svg viewBox="0 0 23 23"><rect x="1" y="1" width="10" height="10" fill="#f25022"/><rect x="12" y="1" width="10" height="10" fill="#7fba00"/><rect x="1" y="12" width="10" height="10" fill="#00a4ef"/><rect x="12" y="12" width="10" height="10" fill="#ffb900"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a19.66 19.66 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 7 11 7a19.86 19.86 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
};

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (AUTH_ICONS[name]) el.innerHTML = AUTH_ICONS[name];
  });
}

/* ============================= MOCK AUTH SERVICE ============================= */
/* TODO(backend): ganti seluruh isi objek ini dengan pemanggilan API/BaaS asli.
 * Contoh Supabase:
 *   register: (d) => supabase.auth.signUp({ email:d.email, password:d.password, options:{ data:{ name:d.name } } })
 *   login:    (d) => supabase.auth.signInWithPassword({ email:d.email, password:d.password })
 *   oauth:    (p) => supabase.auth.signInWithOAuth({ provider:p.toLowerCase() })
 * Contoh Firebase:
 *   register: createUserWithEmailAndPassword(auth, email, password)
 *   login:    signInWithEmailAndPassword(auth, email, password)
 *   oauth:    signInWithPopup(auth, new GoogleAuthProvider())
 * Bentuk objek session yang dikembalikan HARUS tetap { id, name, email, loginAt }
 * supaya brain.html tetap bisa menamai ruang penyimpanan chat per akun.
 */
const AuthService = {
  _delay(ms) {
    return new Promise((r) => setTimeout(r, ms));
  },

  _getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (e) {
      return [];
    }
  },
  _saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  _makeId() {
    return (
      "u_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
    );
  },
  _saveSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    migrateGuestChatsTo(session.id);
    return session;
  },

  getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY));
    } catch (e) {
      return null;
    }
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
  },

  async register({ name, email, password }) {
    // TODO(backend): panggil API pendaftaran asli di sini.
    await this._delay(700);
    const users = this._getUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("Email ini sudah terdaftar. Coba masuk saja.");
    }
    // CATATAN: password disimpan polos hanya untuk keperluan demo frontend-only.
    // Backend asli WAJIB melakukan hashing (bcrypt/argon2) sebelum menyimpan.
    const user = { id: this._makeId(), name, email, password };
    users.push(user);
    this._saveUsers(users);
    return this._saveSession({
      id: user.id,
      name: user.name,
      email: user.email,
      loginAt: Date.now(),
    });
  },

  async login({ email, password }) {
    // TODO(backend): panggil API login asli di sini.
    await this._delay(700);
    const users = this._getUsers();
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );
    if (!user) {
      throw new Error("Email atau password salah.");
    }
    return this._saveSession({
      id: user.id,
      name: user.name,
      email: user.email,
      loginAt: Date.now(),
    });
  },

  async oauth(provider) {
    // TODO(backend): ganti dengan alur OAuth asli (redirect/popup) milik provider ini.
    // Alur asli butuh backend untuk menukar authorization code menjadi token dengan aman.
    await this._delay(600);
    const email = provider.toLowerCase() + ".user@example.com";
    const users = this._getUsers();
    let user = users.find((u) => u.email === email);
    if (!user) {
      user = {
        id: this._makeId(),
        name: provider + " User",
        email,
        password: null,
      };
      users.push(user);
      this._saveUsers(users);
    }
    return this._saveSession({
      id: user.id,
      name: user.name,
      email: user.email,
      loginAt: Date.now(),
    });
  },
};

/* ============================= VALIDATION HELPERS ============================= */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId).closest(".field");
  const errorEl = document.getElementById(fieldId + "Error");
  if (message) {
    field.classList.add("has-error");
    errorEl.textContent = message;
    errorEl.classList.add("show");
  } else {
    field.classList.remove("has-error");
    errorEl.textContent = "";
    errorEl.classList.remove("show");
  }
}

function setCheckboxError(errorId, message) {
  const errorEl = document.getElementById(errorId);
  errorEl.textContent = message || "";
  errorEl.classList.toggle("show", !!message);
}

function setFormMessage(msgId, text, type) {
  const el = document.getElementById(msgId);
  el.textContent = text || "";
  el.className = "form-message" + (text ? " show " + type : "");
}

function setButtonLoading(btn, loading) {
  btn.classList.toggle("loading", loading);
  btn.disabled = loading;
}

/* ============================= PASSWORD VISIBILITY TOGGLE ============================= */
function bindPasswordToggles() {
  document.querySelectorAll(".input-toggle[data-toggle-for]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(
        btn.getAttribute("data-toggle-for"),
      );
      const iconSlot = btn.querySelector("span[data-icon]");
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      iconSlot.innerHTML = showing ? AUTH_ICONS.eye : AUTH_ICONS.eyeOff;
      btn.setAttribute(
        "aria-label",
        showing ? "Tampilkan password" : "Sembunyikan password",
      );
    });
  });
}

/* ============================= TOGGLE LOGIN <-> REGISTER ============================= */
function initPaneToggle() {
  const forms = document.getElementById("authForms");
  const track = document.getElementById("authFormsTrack");
  const paneLogin = document.getElementById("paneLogin");
  const paneRegister = document.getElementById("paneRegister");
  let showingLogin = true;

  function setHeightTo(pane) {
    forms.style.height = pane.offsetHeight + "px";
  }
  // lock the initial height so the very first transition has something to animate from
  requestAnimationFrame(() => setHeightTo(paneLogin));

  function go(toLogin) {
    if (toLogin === showingLogin) return;
    showingLogin = toLogin;
    const targetPane = toLogin ? paneLogin : paneRegister;
    setHeightTo(targetPane);
    track.style.transform = toLogin ? "translateX(0%)" : "translateX(-50%)";
    paneLogin.setAttribute("aria-hidden", String(!toLogin));
    paneRegister.setAttribute("aria-hidden", String(toLogin));
    // once the shared card has settled at the new pane's height, let it breathe (auto)
    // so a later window resize doesn't leave a stale fixed pixel height behind.
    window.clearTimeout(go._t);
    go._t = window.setTimeout(() => {
      forms.style.height = targetPane.offsetHeight + "px";
    }, 400);
  }

  document
    .getElementById("toRegister")
    .addEventListener("click", () => go(false));
  document.getElementById("toLogin").addEventListener("click", () => go(true));

  window.addEventListener("resize", () => {
    setHeightTo(showingLogin ? paneLogin : paneRegister);
  });
}

/* ============================= OAUTH BUTTONS ============================= */
function bindOAuthButtons() {
  document.querySelectorAll("[data-provider]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const provider = btn.getAttribute("data-provider");
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.style.opacity = "0.6";
      try {
        await AuthService.oauth(provider);
        showToast("Masuk dengan " + provider + " berhasil (mode demo)");
        goToApp();
      } catch (err) {
        showToast("Gagal masuk dengan " + provider);
        btn.disabled = false;
        btn.style.opacity = "";
        btn.innerHTML = original;
      }
    });
  });
}

/* ============================= FORM SUBMISSIONS ============================= */
function bindLoginForm() {
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    setFormMessage("loginMessage", "", null);

    let valid = true;
    if (!EMAIL_RE.test(email)) {
      setFieldError("loginEmail", "Masukkan alamat email yang valid.");
      valid = false;
    } else setFieldError("loginEmail", null);

    if (password.length < 8) {
      setFieldError("loginPassword", "Password minimal 8 karakter.");
      valid = false;
    } else setFieldError("loginPassword", null);

    if (!valid) return;

    const btn = document.getElementById("loginSubmit");
    setButtonLoading(btn, true);
    try {
      await AuthService.login({ email, password });
      setFormMessage(
        "loginMessage",
        "Berhasil masuk. Mengalihkan ke Brain...",
        "success",
      );
      setTimeout(goToApp, 500);
    } catch (err) {
      setFormMessage("loginMessage", err.message, "error");
    } finally {
      setButtonLoading(btn, false);
    }
  });

  document.getElementById("forgotPasswordBtn").addEventListener("click", () => {
    // TODO(backend): kirim email reset password asli (mis. supabase.auth.resetPasswordForEmail(email))
    showToast(
      "Fitur reset password perlu backend asli untuk dikirim ke email.",
    );
  });
}

function bindRegisterForm() {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirm = document.getElementById("registerConfirm").value;
    const agree = document.getElementById("agreeTerms").checked;
    setFormMessage("registerMessage", "", null);

    let valid = true;
    if (name.length < 2) {
      setFieldError("registerName", "Nama minimal 2 karakter.");
      valid = false;
    } else setFieldError("registerName", null);

    if (!EMAIL_RE.test(email)) {
      setFieldError("registerEmail", "Masukkan alamat email yang valid.");
      valid = false;
    } else setFieldError("registerEmail", null);

    if (password.length < 8) {
      setFieldError("registerPassword", "Password minimal 8 karakter.");
      valid = false;
    } else setFieldError("registerPassword", null);

    if (confirm !== password || !confirm) {
      setFieldError("registerConfirm", "Konfirmasi password tidak cocok.");
      valid = false;
    } else setFieldError("registerConfirm", null);

    if (!agree) {
      setCheckboxError(
        "agreeTermsError",
        "Kamu harus menyetujui Syarat & Ketentuan.",
      );
      valid = false;
    } else setCheckboxError("agreeTermsError", null);

    if (!valid) return;

    const btn = document.getElementById("registerSubmit");
    setButtonLoading(btn, true);
    try {
      await AuthService.register({ name, email, password });
      setFormMessage(
        "registerMessage",
        "Akun berhasil dibuat. Mengalihkan ke Brain...",
        "success",
      );
      setTimeout(goToApp, 500);
    } catch (err) {
      setFormMessage("registerMessage", err.message, "error");
    } finally {
      setButtonLoading(btn, false);
    }
  });
}

/* ============================= SESSION PANEL (already logged in) ============================= */
function renderSessionPanel() {
  const session = AuthService.getSession();
  const panel = document.getElementById("sessionPanel");
  const forms = document.getElementById("authForms");
  if (!session) {
    panel.classList.add("hidden");
    forms.classList.remove("hidden");
    return;
  }
  panel.classList.remove("hidden");
  forms.classList.add("hidden");
  document.getElementById("sessionEmail").textContent = session.email;
  document.getElementById("sessionAvatar").textContent = (
    session.name ||
    session.email ||
    "?"
  )
    .charAt(0)
    .toUpperCase();
}

function bindSessionPanel() {
  document
    .getElementById("sessionContinueBtn")
    .addEventListener("click", goToApp);
  document.getElementById("sessionLogoutBtn").addEventListener("click", () => {
    AuthService.logout();
    showToast("Kamu sudah keluar.");
    renderSessionPanel();
  });
}

function goToApp() {
  window.location.href = "index.html";
}

/* ============================= DECORATIVE STARFIELD ============================= */
function buildStars() {
  const wrap = document.getElementById("authStars");
  if (!wrap) return;
  let html = "";
  for (let i = 0; i < 50; i++) {
    const top = (Math.random() * 100).toFixed(2);
    const left = (Math.random() * 100).toFixed(2);
    const size = (Math.random() * 1.6 + 0.6).toFixed(2);
    const dur = (Math.random() * 3 + 2.5).toFixed(2);
    const delay = (Math.random() * 3).toFixed(2);
    const minOp = (Math.random() * 0.25 + 0.05).toFixed(2);
    html +=
      '<span class="star" style="top:' +
      top +
      "%;left:" +
      left +
      "%;width:" +
      size +
      "px;height:" +
      size +
      "px;--dur:" +
      dur +
      "s;--delay:-" +
      delay +
      "s;--min-op:" +
      minOp +
      '"></span>';
  }
  wrap.innerHTML = html;
}

/* ============================= TOAST ============================= */
function showToast(msg) {
  const t = document.getElementById("authToast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ============================= TERMS LINK (placeholder) ============================= */
function bindTermsLink() {
  const link = document.getElementById("termsLink");
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showToast(
      "Halaman Syarat & Ketentuan belum dibuat — tautkan ke halamanmu sendiri.",
    );
  });
}

/* ============================= INIT ============================= */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("authYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  injectIcons();
  buildStars();
  initPaneToggle();
  bindPasswordToggles();
  bindOAuthButtons();
  bindLoginForm();
  bindRegisterForm();
  bindSessionPanel();
  bindTermsLink();
  renderSessionPanel();
});
