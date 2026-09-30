/* ============================= ICONS ============================= */
const ICON = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
  chevronDown:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15 1.65 1.65 0 0 0 3.17 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.13.34.2.71.2 1.09"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><line x1="4" y1="20" x2="20" y2="20"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  refresh:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  pencil:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>',
  fork: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.1"/><circle cx="6" cy="18" r="2.1"/><circle cx="18" cy="12" r="2.1"/><path d="M6 8.1V15.9M8.1 6H14a4 4 0 0 1 4 4"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1.5"/></svg>',
  spark:
    '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8z"/></svg>',
  orbit:
    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="7" cy="10" r="4.2"/><circle cx="13" cy="10" r="4.2"/></svg>',
  bolt: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M11 1L3 12h5l-1 7 9-11h-5z"/></svg>',
  petal:
    '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6z"/></svg>',
};
const ENGINES = {
  claude: {
    id: "claude",
    label: "Claude",
    sub: "OpenRouter Free",
    glyph: ICON.spark,
    provider: "openrouter",
    model: "google/gemini-2.0-flash-exp:free",
    system:
      "Kamu adalah Brain, asisten AI yang ditenagai Claude (Anthropic). Jawab dengan terstruktur, jelas, dan proaktif menawarkan langkah berikutnya bila relevan.",
  },
  openai: {
    id: "openai",
    label: "GPT-4o",
    sub: "OpenAI",
    glyph: ICON.spark,
    provider: "openai",
    system:
      "Kamu adalah Brain, asisten AI yang ditenagai GPT-4o (OpenAI). Jawab dengan terstruktur, jelas, dan proaktif menawarkan langkah berikutnya bila relevan.",
  },
  gemini: {
    id: "gemini",
    label: "Gemini",
    sub: "Google",
    glyph: ICON.orbit,
    provider: "gemini",
    system:
      "Kamu adalah Brain, asisten AI yang ditenagai Gemini (Google). Jawab dengan terstruktur, jelas, dan proaktif menawarkan langkah berikutnya bila relevan.",
  },
  grok: {
    id: "grok",
    label: "Grok",
    sub: "xAI",
    glyph: ICON.bolt,
    provider: "grok",
    system:
      "Kamu adalah Brain, asisten AI yang ditenagai Grok (xAI). Jawab dengan terstruktur, jelas, dan proaktif menawarkan langkah berikutnya bila relevan.",
  },
};
const ENGINE_ORDER = ["claude", "openai", "gemini", "grok"];

/* ============================= STATE ============================= */
let state = {
  currentEngine: "claude",
  currentSessionId: null,
  sessions: {}, // id -> session object (cache)
  index: [], // [{id,title,model,updatedAt}]
  deepThinking: false,
  drawerOpen: false,
  ttsUtterance: null,
  ttsButton: null,
};

/* ============================= STORAGE HELPERS ============================= */
/* Setiap key diberi awalan "brain:<id-akun>:" sehingga riwayat chat terpisah
   rapi per akun — akun A tidak akan pernah melihat riwayat akun B di
   perangkat yang sama. */
const CURRENT_USER_ID =
  (window.__BRAIN_USER && window.__BRAIN_USER.id) || "guest";
function nsKey(key) {
  return "brain:" + CURRENT_USER_ID + ":" + key;
}

async function storeGet(key) {
  try {
    const raw = localStorage.getItem(nsKey(key));
    return raw === null ? null : JSON.parse(raw);
  } catch (e) {
    return null;
  }
}
async function storeSet(key, val) {
  try {
    localStorage.setItem(nsKey(key), JSON.stringify(val));
    return true;
  } catch (e) {
    return false;
  }
}
async function storeDelete(key) {
  try {
    localStorage.removeItem(nsKey(key));
    return true;
  } catch (e) {
    return false;
  }
}

function uid() {
  return "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function nowISO() {
  return Date.now();
}

/* ============================= INIT ============================= */
document.addEventListener("DOMContentLoaded", bootstrap);

let __starfieldActive = false;
let __orbActive = false;
let __introWarp = 0;

function bootstrap() {
  initIntroStarfield();
  initIntroOrb();
  bindIntroSkip();

  const reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MIN_SHOW = reduced ? 300 : 5100;
  const MAX_SHOW = reduced ? 900 : 7600;
  animateIntroProgress(MIN_SHOW);

  const startedAt = Date.now();
  let dismissed = false;
  const timers = [];
  const safety = setTimeout(() => triggerDismiss(), MAX_SHOW);
  timers.push(safety);

  if (!reduced) {
    timers.push(setTimeout(collapseWordmark, 2750));
  } else {
    collapseWordmark();
  }

  window.__introSkipNow = () => triggerDismiss();

  function triggerDismiss() {
    if (dismissed) return;
    dismissed = true;
    timers.forEach(clearTimeout);
    dismissIntro();
  }

  init()
    .catch(() => {})
    .finally(() => {
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, MIN_SHOW - elapsed);
      timers.push(setTimeout(triggerDismiss, wait));
    });
}

