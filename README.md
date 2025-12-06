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

Il repository è configurato con GitHub Actions per il deploy automatico. Per pubblicare il sito:

1. **Vai sul repository GitHub**: https://github.com/orsinialberto/ao-curriculum (o il tuo repository)
2. **Apri le impostazioni**: Clicca su "Settings" nella barra superiore del repository
3. **Vai alla sezione Pages**: Nel menu laterale sinistro, clicca su "Pages"
4. **Configura la sorgente**:
   - Sotto "Source", seleziona **"GitHub Actions"**
   - Se non vedi questa opzione, assicurati che il workflow `.github/workflows/deploy.yml` sia presente nel repository
5. **Il deploy avverrà automaticamente**: Ogni volta che fai push sul branch `main`, il workflow si attiverà automaticamente
6. **Monitora il deploy**: Puoi vedere lo stato del deploy nella tab "Actions" del repository
7. **Il tuo sito sarà disponibile su**: `https://orsinialberto.github.io/[nome-repository]/`

**Nota**: 
- Il file `.nojekyll` è già presente nella root del progetto per assicurarsi che GitHub Pages serva correttamente i file statici senza processarli con Jekyll.
- Il workflow GitHub Actions è configurato in `.github/workflows/deploy.yml` e si attiva automaticamente ad ogni push sul branch `main`.

## Sviluppo Locale

Apri semplicemente `index.html` nel browser o usa un server locale:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

Poi apri `http://localhost:8000` nel browser.

