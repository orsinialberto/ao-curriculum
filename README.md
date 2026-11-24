# curriculum.albertorsini.it

Portfolio e curriculum di Alberto Orsini, software developer e Scrum Master. Sito statico in italiano e inglese, senza framework.

## Struttura

```
src/
  pages.mjs          pagine (home, esperienza, 404) in IT/EN
  data.mjs           testi e dati del sito
  assets/style.css   stile (palette selezionabili via data-palette)
  assets/main.js     selettore della palette e link al CV
  cv/                contenuto e stile del CV in PDF
public/              font, immagini, favicon, PDF del CV (copiati così come sono)
scripts/             build, controlli, anteprima, immagini, CV
```

## Comandi

| Comando | Cosa fa |
|---|---|
| `npm run preview` | genera il sito in `dist/` e lo serve su http://localhost:4173 (`-- 4174` per un'altra porta) |
| `npm run build` | genera il sito in `dist/` |
| `npm run check` | build + controlli (link, immagini, lingue, meta) |
| `npm run images` | rigenera le immagini WebP (le foto originali sono nel progetto di lavoro, non in questo repository) |
| `npm run cv` | rigenera i PDF del CV (IT/EN × palette) con Chrome; percorso di Chrome da `CHROME_PATH` |

La build richiede solo Node 22 o successivo; `sharp` (dipendenza di sviluppo) serve solo a `npm run images`.

## Pubblicazione

Ogni push su `main` avvia `.github/workflows/deploy.yml`, che esegue `npm run check` e pubblica `dist/` su GitHub Pages
(dominio `curriculum.albertorsini.it`, impostato nei Settings → Pages del repository).
I PDF del CV vanno rigenerati in locale (`npm run cv`) e committati prima del push.

Il sito precedente è conservato nel tag `sito-v1`.
