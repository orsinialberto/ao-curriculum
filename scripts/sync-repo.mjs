// Copia il sito (questa cartella) nel repository pubblico che GitHub Pages pubblica (orsinialberto/curriculum).
// Uso: npm run sync-repo [-- percorso-del-repo]   (predefinito: ../../ao-curriculum)
// Sostituisce tutto il contenuto del repository di destinazione tranne .git. Non fa commit né push.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.resolve(root, process.argv[2] || '../../ao-curriculum');
const skip = new Set(['.git', 'node_modules', 'dist', '.cv-build', '.DS_Store']);

if (!fs.existsSync(path.join(target, '.git'))) {
  console.error(`Nessun repository git in ${target}`);
  process.exit(1);
}
// Sicurezza: non sovrascrivere modifiche non committate nel repository di destinazione (i .DS_Store non contano)
const dirty = execFileSync('git', ['-C', target, 'status', '--porcelain'], { encoding: 'utf8' })
  .split('\n').filter((l) => l.trim() && !l.endsWith('.DS_Store'));
if (dirty.length) {
  console.error(`Modifiche non committate in ${target}:\n${dirty.join('\n')}\nCommitta o annulla prima di sincronizzare.`);
  process.exit(1);
}

for (const entry of fs.readdirSync(target)) if (entry !== '.git') fs.rmSync(path.join(target, entry), { recursive: true, force: true });
const copy = (from, to) => {
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const src = path.join(from, entry.name), dst = path.join(to, entry.name);
    if (entry.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); copy(src, dst); } else fs.copyFileSync(src, dst);
  }
};
copy(root, target);
console.log(`Sito copiato in ${target}. Controlla con: git -C ${path.relative(process.cwd(), target) || '.'} status`);