function collapseWordmark() {
  const outers = document.querySelectorAll("#introWord .iw-letter:not(.iw-ai)");
  outers.forEach((el) => {
    const w = el.getBoundingClientRect().width;
    el.style.width = w + "px";
  });
  // force layout so the browser commits the measured widths before we transition them to 0
  void document.getElementById("introWord").offsetWidth;
  requestAnimationFrame(() => {
    outers.forEach((el) => el.classList.add("collapsing"));
  });
  const ai = document.getElementById("introWordAi");
  const reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (ai)
    setTimeout(
      () => {
        ai.classList.add("settle");
      },
      reduced ? 10 : 800,
    );
}

function bindIntroSkip() {
  const btn = document.getElementById("introSkip");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (window.__introSkipNow) window.__introSkipNow();
  });
}

function animateIntroProgress(duration) {
  const fill = document.getElementById("introProgressFill");
  if (!fill) return;
  fill.style.transition = "width " + duration + "ms cubic-bezier(0.16,1,0.3,1)";
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      fill.style.width = "100%";
    }),
  );
}

function rampIntroWarp(duration) {
  const startVal = __introWarp;
  const startT = performance.now();
  function step(t) {
    const p = Math.min(1, (t - startT) / duration);
    __introWarp = startVal + (1 - startVal) * (1 - Math.pow(1 - p, 3));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function dismissIntro() {
  const intro = document.getElementById("introScreen");
  const app = document.getElementById("app");
  if (!intro || intro.dataset.dismissed) return;
  intro.dataset.dismissed = "1";
  rampIntroWarp(420);
  intro.classList.add("exiting");
  if (app) app.classList.add("ready");
  setTimeout(() => {
    __starfieldActive = false;
    __orbActive = false;
    intro.remove();
  }, 1000);
}

/* ---- layered starfield: distant / mid / near, gentle drift + brief warp on exit ---- */
function initIntroStarfield() {
  const canvas = document.getElementById("introBgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;
  }
  resize();
  window.addEventListener("resize", resize);

  const LAYERS = [
    { n: 60, speed: 0.05, size: [0.5, 1.0], op: [0.12, 0.32] },
    { n: 38, speed: 0.11, size: [0.8, 1.5], op: [0.22, 0.5] },
    { n: 18, speed: 0.2, size: [1.1, 2.0], op: [0.35, 0.7] },
  ];
  const stars = [];
  LAYERS.forEach((layer) => {
    for (let i = 0; i < layer.n; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
        baseOp: layer.op[0] + Math.random() * (layer.op[1] - layer.op[0]),
        speed: layer.speed,
        phase: Math.random() * Math.PI * 2,
      });
    }
  });

  __starfieldActive = true;
  const start = performance.now();

  function frame(t) {
    if (!__starfieldActive) return;
    const w = window.innerWidth,
      h = window.innerHeight;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const elapsed = (t - start) / 1000;
    const warp = __introWarp;

    stars.forEach((s) => {
      s.y += s.speed * 0.0007 * (1 + warp * 16);
      if (s.y > 1.03) s.y = -0.03;
      const tw =
        warp > 0.05
          ? 0.85 + 0.15 * Math.min(1, warp)
          : 0.78 + 0.22 * Math.sin(elapsed * 0.85 + s.phase);
      const px = s.x * w,
        py = s.y * h;
      if (warp > 0.03) {
        const len = 4 + warp * 70 * s.speed * 30;
        ctx.strokeStyle =
          "rgba(255,255,255," + (s.baseOp * tw).toFixed(3) + ")";
        ctx.lineWidth = Math.max(0.6, s.r * 0.85);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, py - len);
        ctx.stroke();
      } else {
        ctx.fillStyle = "rgba(255,255,255," + (s.baseOp * tw).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---- central orb: particles assemble into a rotating Fibonacci sphere, neural-net lines between neighbors ---- */
function initIntroOrb() {
  const canvas = document.getElementById("introOrbCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function size() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, rect.width * DPR);
    canvas.height = Math.max(1, rect.height * DPR);
  }
  size();
  window.addEventListener("resize", size);

  const N = 64;
  const particles = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const rY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    particles.push({
      x: Math.cos(theta) * rY,
      y: y,
      z: Math.sin(theta) * rY,
      sx: (Math.random() - 0.5) * 3.2,
      sy: (Math.random() - 0.5) * 3.2,
      sz: (Math.random() - 0.5) * 3.2,
    });
  }

  function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  }

  __orbActive = true;
  const startT = performance.now();
  const ASSEMBLE_MS = 1450;
  let rot = 0;

  function frame(t) {
    if (!__orbActive) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width,
      h = rect.height;
    if (w < 2 || h < 2) {
      requestAnimationFrame(frame);
      return;
    }
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2,
      cy = h / 2,
      R = Math.min(w, h) * 0.4;

    const elapsed = t - startT;
    const assembleP = Math.min(1, elapsed / ASSEMBLE_MS);
    const eased = easeOutQuart(assembleP);
    rot += 0.0021 + (1 - eased) * 0.007 + __introWarp * 0.016;

    const cosr = Math.cos(rot),
      sinr = Math.sin(rot);
    const projected = particles.map((p) => {
      const rx = p.x * cosr - p.z * sinr;
      const rz = p.x * sinr + p.z * cosr;
      const tx = p.sx * (1 - eased) + rx * eased;
      const ty = p.sy * (1 - eased) + p.y * eased;
      const tz = p.sz * (1 - eased) + rz * eased;
      const depth = (tz + 1) / 2;
      return {
        sx: cx + tx * R,
        sy: cy + ty * R,
        z: tz,
        depth,
        op: (0.25 + depth * 0.65) * eased,
      };
    });
    projected.sort((a, b) => a.z - b.z);

    const threshold = R * 0.62;
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = projected[i],
          b = projected[j];
        const dx = a.sx - b.sx,
          dy = a.sy - b.sy;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < threshold) {
          const o =
            (1 - d / threshold) * Math.min(a.depth, b.depth) * 0.5 * eased;
          if (o > 0.02) {
            ctx.strokeStyle = "rgba(255,255,255," + o.toFixed(3) + ")";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }
    }
    projected.forEach((p) => {
      const r = 0.9 + p.depth * 1.6;
      ctx.fillStyle = "rgba(255,255,255," + p.op.toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

async function init() {
  if (window.hljs) {
    /* ready */
  }
  applyIcons();
  buildEngineUI();
  bindEvents();
  renderAccountInfo();

  const settings = await storeGet("settings");
  if (settings) {
    state.deepThinking = !!settings.deepThinking;
    if (settings.currentEngine && ENGINES[settings.currentEngine])
      state.currentEngine = settings.currentEngine;
  }
  updateDeepThinkToggle();
  setEngine(state.currentEngine, { silent: true });

  const idx = await storeGet("index");
  state.index = Array.isArray(idx) ? idx : [];
  renderHistoryList();

  const lastOpen = await storeGet("last-open");
  if (lastOpen && state.index.find((s) => s.id === lastOpen)) {
    await switchSession(lastOpen);
  } else if (state.index.length) {
    await switchSession(state.index[0].id);
  } else {
    await newChat({ silent: true });
  }
}

function applyIcons() {
  document.getElementById("menuToggle").innerHTML = ICON.menu;
  document.getElementById("settingsBtn").innerHTML = ICON.gear;
  document.getElementById("closeArtifact").innerHTML = ICON.close;
  document.getElementById("searchIcon").innerHTML = ICON.search;
  document.getElementById("sendBtn").innerHTML = ICON.send;
  document.getElementById("newChatBtn").innerHTML =
    ICON.plus + "<span>Obrolan baru</span>";
  document.getElementById("modelSelectIcon").innerHTML = ICON.petal;
}

/* ============================= ENGINE UI ============================= */
function buildEngineUI() {
  const list = document.getElementById("engineList");
  list.innerHTML = ENGINE_ORDER.map((id) => {
    const e = ENGINES[id];
    return `<button class="engine-row" data-engine="${id}">
      <span class="glyph">${e.glyph}</span>
      <span class="engine-row-text">
        <span class="engine-row-label">${e.label}</span>
        <span class="engine-row-sub">${e.sub}</span>
      </span>
    </button>`;
  }).join("");
  list.querySelectorAll(".engine-row").forEach((btn) => {
    btn.addEventListener("click", () => setEngine(btn.dataset.engine));
  });

  const dropdown = document.getElementById("modelDropdown");
  dropdown.innerHTML = ENGINE_ORDER.map((id) => {
    const e = ENGINES[id];
    return `<button class="dd-item" data-engine="${id}" role="option">
      <span class="glyph">${e.glyph}</span>
      <span class="dd-item-text"><span class="dd-item-label">${e.label}</span><span class="dd-item-sub">${e.sub}</span></span>
    </button>`;
  }).join("");
  dropdown.querySelectorAll(".dd-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      setEngine(btn.dataset.engine);
      closeModelDropdown();
    });
  });

  const seg = document.getElementById("segmented");
  seg.innerHTML = ENGINE_ORDER.map((id) => {
    const e = ENGINES[id];
    return `<button class="seg-btn" data-engine="${id}">${e.label.split(" ")[0]}</button>`;
  }).join("");
  seg.querySelectorAll(".seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => setEngine(btn.dataset.engine));
  });
}

function setEngine(id, opts) {
  opts = opts || {};
  state.currentEngine = id;
  document
    .querySelectorAll(".engine-row")
    .forEach((r) => r.classList.toggle("active", r.dataset.engine === id));
  document
    .querySelectorAll(".dd-item")
    .forEach((r) => r.classList.toggle("active", r.dataset.engine === id));
  document
    .querySelectorAll(".seg-btn")
    .forEach((r) => r.classList.toggle("active", r.dataset.engine === id));
  document.getElementById("modelSelectLabel").textContent = ENGINES[id].label;
  document.getElementById("modelSelectIcon").innerHTML = ENGINES[id].glyph;
  if (!opts.silent) persistSettings();
}

function persistSettings() {
  storeSet("settings", {
    deepThinking: state.deepThinking,
    currentEngine: state.currentEngine,
  });
}

/* ============================= ACCOUNT ============================= */
function renderAccountInfo() {
  const user = window.__BRAIN_USER;
  const loginNavBtn = document.getElementById("loginNavBtn");
  const loggedInBlock = document.getElementById("settingsAccountLoggedIn");
  const guestBlock = document.getElementById("settingsAccountGuest");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    const name = user.name || user.email || "Akun";
    document.getElementById("accountName").textContent = name;
    document.getElementById("accountEmail").textContent = user.email || "";
    document.getElementById("accountAvatar").textContent = name
      .charAt(0)
      .toUpperCase();
    loginNavBtn.classList.add("hidden");
    loggedInBlock.classList.remove("hidden");
    guestBlock.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
  } else {
    loginNavBtn.classList.remove("hidden");
    loggedInBlock.classList.add("hidden");
    guestBlock.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
  }
}

