/* Progressive enhancement: content and external links work without JavaScript. */
(() => {
  const views = ['about', 'projects', 'practice', 'notes', 'contact'];
  const aliases = { product: 'projects', tool: 'practice' };
  const sections = [...document.querySelectorAll('.workspace-view')];
  const cards = [...document.querySelectorAll('.project-card')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const main = document.getElementById('main');
  let currentView = '';
  function filter(category) {
    cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    document.getElementById('filterStatus').textContent = `显示 ${cards.filter(card => !card.hidden).length} 个项目`;
  }
  function route({ focus = false } = {}) {
    const [raw, nestedId] = location.hash.slice(1).split('/');
    const projectId = raw.startsWith('project-') ? raw.slice(8) : nestedId;
    const name = raw.startsWith('project-') ? 'projects' : views.includes(raw) ? raw : aliases[raw] || 'about';
    const changed = currentView !== name;
    sections.forEach(section => { section.hidden = section.id !== name; });
    document.querySelectorAll('[data-nav]').forEach(link => {
      if (link.dataset.nav === name) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.getElementById('windowPath').textContent = `~/yuanhang-os/${name}`;
    document.title = `${({about:'关于我',projects:'六个项目',practice:'产品实践',notes:'公开文章',contact:'联系我'})[name]} · 周远航 Yuanhang Zhou`;
    currentView = name;
    const card = name === 'projects' && projectId ? cards.find(card => card.id === 'project-' + projectId) : null;
    if (card) {
      filter('all');
      card.querySelector('details').open = true;
      requestAnimationFrame(() => {
        card.scrollIntoView({ block: 'start', behavior: 'instant' });
        if (focus) card.querySelector('summary').focus({ preventScroll: true });
      });
    } else if (focus || changed) {
      if (focus) main.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
  filterButtons.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter)));
  document.getElementById('projectFilters').hidden = false;
  document.documentElement.classList.add('js-ready');
  route();
  window.addEventListener('hashchange', () => route({ focus: true }));
  // Reopening the same case still resets a filter and brings its content into view.
  document.querySelectorAll('a[href^="#project-"]').forEach(link => link.addEventListener('click', () => {
    if (location.hash === link.hash) route({ focus: true });
  }));
  document.querySelector('.skip-link').addEventListener('click', event => { event.preventDefault(); main.focus(); });
  const terminal = document.getElementById('bootTerminal');
  if (typeof terminal.showModal === 'function') {
    const toggle = document.getElementById('terminalToggle');
    toggle.hidden = false;
    toggle.addEventListener('click', () => terminal.showModal());
    document.getElementById('closeTerminal').addEventListener('click', () => terminal.close());
    document.getElementById('launchButton').addEventListener('click', () => terminal.close());
  }
  const copy = document.getElementById('copyEmail');
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const status = document.getElementById('copyStatus');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('oniszczukthommy@gmail.com');
      status.textContent = '邮箱已复制';
    } catch {
      status.textContent = '未能自动复制，请长按或选中上方邮箱地址复制。';
    }
  });
})();
