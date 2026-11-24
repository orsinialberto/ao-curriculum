// Build statico: genera dist/ da src/pages.mjs, public/ e src/assets. Nessuna dipendenza oltre a Node.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { pages } = await import('../src/pages.mjs');
const { SITE_URL } = await import('../src/data.mjs');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(root, 'public'), dist, { recursive: true });
fs.mkdirSync(path.join(dist, 'css'), { recursive: true });
fs.copyFileSync(path.join(root, 'src/assets/style.css'), path.join(dist, 'css/style.css'));
fs.mkdirSync(path.join(dist, 'js'), { recursive: true });
fs.copyFileSync(path.join(root, 'src/assets/main.js'), path.join(dist, 'js/main.js'));

for (const p of pages) {
  const file = p.file || path.join(p.path, 'index.html');
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, p.html);
}

const indexable = pages.filter((p) => !p.noindex);
const alt = (p) => indexable.filter((q) => q.key === p.key);
const xhtml = (p) => alt(p).map((q) => `\n    <xhtml:link rel="alternate" hreflang="${q.lang}" href="${SITE_URL}${q.path}"/>`).join('') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${alt(p).find((q) => q.lang === 'it').path}"/>`;
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${indexable.map((p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>${xhtml(p)}\n  </url>`).join('\n')}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`Build ok: ${pages.length} pagine → dist/`);
