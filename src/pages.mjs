// Pagine del sito (IT/EN) generate dal content plan. Copy finale: content/content-plan.md.
import { SITE_URL, EMAIL, LINKEDIN, GITHUB, CITY, YEAR, content } from './data.mjs';
import images from './image-manifest.json' with { type: 'json' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const paths = {
  it: { home: '/', exp: '/esperienza/', proj: '/progetti/' },
  en: { home: '/en/', exp: '/en/experience/', proj: '/en/projects/' },
};
const other = { it: 'en', en: 'it' };

const badge = (t) => `<svg class="badge" viewBox="0 0 200 200" role="img" aria-label="${esc(t.badgeLabel)}"><defs><path id="c" d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0"/></defs><circle cx="100" cy="100" r="98" style="fill:var(--badge,var(--acc));stroke:var(--ink)" stroke-width="3"/><g class="badge__t" aria-hidden="true"><text font-family="IBM Plex Mono" font-weight="700" font-size="15" letter-spacing="3" style="fill:var(--ink)"><textPath href="#c">${esc(t.badgeText)}</textPath></text></g><text x="100" y="116" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="46" aria-hidden="true" style="fill:var(--ink)">→</text></svg>`;

// <img> responsive dal manifest generato da `npm run images`
const img = (name, alt, sizes, extra = '') => {
  const m = images[name], w = m.widths, max = Math.max(...w);
  return `<img src="/img/${name}-${w.includes(960) ? 960 : max}.webp" srcset="${w.map((x) => `/img/${name}-${x}.webp ${x}w`).join(', ')}" sizes="${sizes}" width="${m.width}" height="${m.height}" alt="${esc(alt)}"${extra}>`;
};

// Palette selezionabili: [id, nome, sfondo, accento]. La prima è quella predefinita (variabili in :root).
const PALETTES = [['recio', 'Recio', '#EDEEF1', '#FF3B3B'], ['carta', 'Carta', '#F3EEE3', '#FF5A36'], ['feed', 'Feed', '#FAF0E6', '#F17752'], ['cobalto', 'Cobalto', '#2A3BFF', '#FFE600'], ['bosco', 'Bosco', '#0F3D2E', '#D7FF3A'], ['petrolio', 'Petrolio', '#0B4A57', '#FFB36B']];
// Applica la palette salvata prima del primo disegno (evita il lampo con i colori predefiniti)
const paletteBoot = `<script>try{var p=localStorage.getItem('ao-palette'),m=${JSON.stringify(Object.fromEntries(PALETTES.slice(1).map(([id, , bg]) => [id, bg])))};if(m[p]){document.documentElement.dataset.palette=p;document.querySelector('meta[name=theme-color]').content=m[p]}}catch(e){}</script>`;
const swatch = ([id, , bg, acc]) => `<span class="pal__sw" data-p="${id}" style="--c1:${bg};--c2:${acc}" aria-hidden="true"></span>`;
const paletteSwitch = (label) => `<div class="pal" hidden><button type="button" class="pal__btn" aria-expanded="false" aria-controls="pal-menu" aria-label="${esc(label)}: ${PALETTES[0][1]}" data-label="${esc(label)}">${swatch(PALETTES[0])}</button><div class="pal__menu" id="pal-menu" role="group" aria-label="${esc(label)}">${PALETTES.map((p, i) => `<button type="button" data-p="${p[0]}" data-bg="${p[2]}" data-name="${p[1]}" aria-pressed="${i === 0}">${swatch(p)}${p[1]}</button>`).join('')}</div></div>`;

const mail = `mailto:${EMAIL}`;
const stack = (s) => `<p class="mono stack">${esc(s)}</p>`;

function layout({ lang, key, title, desc, body, jsonld }) {
  const t = content[lang];
  const p = paths[lang];
  const path = p[key];
  const alt = paths[other[lang]][key];
  const url = SITE_URL + path;
  const nav = [['exp', t.nav.exp, p.exp], ['sk', t.nav.skills, p.home + '#competenze'], ['proj', t.nav.proj, p.home + '#progetti'], ['ct', t.nav.contact, '#contatti']];
  const navHtml = nav.map(([k, label, href]) => `<a href="${href}"${k === key ? ' aria-current="page"' : ''}>${esc(label)}</a>`).join('');
  const itH = SITE_URL + paths.it[key], enH = SITE_URL + paths.en[key];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="it" href="${itH}">
<link rel="alternate" hreflang="en" href="${enH}">
<link rel="alternate" hreflang="x-default" href="${itH}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Alberto Orsini">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${lang === 'it' ? 'it_IT' : 'en_US'}">
<meta property="og:locale:alternate" content="${lang === 'it' ? 'en_US' : 'it_IT'}">
<meta property="og:image" content="${SITE_URL}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t.ogAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#EDEEF1">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/bricolage-grotesque-800.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/style.css">
${paletteBoot}
<script src="/js/main.js" defer></script>
${key === 'home' ? `<script>try{if(!sessionStorage.getItem('ao-intro')){document.documentElement.classList.add('hero-intro');sessionStorage.setItem('ao-intro','1')}}catch(e){}</script>\n` : ''}${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>\n` : ''}</head>
<body>
<a class="skip" href="#main">${esc(t.skip)}</a>
<header class="hdr">
  <a class="logo" href="${p.home}" aria-label="Alberto Orsini, ${esc(t.nav.home)}">A.O</a>
  <nav class="nav" aria-label="${esc(t.nav.label)}">${navHtml}</nav>
  <div class="lang" role="group" aria-label="${esc(t.langLabel)}"><a href="${paths.it[key]}" hreflang="it" lang="it"${lang === 'it' ? ' aria-current="true"' : ''}>IT</a><span aria-hidden="true">/</span><a href="${paths.en[key]}" hreflang="en" lang="en"${lang === 'en' ? ' aria-current="true"' : ''}>EN</a></div>
  ${paletteSwitch(t.paletteLabel)}
  <a class="btn btn--y" href="${mail}">${esc(t.cta.mail)}</a>
</header>
<main id="main">
${body}
${contact(lang)}
</main>
${footer(lang)}
</body>
</html>
`;
}

const contact = (lang) => {
  const t = content[lang];
  return `<section class="contact" id="contatti" aria-labelledby="h-contact">
  <h2 id="h-contact">${esc(t.contact.h2)}</h2>
  <p class="cl">${esc(t.contact.text)}</p>
  <a class="mail" href="${mail}">${EMAIL}</a>
  <div class="cta"><a class="btn btn--b" href="${mail}">${esc(t.cta.mail)}</a><a class="btn btn--w" href="${LINKEDIN}" rel="noopener">LinkedIn</a><a class="btn btn--w" href="${GITHUB}" rel="noopener">GitHub</a><a class="btn btn--w" href="${t.cvHref}" download>${esc(t.cta.cv)}</a></div>
</section>`;
};

const footer = (lang) => {
  const t = content[lang];
  return `<footer class="ftr"><span class="mono">© ${YEAR} Alberto Orsini · ${esc(CITY)}</span><span class="mono"><a href="${mail}">Email</a> · <a href="${LINKEDIN}" rel="noopener">LinkedIn</a> · <a href="${GITHUB}" rel="noopener">GitHub</a> · <a href="${t.cvHref}" download>${esc(t.cta.cv)}</a></span></footer>`;
};

const projectCard = (lang, pr, i, tag) => {
  const t = content[lang];
  const flow = pr.flow ? `\n      <ol class="flow" aria-label="${esc(t.flowLabel)}">${pr.flow.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>` : '';
  return `<article class="card ${pr.tone}">
      <p class="mono n">0${i + 1} / ${esc(pr.kind)}</p><${tag} class="t">${esc(pr.name)}</${tag}>
      <p>${esc(pr.text)}</p>${flow}
      ${stack(pr.stack)}
      <a class="lnk" href="https://${pr.repo}" rel="noopener">${pr.repo} ↗</a>
    </article>`;
};

// larghezza del pannello aperto proporzionata al contenuto (26–44rem): i ruoli brevi non si allargano a vuoto
const panelW = (j) => Math.round(Math.min(44, Math.max(26, 20 + ((j.short ? j.short.join('') : j.text || '').length + (j.stack || '').length) / 20)));
const panel = (j, edu) => `<article class="pn${edu ? ' pn--edu' : ''}" style="--w:${panelW(j)}rem" tabindex="0" aria-labelledby="${j.id}">
      <h3 id="${j.id}"><span class="mono">${esc(j.dates)}</span>${esc(j.role)}</h3>
      <div class="pn__b"><p class="mono co">${esc(j.company)}</p>
        ${j.short ? `<ul>${j.short.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : j.text ? `<p>${esc(j.text)}</p>` : ''}
        ${j.stack ? stack(j.stack) : ''}</div>
    </article>`;

const skillsHtml = (lang) => {
  const t = content[lang];
  return `<dl class="st">
    ${t.skills.map((g) => `<div${g.hi ? ' class="hi"' : ''}><dt>${esc(g.name)}</dt><dd>${g.items.map((s) => `<span>${esc(s)}</span>`).join('')}</dd></div>`).join('\n    ')}
  </dl>`;
};

function home(lang) {
  const t = content[lang], h = t.home, p = paths[lang];
  const body = `<section class="hero" id="top" aria-labelledby="h-name">
  <span class="ghost" aria-hidden="true">AO</span>
  ${badge(h)}
  <p class="mono tag">${esc(h.tag)}</p>
  <h1 id="h-name">Alberto <span>Orsini</span></h1>
  <p class="role">${esc(h.role)}</p>
  <div class="hero__b">
    <p class="lead">${esc(h.lead)}</p>
    <div class="cta"><a class="btn btn--y" href="#progetti">${esc(t.cta.projects)}</a><a class="btn btn--w" href="${t.cvHref}" download>${esc(t.cta.cv)}</a></div>
    <p class="mono meta">${esc(h.meta)}</p>
  </div>
</section>

<div class="band" aria-hidden="true"><div class="band__t">
  ${['Java', 'Spring Boot', 'Kafka', 'Kubernetes', 'Elasticsearch', 'RAG', 'MCP'].map((s) => `<span>${s}</span>`).join('')}${['Java', 'Spring Boot', 'Kafka', 'Kubernetes', 'Elasticsearch', 'RAG', 'MCP'].map((s) => `<span>${s}</span>`).join('')}
</div></div>

<section class="wrap about" id="profilo" aria-labelledby="h-about">
  <h2 id="h-about">${esc(h.about.h2)}</h2>
  <div class="about__g">
    <figure class="pic">${img('ritratto', h.about.photoAlt, '(max-width:600px) 14rem, 20rem', ' loading="lazy" decoding="async"')}<figcaption class="mono">${esc(h.about.photoCap)}</figcaption></figure>
    <div class="cols"><p>${esc(h.about.p1)}</p><p>${esc(h.about.p2)}</p></div>
  </div>
</section>

<section class="wrap work" id="progetti" aria-labelledby="h-work">
  <h2 id="h-work">${esc(h.work.h2)}</h2>
  <div class="cards">
    ${t.projects.map((pr, i) => projectCard(lang, pr, i, 'h3')).join('\n    ')}
  </div>
  <a class="lnk lnk--big" href="${GITHUB}?tab=repositories" rel="noopener">${esc(h.work.all)}</a>
</section>

<section class="exp" id="esperienza" aria-labelledby="h-exp">
  <div class="wrap"><h2 id="h-exp">${esc(h.exp.h2)}</h2></div>
  <div class="panels">
    ${t.jobs.map((j) => panel(j, false)).join('\n    ')}
    ${panel(t.edu, true)}
  </div>
  <div class="wrap"><a class="lnk lnk--big lnk--w" href="${p.exp}">${esc(h.exp.all)}</a></div>
</section>

<section class="wrap skills" id="competenze" aria-labelledby="h-skills">
  <h2 id="h-skills">${esc(h.skillsH2)}</h2>
  ${skillsHtml(lang)}
</section>`;
  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alberto Orsini',
    url: SITE_URL + p.home,
    jobTitle: h.role,
    knowsAbout: ['Java', 'REST API', 'Spring Boot', 'RAG', 'MCP', 'LLM', 'Kubernetes', 'Scrum'],
    sameAs: [GITHUB, LINKEDIN],
  };
  return layout({ lang, key: 'home', title: h.title, desc: h.desc, body, jsonld });
}

function experience(lang) {
  const t = content[lang], e = t.expPage;
  const body = `<header class="ph">
  <h1>${esc(e.h1)}</h1>
  <p class="intro">${esc(e.intro)}</p>
</header>
<section class="wrap jobs" aria-label="${esc(e.h1)}">
  ${t.jobs.map((j) => `<article class="job" aria-labelledby="x-${j.id}">
    <div class="job__m"><p class="mono">${esc(j.dates)}</p><p class="mono co">${esc(j.company)}</p></div>
    <div class="job__b"><h2 id="x-${j.id}">${esc(j.role)}</h2>
      <ul>${j.full.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      ${stack(j.stack)}</div>
  </article>`).join('\n  ')}
  <article class="job job--edu" aria-labelledby="x-edu">
    <div class="job__m"><p class="mono">${esc(t.edu.dates)}</p><p class="mono co">${esc(t.edu.company)}</p></div>
    <div class="job__b"><h2 id="x-edu">${esc(e.eduH2)}</h2><p>${esc(t.edu.full)}</p></div>
  </article>
  <div class="cta cta--page"><a class="btn btn--y" href="${mail}">${esc(t.cta.mail)}</a><a class="btn btn--w" href="${t.cvHref}" download>${esc(t.cta.cv)}</a></div>
</section>`;
  return layout({ lang, key: 'exp', title: e.title, desc: e.desc, body });
}

function projects(lang) {
  const t = content[lang], e = t.projPage;
  const body = `<header class="ph">
  <h1>${esc(e.h1)}</h1>
  <p class="intro">${esc(e.intro)}</p>
</header>
<section class="wrap work" aria-label="${esc(e.h1)}">
  <div class="cards">
    ${t.projects.map((pr, i) => projectCard(lang, pr, i, 'h2')).join('\n    ')}
  </div>
  <p class="more"><a class="lnk lnk--big" href="${GITHUB}" rel="noopener">${esc(e.more)} ↗</a></p>
  <div class="cta cta--page"><a class="btn btn--y" href="${mail}">${esc(t.cta.mail)}</a></div>
</section>`;
  return layout({ lang, key: 'proj', title: e.title, desc: e.desc, body });
}

function notFound() {
  const it = content.it.nf, en = content.en.nf;
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(it.title)} · ${esc(en.title)}</title>
<meta name="description" content="${esc(it.text)}">
<meta name="robots" content="noindex">
<meta property="og:title" content="${esc(it.title)}">
<meta property="og:description" content="${esc(it.text)}">
<meta name="theme-color" content="#EDEEF1">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/css/style.css">
${paletteBoot}
</head>
<body>
<a class="skip" href="#main">${esc(content.it.skip)}</a>
<header class="hdr"><a class="logo" href="/" aria-label="Alberto Orsini, home">A.O</a></header>
<main id="main" class="nf">
  <p class="mono tag">404</p>
  <h1>${esc(it.title)}</h1>
  <p class="intro">${esc(it.text)}</p>
  <div class="cta"><a class="btn btn--y" href="/">${esc(it.home)}</a><a class="btn btn--w" href="${mail}">${esc(content.it.cta.mail)}</a></div>
  <div lang="en" class="nf__en">
    <p class="intro"><strong>${esc(en.title)}.</strong> ${esc(en.text)}</p>
    <div class="cta"><a class="btn btn--w" href="/en/">${esc(en.home)}</a><a class="btn btn--w" href="${mail}">${esc(content.en.cta.mail)}</a></div>
  </div>
</main>
</body>
</html>
`;
}

export const pages = [
  ...['it', 'en'].flatMap((lang) => [
    { path: paths[lang].home, lang, key: 'home', html: home(lang) },
    { path: paths[lang].exp, lang, key: 'exp', html: experience(lang) },
    { path: paths[lang].proj, lang, key: 'proj', html: projects(lang) },
  ]),
  { path: '/404', file: '404.html', noindex: true, html: notFound() },
];

export { paths };