function goToLogin() {
  window.location.href = "auth.html";
}

function logoutAccount() {
  try {
    localStorage.removeItem("brain_auth_session");
  } catch (e) {}
  window.location.reload();
}

/* ============================= SESSIONS ============================= */
async function newChat(opts) {
  opts = opts || {};
  const id = uid();
  const sess = {
    id,
    title: "Obrolan baru",
    model: state.currentEngine,
    messages: [],
    updatedAt: nowISO(),
  };
  state.sessions[id] = sess;
  state.index.unshift({
    id,
    title: sess.title,
    model: sess.model,
    updatedAt: sess.updatedAt,
  });
  await storeSet("session:" + id, sess);
  await storeSet("index", state.index);
  await storeSet("last-open", id);
  state.currentSessionId = id;
  recomputeTokenMeter();
  renderHistoryList();
  renderMessages();
  closeDrawer();
  if (!opts.silent) focusComposer();
}

async function switchSession(id) {
  let sess = state.sessions[id];
  if (!sess) {
    sess = await storeGet("session:" + id);
    if (!sess) {
      await newChat();
      return;
    }
    state.sessions[id] = sess;
  }
  state.currentSessionId = id;
  if (sess.model && ENGINES[sess.model])
    setEngine(sess.model, { silent: true });
  recomputeTokenMeter();
  renderHistoryList();
  renderMessages();
  await storeSet("last-open", id);
  closeDrawer();
}

