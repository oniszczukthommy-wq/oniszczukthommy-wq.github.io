/* Yuanhang Zhou · static portfolio: terminal, desktop navigation, layered cards. */
const GITHUB = "https://github.com/oniszczukthommy-wq";
const products = [
  { tag: "AI MUSIC · CREATIVE WORKFLOW", title: "Osmanthus", cover: "music", desc: "从一句灵感开始，写词、试听、分轨编辑。\n把 AI 生成变成可以反复修改的音乐创作。\n让创作者始终保留选择与表达。", note: "本机工作台 · 歌曲流程可体验", repo: "ai-music-workbench-showcase", source: "Osmanthus" },
  { tag: "AI GAME · INTERACTIVE STORY", title: "夜班档案 · 狐狸警官", cover: "detective", desc: "走进案发现场，与 AI 角色对话。\n搜集物证，交叉核对不同角色的线索，\n用自己的判断拼出案件真相。", note: "本机原型 · 三档难度", repo: "night-shift-ai-detective-showcase" },
  { tag: "FILM · SHOT RETRIEVAL AGENT", title: "Shot Agent", cover: "shot", desc: "让镜头成为可检索、可追问的创作参考。\n从 244 个开源电影镜头中找画面、找台词，\n让每个回答都能回到具体的镜头证据。", note: "在线演示 · CC BY 3.0 素材", repo: "film-shot-agent", demo: "https://film-shot-agent.onrender.com/" },
  { tag: "MUSIC · INTERACTIVE INSTRUMENT", title: "Guitar Workbench", cover: "guitar", desc: "把浏览器变成随时可以拨响的吉他。\n用键盘、触屏或手势演奏，跟着曲谱练习，\n把一次灵感留下来，成为自己的录音。", note: "交互原型 · 设备能力影响手势体验", repo: "guitar-workbench-showcase" },
];
const toolProjects = [
  { tag: "PRODUCTIVITY · PM WORKSPACE", title: "Blue PM 工作台", icon: "wrench", desc: "从产品研究、需求访谈到 PRD 与任务看板。\n让资料、文档与决策留在同一条工作流里，\nAI 修改先确认，每次迭代都有迹可循。", note: "本机应用 · 自动开发与部署待接入", repo: "blue-pm-workbench-showcase" },
  { tag: "VISUAL · AI WORKFLOW PROTOTYPE", title: "Edge AI Vision Studio", icon: "film", desc: "用画布整理视觉创作中的想法与任务。\n从素材组织、生成队列到结果导出，\n探索一个可恢复、可追踪的视觉工作台。", note: "Mock 原型 · 尚未接入真实生成模型", repo: "edge-ai-vision-studio-showcase" },
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

const ICONS = {
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
  game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 12h4M8 10v4"/><circle cx="15.5" cy="11" r="1"/><circle cx="18" cy="13.5" r="1"/><rect x="2" y="7" width="20" height="10" rx="5"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  planet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="6"/><ellipse cx="12" cy="12" rx="11" ry="3.5"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L4 17l3 3 4.7-4.7a4.5 4.5 0 0 0 6-6l-2.5 2.5-2.5-2.5z"/></svg>',
  link: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>',
};


const noteTopics = ["产品观察", "Agent 成本", "个人助手", "模型体验", "AI 定价", "上下文工程", "长期记忆", "Agent 评测", "开源生态", "模型观察"];
const sets = {
  product: products,
  tool: toolProjects,
  notes: notes.map((item, index) => ({...item, tag: `WRITING · ${noteTopics[index]}`, cover: `note-${index + 1}`, desc: "关于 AI 产品、模型能力与真实使用体验的观察。", note: "微信公众号 · 公开文章"})),
};
const cursor = {product: 0, tool: 0, notes: 0};
const esc = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"})[char]);
const externalLink = (url, text, className = "") => `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${text}</a>`;

function renderCards(set) {
  const stage = document.getElementById(`${set}Stage`);
  sets[set].forEach((item, index) => {
    const article = document.createElement("article");
    article.className = `work-showcase-card${set === "tool" ? " work-tool-card" : ""}${set === "notes" ? " work-note-card" : ""}`;
    article.setAttribute("aria-roledescription", "卡片");
    article.setAttribute("aria-label", `${index + 1} / ${sets[set].length}：${item.title}`);
    article.dataset.index = index;
    const intro = item.url || `${GITHUB}/${item.repo}`;
    const cover = item.cover && `./assets/${set === "notes" ? item.cover : `cover-${item.cover}`}.svg`;
    const heading = cover
      ? externalLink(intro, `<img src="${cover}" alt="${esc(item.title)} · ${set === "notes" ? "文章封面" : "项目概念插画"}" width="600" height="320">`, "card-cover")
      : `<div class="work-card-symbol" aria-hidden="true">${ICONS[item.icon]}</div>`;
    let links = externalLink(intro, `${set === "notes" ? "阅读原文" : "查看项目介绍"} ${ICONS.link}`);
    if (item.demo) links = externalLink(item.demo, `在线体验 ${ICONS.link}`) + links;
    if (item.source) links += externalLink(`${GITHUB}/${item.source}`, `查看源码 ${ICONS.link}`);
    article.innerHTML = `${heading}<div class="work-card-copy"><small>${esc(item.tag)}</small><h2>${esc(item.title)}</h2><p>${esc(item.desc)}</p><span class="work-access-note">${esc(item.note)}</span><div class="work-card-links">${links}</div></div><button class="card-select" aria-label="切换到${esc(item.title)}"></button>`;
    article.querySelector(".card-select").addEventListener("click", () => selectCard(set, index));
    stage.append(article);
  });
  updateCards(set);
}
function updateCards(set) {
  const stage = document.getElementById(`${set}Stage`);
  [...stage.children].forEach((card, index) => {
    const offset = index - cursor[set];
    const distance = Math.abs(offset);
    card.style.setProperty("--offset", offset);
    for (const cls of ["is-current", "is-near", "is-far", "is-offstage"]) card.classList.remove(cls);
    card.classList.add(distance === 0 ? "is-current" : distance === 1 ? "is-near" : distance === 2 ? "is-far" : "is-offstage");
    card.setAttribute("aria-hidden", String(distance > 2));
    for (const part of card.children) part.inert = distance !== 0 && !part.classList.contains("card-select");
    card.querySelector(".card-select").tabIndex = distance > 0 && distance <= 2 ? 0 : -1;
  });
  document.querySelector(`[data-set="${set}"][data-dir="-1"]`).disabled = cursor[set] === 0;
  document.querySelector(`[data-set="${set}"][data-dir="1"]`).disabled = cursor[set] === sets[set].length - 1;
  document.getElementById(`${set}Count`).innerHTML = `<strong>${String(cursor[set] + 1).padStart(2,"0")}</strong> / ${String(sets[set].length).padStart(2,"0")} &nbsp;·&nbsp; ← → <span class="touch-hint"> / 左右滑动</span>`;
}
function selectCard(set, index) {
  const next = Math.max(0, Math.min(sets[set].length - 1, index));
  if (next === cursor[set]) return;
  const active = document.activeElement;
  const shouldFocus = document.getElementById(`${set}Stage`).contains(active);
  cursor[set] = next;
  updateCards(set);
  if (shouldFocus || active?.disabled) document.querySelector(`[data-carousel="${set}"]`).focus({preventScroll:true});
}
Object.keys(sets).forEach(renderCards);
document.querySelectorAll("[data-set][data-dir]").forEach(button => button.addEventListener("click", () => selectCard(button.dataset.set, cursor[button.dataset.set] + Number(button.dataset.dir))));

const paths = {about:"~/portfolio/about", product:"AI 产品", tool:"工具与工作台", notes:"公开文章", contact:"~/portfolio/contact"};
let activeView = "about";
let launched = false;
const shell = document.getElementById("siteShell");
const terminal = document.getElementById("bootTerminal");
shell.inert = true;
function showView(view, writeHash = true) {
  if (!Object.hasOwn(paths, view)) view = "about";
  activeView = view;
  document.querySelectorAll(".workspace-view").forEach(section => {
    const active = section.id === `view-${view}`;
    section.classList.toggle("is-active", active);
    section.inert = !active;
  });
  document.querySelectorAll(".os-sidebar [data-nav]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.nav === view);
    if (button.dataset.nav === view) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.getElementById("osContext").textContent = view.toUpperCase();
  document.getElementById("windowPath").textContent = paths[view];
  if (writeHash && location.hash !== `#${view}`) history.pushState(null, "", `#${view}`);
}
document.querySelectorAll("[data-nav]").forEach(button => button.addEventListener("click", () => showView(button.dataset.nav)));
window.addEventListener("popstate", () => showView(location.hash.slice(1), false));
window.addEventListener("hashchange", () => showView(location.hash.slice(1), false));
function launch() {
  if (launched) return;
  launched = true;
  shell.inert = false;
  terminal.inert = true;
  shell.classList.add("is-primed");
  requestAnimationFrame(() => shell.classList.add("is-live"));
  terminal.classList.add("launching");
  setTimeout(() => terminal.classList.add("gone"), 780);
  document.querySelector(`.os-sidebar [data-nav="${activeView}"]`).focus({preventScroll:true});
}
document.getElementById("ctaText").addEventListener("click", launch);
document.addEventListener("keydown", event => {
  if (!launched && event.key === "Enter") { event.preventDefault(); launch(); return; }
  if (!launched || !sets[activeView] || event.altKey || event.ctrlKey || event.metaKey || event.target.matches("input,textarea,[contenteditable=true]")) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    selectCard(activeView, cursor[activeView] + (event.key === "ArrowRight" ? 1 : -1));
  }
});
document.querySelectorAll("[data-carousel]").forEach(carousel => {
  let start = null;
  let lastSwipe = 0;
  carousel.addEventListener("click", event => {
    if (Date.now() - lastSwipe < 500) {event.preventDefault(); event.stopPropagation();}
  }, true);
  carousel.addEventListener("pointerdown", event => {
    if (event.pointerType !== "mouse") start = {x:event.clientX, y:event.clientY};
  });
  carousel.addEventListener("pointercancel", () => {start = null;});
  carousel.addEventListener("pointerup", event => {
    if (!start) return;
    const dx = event.clientX - start.x, dy = event.clientY - start.y;
    start = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      selectCard(carousel.dataset.carousel, cursor[carousel.dataset.carousel] + (dx < 0 ? 1 : -1));
      // Prevent the same swipe from opening a link under the finger.
      lastSwipe = Date.now();
    }
  });
});
document.querySelectorAll(".decision-lane").forEach(lane => {
  const activate = () => {
    document.querySelectorAll(".decision-lane").forEach(item => item.setAttribute("aria-pressed", String(item === lane)));
    document.getElementById("decisionInsight").textContent = lane.dataset.insight;
  };
  lane.addEventListener("mouseenter", activate);
  lane.addEventListener("focus", activate);
  lane.addEventListener("click", activate);
});

