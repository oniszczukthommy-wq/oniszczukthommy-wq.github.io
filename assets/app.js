/* Yuanhang Zhou · personal portfolio site
   Pure static: boot terminal, view router, card carousels, notes grid. */

const GITHUB = "https://github.com/oniszczukthommy-wq";

/* ---------------- data ---------------- */

const products = [
  {
    tag: "PYTHON / AGENT · SHOT RETRIEVAL",
    title: "Shot Agent · 影视镜头与问片助理",
    desc: "两部 CC BY 3.0 开源电影的 244 个镜头：分面筛选、台词与时间轴对齐、ffmpeg 切片导出与参考板；问片层 6 个工具，配证据白名单与评分反查，90 个离线测试不联网即可跑。",
    note: "90 offline tests · 244 shots · CC BY 3.0",
    link: GITHUB + "/film-shot-agent",
    action: "打开 GitHub 仓库",
    icon: "film",
  },
  {
    tag: "THREE.JS / GAME DEMO",
    title: "夜班档案 · 狐狸警官",
    desc: "第三人称浏览器探案游戏，DeepSeek 生成 schema 校验过的案件：3 / 4 / 6 NPC 三档难度、4 件物证、凶手在场与线索指向关系校验；NPC 只持有自身部分事实，配 v0.8 PRD。",
    note: "Local demo · reference assets cleaned before public release",
    link: GITHUB + "/night-shift-ai-detective",
    action: "打开 GitHub 仓库",
    icon: "game",
  },
  {
    tag: "MUSIC + MV / CREATION STUDIO",
    title: "Osmanthus · 音乐与 MV 工作台",
    desc: "一台本机工作台：想法 → 歌词确认 → 双版本歌曲 → 分轨试听 → MV 分镜画布 → MP4 成片；展示素材统一存 Release 并逐文件 SHA-256 校验，视频生成带人民币预算护栏。",
    note: "26 showcase videos in Releases · ~512 MB media",
    link: GITHUB + "/Osmanthus",
    action: "打开 GitHub 仓库",
    icon: "music",
  },
  {
    tag: "FRONTEND / LANDING PAGE",
    title: "Astronavi · 天文通落地页",
    desc: "单文件电影感落地页：Three.js 视差星空、流星、可交互太阳系、程序化月相与 GSAP 滚动叙事，并为 prefers-reduced-motion 提供降级方案。",
    note: "Live preview available",
    link: GITHUB + "/astronavi-landing",
    ext: "https://hcn4pc1ewda5.doubaoapps.com/app/app_17etd2u5kmk",
    action: "打开 GitHub 仓库",
    icon: "planet",
  },
];

const tools = [
  {
    tag: "DESKTOP / PM WORKSPACE",
    title: "Blue PM 工作台",
    desc: "本机 PM 座舱：七路联网产品拆解 → 需求访谈 → 人工确认 PRD 版本 → 技术方案 → 开发任务看板；AI 对文档的修改先展示 diff，确认后保存新版本。基于开源 agent-blueprint（MIT）二次开发，个人改造清单见 PERSONAL_EXTENSIONS.md。",
    note: "macOS local app · port 8788 · MIT baseline",
    link: GITHUB + "/blue-pm-workbench",
    action: "打开 GitHub 仓库",
    icon: "wrench",
  },
];

const notes = [
  { title: "Jev 爆火背后：AI 模型正在从“什么都能聊”走向“只做一件事”", url: "https://mp.weixin.qq.com/s/QUxastjphzBssuFruJr6sg" },
  { title: "降本不是口号：Haiku 5.5 让「子 Agent 批量跑」第一次算得过来", url: "https://mp.weixin.qq.com/s/ZgMWDtMdYGFYiIBSBTWsIw" },
  { title: "我试了一圈 Personal Agent，发现离“私人助手”还很远", url: "https://mp.weixin.qq.com/s/Sh5ovTCxbSKS5OEx1J-vDw" },
  { title: "GPT-6.1 Sol Ultrafast：OpenAI 第一次为“等待”明码标价", url: "https://mp.weixin.qq.com/s/DuEMzBfzs7_CtYghjG_kMA" },
  { title: "以后用 AI 会越来越便宜？把这半个月串起来看", url: "https://mp.weixin.qq.com/s/fDG-FzectUcqSNrbTZhkSA" },
  { title: "上下文窗口都 100 万了，为什么还要“管”它？", url: "https://mp.weixin.qq.com/s/4PUOSkDSiCv7efrppSAfdQ" },
  { title: "Meta 发新模型：不比聪明了，开始比“记得住你”", url: "https://mp.weixin.qq.com/s/HRU1zZ16ghBhEl00FeZS_Q" },
  { title: "美团把 Agent 评测讲透了：你缺的不是更强的模型", url: "https://mp.weixin.qq.com/s/HqG0J7VP1I0YfnmvGIMklw" },
  { title: "DeepSeek 又掀桌：不涨价、开源、还白送搜索 API", url: "https://mp.weixin.qq.com/s/rZJbuQYhuMimzu5kRQGdTQ" },
  { title: "48 小时内，DeepSeek 和 MiniMax 把“平替”两个字撕碎了", url: "https://mp.weixin.qq.com/s/VuIUx3TnMq3rTwCHrp10Yg" },
];

/* ---------------- icons ---------------- */