function currentSession() {
  return state.sessions[state.currentSessionId];
}

async function persistCurrentSession() {
  const sess = currentSession();
  if (!sess) return;
  sess.updatedAt = nowISO();
  await storeSet("session:" + sess.id, sess);
  const entry = state.index.find((s) => s.id === sess.id);
  if (entry) {
    entry.title = sess.title;
    entry.model = sess.model;
    entry.updatedAt = sess.updatedAt;
  }
  state.index.sort((a, b) => b.updatedAt - a.updatedAt);
  await storeSet("index", state.index);
  renderHistoryList();
}

async function deleteSession(id, evt) {
  if (evt) evt.stopPropagation();
  await storeDelete("session:" + id);
  delete state.sessions[id];
  state.index = state.index.filter((s) => s.id !== id);
  await storeSet("index", state.index);
  showToast("Obrolan dihapus");
  if (state.currentSessionId === id) {
    if (state.index.length) await switchSession(state.index[0].id);
    else await newChat();
  } else {
    renderHistoryList();
  }
}

async function forkSession() {
  const sess = currentSession();
  if (!sess) return;
  const id = uid();
  const copy = {
    id,
    title: sess.title + " (Fork)",
    model: sess.model,
    messages: JSON.parse(JSON.stringify(sess.messages)),
    updatedAt: nowISO(),
  };
  state.sessions[id] = copy;
  state.index.unshift({
    id,
    title: copy.title,
    model: copy.model,
    updatedAt: copy.updatedAt,
  });
  await storeSet("session:" + id, copy);
  await storeSet("index", state.index);
  await switchSession(id);
  showToast("Obrolan di-fork");
}

async function clearAllHistory() {
  for (const s of state.index) {
    await storeDelete("session:" + s.id);
  }
  state.sessions = {};
  state.index = [];
  await storeSet("index", []);
  await storeDelete("last-open");
  await newChat();
  showToast("Semua riwayat dihapus");
  closeSettingsPopover();
}

/* ============================= HISTORY LIST ============================= */
function groupLabel(ts) {
  const d = new Date(ts),
    now = new Date();
  const startOf = (dt) =>
    new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
  const diffDays = Math.round((startOf(now) - startOf(d)) / 86400000);
  if (diffDays <= 0) return "Hari ini";
  if (diffDays === 1) return "Kemarin";
  if (diffDays <= 7) return "7 hari terakhir";
  return "Lebih lama";
}

function renderHistoryList() {
  const wrap = document.getElementById("historyList");
  const q = (document.getElementById("historySearch").value || "")
    .toLowerCase()
    .trim();
  const filtered = state.index.filter(
    (s) => !q || s.title.toLowerCase().includes(q),
  );
  if (!filtered.length) {
    wrap.innerHTML =
      '<div class="history-empty">' +
      (q ? "Tidak ada hasil." : "Belum ada riwayat obrolan.") +
      "</div>";
    return;
  }
  const groups = {};
  const order = [];
  filtered.forEach((s) => {
    const g = groupLabel(s.updatedAt);
    if (!groups[g]) {
      groups[g] = [];
      order.push(g);
    }
    groups[g].push(s);
  });
  wrap.innerHTML = order
    .map((g) => {
      const items = groups[g]
        .map((s) => {
          const active = s.id === state.currentSessionId;
          return `<button class="history-item ${active ? "active" : ""}" data-id="${s.id}">
        <span class="history-item-title">${escapeHtml(s.title)}</span>
        <span class="history-del" data-id="${s.id}" title="Hapus">${ICON.trash}</span>
      </button>`;
        })
        .join("");
      return `<div class="history-group-label">${g}</div>${items}`;
    })
    .join("");

  wrap.querySelectorAll(".history-item").forEach((btn) => {
    btn.addEventListener("click", () => switchSession(btn.dataset.id));
  });
  wrap.querySelectorAll(".history-del").forEach((btn) => {
    btn.addEventListener("click", (e) => deleteSession(btn.dataset.id, e));
  });
}

