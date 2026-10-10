
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

/* ---- logo Brain 3D: partikel berkumpul membentuk logo, lalu menjadi objek 3D ekstrusi berkilau ---- */
const BRAIN_LOGO = { w:1000, h:836.0, d:"M324.5 835.6C319.5 834.0 314.9 829.9 312.3 825.0C310.9 822.1 308.0 810.3 300.3 775.3C295.7 754.5 292.7 741.2 290.1 729.5C284.3 703.8 280.0 682.1 280.5 681.5C280.8 681.2 286.2 679.9 292.5 678.7C298.7 677.5 312.1 674.8 322.1 672.7C343.0 668.5 341.4 668.3 342.8 675.3C343.2 677.5 344.4 683.1 345.5 687.6C347.5 696.4 351.9 716.8 353.6 725.2C355.2 733.0 355.4 733.0 360.5 727.7C365.0 723.0 448.1 638.9 480.5 606.2C493.6 593.0 504.8 582.1 505.4 582.1C506.1 582.1 515.6 590.9 526.7 601.7C548.4 622.8 548.7 623.1 548.3 624.0C548.2 624.3 516.9 656.0 478.7 694.5C440.4 733.0 396.8 777.0 381.8 792.3C366.7 807.6 351.8 822.7 348.7 825.8C341.9 832.6 336.9 835.4 330.4 835.9C328.0 836.0 325.4 835.9 324.5 835.6ZM197.1 682.5C162.6 679.6 129.8 657.0 113.8 625.0C107.8 613.2 103.1 597.8 101.3 584.9C100.5 579.3 100.1 578.7 95.7 576.4C84.3 570.7 66.2 557.4 55.0 546.6C29.2 521.8 10.9 488.6 3.0 452.3C-0.4 436.6 -1.0 410.7 1.6 393.8C7.0 358.1 26.9 319.6 54.8 291.0C59.3 286.4 59.3 286.4 59.9 276.6C62.1 242.9 71.6 214.1 89.4 187.6C120.7 141.1 175.7 110.2 234.4 106.2C241.6 105.7 243.0 105.5 243.8 104.4C244.2 103.7 247.0 99.5 249.9 95.0C280.4 48.1 334.1 15.0 389.8 8.8C409.4 6.7 419.4 6.9 440.1 9.8C460.5 12.8 487.9 23.1 505.7 34.4C510.1 37.3 511.0 37.2 515.6 34.2C560.4 3.9 619.3 -7.1 673.0 4.6C724.0 15.7 773.5 48.1 803.3 89.9C810.0 99.2 809.3 98.9 820.8 98.9C881.7 98.9 945.9 137.4 976.5 192.2C997.6 230.0 1004.9 273.8 996.7 313.3C986.3 363.6 953.7 408.9 908.0 436.7C896.9 443.5 875.6 452.8 865.0 455.7C862.4 456.4 862.2 456.6 857.7 465.5C849.9 480.7 839.4 498.0 833.4 505.5C805.8 540.1 768.7 565.6 724.6 580.4C678.2 595.9 624.7 595.8 578.9 580.2C540.8 567.1 513.7 548.9 464.3 503.2C425.9 467.6 414.7 458.3 396.2 446.2C347.2 414.5 286.1 407.6 240.6 428.7C193.5 450.6 161.5 503.3 161.4 558.7C161.4 587.7 169.6 607.3 185.7 616.9C198.0 624.2 217.5 624.2 234.9 616.9C251.3 610.0 263.0 600.1 287.5 572.7C308.3 549.4 327.8 534.0 347.9 524.9C375.6 512.3 398.0 508.6 429.1 511.4C439.5 512.3 440.5 512.8 440.0 516.2C439.7 518.7 438.1 538.3 437.1 551.4C436.2 563.4 435.3 571.1 434.7 571.7C434.4 572.0 431.8 571.9 428.9 571.6C413.6 569.8 395.0 571.1 384.1 574.7C363.0 581.7 349.7 592.1 326.4 619.8C308.6 641.0 295.7 652.7 278.6 662.9C252.6 678.7 226.3 685.0 197.1 682.5ZM674.5 530.4C713.2 524.7 746.1 508.3 773.4 481.0C781.4 472.9 790.0 462.6 790.0 460.9C790.1 459.7 789.8 459.6 780.2 458.0C755.3 453.9 730.9 443.8 707.9 428.2C703.2 425.0 699.0 422.4 698.5 422.4C698.0 422.4 693.0 423.7 687.3 425.3C637.8 439.4 588.2 434.7 548.5 412.3C519.4 395.8 496.1 373.1 461.4 327.7C457.5 322.7 451.0 314.2 446.9 308.8C442.7 303.3 437.3 296.3 434.8 293.0C427.3 283.2 416.4 269.0 413.5 265.2C386.5 230.2 363.3 207.9 335.9 190.5C296.5 165.5 240.7 158.8 198.4 173.9C166.9 185.1 139.2 211.3 128.4 239.9C125.7 247.2 125.7 247.2 136.2 244.6C158.4 239.0 189.5 239.3 213.5 245.2C271.5 259.5 317.6 298.5 345.9 357.2C348.8 363.2 349.2 363.8 351.3 364.2C382.5 371.5 417.5 387.0 443.7 405.3C462.1 418.1 472.3 426.9 503.6 457.4C531.9 484.9 540.9 492.7 556.6 503.2C578.4 517.9 607.0 528.2 633.4 531.0C643.9 532.1 664.7 531.8 674.5 530.4ZM110.3 497.5C126.5 446.0 166.0 401.4 218.1 376.1C234.1 368.3 250.5 363.2 269.3 360.2C274.9 359.2 275.4 358.8 273.4 356.0C252.6 327.2 222.9 308.7 188.6 303.2C182.1 302.1 162.3 302.3 155.6 303.5C119.6 309.9 90.6 332.0 73.3 366.4C64.1 384.7 60.9 397.9 61.0 418.1C61.0 440.7 65.5 456.4 77.9 477.3C85.7 490.5 104.3 510.6 106.5 508.3C106.8 508.0 108.5 503.1 110.3 497.5ZM829.2 401.1C837.5 400.0 837.6 400.0 847.2 397.4C892.7 385.0 929.4 345.6 937.9 300.4C939.7 290.7 939.5 267.4 937.5 256.7C931.2 222.1 909.1 191.7 877.4 173.8C865.6 167.1 839.0 158.4 837.0 160.4C836.5 160.8 837.2 165.2 839.1 173.7C840.6 180.6 842.2 189.1 842.8 192.5C853.4 262.3 823.4 338.5 767.5 383.4C759.6 389.7 759.4 390.3 764.0 392.2C783.7 400.7 807.5 404.0 829.2 401.1ZM654.8 371.6C699.2 365.0 739.0 338.4 763.6 298.9C799.9 240.5 791.8 162.8 744.0 109.8C726.7 90.7 695.7 71.6 672.9 65.9C642.7 58.5 618.4 58.1 593.0 64.6C579.2 68.1 557.6 77.4 556.5 80.3C556.3 80.8 559.2 85.8 563.1 91.5C573.8 107.7 581.2 122.8 585.8 138.2C604.2 200.1 587.9 266.3 542.1 315.9C538.7 319.6 536.0 323.0 536.0 323.5C536.0 324.8 553.8 342.4 559.2 346.5C588.5 368.6 619.6 376.7 654.8 371.6ZM502.6 270.3C524.7 244.4 535.6 206.8 530.8 172.9C520.4 99.2 443.4 51.6 372.0 74.5C350.5 81.4 333.1 91.9 316.1 108.6C310.3 114.3 310.3 114.9 315.2 116.3C341.2 123.5 360.8 133.1 384.1 150.0C414.9 172.3 439.0 198.9 493.1 270.0C495.3 272.7 497.3 275.0 497.8 275.0C498.2 275.0 500.4 272.9 502.6 270.3Z" };
function initIntroOrb(){
  const canvas = document.getElementById('introOrbCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  function size(){
    const r = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(r.width*DPR));
    canvas.height = Math.max(1, Math.round(r.height*DPR));
  }
  size();
  window.addEventListener('resize', size);

  const LW = BRAIN_LOGO.w, LH = BRAIN_LOGO.h, FIT = 0.8;
  let logoPath = null;
  try{ logoPath = new Path2D(BRAIN_LOGO.d); }catch(e){ logoPath = null; }

  const lay = document.createElement('canvas');
  const lx = lay.getContext('2d');

  // sprite titik bercahaya
  const spr = document.createElement('canvas'); spr.width = spr.height = 32;
  const sc = spr.getContext('2d');
  const sg = sc.createRadialGradient(16,16,0,16,16,16);
  sg.addColorStop(0,'rgba(255,255,255,1)'); sg.addColorStop(0.3,'rgba(255,255,255,0.55)'); sg.addColorStop(1,'rgba(255,255,255,0)');
  sc.fillStyle = sg; sc.fillRect(0,0,32,32);

  // titik-titik tujuan diambil dari bentuk logo asli
  function sampleTargets(n){
    const out = [];
    try{
      if (!logoPath) throw new Error('nopath');
      const S = 180, c = document.createElement('canvas'); c.width = c.height = S;
      const x = c.getContext('2d'), k = S*FIT/Math.max(LW,LH);
      x.translate(S/2, S/2); x.scale(k,k); x.translate(-LW/2, -LH/2); x.fillStyle = '#fff'; x.fill(logoPath, 'evenodd');
      const dat = x.getImageData(0,0,S,S).data, pix = [];
      for (let i=0;i<S*S;i++) if (dat[i*4+3] > 128) pix.push(i);
      for (let i=0;i<n && pix.length;i++){
        const q = pix[(Math.random()*pix.length)|0];
        out.push({ x:((q%S)+Math.random())/S-0.5, y:(Math.floor(q/S)+Math.random())/S-0.5 });
      }
    }catch(e){}
    if (!out.length) for (let i=0;i<n;i++){ const a = Math.random()*6.283, r = 0.2+Math.random()*0.2; out.push({ x:Math.cos(a)*r, y:Math.sin(a)*r }); }
    return out;
  }
  const N = 480, tg = sampleTargets(N), parts = [];
  for (let i=0;i<N;i++){
    const a = Math.random()*6.283, r = 0.6+Math.random()*0.5;
    parts.push({ sx:Math.cos(a)*r, sy:Math.sin(a)*r*0.85, tx:tg[i%tg.length].x, ty:tg[i%tg.length].y,
      d:Math.random()*0.3, tw:Math.random()*6.283, k:0.7+Math.random()*0.8 });
  }

  const clamp01 = v => Math.max(0, Math.min(1, v));
  const easeOutCubic = x => 1-Math.pow(1-x,3);
  const easeInOut = x => x<0.5 ? 2*x*x : 1-Math.pow(-2*x+2,2)/2;
  const easeOutExpo = x => x>=1 ? 1 : 1-Math.pow(2,-10*x);

  __orbActive = true;
  const startT = performance.now();

  function frame(t){
    if (!__orbActive) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    if (w<2 || h<2){ requestAnimationFrame(frame); return; }
    ctx.setTransform(DPR,0,0,DPR,0,0);
    ctx.clearRect(0,0,w,h);

    const el = t - startT;
    const cx = w/2, cy = h/2;
    const unit = (Math.min(w,h)/1.9) * (1 + __introWarp*0.12);
    const logoPx = unit * FIT;
    const reveal = easeInOut(clamp01((el-650)/600));
    const grow = easeOutCubic(clamp01((el-650)/1000));

    // bayangan lantai lembut di bawah logo
    if (reveal > 0){
      ctx.save();
      ctx.translate(cx, cy + logoPx*0.56); ctx.scale(1, 0.15);
      const gg = ctx.createRadialGradient(0,0,0,0,0,logoPx*0.6);
      gg.addColorStop(0,'rgba(255,255,255,'+(0.24*reveal).toFixed(3)+')'); gg.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(0,0,logoPx*0.6,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    // partikel yang berkumpul membentuk logo
    ctx.globalCompositeOperation = 'lighter';
    for (let i=0;i<parts.length;i++){
      const p = parts[i];
      const e = easeOutCubic(clamp01((el - p.d*1000)/1000));
      const sw = (1-e)*1.4, cs = Math.cos(sw), sn = Math.sin(sw);
      const bx = p.sx*(1-e) + p.tx*e, by = p.sy*(1-e) + p.ty*e;
      const x = bx*cs - by*sn, y = bx*sn + by*cs;
      const al = (0.15+0.85*e) * (1 - reveal*0.85) * (0.7+0.3*Math.sin(el*0.004+p.tw));
      if (al < 0.01) continue;
      const s = (2.2 + 2.6*p.k) * (0.8+0.4*e);
      ctx.globalAlpha = clamp01(al);
      ctx.drawImage(spr, cx + x*unit - s/2, cy + y*unit - s/2, s, s);
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';

    // logo 3D: tumpukan lapisan ekstrusi + permukaan depan berkilau
    if (logoPath && reveal > 0.001){
      if (lay.width !== canvas.width || lay.height !== canvas.height){ lay.width = canvas.width; lay.height = canvas.height; }
      lx.setTransform(1,0,0,1,0,0); lx.clearRect(0,0,lay.width,lay.height);

      const settle = easeOutExpo(clamp01((el-500)/1500));
      const sway = clamp01((el-1400)/600);
      const ry = (-1.05*(1-settle) + 0.26*settle) + 0.13*Math.sin(el*0.0018)*sway + __introWarp*0.5;
      const rx = -0.14 + 0.05*Math.sin(el*0.0014+1)*sway;
      const cY = Math.cos(ry), sY = Math.sin(ry), cX = Math.cos(rx), sX = Math.sin(rx);

      const px = logoPx * (0.9 + 0.1*reveal);
      const k0 = px / Math.max(LW,LH);
      const nL = 30, T = 0.13*px*grow, f = 3.2*px;

      for (let k=0;k<nL;k++){
        const z = (k/(nL-1) - 0.5) * T;
        const s = f / (f - z*cY*cX);
        const a = cY*s*k0, b = sY*sX*s*k0, d = cX*s*k0;
        const e = cx + z*sY*s, ff = cy - z*cY*sX*s;
        lx.setTransform(a*DPR, b*DPR, 0, d*DPR, (e - a*LW/2)*DPR, (ff - b*LW/2 - d*LH/2)*DPR);

        if (k === 0){
          lx.shadowColor = 'rgba(255,255,255,0.55)'; lx.shadowBlur = 30*DPR;
          lx.fillStyle = 'rgb(40,40,48)'; lx.fill(logoPath, 'evenodd');
          lx.shadowBlur = 0; lx.shadowColor = 'transparent';
        } else if (k < nL-1){
          const tt = k/(nL-1), lum = Math.round(52 + 150*Math.pow(tt,1.6));
          lx.fillStyle = 'rgb('+lum+','+lum+','+(lum+8)+')'; lx.fill(logoPath, 'evenodd');
        } else {
          const g1 = lx.createLinearGradient(0,0,LW,LH);
          g1.addColorStop(0,'#f6f7fa'); g1.addColorStop(0.5,'#dfe2ea'); g1.addColorStop(1,'#a9aebb');
          lx.fillStyle = g1; lx.fill(logoPath, 'evenodd');
          // kilau yang menyapu permukaan
          const sp = ((el*0.00042) % 1.7) - 0.35;
          lx.save(); lx.clip(logoPath, 'evenodd');
          const g2 = lx.createLinearGradient(sp*LW - 0.22*LW, 0, sp*LW + 0.22*LW, LH*0.55);
          g2.addColorStop(0,'rgba(255,255,255,0)'); g2.addColorStop(0.5,'rgba(255,255,255,'+(0.95*reveal).toFixed(3)+')'); g2.addColorStop(1,'rgba(255,255,255,0)');
          lx.fillStyle = g2; lx.fillRect(0,0,LW,LH);
          lx.restore();
          lx.strokeStyle = 'rgba(255,255,255,0.9)'; lx.lineWidth = 6; lx.lineJoin = 'round'; lx.stroke(logoPath);
        }
      }
      ctx.save();
      ctx.setTransform(1,0,0,1,0,0);
      ctx.globalAlpha = reveal;
      ctx.drawImage(lay, 0, 0);
      ctx.restore();
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
  'Buatkan Materi Untuk TKA SMK',
  'Cara Menjadi Presiden 2 Periode',
  'Menamatkan Rumah Hantu tanpa Ketakutan',
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
      <svg class="empty-logo" viewBox="0 0 1000 836" aria-hidden="true"><use href="#brainLogo"/></svg>
      <div class="empty-title">Ada Ide?.</div>
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
  if (customInstr.enabled && customInstr.text) sysPrompt += '\n\nInstruksi kustom dari pengguna: ' + customInstr.text;
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

/* ===== Sidebar fitur, tema terang/gelap, modal ===== */
let customInstr = { enabled:false, text:'' };
function svgi(p){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'; }
const SI = {
  search: svgi('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
  book: svgi('<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z"/>'),
  image: svgi('<rect x="3.5" y="4" width="17" height="16" rx="2.5"/><circle cx="9" cy="9.5" r="1.6"/><path d="M4 17l5-4.5 4 3.5 3-2.5 4.5 4"/>'),
  share: svgi('<circle cx="6" cy="12" r="2.4"/><circle cx="17.5" cy="6" r="2.4"/><circle cx="17.5" cy="18" r="2.4"/><path d="M8.2 10.9l7.2-3.7M8.2 13.1l7.2 3.7"/>'),
  sliders: svgi('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>'),
  chart: svgi('<path d="M5 20V11M12 20V4M19 20v-6"/>'),
  moon: svgi('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
  sun: svgi('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/>'),
  headset: svgi('<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4.5" height="6" rx="2"/><rect x="16.5" y="14" width="4.5" height="6" rx="2"/>'),
  chevL: svgi('<path d="M15 6l-6 6 6 6"/>'),
  copy: svgi('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>'),
  download: svgi('<path d="M12 4v11M7.5 11l4.5 4.5 4.5-4.5M5 20h14"/>'),
  printer: svgi('<path d="M7 9V4h10v5M7 17H5a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-2"/><rect x="7" y="14" width="10" height="6" rx="1"/>'),
  code: svgi('<path d="M8 8l-4 4 4 4M16 8l4 4-4 4"/>'),
  trash: svgi('<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13"/>'),
  chat: svgi('<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12z"/>'),
  plus: svgi('<path d="M12 5v14M5 12h14"/>')
};
const PROMPTS = [
  {c:'Menulis',t:'Email profesional',p:'Tulis email profesional yang sopan dan ringkas tentang [topik] untuk [penerima]. Nada: [formal/santai]. Sertakan subjek yang menarik.'},
  {c:'Menulis',t:'Perbaiki tulisan',p:'Perbaiki tata bahasa, ejaan, dan kejelasan teks berikut tanpa mengubah maknanya, lalu jelaskan perubahan pentingnya:\n\n[tempel teks]'},
  {c:'Menulis',t:'Ringkas teks',p:'Ringkas teks berikut menjadi 5 poin utama dan satu kalimat kesimpulan:\n\n[tempel teks]'},
  {c:'Menulis',t:'Caption media sosial',p:'Buat 3 variasi caption untuk [platform] tentang [topik]. Sertakan hook kuat, ajakan bertindak, dan 5 hashtag relevan.'},
  {c:'Coding',t:'Review kode',p:'Review kode berikut sebagai senior engineer. Cari bug, masalah keamanan, dan peluang perbaikan performa, lalu beri versi yang diperbaiki:\n\n[tempel kode]'},
  {c:'Coding',t:'Jelaskan kode',p:'Jelaskan kode berikut baris demi baris dengan bahasa sederhana, lalu ringkas fungsinya:\n\n[tempel kode]'},
  {c:'Coding',t:'Buat fungsi',p:'Buatkan fungsi [bahasa] yang [tujuan]. Sertakan penanganan error, contoh pemakaian, dan unit test sederhana.'},
  {c:'Coding',t:'Debug error',p:'Saya mendapat error berikut. Jelaskan penyebabnya dan langkah memperbaikinya:\n\n[tempel error dan kode terkait]'},
  {c:'Belajar',t:'Jelaskan sederhana',p:'Jelaskan [konsep] seolah saya berumur 12 tahun, dengan analogi sehari-hari dan satu contoh nyata.'},
  {c:'Belajar',t:'Rencana belajar',p:'Buat rencana belajar [topik] selama [jumlah] minggu untuk pemula, dengan target mingguan, sumber, dan latihan.'},
  {c:'Belajar',t:'Kuis latihan',p:'Buat 10 soal pilihan ganda tentang [topik] tingkat [mudah/sedang/sulit] beserta kunci jawaban dan pembahasan singkat.'},
  {c:'Bisnis',t:'Analisis SWOT',p:'Buat analisis SWOT untuk [bisnis/ide] di pasar [lokasi], lalu beri 3 rekomendasi strategi prioritas.'},
  {c:'Bisnis',t:'Kalender konten',p:'Susun kalender konten 30 hari untuk [brand] di [platform], dengan tema mingguan dan ide judul harian.'},
  {c:'Bisnis',t:'Balas keluhan',p:'Tulis balasan empatik dan solutif untuk keluhan pelanggan berikut, menjaga citra brand:\n\n[tempel keluhan]'},
  {c:'Kreatif',t:'Brainstorm ide',p:'Berikan 15 ide kreatif dan tidak biasa untuk [tujuan], kelompokkan berdasarkan tingkat kesulitan.'},
  {c:'Kreatif',t:'Cerita pendek',p:'Tulis cerita pendek bergenre [genre] sekitar 400 kata dengan tokoh [tokoh] dan twist di akhir.'},
  {c:'Kreatif',t:'Terjemah natural',p:'Terjemahkan teks berikut ke [bahasa] dengan gaya natural seperti penutur asli, bukan kata per kata:\n\n[tempel teks]'}
];

function bmEl(tag, cls, html){ const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function bmCount(el, to){
  const t0 = performance.now();
  (function f(t){ const p = Math.min(1, (t - t0)/800), e = 1 - Math.pow(1-p, 3); el.textContent = Math.round(to*e).toLocaleString('id-ID'); if (p < 1) requestAnimationFrame(f); })(t0);
}
function bmDownload(name, text, type){
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type:type }));
  a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=> URL.revokeObjectURL(a.href), 500);
}
async function bmCopy(text){
  try{ await navigator.clipboard.writeText(text); return true; }
  catch(e){ try{ const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); const ok = document.execCommand('copy'); t.remove(); return ok; }catch(e2){ return false; } }
}
function bmMarkdown(s){
  let md = '# ' + (s.title || 'Percakapan Brain') + '\n\n';
  (s.messages || []).forEach(m=>{
    md += '**' + (m.role === 'user' ? 'Kamu' : 'Brain') + ':**\n\n' + (m.content || '');
    if (m.attachments && m.attachments.length) md += '\n\n_Lampiran: ' + m.attachments.map(a=>a.name).join(', ') + '_';
    md += '\n\n---\n\n';
  });
  return md;
}
async function bmAllSessions(){
  const out = [];
  for (const it of (state.index || [])){
    const s = (state.sessions && state.sessions[it.id]) || await storeGet('session:' + it.id);
    if (s) out.push(s);
  }
  return out;
}

/* ---- kerangka modal ---- */
let bmCur = null;
function bmOpen(o){
  bmClose(true);
  const ov = bmEl('div', 'bm-overlay' + (o.pal ? ' pal' : '')), card = bmEl('div', 'bm-card ' + (o.cls || ''));
  if (!o.noHead){
    const head = bmEl('div', 'bm-head'), tw = bmEl('div');
    const t = bmEl('div', 'bm-title'); t.textContent = o.title; tw.appendChild(t);
    if (o.sub){ const sb = bmEl('div', 'bm-sub'); sb.textContent = o.sub; tw.appendChild(sb); }
    const x = bmEl('button', 'bm-x', ICON.close); x.type = 'button'; x.setAttribute('aria-label', 'Tutup');
    x.addEventListener('click', ()=> bmClose());
    head.appendChild(tw); head.appendChild(x); card.appendChild(head);
  }
  const body = bmEl('div', o.noHead ? '' : 'bm-body'); card.appendChild(body); ov.appendChild(card);
  ov.addEventListener('mousedown', e=>{ if (e.target === ov) bmClose(); });
  const onKey = e=>{ if (e.key === 'Escape') bmClose(); };
  document.addEventListener('keydown', onKey);
  document.body.appendChild(ov); requestAnimationFrame(()=> ov.classList.add('show'));
  bmCur = { ov:ov, onKey:onKey };
  sbSetActive(o.nav || null);
  if (state.drawerOpen && typeof closeDrawer === 'function') closeDrawer();
  o.body(body);
}
function bmClose(instant){
  if (!bmCur) return;
  const c = bmCur; bmCur = null;
  document.removeEventListener('keydown', c.onKey); sbSetActive(null);
  if (instant){ c.ov.remove(); return; }
  c.ov.classList.remove('show'); setTimeout(()=> c.ov.remove(), 320);
}
function sbSetActive(id){
  document.querySelectorAll('#featureNav .nav-item').forEach(b=> b.classList.toggle('active', !!id && b.dataset.nav === id));
}

/* ---- tema ---- */
function currentTheme(){ return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
function applyTheme(next){
  document.documentElement.setAttribute('data-theme', next);
  try{ localStorage.setItem('brain:theme', next); }catch(e){}
  const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', next === 'light' ? '#FBFAF7' : '#030303');
  syncThemeUI(true);
}
function setTheme(next, srcEl){
  if (next === currentTheme()) return;
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (document.startViewTransition && !reduced){
    const r = srcEl ? srcEl.getBoundingClientRect() : null;
    const x = r ? r.left + r.width/2 : innerWidth/2, y = r ? r.top + r.height/2 : innerHeight/2;
    const rad = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(()=> applyTheme(next));
    vt.ready.then(()=> document.documentElement.animate(
      { clipPath:['circle(0px at '+x+'px '+y+'px)', 'circle('+rad+'px at '+x+'px '+y+'px)'] },
      { duration:700, easing:'cubic-bezier(0.16,1,0.3,1)', pseudoElement:'::view-transition-new(root)' })).catch(()=>{});
  } else {
    document.documentElement.classList.add('theme-fade');
    applyTheme(next);
    setTimeout(()=> document.documentElement.classList.remove('theme-fade'), 450);
  }
}
function syncThemeUI(animate){
  const light = currentTheme() === 'light';
  const ico = document.querySelector('#sbTheme .nav-ico'), lab = document.querySelector('#sbTheme .nav-label');
  if (ico){ ico.innerHTML = light ? SI.sun : SI.moon; if (animate){ ico.classList.remove('swap'); void ico.offsetWidth; ico.classList.add('swap'); } }
  if (lab) lab.textContent = light ? 'Mode terang' : 'Mode gelap';
  document.querySelectorAll('.seg2[data-seg="theme"] button').forEach(b=> b.classList.toggle('on', b.dataset.v === currentTheme()));
}

/* ---- fitur: pustaka prompt ---- */
function insertPrompt(text){
  const ta = document.getElementById('composerInput'); if (!ta) return;
  ta.value = ta.value.trim() ? ta.value.replace(/\s+$/, '') + '\n\n' + text : text;
  ta.dispatchEvent(new Event('input')); ta.focus();
  const st = ta.value.lastIndexOf('['), en = ta.value.indexOf(']', st);
  if (st >= 0 && en > st) ta.setSelectionRange(st, en + 1);
}
async function openLibrary(){
  let custom = (await storeGet('prompts')) || [];
  bmOpen({ title:'Pustaka prompt', sub:'Pilih templat, isi bagian [dalam kurung], lalu kirim.', nav:'library', body(body){
    const cats = ['Semua','Menulis','Coding','Belajar','Bisnis','Kreatif','Saya'];
    let cur = 'Semua';
    const tabs = bmEl('div', 'bm-tabs'), grid = bmEl('div', 'bm-grid'), form = bmEl('div', 'bm-form');
    form.innerHTML = '<input class="bm-input" id="plTitle" placeholder="Judul prompt" maxlength="60"><textarea class="bm-textarea" id="plText" placeholder="Isi prompt kamu..." maxlength="2000"></textarea>';
    const save = bmEl('button', 'bm-btn', 'Simpan prompt'); save.type = 'button'; form.appendChild(save);
    function render(){
      tabs.innerHTML = ''; grid.innerHTML = '';
      cats.forEach(c=>{ const b = bmEl('button', 'bm-tab' + (c === cur ? ' on' : '')); b.type = 'button'; b.textContent = c; b.addEventListener('click', ()=>{ cur = c; render(); }); tabs.appendChild(b); });
      form.style.display = cur === 'Saya' ? 'flex' : 'none';
      const list = cur === 'Saya' ? custom.map((x,i)=>({ c:'Saya', t:x.t, p:x.p, idx:i })) : PROMPTS.filter(x=> cur === 'Semua' || x.c === cur);
      if (!list.length){ grid.appendChild(bmEl('div', 'bm-empty', 'Belum ada prompt. Simpan prompt favoritmu di atas.')); grid.style.display = 'block'; return; }
      grid.style.display = 'grid';
      list.forEach((x,i)=>{
        const card = bmEl('div', 'pcard'); card.style.setProperty('--i', i); card.setAttribute('role', 'button'); card.tabIndex = 0;
        const cat = bmEl('div', 'pcard-cat'); cat.textContent = x.c; const t = bmEl('div', 'pcard-t'); t.textContent = x.t; const pp = bmEl('div', 'pcard-p'); pp.textContent = x.p;
        card.appendChild(cat); card.appendChild(t); card.appendChild(pp);
        const use = ()=>{ insertPrompt(x.p); bmClose(); };
        card.addEventListener('click', use); card.addEventListener('keydown', e=>{ if (e.key === 'Enter') use(); });
        if (x.idx !== undefined){
          const d = bmEl('button', 'pcard-del', SI.trash); d.type = 'button'; d.setAttribute('aria-label', 'Hapus prompt');
          d.addEventListener('click', async e=>{ e.stopPropagation(); custom.splice(x.idx, 1); await storeSet('prompts', custom); render(); });
          card.appendChild(d);
        }
        grid.appendChild(card);
      });
    }
    save.addEventListener('click', async ()=>{
      const t = form.querySelector('#plTitle').value.trim(), p = form.querySelector('#plText').value.trim();
      if (!t || !p){ showToast('Isi judul dan prompt dulu'); return; }
      custom.unshift({ t:t, p:p }); await storeSet('prompts', custom);
      form.querySelector('#plTitle').value = ''; form.querySelector('#plText').value = ''; showToast('Prompt tersimpan'); render();
    });
    body.appendChild(tabs); body.appendChild(form); body.appendChild(grid); render();
  }});
}

/* ---- fitur: galeri ---- */
async function openGallery(){
  bmOpen({ title:'Galeri gambar', sub:'Semua gambar yang pernah kamu lampirkan di obrolan.', nav:'gallery', body(body){
    body.appendChild(bmEl('div', 'bm-empty', 'Memuat...'));
    bmAllSessions().then(list=>{
      const imgs = [];
      list.forEach(s=> (s.messages || []).forEach(m=> (m.attachments || []).forEach(a=>{ if (a.kind === 'image' && a.dataUrl) imgs.push({ src:a.dataUrl, name:a.name, chat:s.title || 'Obrolan' }); })));
      body.innerHTML = '';
      if (!imgs.length){ body.appendChild(bmEl('div', 'bm-empty', 'Belum ada gambar. Lampirkan gambar lewat tombol klip di kolom chat.')); return; }
      const g = bmEl('div', 'gal-grid');
      imgs.forEach((im,i)=>{
        const t = bmEl('div', 'gal-tile'); t.style.setProperty('--i', i);
        const img = document.createElement('img'); img.src = im.src; img.alt = im.name; img.loading = 'lazy';
        const cap = bmEl('div', 'gal-cap'); cap.textContent = im.chat;
        t.appendChild(img); t.appendChild(cap); t.addEventListener('click', ()=> openLightbox(im.src)); g.appendChild(t);
      });
      body.appendChild(g);
    });
  }});
}

/* ---- fitur: bagikan & ekspor ---- */
function openShare(){
  const s = state.sessions && state.sessions[state.currentSessionId];
  bmOpen({ title:'Bagikan & ekspor', sub:'Simpan atau bagikan percakapan yang sedang dibuka.', nav:'share', cls:'narrow', body(body){
    if (!s || !s.messages || !s.messages.length){ body.appendChild(bmEl('div', 'bm-empty', 'Belum ada percakapan untuk dibagikan.')); return; }
    const g = bmEl('div', 'opt-grid');
    const base = 'brain-' + new Date().toISOString().slice(0,10);
    [
      { i:SI.copy, t:'Salin Markdown', d:'Ke clipboard', run: async ()=>{ showToast(await bmCopy(bmMarkdown(s)) ? 'Tersalin ke clipboard' : 'Gagal menyalin'); } },
      { i:SI.download, t:'Unduh .md', d:'Berkas Markdown', run: ()=> bmDownload(base + '.md', bmMarkdown(s), 'text/markdown') },
      { i:SI.code, t:'Unduh .json', d:'Data lengkap', run: ()=> bmDownload(base + '.json', JSON.stringify(s, null, 2), 'application/json') },
      { i:SI.printer, t:'Cetak / PDF', d:'Simpan sebagai PDF', run: ()=>{
          const w = window.open('', '_blank'); if (!w){ showToast('Izinkan pop-up untuk mencetak'); return; }
          const body2 = (s.messages || []).map(m=> '<h4>' + (m.role === 'user' ? 'Kamu' : 'Brain') + '</h4><div>' + escapeHtml(m.content || '') + '</div>').join('');
          w.document.write('<!doctype html><title>' + escapeHtml(s.title || 'Brain') + '</title><style>body{font:14px/1.6 system-ui;max-width:720px;margin:32px auto;padding:0 20px}h4{margin:22px 0 4px}div{white-space:pre-wrap}</style><h2>' + escapeHtml(s.title || 'Percakapan Brain') + '</h2>' + body2);
          w.document.close(); w.focus(); setTimeout(()=> w.print(), 300);
        } }
    ].forEach(o=>{
      const b = bmEl('button', 'opt', o.i + '<b>' + o.t + '</b><span>' + o.d + '</span>'); b.type = 'button';
      b.addEventListener('click', o.run); g.appendChild(b);
    });
    body.appendChild(g);
  }});
}

/* ---- fitur: instruksi kustom ---- */
function openInstr(){
  bmOpen({ title:'Instruksi kustom', sub:'Dikirim otomatis di setiap obrolan agar Brain menjawab sesuai gayamu.', nav:'instr', cls:'narrow', body(body){
    const row = bmEl('div', 'set-row', '<div><b>Aktifkan instruksi</b><small>Berlaku untuk semua model Brain</small></div>');
    const sw = bmEl('button', 'switch'); sw.type = 'button'; sw.setAttribute('role', 'switch'); sw.setAttribute('aria-checked', String(customInstr.enabled)); row.appendChild(sw);
    sw.addEventListener('click', ()=> sw.setAttribute('aria-checked', String(sw.getAttribute('aria-checked') !== 'true')));
    const ta = bmEl('textarea', 'bm-textarea'); ta.maxLength = 1200; ta.value = customInstr.text;
    ta.placeholder = 'Contoh: Panggil aku Dimas. Jawab singkat dan langsung. Untuk kode, selalu beri komentar dalam bahasa Indonesia.';
    const cnt = bmEl('small'); cnt.style.cssText = 'color:var(--text-mute);font-size:12px;align-self:flex-end'; const upd = ()=>{ cnt.textContent = ta.value.length + ' / 1200'; }; ta.addEventListener('input', upd); upd();
    const save = bmEl('button', 'bm-btn', 'Simpan'); save.type = 'button';
    save.addEventListener('click', async ()=>{
      customInstr = { enabled: sw.getAttribute('aria-checked') === 'true', text: ta.value.trim().slice(0, 1200) };
      await storeSet('custom-instructions', customInstr); showToast('Instruksi disimpan'); bmClose();
    });
    const wrap = bmEl('div'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin-top:10px';
    wrap.appendChild(ta); wrap.appendChild(cnt); wrap.appendChild(save);
    body.appendChild(row); body.appendChild(wrap);
  }});
}

/* ---- fitur: statistik ---- */
function openStats(){
  bmOpen({ title:'Statistik', sub:'Ringkasan pemakaianmu di perangkat ini.', nav:'stats', body(body){
    body.appendChild(bmEl('div', 'bm-empty', 'Menghitung...'));
    bmAllSessions().then(list=>{
      let u = 0, a = 0, tok = 0, att = 0; const per = {};
      list.forEach(s=>{
        tok += s.tokens || 0;
        (s.messages || []).forEach(m=>{
          if (m.role === 'user'){ u++; att += (m.attachments || []).length; }
          else { a++; const k = ENGINES[m.engine] ? ENGINES[m.engine].label : 'Lainnya'; per[k] = (per[k] || 0) + 1; }
        });
      });
      body.innerHTML = '';
      const grid = bmEl('div', 'stat-grid');
      [['Obrolan', list.length], ['Pesan kamu', u], ['Balasan Brain', a], ['Token terpakai', tok], ['Lampiran', att]].forEach((x,i)=>{
        const c = bmEl('div', 'stat', '<b>0</b><span>' + x[0] + '</span>'); c.style.setProperty('--i', i); grid.appendChild(c); bmCount(c.querySelector('b'), x[1]);
      });
      body.appendChild(grid);
      const keys = Object.keys(per).sort((x,y)=> per[y] - per[x]);
      if (keys.length){
        const h = bmEl('div', 'bm-sub'); h.textContent = 'Balasan per model'; h.style.marginBottom = '8px'; body.appendChild(h);
        keys.forEach(k=>{
          const r = bmEl('div', 'bar-row', '<span></span><div class="bar-track"><div class="bar-fill"></div></div><span style="width:34px;text-align:right"></span>');
          r.children[0].textContent = k; r.children[2].textContent = per[k]; body.appendChild(r);
          const f = r.querySelector('.bar-fill'); requestAnimationFrame(()=> requestAnimationFrame(()=>{ f.style.width = Math.max(4, Math.round(per[k] / per[keys[0]] * 100)) + '%'; }));
        });
      } else body.appendChild(bmEl('div', 'bm-empty', 'Mulai ngobrol dulu, statistik akan muncul di sini.'));
    });
  }});
}

/* ---- bantuan, pengaturan, akun ---- */
function openHelp(){
  bmOpen({ title:'Bantuan & pintasan', sub:'Cara tercepat memakai Brain.', nav:'help', cls:'narrow', body(body){
    [['Kirim pesan','Enter'],['Baris baru','Shift + Enter'],['Cari cepat','Ctrl / ⌘ + K'],['Obrolan baru','Alt + N'],['Fokus kolom ketik','/'],['Tutup jendela','Esc']]
      .forEach(r=>{ const d = bmEl('div', 'kbd-row', '<span>' + r[0] + '</span><kbd>' + r[1] + '</kbd>'); body.appendChild(d); });
    body.appendChild(bmEl('ul', 'tip-list', '<li>Seret file atau tempel gambar (Ctrl+V) langsung ke chat.</li><li>Aktifkan <b>Deep Thinking</b> untuk pertanyaan yang butuh penalaran bertahap.</li><li>Pilih <b>Brain Dev</b> untuk kode, <b>Orbit</b> untuk riset, <b>Pro</b> untuk analisis mendalam.</li><li>Simpan prompt andalanmu di <b>Pustaka prompt</b>.</li>'));
  }});
}
function openSettings(){
  bmOpen({ title:'Pengaturan', sub:'Atur tampilan dan perilaku Brain.', nav:'settings', cls:'narrow', body(body){
    const th = bmEl('div', 'set-row', '<div><b>Tema</b><small>Terang atau gelap</small></div>');
    const seg = bmEl('div', 'seg2'); seg.dataset.seg = 'theme';
    [['dark','Gelap',SI.moon],['light','Terang',SI.sun]].forEach(x=>{
      const b = bmEl('button', '', x[2] + x[1]); b.type = 'button'; b.dataset.v = x[0]; b.addEventListener('click', ()=> setTheme(x[0], b)); seg.appendChild(b);
    });
    th.appendChild(seg); body.appendChild(th);
    function swRow(title, desc, getOn, setOn){
      const r = bmEl('div', 'set-row', '<div><b>' + title + '</b><small>' + desc + '</small></div>');
      const sw = bmEl('button', 'switch'); sw.type = 'button'; sw.setAttribute('role', 'switch'); sw.setAttribute('aria-checked', String(getOn()));
      sw.addEventListener('click', ()=>{ setOn(sw.getAttribute('aria-checked') !== 'true'); sw.setAttribute('aria-checked', String(getOn())); });
      r.appendChild(sw); body.appendChild(r);
    }
    const dt = document.getElementById('deepThinkToggle');
    swRow('Deep Thinking', 'Brain menalar langkah demi langkah', ()=> dt && dt.getAttribute('aria-checked') === 'true', ()=>{ if (dt) dt.click(); });
    swRow('Aura galaksi', 'Gradien di chat kosong', ()=> !document.documentElement.classList.contains('no-aura'), on=>{
      document.documentElement.classList.toggle('no-aura', !on); try{ localStorage.setItem('brain:aura', on ? '1' : '0'); }catch(e){}
    });
    const user = window.__BRAIN_USER;
    const acc = bmEl('div', 'set-row', '<div><b>' + (user ? escapeHtml(user.name || user.email) : 'Mode tamu') + '</b><small>' + (user ? escapeHtml(user.email || '') : 'Masuk agar riwayat tersimpan di akunmu') + '</small></div>');
    const ab = bmEl('button', 'bm-btn ghost', user ? 'Keluar' : 'Masuk'); ab.type = 'button';
    ab.addEventListener('click', ()=>{ user ? logoutAccount() : goToLogin(); }); acc.appendChild(ab); body.appendChild(acc);
    const del = bmEl('div', 'set-row', '<div><b>Hapus semua riwayat</b><small>Tidak bisa dibatalkan</small></div>');
    const db = bmEl('button', 'bm-btn danger', 'Hapus'); db.type = 'button';
    db.addEventListener('click', async ()=>{ bmClose(true); await clearAllHistory(); }); del.appendChild(db); body.appendChild(del);
    syncThemeUI();
  }});
}

/* ---- palet perintah (Ctrl/Cmd + K) ---- */
function openPalette(){
  bmOpen({ noHead:true, pal:true, cls:'palette', nav:'search', body(body){
    const inp = bmEl('input', 'pal-input'); inp.placeholder = 'Cari obrolan atau perintah...'; inp.setAttribute('aria-label', 'Cari');
    const list = bmEl('div', 'pal-list'); body.appendChild(inp); body.appendChild(list);
    const acts = [
      { t:'Obrolan baru', i:SI.plus, k:'Aksi', run:()=> newChat() },
      { t:'Pustaka prompt', i:SI.book, k:'Fitur', run:()=> openLibrary() },
      { t:'Galeri gambar', i:SI.image, k:'Fitur', run:()=> openGallery() },
      { t:'Bagikan & ekspor', i:SI.share, k:'Fitur', run:()=> openShare() },
      { t:'Instruksi kustom', i:SI.sliders, k:'Fitur', run:()=> openInstr() },
      { t:'Statistik', i:SI.chart, k:'Fitur', run:()=> openStats() },
      { t:currentTheme() === 'light' ? 'Beralih ke mode gelap' : 'Beralih ke mode terang', i:currentTheme() === 'light' ? SI.moon : SI.sun, k:'Tema', run:()=> setTheme(currentTheme() === 'light' ? 'dark' : 'light', null) },
      { t:'Pengaturan', i:ICON.gear, k:'Fitur', run:()=> openSettings() },
      { t:'Bantuan & pintasan', i:SI.headset, k:'Fitur', run:()=> openHelp() }
    ];
    const chats = (state.index || []).slice().sort((a,b)=> (b.updatedAt||0) - (a.updatedAt||0)).map(c=>({ t:c.title || 'Obrolan', i:SI.chat, k:'Obrolan', run:()=> switchSession(c.id) }));
    const all = acts.concat(chats);
    let sel = 0, shown = [];
    function render(){
      const q = inp.value.trim().toLowerCase();
      shown = all.filter(x=> !q || x.t.toLowerCase().indexOf(q) !== -1).slice(0, 40);
      if (sel >= shown.length) sel = Math.max(0, shown.length - 1);
      list.innerHTML = '';
      if (!shown.length){ list.appendChild(bmEl('div', 'bm-empty', 'Tidak ada hasil.')); return; }
      shown.forEach((x,i)=>{
        const b = bmEl('button', 'pal-item' + (i === sel ? ' sel' : ''), x.i + '<span></span><small>' + x.k + '</small>'); b.type = 'button';
        b.children[1].textContent = x.t;
        b.addEventListener('mousemove', ()=>{ if (sel !== i){ sel = i; list.querySelectorAll('.pal-item').forEach((n,j)=> n.classList.toggle('sel', j === i)); } });
        b.addEventListener('click', ()=> run(x)); list.appendChild(b);
      });
    }
    function run(x){ bmClose(true); x.run(); }
    inp.addEventListener('input', ()=>{ sel = 0; render(); });
    inp.addEventListener('keydown', e=>{
      if (e.key === 'ArrowDown'){ e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); render(); const n = list.querySelector('.sel'); if (n) n.scrollIntoView({ block:'nearest' }); }
      else if (e.key === 'ArrowUp'){ e.preventDefault(); sel = Math.max(0, sel - 1); render(); const n = list.querySelector('.sel'); if (n) n.scrollIntoView({ block:'nearest' }); }
      else if (e.key === 'Enter' && shown[sel]){ e.preventDefault(); run(shown[sel]); }
    });
    render(); setTimeout(()=> inp.focus(), 60);
  }});
}

/* ---- inisialisasi sidebar ---- */
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('featureNav'), bottom = document.getElementById('sbBottom'), col = document.getElementById('sbCollapse');
  if (!nav || !bottom) return;
  const NAV = [
    { id:'search',  label:'Cari cepat',       icon:'search',  kbd:'Ctrl K', run: openPalette },
    { id:'library', label:'Pustaka prompt',   icon:'book',    run: openLibrary },
    { id:'gallery', label:'Galeri gambar',    icon:'image',   run: openGallery },
    { id:'share',   label:'Bagikan & ekspor', icon:'share',   run: openShare },
    { id:'instr',   label:'Instruksi kustom', icon:'sliders', run: openInstr },
    { id:'stats',   label:'Statistik',        icon:'chart',   run: openStats }
  ];
  function item(id, label, iconSvg, run, extra, kbd){
    const b = bmEl('button', 'nav-item' + (extra || ''), '<span class="nav-ico">' + iconSvg + '</span><span class="nav-label"></span>' + (kbd ? '<span class="nav-kbd">' + kbd + '</span>' : ''));
    b.type = 'button'; b.dataset.nav = id; b.dataset.tip = label; b.querySelector('.nav-label').textContent = label;
    b.addEventListener('click', run); return b;
  }
  NAV.forEach(n=> nav.appendChild(item(n.id, n.label, SI[n.icon], n.run, '', n.kbd)));

  const themeBtn = item('theme', 'Mode gelap', SI.moon, function(){ setTheme(currentTheme() === 'light' ? 'dark' : 'light', themeBtn); });
  themeBtn.id = 'sbTheme'; themeBtn.appendChild(bmEl('span', 'theme-switch')); bottom.appendChild(themeBtn);
  bottom.appendChild(item('help', 'Bantuan', SI.headset, openHelp));
  bottom.appendChild(item('settings', 'Pengaturan', ICON.gear, openSettings));
  const user = window.__BRAIN_USER;
  const ub = bmEl('button', 'nav-item sb-user', '<span class="sb-avatar"></span><span class="sb-user-text"><span class="sb-user-name"></span><span class="sb-user-sub"></span></span>');
  ub.type = 'button'; ub.dataset.tip = user ? (user.name || user.email) : 'Masuk';
  ub.querySelector('.sb-avatar').textContent = ((user && (user.name || user.email)) || 'T').charAt(0).toUpperCase();
  ub.querySelector('.sb-user-name').textContent = user ? (user.name || user.email) : 'Tamu';
  ub.querySelector('.sb-user-sub').textContent = user ? 'Akun tersimpan' : 'Masuk untuk sinkron';
  ub.addEventListener('click', function(){ user ? openSettings() : goToLogin(); });
  bottom.appendChild(ub);
  syncThemeUI();

  if (col){
    col.innerHTML = SI.chevL;
    col.addEventListener('click', function(){
      const on = document.documentElement.classList.toggle('sb-collapsed');
      try{ localStorage.setItem('brain:sb', on ? '1' : '0'); }catch(e){}
    });
  }
  storeGet('custom-instructions').then(function(v){ if (v && typeof v === 'object') customInstr = { enabled:!!v.enabled, text:String(v.text || '') }; });

  /* Ctrl/Cmd+K membuka palet perintah (menggantikan fokus pencarian lama) */
  document.addEventListener('keydown', function(e){
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){
      e.preventDefault(); e.stopImmediatePropagation();
      bmCur && bmCur.ov.classList.contains('pal') ? bmClose() : openPalette();
    }
  }, true);
});
