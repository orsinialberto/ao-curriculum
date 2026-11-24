// Contenuto del CV (IT/EN). Nato dai documenti Pages originali (Documents/curriculum/cv-alberto-orsini-*.pages),
// poi rivisto nella forma: lavoro attuale al presente, lavori passati al passato, nomi delle tecnologie nella grafia ufficiale.
// Generazione PDF: npm run cv

const contacts = {
  email: 'orsini.alberto@hotmail.it',
  phone: '+39 349 216 9097',
  linkedin: 'linkedin.com/in/alberto-orsini-51219813a',
  linkedinHref: 'https://www.linkedin.com/in/alberto-orsini-51219813a',
  site: 'curriculum.albertorsini.it',
  siteHref: 'https://curriculum.albertorsini.it',
  address: ['Via privata Casentino, 6', '20159 Milano (MI)'],
};

// Tecnologie dei due lavori: la lista è la stessa nelle due lingue, cambia solo "fino alla" / "up to"
const techContactlab = (upTo) => `Java (${upTo} 25), Spring Boot (${upTo} 4.x), Hibernate, Akka, Apache Camel, Go, Python, MySQL, Elasticsearch 7.x, Vertica 8.x, HBase, ActiveMQ, Kafka 2.x, Redis, Maven, Git, IntelliJ IDEA, Visual Studio Code, Docker, Kubernetes, Microsoft Azure, Kibana, Graylog, Linux, Windows.`;
const techBps = 'Java 8, Spring, Hibernate, SQL Server, Git, Eclipse, JSP, JavaScript, jQuery, HTML, CSS, Windows.';

