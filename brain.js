
/* ============================= ICONS ============================= */
const ICON = {
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15 1.65 1.65 0 0 0 3.17 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.13.34.2.71.2 1.09"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><line x1="4" y1="20" x2="20" y2="20"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>',
  fork: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.1"/><circle cx="6" cy="18" r="2.1"/><circle cx="18" cy="12" r="2.1"/><path d="M6 8.1V15.9M8.1 6H14a4 4 0 0 1 4 4"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1.5"/></svg>',
  spark: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l1.8 6.2L18 9l-6.2 1.8L10 17l-1.8-6.2L2 9l6.2-1.8z"/></svg>',
  orbit: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="7" cy="10" r="4.2"/><circle cx="13" cy="10" r="4.2"/></svg>',
  bolt: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M11 1L3 12h5l-1 7 9-11h-5z"/></svg>',
  petal: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2c1 3 3 5 6 6-3 1-5 3-6 6-1-3-3-5-6-6 3-1 5-3 6-6z"/></svg>'
};

const SYS_BASE = 'Jawab dalam bahasa pengguna dengan terstruktur, jelas, dan proaktif menawarkan langkah berikutnya bila relevan.';
const ENGINES = {
  asgra: { id:'asgra', label:'Brain Asgra', sub:'Serba guna',        glyph:ICON.spark, provider:'openrouter',
           system:'Kamu adalah Brain Asgra, asisten AI serba guna yang ramah, cerdas, dan tepat sasaran. ' + SYS_BASE },
  dev:   { id:'dev',   label:'Brain Dev',   sub:'Coding & teknis',   glyph:ICON.bolt,  provider:'openrouter',
           system:'Kamu adalah Brain Dev, software engineer senior. Tulis kode yang bersih, aman, dan siap pakai dalam blok kode berlabel bahasa, jelaskan keputusan teknis secara ringkas, dan sebutkan edge case penting. ' + SYS_BASE },
  orbit: { id:'orbit', label:'Brain Orbit', sub:'Riset & analisis',  glyph:ICON.orbit, provider:'openrouter',
           system:'Kamu adalah Brain Orbit, analis dan peneliti. Bandingkan sudut pandang, uraikan fakta terpisah dari opini, nyatakan ketidakpastian dengan jujur, dan akhiri dengan ringkasan poin utama. ' + SYS_BASE },
  pro:   { id:'pro',   label:'Brain Pro',   sub:'Penalaran mendalam', glyph:ICON.petal, provider:'openrouter',
           system:'Kamu adalah Brain Pro, pakar yang teliti. Telaah masalah secara mendalam langkah demi langkah, periksa ulang kesimpulanmu, dan berikan jawaban yang lengkap namun tetap rapi. ' + SYS_BASE }
};
/* Daftar mesin yang tampil (disaring otomatis bila backend belum punya key-nya). */
let ENGINE_ORDER = ['asgra','dev','orbit','pro'];

/* ============================= STATE ============================= */
let state = {
  currentEngine: 'asgra',
  currentSessionId: null,
  sessions: {},     // id -> session object (cache)
  index: [],        // [{id,title,model,updatedAt}]
  deepThinking: false,
  drawerOpen: false,
  ttsUtterance: null,
  ttsButton: null
};

/* ============================= STORAGE HELPERS ============================= */
/* Setiap key diberi awalan "brain:<id-akun>:" sehingga riwayat chat terpisah
   rapi per akun — akun A tidak akan pernah melihat riwayat akun B di
   perangkat yang sama. */
const CURRENT_USER_ID = (window.__BRAIN_USER && window.__BRAIN_USER.id) || 'guest';
function nsKey(key){ return 'brain:' + CURRENT_USER_ID + ':' + key; }

async function storeGet(key){
  try{
    const raw = localStorage.getItem(nsKey(key));
    return raw === null ? null : JSON.parse(raw);
  }catch(e){ return null; }
}
async function storeSet(key, val){
  try{ localStorage.setItem(nsKey(key), JSON.stringify(val)); return true; }
  catch(e){ return false; }
}
async function storeDelete(key){
  try{ localStorage.removeItem(nsKey(key)); return true; }
  catch(e){ return false; }
}