/* ============================= MESSAGE RENDERING ============================= */
const SUGGESTIONS = [
  "Rancang arsitektur mikroservis untuk sistem checkout",
  "Ringkas dokumen 40 halaman jadi lima poin utama",
  "Refactor fungsi ini biar lebih efisien",
  "Bandingkan dua pendekatan basis data untuk aplikasi chat",
];

function renderMessages() {
  const sess = currentSession();
  const inner = document.getElementById("messagesInner");
  if (!sess || !sess.messages.length) {
    inner.innerHTML = "";
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <div class="empty-title">Ada ide?</div>
      <div class="empty-sub">Asisten virtual cerdas untuk keputusan strategis Anda.</div>
      <div class="chip-grid">${SUGGESTIONS.map((s) => `<button class="chip" data-text="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join("")}</div>
    `;
    inner.appendChild(empty);
    empty.querySelectorAll(".chip").forEach((c) => {
      c.addEventListener("click", () => sendMessage(c.dataset.text));
    });
    return;
  }
  inner.innerHTML = "";
  sess.messages.forEach((m, i) => inner.appendChild(buildMessageEl(m, i)));
  scrollToBottom();
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function renderMarkdown(text) {
  let html = window.marked ? marked.parse(text) : escapeHtml(text);
  const wrap = document.createElement("div");
  wrap.innerHTML = html;
  wrap.querySelectorAll("pre code").forEach((block) => {
    if (window.hljs) {
      try {
        hljs.highlightElement(block);
      } catch (e) {}
    }
  });
  wrap.querySelectorAll("pre").forEach((pre) => {
    const codeEl = pre.querySelector("code");
    const langMatch = codeEl && codeEl.className.match(/language-(\w+)/);
    const lang = langMatch ? langMatch[1] : "text";
    const codeText = codeEl ? codeEl.textContent : pre.textContent;
    const block = document.createElement("div");
    block.className = "code-block";
    block.innerHTML = `<div class="code-head">
        <span class="code-lang">${lang}</span>
        <span class="code-actions">
          <button class="btn-copy">${ICON.copy}<span>Salin</span></button>
          <button class="btn-download">${ICON.download}<span>Unduh</span></button>
          <button class="btn-preview">${ICON.eye}<span>Preview</span></button>
        </span>
      </div>`;
    pre.remove();
    const preWrap = document.createElement("pre");
    preWrap.appendChild(codeEl || document.createTextNode(codeText));
    block.appendChild(preWrap);
    block
      .querySelector(".btn-copy")
      .addEventListener("click", (e) => copyCode(codeText, e.currentTarget));
    block
      .querySelector(".btn-download")
      .addEventListener("click", () => downloadCode(codeText, lang));
    block
      .querySelector(".btn-preview")
      .addEventListener("click", () => previewArtifact(lang, codeText));
    wrap.appendChild(block);
  });
  return wrap; // return the live node (not a string) so button listeners survive
}

function buildMessageEl(m, index) {
  const el = document.createElement("div");
  el.className = "msg " + (m.role === "user" ? "msg-user" : "msg-ai");
  el.dataset.index = index;

  if (m.role === "assistant") {
    const meta = document.createElement("div");
    meta.className = "msg-meta";
    const eng = ENGINES[m.engine] || ENGINES.claude;
    meta.innerHTML = `<span class="glyph">${eng.glyph}</span><span>${eng.label}</span>`;
    el.appendChild(meta);
  }

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  if (m.role === "user") bubble.textContent = m.content;
  else {
    const parsed = renderMarkdown(m.content || "");
    while (parsed.firstChild) bubble.appendChild(parsed.firstChild);
  }
  el.appendChild(bubble);

  const actions = document.createElement("div");
  actions.className = "msg-actions";
  if (m.role === "user") {
    actions.innerHTML = `<button data-act="edit">${ICON.pencil}<span>Edit</span></button>
      <button data-act="fork">${ICON.fork}<span>Fork</span></button>`;
  } else {
    actions.innerHTML = `<button data-act="regen">${ICON.refresh}<span>Regenerate</span></button>
      <button data-act="tts">${ttsIcon()}<span>Baca</span></button>
      <button data-act="fork">${ICON.fork}<span>Fork</span></button>`;
  }
  el.appendChild(actions);

  actions.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () =>
      handleMsgAction(btn.dataset.act, index, btn),
    );
  });

  return el;
}

function ttsIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="4 9 8 9 12 5 12 19 8 15 4 15 4 9"/><path d="M16 8a5 5 0 0 1 0 8"/></svg>';
}

function handleMsgAction(act, index, btn) {
  const sess = currentSession();
  if (!sess) return;
  if (act === "edit") startEdit(index);
  else if (act === "regen") regenerate(index);
  else if (act === "fork") forkSession();
  else if (act === "tts") toggleTTS(sess.messages[index].content, btn);
}

