// Controlli su dist/: struttura SEO/a11y base, link e risorse interne, dimensioni, copy segnaposto.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const errors = [];
const err = (f, m) => errors.push(`${f}: ${m}`);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const htmlFiles = walk(dist).filter((f) => f.endsWith('.html'));
const exists = (url) => {
  const clean = url.split('#')[0].split('?')[0];
  const f = path.join(dist, clean);
  return fs.existsSync(f) && (!fs.statSync(f).isDirectory() || fs.existsSync(path.join(f, 'index.html')));
};

for (const file of htmlFiles) {
  const rel = path.relative(dist, file);
  const h = fs.readFileSync(file, 'utf8');
  const count = (re) => (h.match(re) || []).length;
  if (count(/<h1[\s>]/g) !== 1) err(rel, `servono esattamente 1 <h1> (trovati ${count(/<h1[\s>]/g)})`);
  const title = (h.match(/<title>(.*?)<\/title>/) || [])[1];
  if (!title) err(rel, 'manca <title>'); else if (title.length > 65) err(rel, `title lungo ${title.length}`);
  const desc = (h.match(/<meta name="description" content="(.*?)">/) || [])[1];
  if (!desc) err(rel, 'manca meta description'); else if (desc.length > 170) err(rel, `description lunga ${desc.length}`);
  for (const k of ['og:title', 'og:description', ...(h.includes('name="robots" content="noindex') ? [] : ['canonical'])]) if (!h.includes(k)) err(rel, `manca ${k}`);
  if (!/<html lang="(it|en)"/.test(h)) err(rel, 'manca lang');
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) err(rel, `img senza alt: ${m[0].slice(0, 80)}`);
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\bwidth="/.test(m[0]) || !/\bheight="/.test(m[0])) err(rel, 'img senza width/height');
  const ids = new Set([...h.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of h.matchAll(/(?:href|src|srcset)="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(' ')[0];
      if (!u || /^(https?:|mailto:|tel:|data:)/.test(u)) continue;
      if (u.startsWith('#')) { if (u.length > 1 && !ids.has(u.slice(1))) err(rel, `ancora mancante ${u}`); continue; }
      if (!exists(u)) err(rel, `risorsa/link rotto ${u}`);
      const [p, frag] = u.split('#');
      if (frag && p.endsWith('/') && exists(p)) {
        const t = fs.readFileSync(path.join(dist, p, 'index.html'), 'utf8');
        if (!t.includes(`id="${frag}"`)) err(rel, `ancora ${u} non trovata`);
      }
    }
  }
  if (/DA CONFERMARE|lorem ipsum|\bTODO\b/i.test(h)) err(rel, 'testo segnaposto presente');
}
for (const f of ['sitemap.xml', 'robots.txt', 'favicon.svg', '404.html']) if (!fs.existsSync(path.join(dist, f))) err(f, 'file mancante');

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)) if (!exists(m[1])) err('sitemap.xml', `URL inesistente ${m[1]}`);

const jsFile = path.join(dist, 'js/main.js');
const css = fs.statSync(path.join(dist, 'css/style.css')).size, js = fs.existsSync(jsFile) ? fs.statSync(jsFile).size : 0;
if (css > 40000) err('css', `troppo grande ${css}`);
if (js > 8000) err('js', `troppo grande ${js}`);

if (errors.length) { console.error(errors.join('\n')); console.error(`\n${errors.length} problemi`); process.exit(1); }
console.log(`Check ok: ${htmlFiles.length} pagine HTML, CSS ${css} B, JS ${js} B`);