export const cv = {
  it: {
    lang: 'it',
    title: 'Alberto Orsini · Curriculum vitae',
    tag: 'Curriculum vitae',
    role: 'Software Developer e Scrum Master',
    contacts,
    labels: {
      contacts: 'Contatti', email: 'Email', phone: 'Telefono', linkedin: 'LinkedIn', site: 'Sito web', address: 'Indirizzo',
      profile: 'Profilo', skills: 'Competenze', education: 'Istruzione', experience: 'Esperienza professionale',
      languages: 'Lingue', personal: 'Dati personali', activities: 'Interessi', tech: 'Tecnologie utilizzate', qr: 'Il sito', page: 'Pagina', photo: 'Fig. 01 — Milano',
    },
    profile: 'Sviluppatore software laureato in Informatica, con esperienza sia in consulenza sia in azienda. Mi occupo soprattutto di progettazione e sviluppo di API REST in Java, in team Agile/Scrum. Ho ricoperto anche il ruolo di Scrum Master, contribuendo all’organizzazione del team e al miglioramento dei processi.',
    skills: [
      ['Linguaggi di programmazione', 'Java, con ottima padronanza fino alla versione 25; conoscenza di base di Go e Python.'],
      ['Framework', 'Spring Boot (fino alla versione 4.x), Hibernate e Apache Camel.'],
      ['Database e messaggistica', 'MySQL, Vertica (database analitico) ed Elasticsearch; sistemi di messaggistica e code Kafka e ActiveMQ.'],
      ['Container e orchestrazione', 'Docker e Kubernetes.'],
      ['Strumenti', 'Git, IntelliJ IDEA, Cursor e Maven.'],
      ['Sistemi operativi', 'Linux, macOS e Windows.'],
      ['AI', 'in Contactlab ho sviluppato un agente AI per la segmentazione avanzata. Nei progetti personali: server MCP, sistemi RAG con database vettoriali, test via API dei modelli di Anthropic, OpenAI e Google DeepMind e di modelli locali; sviluppo con Claude Code e GitHub Copilot.', true],
      ['Lavoro in team', 'lavoro per obiettivi con metodologia Agile e framework Scrum. Affianco il Product Owner nelle attività chiave del team: scrittura dei ticket, pianificazione degli sprint, conduzione delle retrospettive e Product Backlog Refinement (PBR).'],
    ],
    education: { school: 'Università degli Studi di Milano-Bicocca', degree: 'Laurea in Informatica (classe L‑31, Scienze e tecnologie informatiche)', dates: '2012 – 2017' },
    jobs: [
      {
        employers: [['Contactlab S.p.A., Soft Strategy', 'Nov. 2022 – oggi'], ['Anoki S.r.l., in consulenza presso Contactlab S.p.A.', 'Lug. 2017 – Ott. 2022']],
        role: 'Software Developer',
        bullets: [
          'Sviluppo il back-end della Customer Data Platform di Contactlab, piattaforma di marketing automation: in particolare i moduli Hub, Plan e Flow e alcuni componenti della piattaforma Send.',
          'Partecipo ad analisi, sviluppo, test e rilascio di API REST in Java, in Continuous Delivery.',
          'Ho progettato e sviluppato un agente AI specializzato nella segmentazione avanzata, integrato nella piattaforma.',
          'Collaboro direttamente con il Customer Service nelle attività di supporto.',
          'Sono Scrum Master del team, che lavora con metodologia Agile e framework Scrum.',
        ],
        tech: techContactlab('fino alla'),
      },
      {
        employers: [['Anoki S.r.l., in consulenza presso Binari Sonori', 'Ott. 2016 – Giu. 2017']],
        role: 'Full-stack Developer',
        bullets: [
          'Ho lavorato come sviluppatore full-stack al progetto BPS (Business Production System), applicazione web per la gestione di progetti di traduzione di testi, audio e video.',
          'Ho realizzato componenti back-end in Java e pagine web in JSP e JavaScript.',
          'Ho seguito supporto e manutenzione, in contatto diretto con il cliente.',
          'Ho ottimizzato e rifattorizzato il codice secondo le regole di SonarQube.',
        ],
        tech: techBps,
      },
    ],
    languages: [['Italiano', 'madrelingua'], ['Inglese', 'buono']],
    personal: ['Nato il 9 luglio 1991', 'Nazionalità italiana'],
    activities: 'Snowboard, motociclismo, cammini con lo zaino in spalla, viaggi, basket.',
  },
  en: {
    lang: 'en',
    title: 'Alberto Orsini · Curriculum vitae',
    tag: 'Curriculum vitae',
    role: 'Software Developer and Scrum Master',
    contacts,
    labels: {
      contacts: 'Contacts', email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', site: 'Website', address: 'Address',
      profile: 'Profile', skills: 'Skills', education: 'Education', experience: 'Professional experience',
      languages: 'Languages', personal: 'Personal details', activities: 'Interests', tech: 'Technologies used', qr: 'The site', page: 'Page', photo: 'Fig. 01 — Milan',
    },
    profile: 'Software developer with a degree in Computer Science and experience in both consulting and in-house roles. I mainly design and develop REST APIs in Java, in Agile/Scrum teams. I have also served as Scrum Master, contributing to team organization and process improvement.',
    skills: [
      ['Programming languages', 'Java, with strong proficiency up to version 25; basic knowledge of Go and Python.'],
      ['Frameworks', 'Spring Boot (up to version 4.x), Hibernate and Apache Camel.'],
      ['Databases and messaging', 'MySQL, Vertica (analytical database) and Elasticsearch; Kafka and ActiveMQ messaging and queue systems.'],
      ['Containers and orchestration', 'Docker and Kubernetes.'],
      ['Tools', 'Git, IntelliJ IDEA, Cursor and Maven.'],
      ['Operating systems', 'Linux, macOS and Windows.'],
      ['AI', 'at Contactlab I built an AI agent for advanced segmentation. In personal projects: MCP servers, RAG systems with vector databases, API testing of models from Anthropic, OpenAI and Google DeepMind and of local models; I develop with Claude Code and GitHub Copilot.', true],
      ['Teamwork', 'goal-oriented work with Agile methodology and the Scrum framework. I support the Product Owner in key team activities: writing tickets, sprint planning, running retrospectives and Product Backlog Refinement (PBR).'],
    ],
    education: { school: 'University of Milano-Bicocca', degree: 'Bachelor’s degree in Computer Science (class L‑31, Computer Science and Technology)', dates: '2012 – 2017' },
    jobs: [
      {
        employers: [['Contactlab S.p.A., Soft Strategy', 'Nov. 2022 – present'], ['Anoki S.r.l., consulting at Contactlab S.p.A.', 'Jul. 2017 – Oct. 2022']],
        role: 'Software Developer',
        bullets: [
          'I develop the back end of Contactlab’s Customer Data Platform, a marketing automation platform: in particular the Hub, Plan and Flow modules and components of the Send platform.',
          'I take part in the analysis, development, testing and release of REST APIs in Java, in Continuous Delivery.',
          'I designed and developed an AI agent specialized in advanced segmentation, integrated into the platform.',
          'I work directly with Customer Service on support activities.',
          'I am the Scrum Master of the team, which works with Agile methodology and the Scrum framework.',
        ],
        tech: techContactlab('up to'),
      },
      {
        employers: [['Anoki S.r.l., consulting at Binari Sonori', 'Oct. 2016 – Jun. 2017']],
        role: 'Full-stack Developer',
        bullets: [
          'I worked as a full-stack developer on the BPS (Business Production System) project, a web application for managing translation projects for text, audio and video.',
          'I built back-end components in Java and web pages in JSP and JavaScript.',
          'I handled support and maintenance, working directly with the client.',
          'I optimized and refactored the code following SonarQube rules.',
        ],
        tech: techBps,
      },
    ],
    languages: [['Italian', 'native'], ['English', 'good']],
    personal: ['Born 9 July 1991', 'Italian nationality'],
    activities: 'Snowboarding, motorcycling, backpacking, travel, basketball.',
  },
};