/* ============================= EDIT ============================= */
function startEdit(index) {
  const sess = currentSession();
  const msg = sess.messages[index];
  const inner = document.getElementById("messagesInner");
  const target = inner.querySelector(`.msg[data-index="${index}"]`);
  const box = document.createElement("div");
  box.className = "msg msg-user";
  box.innerHTML = `<div class="edit-box">
      <textarea>${escapeHtml(msg.content)}</textarea>
      <div class="edit-actions">
        <button class="edit-cancel">Batal</button>
        <button class="edit-save">Simpan &amp; kirim ulang</button>
      </div>
    </div>`;
  target.replaceWith(box);
  const ta = box.querySelector("textarea");
  ta.focus();
  ta.setSelectionRange(ta.value.length, ta.value.length);
  box.querySelector(".edit-cancel").addEventListener("click", renderMessages);
  box.querySelector(".edit-save").addEventListener("click", async () => {
    const newText = ta.value.trim();
    if (!newText) return;
    sess.messages = sess.messages.slice(0, index);
    await sendMessage(newText, { isEdit: true });
  });
}

/* ============================= SEND / REGENERATE ============================= */
async function sendMessage(text, opts) {
  opts = opts || {};
  text = (text || "").trim();
  if (!text) return;
  let sess = currentSession();
  if (!sess) {
    await newChat({ silent: true });
    sess = currentSession();
  }

  sess.messages.push({ role: "user", content: text });
  if (
    sess.messages.filter((m) => m.role === "user").length === 1 ||
    sess.title === "Obrolan baru"
  ) {
    sess.title = text.length > 42 ? text.slice(0, 42) + "…" : text;
  }
  sess.model = state.currentEngine;
  renderMessages();
  document.getElementById("composerInput").value = "";
  autoResize(document.getElementById("composerInput"));
  updateSendState();
  await persistCurrentSession();
  await runAssistantTurn();
}

async function regenerate(assistantIndex) {
  const sess = currentSession();
  if (!sess) return;
  let cut = assistantIndex;
  while (cut > 0 && sess.messages[cut - 1].role !== "user") cut--;
  sess.messages = sess.messages.slice(0, cut);
  renderMessages();
  await persistCurrentSession();
  await runAssistantTurn();
}

async function runAssistantTurn() {
  const sess = currentSession();
  const inner = document.getElementById("messagesInner");
  const thinkEl = document.createElement("div");
  thinkEl.className = "msg msg-ai";
  const eng = ENGINES[state.currentEngine];
  thinkEl.innerHTML = `<div class="msg-meta"><span class="glyph">${eng.glyph}</span><span>${eng.label}</span></div>
    <div class="msg-bubble"><span class="shimmer">${eng.label} sedang berpikir…</span></div>`;
  inner.appendChild(thinkEl);
  scrollToBottom();
  updateSendState(true);

  let sysPrompt =
    eng.system +
    " Jawab dalam Bahasa Indonesia kecuali pengguna menulis dalam bahasa lain.";
  if (state.deepThinking)
    sysPrompt +=
      " Tunjukkan alur penalaran langkah demi langkah sebelum menyimpulkan jawaban akhir.";

  const apiMessages = sess.messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  try {
    const res = await callBackend(apiMessages, sysPrompt, eng.provider);
    thinkEl.remove();
    sess.messages.push({
      role: "assistant",
      content: res.text,
      engine: state.currentEngine,
    });
    sess.tokens = (sess.tokens || 0) + res.usage;
    recomputeTokenMeter();
    renderMessages();
    await persistCurrentSession();
    await revealLastMessage();
  } catch (err) {
    thinkEl.remove();
    let msg =
      "Maaf, terjadi kendala saat menghubungi mesin AI. Periksa koneksi lalu coba lagi.";
    if (err && err.code === "backend-unreachable") {
      msg =
        "Tidak bisa menghubungi backend Brain di **" +
        escapeHtml(getBackendUrl()) +
        "**. Pastikan servernya jalan (`npm start` di folder backend) dan alamat `backendUrl` di brain-config.js sudah benar.";
    } else if (err && err.code === "provider-error") {
      msg =
        "Gagal dari " +
        eng.label +
        ": " +
        err.message +
        ". Periksa API key provider ini di file **.env** pada server backend.";
    }
    sess.messages.push({
      role: "assistant",
      content: msg,
      engine: state.currentEngine,
    });
    renderMessages();
    await persistCurrentSession();
    showToast(
      err && err.code === "backend-unreachable"
        ? "Backend tidak terjangkau"
        : "Gagal menghubungi API",
    );
  }
  updateSendState();
}

async function revealLastMessage() {
  const inner = document.getElementById("messagesInner");
  const nodes = inner.querySelectorAll(".msg-ai");
  const last = nodes[nodes.length - 1];
  if (!last) return;
  const bubble = last.querySelector(".msg-bubble");
  const sess = currentSession();
  const fullText = sess.messages[sess.messages.length - 1].content;
  const words = fullText.split(/(\s+)/);
  bubble.innerHTML =
    '<span class="stream-raw"></span><span class="stream-cursor"></span>';
  const raw = bubble.querySelector(".stream-raw");
  const chunk = Math.max(1, Math.ceil(words.length / 60));
  for (let i = 0; i < words.length; i += chunk) {
    raw.textContent += words.slice(i, i + chunk).join("");
    scrollToBottom();
    await new Promise((r) => setTimeout(r, 12));
  }
  // full re-render (via buildMessageEl) attaches real listeners to code-block buttons and message actions
  renderMessages();
}

