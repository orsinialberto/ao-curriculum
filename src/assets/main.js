// Selettore della palette: pallino con la palette attiva che apre un menu di scelta.
// La palette salvata viene applicata prima del disegno da uno script inline in <head> (vedi pages.mjs).
(() => {
  const root = document.documentElement;
  const pal = document.querySelector('.pal');
  if (!pal) return;
  const trigger = pal.querySelector('.pal__btn');
  const menu = pal.querySelector('.pal__menu');
  const options = [...menu.querySelectorAll('button[data-p]')];
  const meta = document.querySelector('meta[name="theme-color"]');
  const fallback = options[0].dataset.p;
  // Link "Scarica il CV": puntano al PDF con la palette scelta (generati da npm run cv in /cv/; la predefinita resta nella radice)
  const cvLinks = [...document.querySelectorAll('a[download][href*="cv-alberto-orsini-"]')];
  cvLinks.forEach((a) => { a.dataset.cvBase = a.getAttribute('href'); });
  const cvHref = (base, id) => (id === fallback ? base : base.replace(/\/cv-alberto-orsini-(\w+)\.pdf$/, `/cv/cv-alberto-orsini-$1-${id}.pdf`));

  // Allinea pallino, etichetta e stato dei bottoni alla palette corrente
  const sync = (id) => {
    const current = options.find((o) => o.dataset.p === id) || options[0];
    options.forEach((o) => o.setAttribute('aria-pressed', String(o === current)));
    trigger.replaceChildren(current.querySelector('.pal__sw').cloneNode());
    trigger.setAttribute('aria-label', `${trigger.dataset.label}: ${current.dataset.name}`);
    cvLinks.forEach((a) => { a.href = cvHref(a.dataset.cvBase, current.dataset.p); });
  };
  const apply = (option) => {
    const id = option.dataset.p;
    if (id === fallback) delete root.dataset.palette;
    else root.dataset.palette = id;
    if (meta) meta.content = option.dataset.bg;
    sync(id);
    try { localStorage.setItem('ao-palette', id); } catch { /* memoria non disponibile: la scelta vale solo per questa pagina */ }
  };

  let transition = null;
  const open = (state) => {
    if (state) pal.dataset.open = '';
    else delete pal.dataset.open;
    trigger.setAttribute('aria-expanded', String(state));
  };

  sync(root.dataset.palette || fallback);
  pal.hidden = false;

  trigger.addEventListener('click', (e) => {
    const willOpen = !('open' in pal.dataset);
    open(willOpen);
    // Da tastiera (detail = 0) il focus passa all'opzione attiva; col mouse resta sul pallino
    if (willOpen && e.detail === 0) (options.find((o) => o.getAttribute('aria-pressed') === 'true') || options[0]).focus();
  });
  // Il menu resta aperto dopo la scelta, così si possono confrontare le palette
  menu.addEventListener('click', (e) => {
    const option = e.target.closest('button[data-p]');
    if (!option || option.getAttribute('aria-pressed') === 'true') return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduce) return apply(option);
    // Un cambio ravvicinato chiude subito la dissolvenza precedente invece di accodarsi
    if (transition) transition.skipTransition();
    root.classList.add('pal-vt');
    const t = (transition = document.startViewTransition(() => apply(option)));
    t.ready.catch(() => {});
    t.finished.finally(() => { if (transition === t) { transition = null; root.classList.remove('pal-vt'); } });
  });
  document.addEventListener('click', (e) => { if (!pal.contains(e.target)) open(false); });
  pal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && 'open' in pal.dataset) { open(false); trigger.focus(); }
  });
  // Chiude quando il focus va altrove con la tastiera (relatedTarget nullo = clic: lo gestisce il listener sul documento)
  pal.addEventListener('focusout', (e) => { if (e.relatedTarget && !pal.contains(e.relatedTarget)) open(false); });
})();
