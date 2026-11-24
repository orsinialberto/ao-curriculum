// Genera il CV in PDF (IT/EN) nello stile del sito: HTML da src/cv/data.mjs + src/cv/cv.css, stampato con Chrome headless.
// Uso: npm run cv            → public/cv-alberto-orsini-{it,en}.pdf
//      npm run cv -- --html  → solo l'HTML in .cv-build/ (per l'anteprima nel browser)
// Chrome: percorso da CHROME_PATH, altrimenti quello standard di macOS.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { cv } from '../src/cv/data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const build = path.join(root, '.cv-build');
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const htmlOnly = process.argv.includes('--html');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const job = (j, now, L) => `<article class="job${now ? ' job--now' : ''}">
      <div class="job__emp">${j.employers.map(([e, d]) => `<p class="mono-l"><span>${esc(e)}</span><time>${esc(d)}</time></p>`).join('')}</div>
      <h3>${esc(j.role)}</h3>
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <p class="tech"><b>${esc(L.tech)}:</b> ${esc(j.tech)}</p>
    </article>`;

// Palette del sito: variabili di :root (Recio, predefinita) e blocchi [data-palette=id]{...} letti da src/assets/style.css,
// così CV e sito restano allineati senza duplicare i colori.
const siteCss = fs.readFileSync(path.join(root, 'src/assets/style.css'), 'utf8');
const paletteCss = [siteCss.match(/:root\{--bg:[^}]*\}/)[0], ...siteCss.match(/\[data-palette=\w+\]\{[^}]*\}/g)].join('\n');
const palettes = ['recio', ...[...siteCss.matchAll(/\[data-palette=(\w+)\]\{/g)].map((m) => m[1])];

function render(d, palette) {
  const L = d.labels, c = d.contacts;
  const footer = (n) => `<footer class="pf"><span>Alberto Orsini · ${esc(d.tag)}</span><span>${esc(L.page)} ${n} / 2</span></footer>`;
  return `<!doctype html>
<html lang="${d.lang}"${palette === palettes[0] ? '' : ` data-palette="${palette}"`}>
<head>
<meta charset="utf-8">
<title>${esc(d.title)}</title>
<link rel="stylesheet" href="../src/cv/cv.css">
<style>
${paletteCss}
</style>
</head>
<body>
<section class="page">
  <span class="ghost" aria-hidden="true">AO</span>
  <header class="top">
    <div>
      <p class="mono-l tag">${esc(d.tag)}</p>
      <h1>Alberto <span>Orsini</span></h1>
      <p class="role">${esc(d.role)}</p>
    </div>
    <figure class="pic"><img src="../public/img/ritratto-960.webp" alt="Alberto Orsini"><figcaption>${esc(L.photo)}</figcaption></figure>
  </header>

  <dl class="contacts" aria-label="${esc(L.contacts)}">
    <div><dt class="mono-l">${esc(L.email)}</dt><dd><a href="mailto:${c.email}">${esc(c.email)}</a></dd></div>
    <div><dt class="mono-l">${esc(L.phone)}</dt><dd><a href="tel:${c.phone.replace(/\s/g, '')}">${esc(c.phone)}</a></dd></div>
    <div><dt class="mono-l">${esc(L.address)}</dt><dd>${c.address.map(esc).join('<br>')}</dd></div>
    <div><dt class="mono-l">${esc(L.linkedin)}</dt><dd><a href="${c.linkedinHref}">${esc(c.linkedin)}</a></dd></div>
    <div><dt class="mono-l">${esc(L.site)}</dt><dd><a href="${c.siteHref}">${esc(c.site)}</a></dd></div>
    <div></div>
    <a class="qr mono-l" href="${c.siteHref}"><img src="../src/cv/qr.png" alt=""><span>${esc(L.qr)}</span></a>
  </dl>

  <section class="profile"><h2>${esc(L.profile)}</h2><p>${esc(d.profile)}</p></section>

  <section><h2>${esc(L.skills)}</h2>
    <div class="skills">
      ${d.skills.map(([k, v, wide]) => `<div class="sk${wide ? ' sk--wide' : ''}"><h3>${esc(k)}</h3><p>${esc(v)}</p></div>`).join('\n      ')}
    </div>
  </section>
  ${footer(1)}
</section>

<section class="page">
  <section class="jobs"><h2>${esc(L.experience)}</h2>
    ${job(d.jobs[0], true, L)}
    ${job(d.jobs[1], false, L)}
  </section>

  <div class="bottom">
    <article class="edu"><p class="mono-l">${esc(L.education)} · ${esc(d.education.dates)}</p><h3>${esc(d.education.school)}</h3><p>${esc(d.education.degree)}</p></article>
    <div class="facts">
      <div class="fact"><h2>${esc(L.languages)}</h2><ul>${d.languages.map(([l, v]) => `<li><b>${esc(l)}:</b> ${esc(v)}</li>`).join('')}</ul></div>
      <div class="fact"><h2>${esc(L.personal)}</h2><ul>${d.personal.map((p) => `<li>${esc(p)}</li>`).join('')}</ul></div>
    </div>
    <div class="acts"><h2>${esc(L.activities)}</h2><p>${esc(d.activities)}</p></div>
  </div>
  ${footer(2)}
</section>
</body>
</html>
`;
}

// Nomi dei file: la palette predefinita mantiene il nome storico (link senza JavaScript), le altre stanno in public/cv/
const pdfPath = (lang, palette) => (palette === palettes[0]
  ? path.join(root, 'public', `cv-alberto-orsini-${lang}.pdf`)
  : path.join(root, 'public', 'cv', `cv-alberto-orsini-${lang}-${palette}.pdf`));

fs.rmSync(build, { recursive: true, force: true });
fs.mkdirSync(build, { recursive: true });
fs.mkdirSync(path.join(root, 'public', 'cv'), { recursive: true });
for (const d of Object.values(cv)) {
  for (const palette of palettes) {
    const html = path.join(build, `cv-${d.lang}-${palette}.html`);
    fs.writeFileSync(html, render(d, palette));
    if (htmlOnly) { console.log(`HTML: ${path.relative(root, html)}`); continue; }
    const pdf = pdfPath(d.lang, palette);
    execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=3000', `--print-to-pdf=${pdf}`, pathToFileURL(html).href], { stdio: 'ignore' });
    console.log(`PDF: ${path.relative(root, pdf)} (${Math.round(fs.statSync(pdf).size / 1024)} KB)`);
  }
}