function getBackendUrl() {
  if (window.BRAIN_CONFIG && window.BRAIN_CONFIG.backendUrl) {
    return window.BRAIN_CONFIG.backendUrl.replace(/\/$/, "");
  }
  // Jika di-deploy ke Vercel/Domain publik, gunakan path relatif ("")
  if (
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    return "";
  }
  return "http://localhost:3001";
}

async function callBackend(messages, systemPrompt, provider) {
  const base = getBackendUrl();
  // Catatan: Jika dipasang di Vercel, `base` bisa berupa string kosong "" (relatif domain)
  if (base === null || base === undefined) {
    const err = new Error("backend-unreachable");
    err.code = "backend-unreachable";
    throw err;
  }

  // Ambil nama model dari ENGINES berdasarkan provider yang dipilih
  const engineConfig = ENGINES[provider] || ENGINES[state.currentEngine] || {};
  const modelName =
    engineConfig.model || "google/gemini-2.0-flash-lite-preview-02-05:free";

  let response;
  try {
    response = await fetch((base || "") + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: provider,
        model: modelName, // Tambahkan parameter model di sini
        messages: messages,
        system: systemPrompt,
      }),
    });
  } catch (networkErr) {
    const err = new Error("backend-unreachable");
    err.code = "backend-unreachable";
    throw err;
  }

  let data = null;
  try {
    data = await response.json();
  } catch (e) {}

  if (!response.ok) {
    const err = new Error(
      (data && data.error) || "Backend error " + response.status,
    );
    err.code = "provider-error";
    err.status = response.status;
    throw err;
  }

  return {
    text: (data && data.text) || "(tidak ada respons)",
    usage: (data && data.usage) || 0,
  };
}

function recomputeTokenMeter() {
  const sess = currentSession();
  const t = sess ? sess.tokens || 0 : 0;
  document.getElementById("tokenMeter").textContent =
    formatTokens(t) + " / 128k";
}
function formatTokens(n) {
  if (n < 1000) return String(n);
  return (n / 1000).toFixed(1) + "k";
}

/* ============================= CODE ACTIONS ============================= */
function copyCode(text, btn) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const label = btn.querySelector("span");
      const old = label.textContent;
      label.textContent = "Disalin";
      showToast("Kode disalin ke papan klip");
      setTimeout(() => (label.textContent = old), 1600);
    })
    .catch(() => showToast("Gagal menyalin"));
}

function extForLang(lang) {
  const map = {
    javascript: "js",
    js: "js",
    typescript: "ts",
    ts: "ts",
    python: "py",
    py: "py",
    html: "html",
    css: "css",
    json: "json",
    bash: "sh",
    sh: "sh",
    java: "java",
    c: "c",
    cpp: "cpp",
    jsx: "jsx",
    tsx: "tsx",
    sql: "sql",
    yaml: "yml",
    yml: "yml",
  };
  return map[lang] || "txt";
}

function downloadCode(text, lang) {
  const ext = extForLang(lang);
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "brain-snippet." + ext;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("File diunduh");
}

function previewArtifact(lang, code) {
  const panel = document.getElementById("artifactPanel");
  const frame = document.getElementById("artifactFrame");
  const title = document.getElementById("artifactTitle");
  let doc;
  if (lang === "html") {
    doc = code;
    title.textContent = "preview.html";
  } else if (lang === "css") {
    doc = `<html><head><style>${code}</style></head><body><p style="font-family:sans-serif;padding:20px;color:#333">Pratinjau gaya CSS diterapkan pada halaman contoh ini.</p></body></html>`;
    title.textContent = "preview.css";
  } else if (lang === "javascript" || lang === "js") {
    doc = `<html><body style="font-family:monospace;padding:16px;color:#111"><div id="out"></div><script>
      const _log=[]; const push=(...a)=>{_log.push(a.join(' '));document.getElementById('out').innerText=_log.join('\\n');};
      console.log=push; console.error=push;
      try{ ${code} }catch(e){ push('Error: '+e.message); }
    <\/script></body></html>`;
    title.textContent = "preview.js";
  } else {
    doc = `<html><body style="font-family:monospace;padding:16px;color:#333;white-space:pre-wrap">Preview langsung belum tersedia untuk bahasa "${lang}".\n\n${escapeHtml(code)}</body></html>`;
    title.textContent = "preview." + extForLang(lang);
  }
  frame.srcdoc = doc;
  panel.classList.add("open");
}

function closeArtifactPanel() {
  document.getElementById("artifactPanel").classList.remove("open");
}