const bootLines = [
  '<span class="term-out">Booting YZH OS v1.0...</span>',
  '<span class="term-ok">[ OK ]</span> Loading product mindset',
  '<span class="term-ok">[ OK ]</span> Mounting music &amp; creative tools',
  '<span class="term-ok">[ OK ]</span> Connecting human + AI workflows',
  '<span class="term-prompt">yuanhang@yzh-mac ~ %</span> whoami',
  '周远航 / Yuanhang Zhou',
  '<span class="term-out">AI Product Manager · Builder</span>',
  '<span class="term-prompt">yuanhang@yzh-mac ~ %</span> cat about.md',
  '<span class="term-out">关注 AI 产品、创意工具与人机协作。</span>',
  '<span class="term-out">把真实需求变成可用的 AI 产品与工具。</span>',
  '<span class="term-prompt">yuanhang@yzh-mac ~ %</span> echo $PHILOSOPHY',
  '<span class="term-emphasis">Ideas + AI = Products</span>',
  '<span class="term-prompt">yuanhang@yzh-mac ~ %</span> open yuanhang.os <span class="term-cursor"></span>',
];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const body = document.getElementById("bootBody");
bootLines.forEach((line, index) => setTimeout(() => {
  if (launched) return;
  const row = document.createElement("div");
  row.className = `term-line${[4,7,10,12].includes(index) ? " term-gap" : ""}`;
  row.innerHTML = line;
  body.append(row);
  body.scrollTop = body.scrollHeight;
}, reducedMotion ? 0 : index * 120));
showView(location.hash.slice(1), false);
if (Object.hasOwn(paths, location.hash.slice(1))) launch();