const ICONS = {
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
  game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 12h4M8 10v4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/><rect x="2" y="7" width="20" height="10" rx="5"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  planet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="6"/><ellipse cx="12" cy="12" rx="11" ry="3.5"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L4 17l3 3 4.7-4.7a4.5 4.5 0 0 0 6-6l-2.5 2.5-2.5-2.5z"/></svg>',
  link: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>',
};

/* ---------------- render cards ---------------- */

function renderCards(stageId, countId, list) {
  const stage = document.getElementById(stageId);
  document.getElementById(countId).textContent = list.length;
  list.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "work-showcase-card work-tool-card" + (i === 0 ? "" : " is-hidden");
    card.dataset.index = i;
    const linkBlock = item.ext
      ? `<a href="${item.link}" target="_blank" rel="noreferrer">${item.action} →</a><a href="${item.ext}" target="_blank" rel="noreferrer" style="margin-top:10px">在线预览 Live Preview →</a>`
      : `<a href="${item.link}" target="_blank" rel="noreferrer">${item.action} →</a>`;
    card.innerHTML = `
      <div class="work-card-symbol">${ICONS[item.icon] || ICONS.link}</div>
      <div class="work-card-copy">
        <small>${item.tag}</small>
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span class="work-access-note">${item.note}</span>
        ${linkBlock}
      </div>`;
    stage.appendChild(card);
  });
}

renderCards("productStage", "productCount", products);
renderCards("toolStage", "toolCount", tools);

/* ---------------- notes grid ---------------- */

const notesGrid = document.getElementById("notesGrid");
notes.forEach((n, i) => {
  const card = document.createElement("a");
  card.className = "note-card";
  card.href = n.url;
  card.target = "_blank";
  card.rel = "noreferrer";
  card.innerHTML = `
    <div class="note-cover-wrap"><span class="note-index">${String(i + 1).padStart(2, "0")}</span></div>
    <div class="note-card-body">
      <small>WECHAT · AI PRODUCT NOTES</small>
      <h2>${n.title}</h2>
      <span class="note-link">打开原文 ${ICONS.link}</span>
    </div>`;
  notesGrid.appendChild(card);
});

/* ---------------- carousel ---------------- */

const cursor = { product: 0, tool: 0 };
function step(set, dir) {
  const list = set === "product" ? products : tools;
  cursor[set] = (cursor[set] + dir + list.length) % list.length;
  const stageId = set === "product" ? "productStage" : "toolStage";
  document.querySelectorAll("#" + stageId + " .work-showcase-card").forEach((c) => {
    c.classList.toggle("is-hidden", Number(c.dataset.index) !== cursor[set]);
  });
}
document.querySelectorAll(".work-carousel-nav").forEach((btn) => {
  btn.addEventListener("click", () => step(btn.dataset.set, Number(btn.dataset.dir)));
});

/* ---------------- view router ---------------- */

const VIEW_META = {
  about:   { path: "~/yuanhang-os/about",   context: "PRODUCT DECISION SYSTEM" },
  product: { path: "~/yuanhang-os/products", context: "RUNNABLE DEMOS" },
  tool:    { path: "~/yuanhang-os/tools",    context: "PM WORKSPACE" },
  notes:   { path: "~/yuanhang-os/notes",    context: "PUBLIC WRITING" },
  contact: { path: "~/yuanhang-os/contact",  context: "CHANNELS OPEN" },
};

function showView(name) {
  Object.keys(VIEW_META).forEach((v) => {
    document.getElementById("view-" + v).classList.toggle("is-active", v === name);
  });
  document.querySelectorAll("#navBar button, .os-mark").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.nav === name);
  });
  document.getElementById("windowPath").textContent = VIEW_META[name].path;
  document.getElementById("osContext").textContent = VIEW_META[name].context;
}

document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showView(el.dataset.nav);
  });
});

/* ---------------- boot terminal ---------------- */

const bootLines = [
  { cls: "term-out", text: "login: yuanhang" },
  { cls: "term-ok", text: "welcome to yuanhang-os — local-first product workspace" },
  { cls: "term-prompt", text: "$ whoami" },
  { cls: "term-out", text: "yuanhang · ai-product-builder" },
  { cls: "term-prompt", text: "$ cat about.md" },
  { cls: "term-out", text: "music education → teaching practice → local-first AI products & agents" },
  { cls: "term-prompt", text: "$ open yuanhang.os" },
];

const bootBody = document.getElementById("bootBody");
const bootCta = document.getElementById("bootCta");
let booted = false;

function appendLine(cls, text) {
  const div = document.createElement("div");
  div.className = "term-line " + cls;
  div.textContent = text;
  bootBody.appendChild(div);
}

bootLines.forEach((line, i) => {
  setTimeout(() => appendLine(line.cls, line.text), 320 * (i + 1));
});
setTimeout(() => bootCta.classList.add("visible"), 320 * bootLines.length + 240);

function launch() {
  if (booted) return;
  booted = true;
  bootCta.classList.add("hidden");
  const term = document.getElementById("bootTerminal");
  term.classList.add("launching");
  const shell = document.getElementById("siteShell");
  shell.classList.add("is-primed");
  setTimeout(() => {
    shell.classList.add("is-live");
    term.classList.add("gone");
  }, 260);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") launch();
});
document.getElementById("ctaText").addEventListener("click", launch);
