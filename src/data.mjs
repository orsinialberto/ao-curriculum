// Dati e copy finale del sito (fonte: content/content-plan.md, poi rivisto con Alberto: ruolo, percorso dal 2017 su Contactlab, AI nei progetti personali).
export const SITE_URL = process.env.SITE_URL || 'https://curriculum.albertorsini.it';
export const EMAIL = 'orsini.alberto@hotmail.it';
export const LINKEDIN = 'https://www.linkedin.com/in/alberto-orsini-51219813a';
export const GITHUB = 'https://github.com/orsinialberto';
export const CITY = 'Milano';
export const YEAR = new Date().getFullYear();

const flowIt = ['Documenti', 'Embedding', 'Ricerca vettoriale', 'Gemini', 'Risposta'];
const flowEn = ['Documents', 'Embeddings', 'Vector search', 'Gemini', 'Answer'];

export const content = {
  it: {
    skip: 'Vai al contenuto',
    langLabel: 'Lingua',
    paletteLabel: 'Palette colori',
    ogAlt: 'Alberto Orsini, software developer e Scrum Master',
    cvHref: '/cv-alberto-orsini-it.pdf',
    flowLabel: 'Flusso RAG',
    nav: { label: 'Principale', home: 'home', exp: 'Esperienza', proj: 'Progetti', skills: 'Competenze', contact: 'Contatti' },
    cta: { mail: 'Contattami', cv: 'Scarica il CV', projects: 'Vedi i progetti' },
    contact: { h2: 'Parliamo', text: 'Per parlare di un progetto, di una collaborazione o del codice che trovi qui, scrivimi.' },
    home: {
      title: 'Alberto Orsini · Software Developer e Scrum Master',
      desc: 'Software developer e Scrum Master a Milano, back-end Java: API REST, piattaforme in produzione e un agente AI per la segmentazione. Progetti su GitHub.',
      badgeLabel: 'Java, API REST, Kafka, AI',
      badgeText: 'JAVA · API REST · KAFKA · AI ·',
      tag: 'Java back-end',
      role: 'Software Developer e Scrum Master',
      lead: 'Sono un software developer con una solida base back-end in Java. Sviluppo API REST per una piattaforma di marketing automation, in Continuous Delivery; il progetto più recente è un agente AI per la segmentazione avanzata, integrato nella piattaforma. Nei progetti personali sperimento con RAG, database vettoriali e server MCP.',
      meta: 'Milano · Italiano, inglese',
      about: {
        h2: 'Profilo',
        photoAlt: 'Ritratto di Alberto Orsini',
        photoCap: 'Fig. 01 — Milano',
        p1: 'Dal 2016 lavoro sul back-end di piattaforme in produzione. Dal 2017 sviluppo la Customer Data Platform di Contactlab: fino al 2022 in consulenza, poi da dipendente. Mi occupo di analisi, sviluppo, test e rilascio in Continuous Delivery e sono Scrum Master del team.',
        p2: 'Negli ultimi anni mi occupo anche di AI. Al lavoro ho sviluppato un agente AI per la segmentazione, integrato nella piattaforma. Nei progetti personali ho scritto server MCP, costruito sistemi RAG con database vettoriali e provato via API i modelli di Anthropic, OpenAI e Google DeepMind, oltre ad alcuni modelli locali. Per sviluppare uso Claude Code e GitHub Copilot. I progetti personali sono pubblici su GitHub.',
      },
      work: { h2: 'Progetti', all: 'Tutti i progetti su GitHub ↗' },
      exp: { h2: 'Dal 2016 sul back-end di piattaforme in produzione', all: 'Percorso completo →' },
      skillsH2: 'Competenze',
    },
    expPage: {
      title: 'Esperienza · Alberto Orsini, software developer e Scrum Master',
      desc: 'Esperienza di Alberto Orsini: back-end Java e API REST dal 2016, dal 2017 sulla Customer Data Platform di Contactlab. Scrum Master. Laurea in Informatica.',
      h1: 'Esperienza e formazione',
      intro: 'Dal 2016 lavoro sul back-end di piattaforme in produzione, in Java. Dal 2017 sviluppo la Customer Data Platform di Contactlab: in consulenza fino al 2022, da allora come dipendente.',
      eduH2: 'Formazione',
    },
    projPage: {
      title: 'Progetti · Alberto Orsini, software developer e Scrum Master',
      desc: 'Progetti di Alberto Orsini, software developer: sistema RAG con Google Gemini, agente AI, blog di viaggio in Next.js. Codice su GitHub.',
      h1: 'Progetti',
      intro: 'Tre progetti pubblici su GitHub: un sistema RAG, un agente AI e un blog di viaggio in Next.js.',
      more: 'Altri repository sono su GitHub.',
    },
    nf: { title: 'Pagina non trovata', text: "L'indirizzo non esiste o è stato spostato.", home: 'Torna alla home' },
    jobs: [
      {
        id: 'j-contactlab', dates: 'Nov 2022 – oggi', role: 'Software Developer e Scrum Master', company: 'Contactlab / Soft Strategy',
        short: [
          'Sviluppo il back-end della Customer Data Platform di Contactlab, piattaforma di marketing automation ad alta scalabilità.',
          'Lavoro sui moduli Hub, Plan e Flow e su alcuni componenti della piattaforma Send.',
          'Partecipo ad analisi, sviluppo, test e rilascio di API REST in Java, in Continuous Delivery.',
          'Ho progettato e sviluppato un agente AI specializzato nella segmentazione avanzata, integrato nella piattaforma.',
          'Sono Scrum Master del team.',
        ],
        full: [
          'Sviluppo il back-end della Customer Data Platform di Contactlab, piattaforma di marketing automation ad alta scalabilità.',
          'Lavoro sui moduli Hub, Plan e Flow e su alcuni componenti della piattaforma Send.',
          'Partecipo ad analisi, sviluppo, test e rilascio di API REST in Java, in Continuous Delivery.',
          'Ho progettato e sviluppato un agente AI specializzato nella segmentazione avanzata, integrato nella piattaforma.',
          'Sono Scrum Master del team.',
          'Supporto il Customer Service sui ticket e curo qualità, prestazioni e monitoraggio.',
        ],
        stack: 'Java 25 · Spring Boot · MySQL · Elasticsearch · Kafka · ActiveMQ · Redis · Docker · Kubernetes · Azure · Maven · Git',
      },
      {
        id: 'j-anoki-cl', dates: 'Lug 2017 – Ott 2022', role: 'Software Developer', company: 'Anoki S.r.l., in consulenza presso Contactlab',
        text: 'Ho sviluppato back-end e API REST della stessa piattaforma come consulente, prima dell’assunzione in Contactlab a novembre 2022.',
        full: ['Ho sviluppato back-end e API REST della stessa piattaforma come consulente, prima dell’assunzione in Contactlab a novembre 2022.'],
        stack: 'Java 8 · Spring Boot · Akka · Apache Camel · MySQL · HBase · Vertica · Docker · Maven · Git · Linux',
      },
      {
        id: 'j-anoki-bs', dates: 'Ott 2016 – Giu 2017', role: 'Full-stack Developer', company: 'Anoki S.r.l., in consulenza presso Binari Sonori',
        text: 'BPS (Business Production System): applicazione web per la gestione di progetti di traduzione di testi, audio e video. Back-end in Java, front-end in JSP e JavaScript.',
        full: [
          'BPS (Business Production System): applicazione web per la gestione di progetti di traduzione di testi, audio e video.',
          'Back-end in Java, front-end in JSP e JavaScript.',
          'Ho seguito manutenzione e supporto in contatto diretto con il cliente e rifattorizzato il codice secondo le regole di SonarQube.',
        ],
        stack: 'Java 8 · Spring · Hibernate · SQL Server · JSP · JavaScript · jQuery',
      },
    ],
    edu: { id: 'j-edu', dates: '2012 – 2017', role: 'Laurea in Informatica', company: 'Università degli Studi di Milano-Bicocca', full: 'Laurea in Informatica, Università degli Studi di Milano-Bicocca, 2012–2017.' },
    projects: [
      { tone: 'card--y', kind: 'RAG', name: 'ao-wiki-chat', text: 'Sistema di domande e risposte sui documenti, basato su RAG: i documenti diventano embedding vettoriali e le risposte sono generate con le API di Google Gemini.', flow: flowIt, stack: 'Java · embedding vettoriali · Google Gemini API', repo: 'github.com/orsinialberto/ao-wiki-chat' },
      { tone: 'card--w', kind: 'Agente', name: 'ao-agent', text: 'Agente AI leggero con interfaccia a chat.', stack: 'TypeScript', repo: 'github.com/orsinialberto/ao-agent' },
      { tone: 'card--b', kind: 'Web', name: 'ao-blog', text: 'Il mio blog di viaggio: racconti, foto e consigli.', stack: 'TypeScript · Next.js', repo: 'github.com/orsinialberto/ao-blog' },
    ],
    skills: [
      { hi: true, name: 'Back-end', items: ['Java (8 → 25)', 'Spring Boot', 'Hibernate', 'Apache Camel', 'API REST', 'Akka'] },
      { name: 'Dati e messaggistica', items: ['MySQL', 'Elasticsearch', 'Redis', 'Vertica', 'HBase', 'SQL Server', 'Kafka', 'ActiveMQ'] },
      { name: 'Cloud e DevOps', items: ['Docker', 'Kubernetes', 'Azure', 'Maven', 'Git', 'Graylog', 'Grafana'] },
      { name: 'Metodo', items: ['Scrum (Scrum Master)', 'Continuous Delivery', 'Code review e qualità con SonarQube'] },
      { name: 'AI', items: ['Agenti AI', 'RAG', 'Embedding e database vettoriali', 'Server MCP', 'API LLM: Anthropic, OpenAI, Google DeepMind, modelli locali', 'Prompt engineering', 'Claude Code, GitHub Copilot'] },
      { name: 'Lingue', items: ['Italiano madrelingua', 'Inglese (buono)'] },
    ],
  },
  en: {
    skip: 'Skip to content',
    langLabel: 'Language',
    paletteLabel: 'Colour palette',
    ogAlt: 'Alberto Orsini, software developer and Scrum Master',
    cvHref: '/cv-alberto-orsini-en.pdf',
    flowLabel: 'RAG flow',
    nav: { label: 'Main', home: 'home', exp: 'Experience', proj: 'Projects', skills: 'Skills', contact: 'Contact' },
    cta: { mail: 'Contact me', cv: 'Download CV', projects: 'See the projects' },
    contact: { h2: 'Get in touch', text: 'To talk about a project, a collaboration or the code you find here, write to me.' },
    home: {
      title: 'Alberto Orsini · Software Developer and Scrum Master',
      desc: 'Software developer and Scrum Master in Milan, Java back end: REST APIs, production platforms and an AI agent for segmentation. Projects on GitHub.',
      badgeLabel: 'Java, REST APIs, Kafka, AI',
      badgeText: 'JAVA · REST APIS · KAFKA · AI ·',
      tag: 'Java back-end',
      role: 'Software Developer and Scrum Master',
      lead: 'I am a software developer with a solid Java back-end foundation. I build REST APIs for a marketing automation platform, in Continuous Delivery; my most recent project is an AI agent for advanced segmentation, built into the platform. In personal projects I experiment with RAG, vector databases and MCP servers.',
      meta: 'Milan · Italian, English',
      about: {
        h2: 'About',
        photoAlt: 'Portrait of Alberto Orsini',
        photoCap: 'Fig. 01 — Milan',
        p1: 'I have worked on the back end of production platforms since 2016. Since 2017 I have been developing the Contactlab Customer Data Platform: as a consultant until 2022, then as an employee. I handle analysis, development, testing and release in Continuous Delivery, and I am the team\'s Scrum Master.',
        p2: 'In recent years I have also worked on AI. At work I built an AI agent for segmentation, integrated into the platform. In personal projects I have written MCP servers, built RAG systems with vector databases and tried, through their APIs, models from Anthropic, OpenAI and Google DeepMind, as well as some local models. I use Claude Code and GitHub Copilot to develop. My personal projects are public on GitHub.',
      },
      work: { h2: 'Projects', all: 'All projects on GitHub ↗' },
      exp: { h2: 'Since 2016 on the back end of production platforms', all: 'Full experience →' },
      skillsH2: 'Skills',
    },
    expPage: {
      title: 'Experience · Alberto Orsini, software developer and Scrum Master',
      desc: "Alberto Orsini's experience: Java back end and REST APIs since 2016, on the Contactlab Customer Data Platform since 2017. Scrum Master. BSc Computer Science.",
      h1: 'Experience and education',
      intro: 'Since 2016 I have worked on the back end of production platforms, in Java. Since 2017 I have been developing the Contactlab Customer Data Platform: as a consultant until 2022, as an employee since then.',
      eduH2: 'Education',
    },
    projPage: {
      title: 'Projects · Alberto Orsini, software developer and Scrum Master',
      desc: "Projects by Alberto Orsini, software developer: a RAG system with Google Gemini, an AI agent, a Next.js travel blog. Code on GitHub.",
      h1: 'Projects',
      intro: 'Three public GitHub projects: a RAG system, an AI agent and a Next.js travel blog.',
      more: 'More repositories are on GitHub.',
    },
    nf: { title: 'Page not found', text: 'This address does not exist or has moved.', home: 'Back to home' },
    jobs: [
      {
        id: 'j-contactlab', dates: 'Nov 2022 – present', role: 'Software Developer and Scrum Master', company: 'Contactlab / Soft Strategy',
        short: [
          'I develop the back end of the Contactlab Customer Data Platform, a high-scalability marketing automation platform.',
          'I work on the Hub, Plan and Flow modules and on components of the Send platform.',
          'I take part in the analysis, development, testing and release of Java REST APIs, in Continuous Delivery.',
          'I designed and developed an AI agent specialized in advanced segmentation, integrated into the platform.',
          'I am the team\'s Scrum Master.',
        ],
        full: [
          'I develop the back end of the Contactlab Customer Data Platform, a high-scalability marketing automation platform.',
          'I work on the Hub, Plan and Flow modules and on components of the Send platform.',
          'I take part in the analysis, development, testing and release of Java REST APIs, in Continuous Delivery.',
          'I designed and developed an AI agent specialized in advanced segmentation, integrated into the platform.',
          'I am the team\'s Scrum Master.',
          'I support Customer Service on tickets and look after quality, performance and monitoring.',
        ],
        stack: 'Java 25 · Spring Boot · MySQL · Elasticsearch · Kafka · ActiveMQ · Redis · Docker · Kubernetes · Azure · Maven · Git',
      },
      {
        id: 'j-anoki-cl', dates: 'Jul 2017 – Oct 2022', role: 'Software Developer', company: 'Anoki S.r.l., consulting at Contactlab',
        text: 'As a consultant I developed the back end and REST APIs of the same platform, before Contactlab hired me in November 2022.',
        full: ['As a consultant I developed the back end and REST APIs of the same platform, before Contactlab hired me in November 2022.'],
        stack: 'Java 8 · Spring Boot · Akka · Apache Camel · MySQL · HBase · Vertica · Docker · Maven · Git · Linux',
      },
      {
        id: 'j-anoki-bs', dates: 'Oct 2016 – Jun 2017', role: 'Full-stack Developer', company: 'Anoki S.r.l., consulting at Binari Sonori',
        text: 'BPS (Business Production System): a web application for managing text, audio and video translation projects. Java back end, JSP and JavaScript front end.',
        full: [
          'BPS (Business Production System): a web application for managing text, audio and video translation projects.',
          'Java back end, JSP and JavaScript front end.',
          'I handled maintenance and support in direct contact with the client and refactored the code following SonarQube rules.',
        ],
        stack: 'Java 8 · Spring · Hibernate · SQL Server · JSP · JavaScript · jQuery',
      },
    ],
    edu: { id: 'j-edu', dates: '2012 – 2017', role: "Bachelor's degree in Computer Science", company: 'University of Milano-Bicocca', full: "Bachelor's degree in Computer Science, University of Milano-Bicocca, 2012–2017." },
    projects: [
      { tone: 'card--y', kind: 'RAG', name: 'ao-wiki-chat', text: 'Document Q&A system built on RAG: documents become vector embeddings and answers are generated with the Google Gemini API.', flow: flowEn, stack: 'Java · vector embeddings · Google Gemini API', repo: 'github.com/orsinialberto/ao-wiki-chat' },
      { tone: 'card--w', kind: 'Agent', name: 'ao-agent', text: 'A lightweight AI agent with a chat interface.', stack: 'TypeScript', repo: 'github.com/orsinialberto/ao-agent' },
      { tone: 'card--b', kind: 'Web', name: 'ao-blog', text: 'My travel blog: stories, photos and tips.', stack: 'TypeScript · Next.js', repo: 'github.com/orsinialberto/ao-blog' },
    ],
    skills: [
      { hi: true, name: 'Back-end', items: ['Java (8 → 25)', 'Spring Boot', 'Hibernate', 'Apache Camel', 'REST APIs', 'Akka'] },
      { name: 'Data and messaging', items: ['MySQL', 'Elasticsearch', 'Redis', 'Vertica', 'HBase', 'SQL Server', 'Kafka', 'ActiveMQ'] },
      { name: 'Cloud and DevOps', items: ['Docker', 'Kubernetes', 'Azure', 'Maven', 'Git', 'Graylog', 'Grafana'] },
      { name: 'Way of working', items: ['Scrum (Scrum Master)', 'Continuous Delivery', 'Code review and quality with SonarQube'] },
      { name: 'AI', items: ['AI agents', 'RAG', 'Embeddings and vector databases', 'MCP servers', 'LLM APIs: Anthropic, OpenAI, Google DeepMind, local models', 'Prompt engineering', 'Claude Code, GitHub Copilot'] },
      { name: 'Languages', items: ['Italian (native)', 'English (good)'] },
    ],
  },
};