function uid(){ return 's' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function nowISO(){ return Date.now(); }

/* ============================= INIT ============================= */
document.addEventListener('DOMContentLoaded', bootstrap);

let __starfieldActive = false;
let __orbActive = false;
let __introWarp = 0;

function bootstrap(){
  initIntroStarfield();
  initIntroOrb();
  bindIntroSkip();

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MIN_SHOW = reduced ? 300 : 4000;
  const MAX_SHOW = reduced ? 900 : 5200;
  animateIntroProgress(MIN_SHOW);

  const startedAt = Date.now();
  let dismissed = false;
  const timers = [];
  const safety = setTimeout(()=> triggerDismiss(), MAX_SHOW);
  timers.push(safety);

  if (!reduced){
    timers.push(setTimeout(collapseWordmark, 1700));
  } else {
    collapseWordmark();
  }

  window.__introSkipNow = ()=> triggerDismiss();

  function triggerDismiss(){
    if (dismissed) return;
    dismissed = true;
    timers.forEach(clearTimeout);
    dismissIntro();
  }

  init().catch(()=>{}).finally(()=>{
    const elapsed = Date.now() - startedAt;
    const wait = Math.max(0, MIN_SHOW - elapsed);
    timers.push(setTimeout(triggerDismiss, wait));
  });
}

function collapseWordmark(){
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const word = document.getElementById('introWord');
  const ai = document.getElementById('introWordAi');
  const ready = document.getElementById('introReady');
  if (!word) return;
  const outers = word.querySelectorAll('.iw-letter:not(.iw-ai)');
  word.querySelectorAll('.iw-letter').forEach(el=> el.classList.add('revealed'));
  outers.forEach(el=>{ el.style.width = el.getBoundingClientRect().width + 'px'; });
  void word.offsetWidth; // commit measured widths before transitioning them to 0
  requestAnimationFrame(()=> outers.forEach(el=> el.classList.add('collapsing')));
  const t = reduced ? [10, 40, 70] : [600, 900, 1000];
  setTimeout(()=>{ if (ai) ai.classList.add('settle'); }, t[0]);
  setTimeout(()=>{ if (ai){ ai.classList.remove('settle'); ai.classList.add('leaving'); } }, t[1]);
  setTimeout(()=>{ if (ready) ready.classList.add('show'); }, t[2]);
}

function bindIntroSkip(){
  const btn = document.getElementById('introSkip');
  if (!btn) return;
  btn.addEventListener('click', ()=>{ if (window.__introSkipNow) window.__introSkipNow(); });
}

function animateIntroProgress(duration){
  const fill = document.getElementById('introProgressFill');
  if (!fill) return;
  fill.style.transition = 'width ' + duration + 'ms cubic-bezier(0.16,1,0.3,1)';
  requestAnimationFrame(()=> requestAnimationFrame(()=>{ fill.style.width = '100%'; }));
}

function rampIntroWarp(duration){
  const startVal = __introWarp;
  const startT = performance.now();
  function step(t){
    const p = Math.min(1, (t-startT)/duration);
    __introWarp = startVal + (1-startVal)*(1-Math.pow(1-p,3));
    if (p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function dismissIntro(){
  const intro = document.getElementById('introScreen');
  const app = document.getElementById('app');
  if (!intro || intro.dataset.dismissed) return;
  intro.dataset.dismissed = '1';
  rampIntroWarp(380);
  intro.classList.add('exiting');
  if (app) app.classList.add('ready');
  setTimeout(()=>{
    __starfieldActive = false;
    __orbActive = false;
    intro.remove();
  }, 850);
}

/* ---- layered starfield: distant / mid / near, gentle drift + brief warp on exit ---- */
function initIntroStarfield(){
  const canvas = document.getElementById('introBgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize(){
    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;
  }
  resize();
  window.addEventListener('resize', resize);

  const LAYERS = [
    { n:90, speed:0.05, size:[0.5,1.0], op:[0.12,0.32] },
    { n:55, speed:0.11, size:[0.8,1.5], op:[0.22,0.5] },
    { n:26, speed:0.2,  size:[1.1,2.0], op:[0.35,0.7] }
  ];
  const stars = [];
  LAYERS.forEach(layer=>{
    for (let i=0;i<layer.n;i++){
      stars.push({
        x:Math.random(), y:Math.random(),
        r:layer.size[0]+Math.random()*(layer.size[1]-layer.size[0]),
        baseOp:layer.op[0]+Math.random()*(layer.op[1]-layer.op[0]),
        speed:layer.speed,
        phase:Math.random()*Math.PI*2
      });
    }
  });

  __starfieldActive = true;
  const start = performance.now();

  function frame(t){
    if (!__starfieldActive) return;
    const w = window.innerWidth, h = window.innerHeight;
    ctx.setTransform(DPR,0,0,DPR,0,0);
    ctx.clearRect(0,0,w,h);
    const elapsed = (t-start)/1000;
    const warp = __introWarp;

    stars.forEach(s=>{
      s.y += s.speed*0.0007*(1+warp*16);
      if (s.y>1.03) s.y = -0.03;
      const tw = warp>0.05 ? (0.85+0.15*Math.min(1,warp)) : 0.78+0.22*Math.sin(elapsed*0.85+s.phase);
      const px = s.x*w, py = s.y*h;
      if (warp>0.03){
        const len = 4+warp*70*s.speed*30;
        ctx.strokeStyle = 'rgba(255,255,255,'+(s.baseOp*tw).toFixed(3)+')';
        ctx.lineWidth = Math.max(0.6, s.r*0.85);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, py-len);
        ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(255,255,255,'+(s.baseOp*tw).toFixed(3)+')';
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI*2);
        ctx.fill();
        if (s.r > 1.5){
          ctx.fillStyle = 'rgba(255,255,255,'+(s.baseOp*tw*0.14).toFixed(3)+')';
          ctx.beginPath(); ctx.arc(px, py, s.r*4.2, 0, Math.PI*2); ctx.fill();
        }
      }
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---- orb pusat: partikel berkumpul jadi bola 3D berputar, cincin orbit, cahaya tepi & gelombang kejut ---- */
function initIntroOrb(){
  const canvas = document.getElementById('introOrbCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  function size(){
    const r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, r.width*DPR);
    canvas.height = Math.max(1, r.height*DPR);
  }
  size();
  window.addEventListener('resize', size);

  // sprite titik bercahaya (dirender sekali, dipakai ulang)
  const spr = document.createElement('canvas'); spr.width = spr.height = 32;
  const sc = spr.getContext('2d');
  const sg = sc.createRadialGradient(16,16,0,16,16,16);
  sg.addColorStop(0,'rgba(255,255,255,1)'); sg.addColorStop(0.25,'rgba(255,255,255,0.55)'); sg.addColorStop(1,'rgba(255,255,255,0)');
  sc.fillStyle = sg; sc.fillRect(0,0,32,32);

  const N = 150, golden = Math.PI*(3-Math.sqrt(5));
  const parts = [];
  for (let i=0;i<N;i++){
    const y = 1-(i/(N-1))*2, rr = Math.sqrt(Math.max(0,1-y*y)), th = golden*i;
    parts.push({ x:Math.cos(th)*rr, y:y, z:Math.sin(th)*rr,
      sx:(Math.random()-0.5)*3.6, sy:(Math.random()-0.5)*3.6, sz:(Math.random()-0.5)*3.6,
      tw:Math.random()*Math.PI*2, k:0.8+Math.random()*0.5 });
  }
  const RINGS = [
    { tilt:1.15, speed:0.9,  rad:1.34, n:96,  alpha:0.34 },
    { tilt:-0.55, speed:-0.6, rad:1.52, n:112, alpha:0.20 }
  ];
  const TILT_X = 0.38, cX = Math.cos(TILT_X), sX = Math.sin(TILT_X);
  const clamp01 = v => Math.max(0, Math.min(1, v));
  const easeOutQuart = x => 1-Math.pow(1-x,4);

  __orbActive = true;
  const startT = performance.now();
  const ASSEMBLE_MS = 1100;
  let rot = 0;

  function project(x, y, z, cx, cy, R){
    const y2 = y*cX - z*sX, z2 = y*sX + z*cX;
    const per = 1/(1 - z2*0.22);
    return { sx:cx + x*R*per, sy:cy + y2*R*per, z:z2, depth:clamp01((z2+1)/2) };
  }

  function frame(t){
    if (!__orbActive) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    if (w<2 || h<2){ requestAnimationFrame(frame); return; }
    ctx.setTransform(DPR,0,0,DPR,0,0);
    ctx.clearRect(0,0,w,h);

    const elapsed = t - startT;
    const e = easeOutQuart(clamp01(elapsed/ASSEMBLE_MS));
    const cx = w/2, cy = h/2;
    const R = Math.min(w,h)*0.30*(1 + 0.015*Math.sin(elapsed*0.003));
    rot += 0.0042 + (1-e)*0.012 + __introWarp*0.02;
    const cr = Math.cos(rot), sr = Math.sin(rot);

    // inti bercahaya + cahaya tepi (rim)
    const core = ctx.createRadialGradient(cx,cy,0,cx,cy,R*1.05);
    core.addColorStop(0,'rgba(255,255,255,'+(0.20*e).toFixed(3)+')');
    core.addColorStop(0.55,'rgba(255,255,255,'+(0.05*e).toFixed(3)+')');
    core.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = core; ctx.beginPath(); ctx.arc(cx,cy,R*1.05,0,Math.PI*2); ctx.fill();
    const rim = ctx.createRadialGradient(cx,cy,R*0.6,cx,cy,R*1.14);
    rim.addColorStop(0,'rgba(255,255,255,0)');
    rim.addColorStop(0.72,'rgba(255,255,255,'+(0.03*e).toFixed(3)+')');
    rim.addColorStop(0.92,'rgba(255,255,255,'+(0.16*e).toFixed(3)+')');
    rim.addColorStop(1,'rgba(255,255,255,0)');
    ctx.fillStyle = rim; ctx.beginPath(); ctx.arc(cx,cy,R*1.14,0,Math.PI*2); ctx.fill();

    // gelombang kejut saat bola selesai terbentuk
    const sw = clamp01((elapsed-ASSEMBLE_MS)/750);
    if (sw>0 && sw<1){
      ctx.strokeStyle = 'rgba(255,255,255,'+((1-sw)*0.36).toFixed(3)+')';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(cx,cy,R*(1.05+easeOutQuart(sw)*1.0),0,Math.PI*2); ctx.stroke();
    }

    // partikel
    const proj = parts.map(p=>{
      const rx = p.x*cr - p.z*sr, rz = p.x*sr + p.z*cr;
      const x = p.sx*(1-e) + rx*e, y = p.sy*(1-e) + p.y*e, z = p.sz*(1-e) + rz*e;
      const q = project(x,y,z,cx,cy,R);
      q.op = (0.28+q.depth*0.72)*e; q.tw = p.tw; q.k = p.k;
      return q;
    }).sort((a,b)=> a.z-b.z);

    // garis jaringan saraf antar partikel berdekatan
    const th = R*0.50, th2 = th*th;
    ctx.lineWidth = 0.6;
    for (let i=0;i<proj.length;i++){
      const a = proj[i];
      for (let j=i+1;j<proj.length;j++){
        const b = proj[j], dx=a.sx-b.sx, dy=a.sy-b.sy, d2=dx*dx+dy*dy;
        if (d2 < th2){
          const o = (1-Math.sqrt(d2)/th)*Math.min(a.depth,b.depth)*0.55*e;
          if (o > 0.03){
            ctx.strokeStyle = 'rgba(255,255,255,'+o.toFixed(3)+')';
            ctx.beginPath(); ctx.moveTo(a.sx,a.sy); ctx.lineTo(b.sx,b.sy); ctx.stroke();
          }
        }
      }
    }
    for (let i=0;i<proj.length;i++){
      const p = proj[i];
      const s = (2.4 + p.depth*4.6) * (0.9 + 0.1*Math.sin(elapsed*0.004 + p.tw)) * p.k;
      ctx.globalAlpha = clamp01(p.op);
      ctx.drawImage(spr, p.sx-s/2, p.sy-s/2, s, s);
    }
    ctx.globalAlpha = 1;

    // cincin orbit
    const rp = easeOutQuart(clamp01((elapsed-500)/800));
    if (rp > 0){
      RINGS.forEach((rg, ri)=>{
        const ct = Math.cos(rg.tilt), st = Math.sin(rg.tilt);
        const a0 = rot*rg.speed + ri*1.7, ca = Math.cos(a0), sa = Math.sin(a0);
        let prev = null;
        for (let k=0;k<=rg.n;k++){
          const ang = (k/rg.n)*Math.PI*2;
          const px = Math.cos(ang)*rg.rad, pz = Math.sin(ang)*rg.rad;
          const y1 = -pz*st, z1 = pz*ct;
          const x2 = px*ca - z1*sa, z2 = px*sa + z1*ca;
          const q = project(x2, y1, z2, cx, cy, R);
          if (prev){
            const al = rg.alpha*(0.2+0.8*((q.depth+prev.depth)/2))*rp;
            ctx.strokeStyle = 'rgba(255,255,255,'+al.toFixed(3)+')';
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(prev.sx,prev.sy); ctx.lineTo(q.sx,q.sy); ctx.stroke();
          }
          prev = q;
        }
      });
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

async function init(){
  if (window.hljs) { /* ready */ }
  applyIcons();
  await filterEnginesByBackend();
  buildEngineUI();
  bindEvents();
  renderAccountInfo();

  const settings = await storeGet('settings');
  if (settings){
    state.deepThinking = !!settings.deepThinking;
    if (settings.currentEngine && ENGINES[settings.currentEngine] && ENGINE_ORDER.indexOf(settings.currentEngine) !== -1) state.currentEngine = settings.currentEngine;
  }
  updateDeepThinkToggle();
  setEngine(state.currentEngine, {silent:true});

  const idx = await storeGet('index');
  state.index = Array.isArray(idx) ? idx : [];
  renderHistoryList();

  const lastOpen = await storeGet('last-open');
  if (lastOpen && state.index.find(s => s.id === lastOpen)){
    await switchSession(lastOpen);
  } else if (state.index.length){
    await switchSession(state.index[0].id);
  } else {
    await newChat({silent:true});
  }
}

async function filterEnginesByBackend(){
  try{
    const base = getBackendUrl();
    if (!base) return;
    const ctrl = new AbortController();
    const t = setTimeout(()=> ctrl.abort(), 4000);
    const r = await fetch(base + '/api/health', { signal: ctrl.signal });
    clearTimeout(t);
    if (!r.ok) return;
    const data = await r.json();
    const configured = (data && data.providersConfigured) || [];
    if (!configured.length) return;
    const filtered = ENGINE_ORDER.filter(id => configured.indexOf(ENGINES[id].provider) !== -1);
    if (filtered.length){
      ENGINE_ORDER = filtered;
      if (ENGINE_ORDER.indexOf(state.currentEngine) === -1) state.currentEngine = ENGINE_ORDER[0];
    }
  }catch(e){ /* backend belum jalan: biarkan daftar default, error ditampilkan saat kirim pesan */ }
}

function applyIcons(){
  document.getElementById('menuToggle').innerHTML = ICON.menu;
  document.getElementById('settingsBtn').innerHTML = ICON.gear;
  document.getElementById('closeArtifact').innerHTML = ICON.close;
  document.getElementById('searchIcon').innerHTML = ICON.search;
  document.getElementById('sendBtn').innerHTML = ICON.send;
  document.getElementById('newChatBtn').innerHTML = ICON.plus + '<span>Obrolan baru</span>';
  document.getElementById('modelSelectIcon').innerHTML = ICON.spark;
}

/* ============================= ENGINE UI ============================= */
function buildEngineUI(){
  const list = document.getElementById('engineList');
  list.innerHTML = ENGINE_ORDER.map(id => {
    const e = ENGINES[id];
    return `<button class="engine-row" data-engine="${id}">
      <span class="glyph">${e.glyph}</span>
      <span class="engine-row-text">
        <span class="engine-row-label">${e.label}</span>
        <span class="engine-row-sub">${e.sub}</span>
      </span>
    </button>`;
  }).join('');
  list.querySelectorAll('.engine-row').forEach(btn=>{
    btn.addEventListener('click', ()=> setEngine(btn.dataset.engine));
  });

  const dropdown = document.getElementById('modelDropdown');
  dropdown.innerHTML = ENGINE_ORDER.map(id=>{
    const e = ENGINES[id];
    return `<button class="dd-item" data-engine="${id}" role="option">
      <span class="glyph">${e.glyph}</span>
      <span class="dd-item-text"><span class="dd-item-label">${e.label}</span><span class="dd-item-sub">${e.sub}</span></span>
    </button>`;
  }).join('');
  dropdown.querySelectorAll('.dd-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{ setEngine(btn.dataset.engine); closeModelDropdown(); });
  });

  const seg = document.getElementById('segmented');
  seg.innerHTML = ENGINE_ORDER.map(id=>{
    const e = ENGINES[id];
    return `<button class="seg-btn" data-engine="${id}">${e.label.split(' ')[0]}</button>`;
  }).join('');
  seg.querySelectorAll('.seg-btn').forEach(btn=>{
    btn.addEventListener('click', ()=> setEngine(btn.dataset.engine));
  });
}

function setEngine(id, opts){
  opts = opts || {};
  state.currentEngine = id;
  document.querySelectorAll('.engine-row').forEach(r=> r.classList.toggle('active', r.dataset.engine===id));
  document.querySelectorAll('.dd-item').forEach(r=> r.classList.toggle('active', r.dataset.engine===id));
  document.querySelectorAll('.seg-btn').forEach(r=> r.classList.toggle('active', r.dataset.engine===id));
  document.getElementById('modelSelectLabel').textContent = ENGINES[id].label;
  document.getElementById('modelSelectIcon').innerHTML = ENGINES[id].glyph;
  if (!opts.silent) persistSettings();
}

function persistSettings(){
  storeSet('settings', { deepThinking: state.deepThinking, currentEngine: state.currentEngine });
}

/* ============================= ACCOUNT ============================= */
function renderAccountInfo(){
  const user = window.__BRAIN_USER;
  const loginNavBtn = document.getElementById('loginNavBtn');
  const loggedInBlock = document.getElementById('settingsAccountLoggedIn');
  const guestBlock = document.getElementById('settingsAccountGuest');
  const logoutBtn = document.getElementById('logoutBtn');

  if (user){
    const name = user.name || user.email || 'Akun';
    document.getElementById('accountName').textContent = name;
    document.getElementById('accountEmail').textContent = user.email || '';
    document.getElementById('accountAvatar').textContent = name.charAt(0).toUpperCase();
    loginNavBtn.classList.add('hidden');
    loggedInBlock.classList.remove('hidden');
    guestBlock.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
  } else {
    loginNavBtn.classList.remove('hidden');
    loggedInBlock.classList.add('hidden');
    guestBlock.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
  }
}

function goToLogin(){
  window.location.href = 'auth.html';
}

function logoutAccount(){
  try{ localStorage.removeItem('brain_auth_session'); }catch(e){}
  window.location.reload();
}

/* ============================= SESSIONS ============================= */
async function newChat(opts){
  opts = opts || {};
  const id = uid();
  const sess = { id, title:'Obrolan baru', model: state.currentEngine, messages: [], updatedAt: nowISO() };
  state.sessions[id] = sess;
  state.index.unshift({ id, title: sess.title, model: sess.model, updatedAt: sess.updatedAt });
  await storeSet('session:'+id, sess);
  await storeSet('index', state.index);
  await storeSet('last-open', id);
  state.currentSessionId = id;
  recomputeTokenMeter();
  renderHistoryList();
  renderMessages();
  closeDrawer();
  if (!opts.silent) focusComposer();
}

async function switchSession(id){
  let sess = state.sessions[id];
  if (!sess){
    sess = await storeGet('session:'+id);
    if (!sess) { await newChat(); return; }
    state.sessions[id] = sess;
  }
  state.currentSessionId = id;
  if (sess.model && ENGINES[sess.model] && ENGINE_ORDER.indexOf(sess.model) !== -1) setEngine(sess.model, {silent:true});
  recomputeTokenMeter();
  renderHistoryList();
  renderMessages();
  await storeSet('last-open', id);
  closeDrawer();
}

function currentSession(){ return state.sessions[state.currentSessionId]; }

async function persistCurrentSession(){
  const sess = currentSession();
  if (!sess) return;
  sess.updatedAt = nowISO();
  await storeSet('session:'+sess.id, sess);
  const entry = state.index.find(s=>s.id===sess.id);
  if (entry){ entry.title = sess.title; entry.model = sess.model; entry.updatedAt = sess.updatedAt; }
  state.index.sort((a,b)=> b.updatedAt - a.updatedAt);
  await storeSet('index', state.index);
  renderHistoryList();
}

async function deleteSession(id, evt){
  if (evt) evt.stopPropagation();
  await storeDelete('session:'+id);
  delete state.sessions[id];
  state.index = state.index.filter(s=>s.id!==id);
  await storeSet('index', state.index);
  showToast('Obrolan dihapus');
  if (state.currentSessionId === id){
    if (state.index.length) await switchSession(state.index[0].id);
    else await newChat();
  } else {
    renderHistoryList();
  }
}

async function forkSession(){
  const sess = currentSession();
  if (!sess) return;
  const id = uid();
  const copy = { id, title: sess.title + ' (Fork)', model: sess.model, messages: JSON.parse(JSON.stringify(sess.messages)), updatedAt: nowISO() };
  state.sessions[id] = copy;
  state.index.unshift({ id, title: copy.title, model: copy.model, updatedAt: copy.updatedAt });
  await storeSet('session:'+id, copy);
  await storeSet('index', state.index);
  await switchSession(id);
  showToast('Obrolan di-fork');
}

async function clearAllHistory(){
  for (const s of state.index){ await storeDelete('session:'+s.id); }
  state.sessions = {};
  state.index = [];
  await storeSet('index', []);
  await storeDelete('last-open');
  await newChat();
  showToast('Semua riwayat dihapus');
  closeSettingsPopover();
}

/* ============================= HISTORY LIST ============================= */
function groupLabel(ts){
  const d = new Date(ts), now = new Date();
  const startOf = dt => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
  const diffDays = Math.round((startOf(now) - startOf(d)) / 86400000);
  if (diffDays <= 0) return 'Hari ini';
  if (diffDays === 1) return 'Kemarin';
  if (diffDays <= 7) return '7 hari terakhir';
  return 'Lebih lama';
}

function renderHistoryList(){
  const wrap = document.getElementById('historyList');
  const q = (document.getElementById('historySearch').value || '').toLowerCase().trim();
  const filtered = state.index.filter(s => !q || s.title.toLowerCase().includes(q));
  if (!filtered.length){
    wrap.innerHTML = '<div class="history-empty">'+(q ? 'Tidak ada hasil.' : 'Belum ada riwayat obrolan.')+'</div>';
    return;
  }
  const groups = {};
  const order = [];
  filtered.forEach(s=>{
    const g = groupLabel(s.updatedAt);
    if (!groups[g]){ groups[g]=[]; order.push(g); }
    groups[g].push(s);
  });
  wrap.innerHTML = order.map(g=>{
    const items = groups[g].map(s=>{
      const active = s.id === state.currentSessionId;
      return `<button class="history-item ${active?'active':''}" data-id="${s.id}">
        <span class="history-item-title">${escapeHtml(s.title)}</span>
        <span class="history-del" data-id="${s.id}" title="Hapus">${ICON.trash}</span>
      </button>`;
    }).join('');
    return `<div class="history-group-label">${g}</div>${items}`;
  }).join('');

  wrap.querySelectorAll('.history-item').forEach(btn=>{
    btn.addEventListener('click', ()=> switchSession(btn.dataset.id));
  });
  wrap.querySelectorAll('.history-del').forEach(btn=>{
    btn.addEventListener('click', (e)=> deleteSession(btn.dataset.id, e));
  });
}

/* ============================= MESSAGE RENDERING ============================= */
const SUGGESTIONS = [
  'Rancang arsitektur mikroservis untuk sistem checkout',
  'Ringkas dokumen 40 halaman jadi lima poin utama',
  'Refactor fungsi ini biar lebih efisien',
  'Bandingkan dua pendekatan basis data untuk aplikasi chat'
];

function renderMessages(){
  const sess = currentSession();
  const inner = document.getElementById('messagesInner');
  if (!sess || !sess.messages.length){
    inner.innerHTML = '';
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <div class="empty-title">Ruang berpikir tanpa gangguan.</div>
      <div class="empty-sub">Satu kanvas, empat mesin AI, nol distraksi warna. Pilih mesin di sidebar lalu mulai mengetik.</div>
      <div class="chip-grid">${SUGGESTIONS.map(s=>`<button class="chip" data-text="${escapeHtml(s)}">${escapeHtml(s)}</button>`).join('')}</div>
    `;
    inner.appendChild(empty);
    empty.querySelectorAll('.chip').forEach(c=>{
      c.addEventListener('click', ()=> sendMessage(c.dataset.text));
    });
    return;
  }
  inner.innerHTML = '';
  sess.messages.forEach((m, i)=> inner.appendChild(buildMessageEl(m, i)));
  scrollToBottom();
}

function escapeHtml(s){
  const d = document.createElement('div'); d.textContent = s; return d.innerHTML;
}

function renderMarkdown(text){
  let html = window.marked ? marked.parse(text) : escapeHtml(text);
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  wrap.querySelectorAll('pre code').forEach(block=>{
    if (window.hljs){ try{ hljs.highlightElement(block); }catch(e){} }
  });
  wrap.querySelectorAll('pre').forEach(pre=>{
    const codeEl = pre.querySelector('code');
    const langMatch = codeEl && codeEl.className.match(/language-(\w+)/);
    const lang = langMatch ? langMatch[1] : 'text';
    const codeText = codeEl ? codeEl.textContent : pre.textContent;
    const block = document.createElement('div');
    block.className = 'code-block';
    block.innerHTML = `<div class="code-head">
        <span class="code-lang">${lang}</span>
        <span class="code-actions">
          <button class="btn-copy">${ICON.copy}<span>Salin</span></button>
          <button class="btn-download">${ICON.download}<span>Unduh</span></button>
          <button class="btn-preview">${ICON.eye}<span>Preview</span></button>
        </span>
      </div>`;
    pre.remove();
    const preWrap = document.createElement('pre');
    preWrap.appendChild(codeEl || document.createTextNode(codeText));
    block.appendChild(preWrap);
    block.querySelector('.btn-copy').addEventListener('click', (e)=> copyCode(codeText, e.currentTarget));
    block.querySelector('.btn-download').addEventListener('click', ()=> downloadCode(codeText, lang));
    block.querySelector('.btn-preview').addEventListener('click', ()=> previewArtifact(lang, codeText));
    wrap.appendChild(block);
  });
  return wrap; // return the live node (not a string) so button listeners survive
}

function buildMessageEl(m, index){
  const el = document.createElement('div');
  el.className = 'msg ' + (m.role === 'user' ? 'msg-user' : 'msg-ai');
  el.dataset.index = index;

  if (m.role === 'assistant'){
    const meta = document.createElement('div');
    meta.className = 'msg-meta';
    const eng = ENGINES[m.engine] || ENGINES.asgra;
    meta.innerHTML = `<span class="glyph">${eng.glyph}</span><span>${eng.label}</span>`;
    el.appendChild(meta);
  }

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  if (m.role === 'user'){ bubble.textContent = m.content || ''; if (m.attachments && m.attachments.length) bubble.prepend(buildAttEls(m.attachments)); }
  else {
    const parsed = renderMarkdown(m.content || '');
    while (parsed.firstChild) bubble.appendChild(parsed.firstChild);
  }
  el.appendChild(bubble);

  const actions = document.createElement('div');
  actions.className = 'msg-actions';
  if (m.role === 'user'){
    actions.innerHTML = `<button data-act="edit">${ICON.pencil}<span>Edit</span></button>
      <button data-act="fork">${ICON.fork}<span>Fork</span></button>`;
  } else {
    actions.innerHTML = `<button data-act="regen">${ICON.refresh}<span>Regenerate</span></button>
      <button data-act="tts">${ttsIcon()}<span>Baca</span></button>
      <button data-act="fork">${ICON.fork}<span>Fork</span></button>`;
  }
  el.appendChild(actions);

  actions.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=> handleMsgAction(btn.dataset.act, index, btn));
  });

  return el;
}

function ttsIcon(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="4 9 8 9 12 5 12 19 8 15 4 15 4 9"/><path d="M16 8a5 5 0 0 1 0 8"/></svg>';
}

function handleMsgAction(act, index, btn){
  const sess = currentSession();
  if (!sess) return;
  if (act === 'edit') startEdit(index);
  else if (act === 'regen') regenerate(index);
  else if (act === 'fork') forkSession();
  else if (act === 'tts') toggleTTS(sess.messages[index].content, btn);
}

/* ============================= EDIT ============================= */
function startEdit(index){
  const sess = currentSession();
  const msg = sess.messages[index];
  const inner = document.getElementById('messagesInner');
  const target = inner.querySelector(`.msg[data-index="${index}"]`);
  const box = document.createElement('div');
  box.className = 'msg msg-user';
  box.innerHTML = `<div class="edit-box">
      <textarea>${escapeHtml(msg.content)}</textarea>
      <div class="edit-actions">
        <button class="edit-cancel">Batal</button>
        <button class="edit-save">Simpan &amp; kirim ulang</button>
      </div>
    </div>`;
  target.replaceWith(box);
  const ta = box.querySelector('textarea');
  ta.focus();
  ta.setSelectionRange(ta.value.length, ta.value.length);
  box.querySelector('.edit-cancel').addEventListener('click', renderMessages);
  box.querySelector('.edit-save').addEventListener('click', async ()=>{
    const newText = ta.value.trim();
    if (!newText) return;
    const keepAtts = (sess.messages[index] && sess.messages[index].attachments) || [];
    sess.messages = sess.messages.slice(0, index);
    await sendMessage(newText, {isEdit:true, attachments: keepAtts});
  });
}

/* ============================= SEND / REGENERATE ============================= */
async function sendMessage(text, opts){
  opts = opts || {};
  text = (text || '').trim();
  const atts = opts.attachments || takeAttachments();
  if (!text && !atts.length) return;
  let sess = currentSession();
  if (!sess) { await newChat({silent:true}); sess = currentSession(); }

  sess.messages.push(atts.length ? { role:'user', content: text, attachments: atts } : { role:'user', content: text });
  if (sess.messages.filter(m=>m.role==='user').length === 1 || sess.title === 'Obrolan baru'){
    const tt = text || (atts[0] && atts[0].name) || 'Lampiran';
    sess.title = tt.length > 42 ? tt.slice(0,42) + '…' : tt;
  }
  sess.model = state.currentEngine;
  renderMessages();
  document.getElementById('composerInput').value = '';
  autoResize(document.getElementById('composerInput'));
  updateSendState();
  await persistCurrentSession();
  await runAssistantTurn();
}

async function regenerate(assistantIndex){
  const sess = currentSession();
  if (!sess) return;
  let cut = assistantIndex;
  while (cut > 0 && sess.messages[cut-1].role !== 'user') cut--;
  sess.messages = sess.messages.slice(0, cut);
  renderMessages();
  await persistCurrentSession();
  await runAssistantTurn();
}

async function runAssistantTurn(){
  const sess = currentSession();
  const inner = document.getElementById('messagesInner');
  const thinkEl = document.createElement('div');
  thinkEl.className = 'msg msg-ai';
  const eng = ENGINES[state.currentEngine];
  thinkEl.innerHTML = `<div class="msg-meta"><span class="glyph">${eng.glyph}</span><span>${eng.label}</span></div>
    <div class="msg-bubble"><span class="shimmer">${eng.label} sedang berpikir…</span></div>`;
  inner.appendChild(thinkEl);
  scrollToBottom();
  updateSendState(true);

  let sysPrompt = eng.system + ' Jawab dalam Bahasa Indonesia kecuali pengguna menulis dalam bahasa lain.';
  if (state.deepThinking) sysPrompt += ' Tunjukkan alur penalaran langkah demi langkah sebelum menyimpulkan jawaban akhir.';

  const apiMessages = buildApiMessages(sess.messages);

  try{
    const res = await callBackend(apiMessages, sysPrompt, eng.provider, eng.id);
    thinkEl.remove();
    sess.messages.push({ role:'assistant', content: res.text, engine: state.currentEngine });
    sess.tokens = (sess.tokens || 0) + res.usage;
    recomputeTokenMeter();
    renderMessages();
    await persistCurrentSession();
    await revealLastMessage();
  }catch(err){
    thinkEl.remove();
    let msg = 'Maaf, terjadi kendala saat menghubungi mesin AI. Periksa koneksi lalu coba lagi.';
    if (err && err.code === 'backend-unreachable'){
      msg = 'Tidak bisa menghubungi backend Brain di **' + escapeHtml(getBackendUrl()) + '**. Pastikan servernya jalan (`npm start` di folder backend) dan alamat `backendUrl` di brain-config.js sudah benar.';
    } else if (err && err.code === 'provider-error'){
      msg = 'Gagal dari ' + eng.label + ': ' + err.message + '. Periksa API key provider ini di file **.env** pada server backend.';
    }
    sess.messages.push({ role:'assistant', content: msg, engine: state.currentEngine });
    renderMessages();
    await persistCurrentSession();
    showToast(err && err.code === 'backend-unreachable' ? 'Backend tidak terjangkau' : 'Gagal menghubungi API');
  }
  updateSendState();
}

async function revealLastMessage(){
  const inner = document.getElementById('messagesInner');
  const nodes = inner.querySelectorAll('.msg-ai');
  const last = nodes[nodes.length-1];
  if (!last) return;
  const bubble = last.querySelector('.msg-bubble');
  const sess = currentSession();
  const fullText = sess.messages[sess.messages.length-1].content;
  const words = fullText.split(/(\s+)/);
  bubble.innerHTML = '<span class="stream-raw"></span><span class="stream-cursor"></span>';
  const raw = bubble.querySelector('.stream-raw');
  const chunk = Math.max(1, Math.ceil(words.length/60));
  for (let i=0;i<words.length;i+=chunk){
    raw.textContent += words.slice(i,i+chunk).join('');
    scrollToBottom();
    await new Promise(r=>setTimeout(r, 12));
  }
  // full re-render (via buildMessageEl) attaches real listeners to code-block buttons and message actions
  renderMessages();
}

function getBackendUrl(){
  const url = (window.BRAIN_CONFIG && window.BRAIN_CONFIG.backendUrl || '').trim();
  return url.replace(/\/+$/, '');
}

async function callBackend(messages, systemPrompt, provider, variant){
  const base = getBackendUrl();
  if (!base){
    const err = new Error('backend-unreachable');
    err.code = 'backend-unreachable';
    throw err;
  }

  let response;
  try{
    response = await fetch(base + '/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ provider: provider, variant: variant, messages: messages, system: systemPrompt })
    });
  }catch(networkErr){
    const err = new Error('backend-unreachable');
    err.code = 'backend-unreachable';
    throw err;
  }

  let data = null;
  try{ data = await response.json(); }catch(e){}

  if (!response.ok){
    const err = new Error((data && data.error) || ('Backend error ' + response.status));
    err.code = 'provider-error';
    err.status = response.status;
    throw err;
  }

  return { text: (data && data.text) || '(tidak ada respons)', usage: (data && data.usage) || 0 };
}

function recomputeTokenMeter(){
  const sess = currentSession();
  const t = sess ? (sess.tokens || 0) : 0;
  document.getElementById('tokenMeter').textContent = formatTokens(t) + ' / 128k';
}
function formatTokens(n){
  if (n < 1000) return String(n);
  return (n/1000).toFixed(1) + 'k';
}

/* ============================= CODE ACTIONS ============================= */
function copyCode(text, btn){
  navigator.clipboard.writeText(text).then(()=>{
    const label = btn.querySelector('span');
    const old = label.textContent;
    label.textContent = 'Disalin';
    showToast('Kode disalin ke papan klip');
    setTimeout(()=> label.textContent = old, 1600);
  }).catch(()=> showToast('Gagal menyalin'));
}

function extForLang(lang){
  const map = { javascript:'js', js:'js', typescript:'ts', ts:'ts', python:'py', py:'py',
    html:'html', css:'css', json:'json', bash:'sh', sh:'sh', java:'java', c:'c', cpp:'cpp',
    jsx:'jsx', tsx:'tsx', sql:'sql', yaml:'yml', yml:'yml' };
  return map[lang] || 'txt';
}

function downloadCode(text, lang){
  const ext = extForLang(lang);
  const blob = new Blob([text], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'brain-snippet.' + ext;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  showToast('File diunduh');
}

function previewArtifact(lang, code){
  const panel = document.getElementById('artifactPanel');
  const frame = document.getElementById('artifactFrame');
  const title = document.getElementById('artifactTitle');
  let doc;
  if (lang === 'html'){
    doc = code;
    title.textContent = 'preview.html';
  } else if (lang === 'css'){
    doc = `<html><head><style>${code}</style></head><body><p style="font-family:sans-serif;padding:20px;color:#333">Pratinjau gaya CSS diterapkan pada halaman contoh ini.</p></body></html>`;
    title.textContent = 'preview.css';
  } else if (lang === 'javascript' || lang === 'js'){
    doc = `<html><body style="font-family:monospace;padding:16px;color:#111"><div id="out"></div><script>
      const _log=[]; const push=(...a)=>{_log.push(a.join(' '));document.getElementById('out').innerText=_log.join('\\n');};
      console.log=push; console.error=push;
      try{ ${code} }catch(e){ push('Error: '+e.message); }
    <\/script></body></html>`;
    title.textContent = 'preview.js';
  } else {
    doc = `<html><body style="font-family:monospace;padding:16px;color:#333;white-space:pre-wrap">Preview langsung belum tersedia untuk bahasa "${lang}".\n\n${escapeHtml(code)}</body></html>`;
    title.textContent = 'preview.' + extForLang(lang);
  }
  frame.srcdoc = doc;
  panel.classList.add('open');
}

function closeArtifactPanel(){
  document.getElementById('artifactPanel').classList.remove('open');
}

/* ============================= TTS ============================= */
function toggleTTS(text, btn){
  if (!('speechSynthesis' in window)){ showToast('TTS tidak didukung browser ini'); return; }
  const wasSameButton = (btn === state.ttsButton);
  if (state.ttsUtterance && speechSynthesis.speaking){
    speechSynthesis.cancel();
    if (state.ttsButton) state.ttsButton.classList.remove('playing');
    state.ttsUtterance = null; state.ttsButton = null;
    if (wasSameButton) return;
  }
  const plain = text.replace(/```[\s\S]*?```/g,' kode terlampir ').replace(/[#*_`>]/g,'');
  const utter = new SpeechSynthesisUtterance(plain);
  utter.lang = 'id-ID';
  utter.onend = ()=>{ btn.classList.remove('playing'); };
  state.ttsUtterance = utter; state.ttsButton = btn;
  btn.classList.add('playing');
  speechSynthesis.speak(utter);
}

/* ============================= UI HELPERS ============================= */
function scrollToBottom(){
  const scroll = document.getElementById('messagesScroll');
  requestAnimationFrame(()=> scroll.scrollTop = scroll.scrollHeight);
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=> t.classList.remove('show'), 2200);
}

function focusComposer(){ document.getElementById('composerInput').focus(); }

function autoResize(ta){
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
}

function updateSendState(forceDisable){
  const ta = document.getElementById('composerInput');
  const btn = document.getElementById('sendBtn');
  btn.disabled = !!forceDisable || attachBusy > 0 || (!ta.value.trim() && !pendingAttachments.length);
}

function closeModelDropdown(){
  document.getElementById('modelDropdown').classList.remove('show');
  document.getElementById('modelSelectBtn').classList.remove('open');
}
function closeSettingsPopover(){
  document.getElementById('settingsPop').classList.remove('show');
}

function updateDeepThinkToggle(){
  document.getElementById('deepThinkToggle').classList.toggle('on', state.deepThinking);
  document.getElementById('deepThinkToggle').setAttribute('aria-checked', String(state.deepThinking));
}

/* ---- drawer ---- */
function openDrawer(){
  state.drawerOpen = true;
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('drawerScrim').classList.add('show');
}
function closeDrawer(){
  if (window.innerWidth >= 1024) return;
  state.drawerOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('drawerScrim').classList.remove('show');
}
function toggleDrawer(){ state.drawerOpen ? closeDrawer() : openDrawer(); }

/* ============================= EVENTS ============================= */
function bindEvents(){
  document.getElementById('menuToggle').addEventListener('click', toggleDrawer);
  document.getElementById('drawerScrim').addEventListener('click', closeDrawer);

  document.getElementById('modelSelectBtn').addEventListener('click', (e)=>{
    e.stopPropagation();
    document.getElementById('modelDropdown').classList.toggle('show');
    document.getElementById('modelSelectBtn').classList.toggle('open');
  });
  document.getElementById('settingsBtn').addEventListener('click', (e)=>{
    e.stopPropagation();
    document.getElementById('settingsPop').classList.toggle('show');
  });
  document.addEventListener('click', ()=>{ closeModelDropdown(); closeSettingsPopover(); });

  document.getElementById('deepThinkToggle').addEventListener('click', (e)=>{
    e.stopPropagation();
    state.deepThinking = !state.deepThinking;
    updateDeepThinkToggle();
    persistSettings();
  });
  document.getElementById('clearHistoryBtn').addEventListener('click', (e)=>{
    e.stopPropagation();
    clearAllHistory();
  });
  document.getElementById('logoutBtn').addEventListener('click', (e)=>{
    e.stopPropagation();
    logoutAccount();
  });
  document.getElementById('loginNavBtn').addEventListener('click', goToLogin);
  document.getElementById('settingsLoginBtn').addEventListener('click', (e)=>{
    e.stopPropagation();
    goToLogin();
  });

  document.getElementById('newChatBtn').addEventListener('click', ()=> newChat());
  document.getElementById('historySearch').addEventListener('input', renderHistoryList);

  document.getElementById('closeArtifact').addEventListener('click', closeArtifactPanel);

  const ta = document.getElementById('composerInput');
  ta.addEventListener('input', ()=>{ autoResize(ta); updateSendState(); });
  ta.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      const v = ta.value.trim();
      if ((v || pendingAttachments.length) && attachBusy === 0) sendMessage(v);
    }
  });
  document.getElementById('sendBtn').addEventListener('click', ()=>{
    const v = ta.value.trim();
    if ((v || pendingAttachments.length) && attachBusy === 0) sendMessage(v);
  });

  /* swipe-from-edge gesture for drawer */
  let touchStartX = null, dragging = false, sidebarW = 268;
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('drawerScrim');

  document.addEventListener('touchstart', (e)=>{
    if (window.innerWidth >= 1024) return;
    const x = e.touches[0].clientX;
    if (!state.drawerOpen && x < 24){
      touchStartX = x; dragging = true;
      sidebar.classList.add('dragging');
    } else if (state.drawerOpen){
      touchStartX = x; dragging = true;
      sidebar.classList.add('dragging');
    }
  }, {passive:true});

  document.addEventListener('touchmove', (e)=>{
    if (!dragging || touchStartX===null) return;
    const x = e.touches[0].clientX;
    let delta = x - touchStartX;
    let translate;
    if (state.drawerOpen){
      translate = Math.min(0, delta);
    } else {
      translate = Math.min(0, delta - sidebarW);
    }
    sidebar.style.transform = `translateX(${translate}px)`;
    const progress = 1 + (translate/sidebarW);
    scrim.style.opacity = Math.max(0, Math.min(1, progress*0.55));
    scrim.classList.add('show');
  }, {passive:true});

  document.addEventListener('touchend', (e)=>{
    if (!dragging) return;
    dragging = false;
    sidebar.classList.remove('dragging');
    sidebar.style.transform = '';
    scrim.style.opacity = '';
    const x = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : 0;
    const delta = touchStartX===null ? 0 : x - touchStartX;
    if (state.drawerOpen){
      if (delta < -sidebarW*0.25) closeDrawer(); else openDrawer();
    } else {
      if (delta > sidebarW*0.25) openDrawer(); else closeDrawer();
    }
    touchStartX = null;
  });
}

/* ===== Upgrade: fitur tambahan ===== */
(function(){
  function ready(fn){ document.readyState==='loading' ? document.addEventListener('DOMContentLoaded',fn) : fn(); }
  ready(function(){
    var scroll=document.getElementById('messagesScroll');
    var composer=document.getElementById('composerInput');
    var wrap=document.querySelector('.composer-wrap');

    /* tombol "ke pesan terbaru" */
    if (scroll && wrap){
      var fab=document.createElement('button');
      fab.type='button'; fab.className='scroll-fab'; fab.setAttribute('aria-label','Ke pesan terbaru');
      fab.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
      wrap.appendChild(fab);
      var check=function(){ fab.classList.toggle('show', scroll.scrollHeight-scroll.scrollTop-scroll.clientHeight>260); };
      scroll.addEventListener('scroll', check, {passive:true});
      new MutationObserver(check).observe(scroll,{childList:true,subtree:true});
      fab.addEventListener('click', function(){ scroll.scrollTo({top:scroll.scrollHeight,behavior:'smooth'}); });
    }

    /* ekspor percakapan ke Markdown */
    var pop=document.getElementById('settingsPop'), clearBtn=document.getElementById('clearHistoryBtn');
    if (pop && clearBtn){
      var ex=document.createElement('button');
      ex.type='button'; ex.className='export-btn'; ex.textContent='Ekspor percakapan (.md)';
      pop.insertBefore(ex, clearBtn);
      ex.addEventListener('click', function(e){
        e.stopPropagation();
        var s = state.sessions && state.sessions[state.currentSessionId];
        if (!s || !s.messages || !s.messages.length){ showToast('Belum ada percakapan untuk diekspor'); return; }
        var md='# '+(s.title||'Percakapan Brain')+'\n\n';
        s.messages.forEach(function(m){ md += '**'+(m.role==='user'?'Kamu':'Brain')+':**\n\n'+m.content+'\n\n---\n\n'; });
        var a=document.createElement('a');
        a.href=URL.createObjectURL(new Blob([md],{type:'text/markdown'}));
        a.download='brain-'+new Date().toISOString().slice(0,10)+'.md';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function(){ URL.revokeObjectURL(a.href); },500);
        showToast('Percakapan diekspor');
      });
    }

    /* pintasan keyboard: / fokus ketik, Alt+N chat baru, Ctrl/Cmd+K cari riwayat */
    document.addEventListener('keydown', function(e){
      var t=e.target, typing=t && (t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.isContentEditable);
      var mod=e.ctrlKey||e.metaKey;
      if (mod && e.key.toLowerCase()==='k'){ var hs=document.getElementById('historySearch'); if(hs){ e.preventDefault(); hs.focus(); } }
      else if (e.altKey && e.key.toLowerCase()==='n'){ var nb=document.getElementById('newChatBtn'); if(nb){ e.preventDefault(); nb.click(); } }
      else if (e.key==='/' && !typing && composer){ e.preventDefault(); composer.focus(); }
    });
  });
})();

/* ===== Lampiran file & gambar + Deep Thinking di composer ===== */
let pendingAttachments = [];
let attachBusy = 0;
const MAX_ATTACH = 5;
const TEXT_EXT = ['txt','md','csv','tsv','json','xml','yaml','yml','log','sql','html','css','js','jsx','ts','tsx','py','java','c','cpp','go','rs','php','rb','sh','ini','toml'];
const AI = {
  clip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5l-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.6-8.6a3.7 3.7 0 0 1 5.2 5.2l-8.6 8.6a1.8 1.8 0 0 1-2.6-2.6l7.9-7.9"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
  think:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1.2 4.2 3.8 6.8 8 8-4.2 1.2-6.8 3.8-8 8-1.2-4.2-3.8-6.8-8-8 4.2-1.2 6.8-3.8 8-8z"/><path d="M19 15c.5 1.7 1.3 2.5 3 3-1.7.5-2.5 1.3-3 3-.5-1.7-1.3-2.5-3-3 1.7-.5 2.5-1.3 3-3z" opacity=".7"/></svg>'
};

function fmtSize(b){ return b < 1024 ? b+' B' : b < 1048576 ? (b/1024).toFixed(0)+' KB' : (b/1048576).toFixed(1)+' MB'; }
function takeAttachments(){
  const out = pendingAttachments.filter(a=>!a.loading).map(a=>{ const c = Object.assign({}, a); delete c.id; delete c.loading; return c; });
  pendingAttachments = []; renderStrip(); updateSendState();
  return out;
}

function buildApiMessages(msgs){
  const withImg = [];
  msgs.forEach((m,i)=>{ if (m.role==='user' && m.attachments && m.attachments.some(a=>a.kind==='image')) withImg.push(i); });
  const allow = new Set(withImg.slice(-2));
  return msgs.map((m,i)=>{
    if (m.role !== 'user' || !m.attachments || !m.attachments.length) return { role:m.role, content:m.content };
    let text = m.content || '';
    m.attachments.forEach(a=>{ if (a.kind==='file') text += '\n\n[Berkas: '+a.name+']\n```\n'+a.text+'\n```'; });
    const imgs = m.attachments.filter(a=>a.kind==='image' && a.dataUrl);
    if (!imgs.length) return { role:'user', content:text.trim() };
    if (!allow.has(i)) return { role:'user', content:(text + '\n[Gambar terlampir sebelumnya: '+imgs.map(a=>a.name).join(', ')+']').trim() };
    return { role:'user', content:[{ type:'text', text:text.trim() || 'Jelaskan gambar ini.' }].concat(imgs.map(a=>({ type:'image_url', image_url:{ url:a.dataUrl } }))) };
  });
}

function openLightbox(src){
  const lb = document.createElement('div'); lb.className = 'lightbox';
  const im = document.createElement('img'); im.src = src; lb.appendChild(im);
  const close = ()=>{ lb.classList.remove('show'); setTimeout(()=>lb.remove(), 260); document.removeEventListener('keydown', esc); };
  const esc = (e)=>{ if (e.key==='Escape') close(); };
  lb.addEventListener('click', close); document.addEventListener('keydown', esc);
  document.body.appendChild(lb); requestAnimationFrame(()=> lb.classList.add('show'));
}

function chipEl(a, removable){
  const el = document.createElement('div');
  el.className = 'att-chip' + (a.kind==='image' ? ' att-img' : '') + (a.loading ? ' loading' : '');
  if (a.kind==='image'){
    if (a.dataUrl){ const im = document.createElement('img'); im.src = a.dataUrl; im.alt = a.name; el.appendChild(im); }
  } else {
    const ico = document.createElement('div'); ico.className = 'att-ico'; ico.innerHTML = AI.file;
    const tx = document.createElement('div'); tx.style.minWidth = '0';
    const n = document.createElement('div'); n.className = 'att-name'; n.textContent = a.name;
    const z = document.createElement('div'); z.className = 'att-size'; z.textContent = a.size ? fmtSize(a.size) : '';
    tx.appendChild(n); tx.appendChild(z); el.appendChild(ico); el.appendChild(tx);
  }
  if (removable){
    const x = document.createElement('button'); x.type = 'button'; x.className = 'att-x'; x.setAttribute('aria-label','Hapus lampiran'); x.innerHTML = AI.x;
    x.addEventListener('click', ()=>{ pendingAttachments = pendingAttachments.filter(p=>p.id!==a.id); renderStrip(); updateSendState(); });
    el.appendChild(x);
  }
  return el;
}

function renderStrip(){
  const strip = document.getElementById('attachStrip'); if (!strip) return;
  strip.innerHTML = '';
  pendingAttachments.forEach(a=> strip.appendChild(chipEl(a, true)));
  strip.classList.toggle('has', pendingAttachments.length > 0);
}

function buildAttEls(atts){
  const wrap = document.createElement('div'); wrap.className = 'msg-atts';
  atts.forEach(a=>{
    if (a.kind==='image' && a.dataUrl){
      const im = document.createElement('img'); im.className = 'msg-att-img'; im.src = a.dataUrl; im.alt = a.name;
      im.addEventListener('click', ()=> openLightbox(a.dataUrl)); wrap.appendChild(im);
    } else wrap.appendChild(chipEl(a, false));
  });
  return wrap;
}

function compressImage(file){
  return new Promise((res, rej)=>{
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = ()=>{
      const s = Math.min(1, 1280 / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width*s)), h = Math.max(1, Math.round(img.height*s));
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0,0,w,h); x.drawImage(img,0,0,w,h);
      URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', 0.78));
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); rej(new Error('img')); };
    img.src = url;
  });
}
function loadScriptOnce(src){
  return new Promise((ok, no)=>{ const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
}
async function pdfToText(file){
  if (!window.pdfjsLib) await loadScriptOnce('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  const doc = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  let out = ''; const n = Math.min(doc.numPages, 25);
  for (let i=1; i<=n; i++){
    const pg = await doc.getPage(i), tc = await pg.getTextContent();
    out += tc.items.map(it=>it.str).join(' ') + '\n\n';
    if (out.length > 60000) break;
  }
  return out.trim();
}

async function addFiles(fileList){
  const files = Array.from(fileList || []);
  for (const f of files){
    if (pendingAttachments.length >= MAX_ATTACH){ showToast('Maksimal '+MAX_ATTACH+' lampiran per pesan'); break; }
    const ext = (f.name.split('.').pop() || '').toLowerCase();
    const isImg = f.type.indexOf('image/') === 0;
    const isPdf = ext === 'pdf' || f.type === 'application/pdf';
    const isText = f.type.indexOf('text/') === 0 || TEXT_EXT.indexOf(ext) !== -1;
    if (!isImg && !isPdf && !isText){ showToast('Format .'+(ext||'?')+' belum didukung'); continue; }
    if (f.size > (isImg ? 15 : 10) * 1048576){ showToast(f.name+' terlalu besar'); continue; }
    const a = { id:'a'+Date.now()+Math.random().toString(36).slice(2,6), kind:isImg?'image':'file', name:f.name, size:f.size, loading:true };
    pendingAttachments.push(a); attachBusy++; renderStrip(); updateSendState();
    try{
      if (isImg) a.dataUrl = await compressImage(f);
      else if (isPdf){
        const t = await pdfToText(f);
        if (!t) throw new Error('kosong');
        a.text = t.slice(0, 60000);
      } else {
        const t = await f.text();
        a.text = t.length > 60000 ? t.slice(0, 60000) + '\n…(dipotong)' : t;
      }
      a.loading = false;
    }catch(e){
      pendingAttachments = pendingAttachments.filter(p=>p.id!==a.id);
      showToast(isPdf ? 'PDF tidak berisi teks yang bisa dibaca' : 'Gagal membaca '+f.name);
    }
    attachBusy--; renderStrip(); updateSendState();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  const attachBtn = document.getElementById('attachBtn'), input = document.getElementById('fileInput');
  const ta = document.getElementById('composerInput'), pill = document.getElementById('thinkPill');
  if (!attachBtn || !input || !ta || !pill) return;
  attachBtn.innerHTML = AI.clip;
  attachBtn.addEventListener('click', ()=> input.click());
  input.addEventListener('change', ()=>{ addFiles(input.files); input.value = ''; });

  ta.addEventListener('paste', (e)=>{
    const fs = e.clipboardData && e.clipboardData.files;
    if (fs && fs.length){ e.preventDefault(); addFiles(fs); }
  });

  /* seret & lepas */
  const ov = document.createElement('div'); ov.className = 'drop-overlay';
  ov.innerHTML = '<div class="drop-card">Lepaskan untuk melampirkan<small>Gambar, PDF, teks, atau kode</small></div>';
  document.body.appendChild(ov);
  let depth = 0;
  const hasFiles = (e)=> e.dataTransfer && Array.from(e.dataTransfer.types || []).indexOf('Files') !== -1;
  document.addEventListener('dragenter', (e)=>{ if (hasFiles(e)){ depth++; ov.classList.add('show'); } });
  document.addEventListener('dragleave', (e)=>{ if (hasFiles(e)){ depth = Math.max(0, depth-1); if (!depth) ov.classList.remove('show'); } });
  document.addEventListener('dragover', (e)=>{ if (hasFiles(e)) e.preventDefault(); });
  document.addEventListener('drop', (e)=>{ if (hasFiles(e)){ e.preventDefault(); depth = 0; ov.classList.remove('show'); addFiles(e.dataTransfer.files); } });

  /* Deep Thinking: pindah dari pengaturan ke baris composer */
  const toggle = document.getElementById('deepThinkToggle');
  pill.innerHTML = AI.think + '<span>Deep Thinking</span>';
  if (toggle){
    const row = toggle.closest('.settings-row');
    if (row){ const nx = row.nextElementSibling; row.style.display = 'none'; if (nx && nx.classList.contains('settings-divider')) nx.style.display = 'none'; }
    const sync = ()=>{ const on = toggle.getAttribute('aria-checked') === 'true'; pill.classList.toggle('on', on); pill.setAttribute('aria-pressed', String(on)); };
    new MutationObserver(sync).observe(toggle, { attributes:true, attributeFilter:['aria-checked'] });
    pill.addEventListener('click', ()=>{ toggle.click(); showToast(toggle.getAttribute('aria-checked') === 'true' ? 'Deep Thinking aktif' : 'Deep Thinking nonaktif'); });
    sync();
  }
});

/* ===== Aura chat kosong + pilih model di composer ===== */
(function(){
  const _rm = renderMessages;
  renderMessages = function(){
    const r = _rm.apply(this, arguments);
    updateAura();
    return r;
  };
})();
function updateAura(){
  const el = document.getElementById('chatAura'); if (!el) return;
  const s = state.sessions && state.sessions[state.currentSessionId];
  const empty = !s || !s.messages || s.messages.length === 0;
  el.classList.toggle('off', !empty);
}
document.addEventListener('DOMContentLoaded', function(){
  updateAura();
  const pill = document.getElementById('modelPill'), lab = document.getElementById('modelSelectLabel');
  if (!pill || !lab) return;
  const CHEV = '<svg class="mp-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>';
  const CHECK = '<svg class="mm-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  let menu = null;
  function sync(){
    const e = ENGINES[state.currentEngine]; if (!e) return;
    pill.innerHTML = '<span class="mp-ico">'+e.glyph+'</span><span>'+e.label+'</span>'+CHEV;
  }
  function close(){
    if (!menu) return;
    const m = menu; menu = null; pill.setAttribute('aria-expanded','false');
    m.classList.remove('show'); setTimeout(()=> m.remove(), 260);
    document.removeEventListener('pointerdown', outside, true); document.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', close);
  }
  function outside(e){ if (menu && !menu.contains(e.target) && !pill.contains(e.target)) close(); }
  function onKey(e){ if (e.key === 'Escape') close(); }
  function open(){
    menu = document.createElement('div'); menu.className = 'model-menu'; menu.setAttribute('role','listbox');
    ENGINE_ORDER.forEach(function(id){
      const e = ENGINES[id];
      const b = document.createElement('button'); b.type = 'button'; b.className = 'mm-item' + (id === state.currentEngine ? ' active' : '');
      b.setAttribute('role','option'); b.setAttribute('aria-selected', String(id === state.currentEngine));
      b.innerHTML = '<span class="mm-ico">'+e.glyph+'</span><span class="mm-txt"><div class="mm-name">'+e.label+'</div><div class="mm-sub">'+e.sub+'</div></span>'+CHECK;
      b.addEventListener('click', function(){ setEngine(id); close(); });
      menu.appendChild(b);
    });
    document.body.appendChild(menu);
    const r = pill.getBoundingClientRect(), w = Math.min(260, window.innerWidth - 24);
    menu.style.width = w + 'px';
    menu.style.left = Math.max(12, Math.min(r.left, window.innerWidth - w - 12)) + 'px';
    menu.style.bottom = (window.innerHeight - r.top + 8) + 'px';
    pill.setAttribute('aria-expanded','true');
    requestAnimationFrame(function(){ if (menu) menu.classList.add('show'); });
    document.addEventListener('pointerdown', outside, true); document.addEventListener('keydown', onKey);
    window.addEventListener('resize', close);
  }
  pill.addEventListener('click', function(){ menu ? close() : open(); });
  new MutationObserver(sync).observe(lab, { childList:true, characterData:true, subtree:true });
  sync();
});