/* ============================= TTS ============================= */
function toggleTTS(text, btn) {
  if (!("speechSynthesis" in window)) {
    showToast("TTS tidak didukung browser ini");
    return;
  }
  const wasSameButton = btn === state.ttsButton;
  if (state.ttsUtterance && speechSynthesis.speaking) {
    speechSynthesis.cancel();
    if (state.ttsButton) state.ttsButton.classList.remove("playing");
    state.ttsUtterance = null;
    state.ttsButton = null;
    if (wasSameButton) return;
  }
  const plain = text
    .replace(/```[\s\S]*?```/g, " kode terlampir ")
    .replace(/[#*_`>]/g, "");
  const utter = new SpeechSynthesisUtterance(plain);
  utter.lang = "id-ID";
  utter.onend = () => {
    btn.classList.remove("playing");
  };
  state.ttsUtterance = utter;
  state.ttsButton = btn;
  btn.classList.add("playing");
  speechSynthesis.speak(utter);
}

/* ============================= UI HELPERS ============================= */
function scrollToBottom() {
  const scroll = document.getElementById("messagesScroll");
  requestAnimationFrame(() => (scroll.scrollTop = scroll.scrollHeight));
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => t.classList.remove("show"), 2200);
}

function focusComposer() {
  document.getElementById("composerInput").focus();
}

function autoResize(ta) {
  ta.style.height = "auto";
  ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
}

function updateSendState(forceDisable) {
  const ta = document.getElementById("composerInput");
  const btn = document.getElementById("sendBtn");
  btn.disabled = !!forceDisable || !ta.value.trim();
}

function closeModelDropdown() {
  document.getElementById("modelDropdown").classList.remove("show");
  document.getElementById("modelSelectBtn").classList.remove("open");
}
function closeSettingsPopover() {
  document.getElementById("settingsPop").classList.remove("show");
}

function updateDeepThinkToggle() {
  document
    .getElementById("deepThinkToggle")
    .classList.toggle("on", state.deepThinking);
  document
    .getElementById("deepThinkToggle")
    .setAttribute("aria-checked", String(state.deepThinking));
}

/* ---- drawer ---- */
function openDrawer() {
  state.drawerOpen = true;
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("drawerScrim").classList.add("show");
}
function closeDrawer() {
  if (window.innerWidth >= 1024) return;
  state.drawerOpen = false;
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("drawerScrim").classList.remove("show");
}
function toggleDrawer() {
  state.drawerOpen ? closeDrawer() : openDrawer();
}

/* ============================= EVENTS ============================= */
function bindEvents() {
  document.getElementById("menuToggle").addEventListener("click", toggleDrawer);
  document.getElementById("drawerScrim").addEventListener("click", closeDrawer);

  document.getElementById("modelSelectBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("modelDropdown").classList.toggle("show");
    document.getElementById("modelSelectBtn").classList.toggle("open");
  });
  document.getElementById("settingsBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("settingsPop").classList.toggle("show");
  });
  document.addEventListener("click", () => {
    closeModelDropdown();
    closeSettingsPopover();
  });

  document.getElementById("deepThinkToggle").addEventListener("click", (e) => {
    e.stopPropagation();
    state.deepThinking = !state.deepThinking;
    updateDeepThinkToggle();
    persistSettings();
  });
  document.getElementById("clearHistoryBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    clearAllHistory();
  });
  document.getElementById("logoutBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    logoutAccount();
  });
  document.getElementById("loginNavBtn").addEventListener("click", goToLogin);
  document.getElementById("settingsLoginBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    goToLogin();
  });

  document
    .getElementById("newChatBtn")
    .addEventListener("click", () => newChat());
  document
    .getElementById("historySearch")
    .addEventListener("input", renderHistoryList);

  document
    .getElementById("closeArtifact")
    .addEventListener("click", closeArtifactPanel);

  const ta = document.getElementById("composerInput");
  ta.addEventListener("input", () => {
    autoResize(ta);
    updateSendState();
  });
  ta.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const v = ta.value.trim();
      if (v) sendMessage(v);
    }
  });
  document.getElementById("sendBtn").addEventListener("click", () => {
    const v = ta.value.trim();
    if (v) sendMessage(v);
  });

  /* swipe-from-edge gesture for drawer */
  let touchStartX = null,
    dragging = false,
    sidebarW = 268;
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("drawerScrim");

  document.addEventListener(
    "touchstart",
    (e) => {
      if (window.innerWidth >= 1024) return;
      const x = e.touches[0].clientX;
      if (!state.drawerOpen && x < 24) {
        touchStartX = x;
        dragging = true;
        sidebar.classList.add("dragging");
      } else if (state.drawerOpen) {
        touchStartX = x;
        dragging = true;
        sidebar.classList.add("dragging");
      }
    },
    { passive: true },
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      if (!dragging || touchStartX === null) return;
      const x = e.touches[0].clientX;
      let delta = x - touchStartX;
      let translate;
      if (state.drawerOpen) {
        translate = Math.min(0, delta);
      } else {
        translate = Math.min(0, delta - sidebarW);
      }
      sidebar.style.transform = `translateX(${translate}px)`;
      const progress = 1 + translate / sidebarW;
      scrim.style.opacity = Math.max(0, Math.min(1, progress * 0.55));
      scrim.classList.add("show");
    },
    { passive: true },
  );

  document.addEventListener("touchend", (e) => {
    if (!dragging) return;
    dragging = false;
    sidebar.classList.remove("dragging");
    sidebar.style.transform = "";
    scrim.style.opacity = "";
    const x =
      e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : 0;
    const delta = touchStartX === null ? 0 : x - touchStartX;
    if (state.drawerOpen) {
      if (delta < -sidebarW * 0.25) closeDrawer();
      else openDrawer();
    } else {
      if (delta > sidebarW * 0.25) openDrawer();
      else closeDrawer();
    }
    touchStartX = null;
  });
}
