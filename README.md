# Curriculum Web

Curriculum vitae interattivo sviluppato come pagina web statica.

## Caratteristiche

- Design minimale e moderno con tema scuro
- Layout lineare e pulito
- Responsive design
- Navigazione smooth scroll
- Sezioni: Profilo, Esperienze, Formazione, Competenze, Contatti

## Struttura

```
curriculum/
├── index.html          # Pagina principale
├── css/
│   └── style.css      # Stili dark theme
├── js/
│   └── main.js        # Script per navigazione
└── README.md
```

## Personalizzazione

1. Modifica `index.html` con i tuoi dati personali
2. Aggiorna i placeholder nelle sezioni:
   - Header: nome, ruolo, contatti
   - Profilo: testo introduttivo
   - Esperienze: ruoli e descrizioni
   - Formazione: titoli di studio
   - Competenze: tecnologie e tools

## Deploy su GitHub Pages

Il repository è già configurato per GitHub Pages. Per pubblicare il sito:

1. **Vai sul repository GitHub**: https://github.com/orsinialberto/curriculum
2. **Apri le impostazioni**: Clicca su "Settings" nella barra superiore del repository
3. **Vai alla sezione Pages**: Nel menu laterale sinistro, clicca su "Pages"
4. **Configura la sorgente**:
   - Sotto "Source", seleziona "Deploy from a branch"
   - Scegli il branch: **main**
   - Scegli la cartella: **/ (root)**
   - Clicca su "Save"
5. **Attendi la pubblicazione**: GitHub impiegherà qualche minuto per pubblicare il sito
6. **Il tuo sito sarà disponibile su**: https://orsinialberto.github.io/curriculum/

**Nota**: Il file `.nojekyll` è già presente nella root del progetto per assicurarsi che GitHub Pages serva correttamente i file statici senza processarli con Jekyll.

## Sviluppo Locale

Apri semplicemente `index.html` nel browser o usa un server locale:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

Poi apri `http://localhost:8000` nel browser.

