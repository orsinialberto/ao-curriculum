// Ottimizza le immagini: ogni file in ../images/source (ricorsivo) → WebP responsive in public/img
// e src/image-manifest.json. Uso: npm run images [larghezze, es. 480,960,1600]
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const srcDir = path.join(root, 'images/source');
const out = path.join(root, 'site/public/img');
const manifestPath = path.join(root, 'site/src/image-manifest.json');
const widths = (process.argv[2] || '480,960,1600').split(',').map(Number);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const files = walk(srcDir).filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f));

fs.mkdirSync(out, { recursive: true });
const manifest = {};
for (const f of files) {
  const name = path.relative(srcDir, f).replace(/\.[^.]+$/, '').replace(/[\\/]+/g, '-').toLowerCase().replace(/[^a-z0-9-]+/g, '-');
  const meta = await sharp(f).metadata();
  const ws = [...new Set(widths.filter((w) => w < meta.width).concat(meta.width <= Math.max(...widths) ? [meta.width] : [Math.max(...widths)]))];
  for (const w of ws) await sharp(f).rotate().resize({ width: w }).webp({ quality: 78 }).toFile(path.join(out, `${name}-${w}.webp`));
  manifest[name] = { width: meta.width, height: meta.height, widths: ws };
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Immagini: ${files.length} sorgenti → public/img`);
