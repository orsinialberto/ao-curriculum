const translations = {
    it: {
        // Navigation
        nav: {
            cv: "CV",
            profile: "PROFILO",
            experience: "ESPERIENZE",
            education: "FORMAZIONE",
            skills: "COMPETENZE",
            projects: "PROGETTI",
            contact: "CONTATTI"
        },
        // Sections
        sections: {
            profile: "Profilo",
            experience: "Esperienza Professionale",
            education: "Formazione",
            skills: "Competenze Tecniche",
            projects: "Progetti",
            contact: "Contatti"
        },
        // Profile
        profile: {
            role: "Web Developer",
            description: "Back-end Engineer con esperienza in Java e sviluppo di API REST. Contribuisco all'evoluzione tecnica del prodotto e supporto il team come Scrum Master in contesti Agile, favorendo qualità, collaborazione e miglioramento continuo.",
            description2: "Negli ultimi mesi sto approfondendo le tecnologie legate all'AI: utilizzo di strumenti di sviluppo assistito (Cursor, Copilot), implementazione di server MCP, progettazione di sistemi RAG basati su database vettoriali, prompt engineering e integrazione con modelli linguistici tramite API LLM"
        },
        // Education
        education: {
            degree: "Laurea in Informatica - classe delle lauree in scienze e tecnologie informatiche",
            institution: "Università degli studi di Milano - Bicocca",
            period: "2012 - 2017"
        },
        // Footer
        footer: {
            email: "Email",
            phone: "Phone",
            address: "Indirizzo",
            downloadCv: "Download CV",
            copyright: "© 2025 Alberto Orsini. Tutti i diritti riservati.",
            addressValue: "Via privata Casentino, 6, Milano (MI), 20159"
        },
        // Common
        common: {
            loading: "Caricamento progetti...",
            seeOnGithub: "Vedi su GitHub",
            updated: "Aggiornato",
            close: "Chiudi",
            experience: "Esperienza",
            category: "Categoria",
            noDescription: "Nessuna descrizione disponibile"
        },
        // Terminal
        terminal: {
            title: "Terminal — bash"
        },
        // Experience terminal content
        experience: {
            command: 'git log --graph --decorate --all',
            role1: "Software Developer / Scrum Master",
            company1: "ContactLab / Team System",
            description1: "Sviluppo back-end della Customer Data Platform Contactlab, piattaforma di marketing automation ad alta scalabilità. Contributo ai moduli Hub, Plan, Flow e a componenti del sistema Send. Attività di analisi, sviluppo, testing e rilascio di API REST in Java in contesto Continuous Delivery. Facilitazione delle cerimonie Scrum e supporto al team come Scrum Master. Collaborazione con Customer Service per analisi e risoluzione ticket. Adozione di best practice su qualità, performance e monitoraggio.",
            role2: "Software Developer",
            company2: "Anoki Srl / Consulenza presso ContactLab",
            description2: "Consulenza presso Contactlab con focus su sviluppo back-end e API REST. Attività simili alla posizione attuale con focus su sviluppo e manutenzione della piattaforma.",
            role3: "Fullstack Developer",
            company3: "Anoki Srl / Consulenza presso Binari Sonori",
            description3: "Initial commit: Sviluppo del sistema BPS (Business Production System) per gestione progetti di traduzione multimediale. Implementazione back-end (Java) e front-end (JSP, JavaScript). Manutenzione applicativa e supporto diretto al cliente. Refactoring e ottimizzazione del codice seguendo SonarQube."
        },
        // Skills panel
        skills: {
            categories: {
                "programming-languages": "Linguaggi di Programmazione",
                frameworks: "Framework",
                database: "Database & Storage",
                devops: "DevOps & Cloud",
                "development-tools": "Strumenti di Sviluppo",
                messaging: "Messaging & Streaming",
                monitoring: "Monitoring & Logging",
                "operating-systems": "Sistemi Operativi",
                softskills: "Soft Skills",
                languages: "Lingue",
                all: "Tutte le competenze"
            },
            experienceLabel: "Esperienza",
            categoryLabel: "Categoria",
            itemsCount: "elementi",
            skillsCount: "competenze",
            noItems: "Nessun elemento trovato.",
            center: "Competenze",
            categoryNames: {
                "programming-languages": "Linguaggi",
                frameworks: "Framework",
                database: "Database",
                devops: "DevOps",
                "development-tools": "Dev Tools",
                messaging: "Messaging",
                monitoring: "Monitoring",
                "operating-systems": "OS",
                softskills: "Soft Skills",
                languages: "Lingue"
            },
            // Skill descriptions
            skills: {
                java: { description: "Linguaggio principale per lo sviluppo back-end. Esperienza con Java 8, 11 e 17.", experience: "8+ anni" },
                springboot: { description: "Framework per lo sviluppo di applicazioni enterprise e API REST.", experience: "7+ anni" },
                camel: { description: "Framework di integrazione per la gestione di pattern enterprise.", experience: "7+ anni" },
                mysql: { description: "Database relazionale principale per applicazioni enterprise.", experience: "7+ anni" },
                vertica: { description: "Database analitico per big data e data warehousing.", experience: "3+ anni" },
                elasticsearch: { description: "Motore di ricerca e analisi distribuito per dati non strutturati.", experience: "5+ anni" },
                redis: { description: "In-memory data store per cache e session management.", experience: "1+ anni" },
                sqlserver: { description: "Database relazionale Microsoft per applicazioni enterprise.", experience: "1+ anni" },
                hbase: { description: "Database NoSQL distribuito per big data basato su Hadoop.", experience: "1+ anni" },
                docker: { description: "Containerizzazione di applicazioni per deployment e sviluppo.", experience: "7+ anni" },
                kubernetes: { description: "Orchestrazione di container per applicazioni distribuite.", experience: "1+ anni" },
                azure: { description: "Piattaforma cloud per deployment e servizi gestiti.", experience: "5+ anni" },
                git: { description: "Sistema di versionamento del codice e collaborazione.", experience: "8+ anni" },
                maven: { description: "Build automation e dependency management per progetti Java.", experience: "7+ anni" },
                intellij: { description: "IDE principale per lo sviluppo Java e Spring.", experience: "7+ anni" },
                vscode: { description: "Editor di codice sorgente leggero e personalizzabile.", experience: "1+ anni" },
                cursor: { description: "Editor di codice con AI integrata per sviluppo assistito.", experience: "1+ anno" },
                kafka: { description: "Piattaforma di streaming per eventi e messaggistica distribuita.", experience: "6+ anni" },
                activemq: { description: "Message broker per comunicazione asincrona tra servizi.", experience: "7+ anni" },
                graylog: { description: "Piattaforma di log management e analisi.", experience: "6+ anni" },
                grafana: { description: "Piattaforma open-source per monitoring, visualizzazione e analisi di metriche.", experience: "7+ anni" },
                linux: { description: "Sistema operativo principale per sviluppo e deployment.", experience: "8+ anni" },
                macos: { description: "Ambiente di sviluppo desktop.", experience: "8+ anni" },
                windows: { description: "Sistema operativo Microsoft per sviluppo e deployment.", experience: "8+ anni" },
                leadership: { name: "Leadership", description: "Scrum Master con esperienza nella facilitazione di team e cerimonie Agile.", experience: "Esperienza" },
                "problem-solving": { name: "Problem Solving", description: "Analisi e risoluzione di problemi complessi in contesti ad alta scalabilità.", experience: "Esperienza" },
                communication: { name: "Comunicazione", description: "Collaborazione efficace con team multidisciplinari e stakeholder.", experience: "Esperienza" },
                adaptability: { name: "Adattabilità", description: "Flessibilità nel gestire cambiamenti e nuove tecnologie.", experience: "Esperienza" },
                teamwork: { name: "Teamwork", description: "Collaborazione efficace in team distribuiti e multidisciplinari.", experience: "Esperienza" },
                quality: { name: "Focus sulla Qualità", description: "Best practices, testing e monitoraggio per garantire eccellenza.", experience: "Esperienza" },
                italiano: { description: "Lingua madre. Competenza completa in scrittura, lettura e conversazione.", experience: "Madrelingua" },
                inglese: { description: "Livello intermedio. Competenza nella lettura di documentazione tecnica e comunicazione professionale.", experience: "Intermedio" }
            }
        },
        // Projects
        projects: {
            error: {
                title: "Errore nel caricamento dei progetti",
                rateLimit: "Limite API GitHub raggiunto",
                rateLimitMessage: "Hai superato il limite di chiamate giornaliere all'API di GitHub.",
                visitProfile: "Visita il mio profilo GitHub per vedere i progetti.",
                usingCache: "⚠️ Limite API GitHub raggiunto. Mostro progetti dalla cache.",
                cacheWarning: "I dati potrebbero non essere aggiornati.",
                errorCache: "⚠️ Errore nel caricamento. Mostro progetti dalla cache."
            }
        }
    },
    en: {
        // Navigation
        nav: {
            cv: "Curriculum Vitae",
            profile: "PROFILE",
            experience: "EXPERIENCE",
            education: "EDUCATION",
            skills: "SKILLS",
            projects: "PROJECTS",
            contact: "CONTACT"
        },
        // Sections
        sections: {
            profile: "Profile",
            experience: "Professional Experience",
            education: "Education",
            skills: "Technical Skills",
            projects: "Projects",
            contact: "Contact"
        },
        // Profile
        profile: {
            role: "Web Developer",
            description: "Back-end Engineer with experience in Java and REST API development. I contribute to the technical evolution of the product and support the team as Scrum Master in Agile contexts, fostering quality, collaboration, and continuous improvement.",
            description2: "In recent months I have been exploring AI-related technologies: use of assisted development tools (Cursor, Copilot), implementation of MCP servers, design of RAG systems based on vector databases, prompt engineering and integration with language models via LLM APIs"
        },
        // Education
        education: {
            degree: "Bachelor's Degree in Computer Science - Computer Science and Technologies",
            institution: "University of Milan - Bicocca",
            period: "2012 - 2017"
        },
        // Footer
        footer: {
            email: "Email",
            phone: "Phone",
            address: "Address",
            downloadCv: "Download CV",
            copyright: "© 2025 Alberto Orsini. All rights reserved.",
            addressValue: "Via privata Casentino, 6, Milano (MI), 20159"
        },
        // Common
        common: {
            loading: "Loading projects...",
            seeOnGithub: "View on GitHub",
            updated: "Updated",
            close: "Close",
            experience: "Experience",
            category: "Category",
            noDescription: "No description available"
        },
        // Terminal
        terminal: {
            title: "Terminal — bash"
        },
        // Experience terminal content
        experience: {
            command: 'git log --graph --decorate --all',
            role1: "Software Developer / Scrum Master",
            company1: "ContactLab / Team System",
            description1: "Back-end development of Contactlab's Customer Data Platform, a high-scalability marketing automation platform. Contribution to Hub, Plan, Flow modules and Send system components. Analysis, development, testing, and release of REST APIs in Java in a Continuous Delivery context. Facilitation of Scrum ceremonies and team support as Scrum Master. Collaboration with Customer Service for ticket analysis and resolution. Adoption of best practices on quality, performance, and monitoring.",
            role2: "Software Developer",
            company2: "Anoki Srl / Consulting at ContactLab",
            description2: "Consulting at Contactlab with focus on back-end development and REST APIs. Similar activities to the current position with focus on development and platform maintenance.",
            role3: "Fullstack Developer",
            company3: "Anoki Srl / Consulting at Binari Sonori",
            description3: "Initial commit: Development of the BPS (Business Production System) for managing multimedia translation projects. Back-end (Java) and front-end (JSP, JavaScript) implementation. Application maintenance and direct customer support. Code refactoring and optimization following SonarQube."
        },
        // Skills panel
        skills: {
            categories: {
                "programming-languages": "Programming Languages",
                frameworks: "Frameworks",
                database: "Database & Storage",
                devops: "DevOps & Cloud",
                "development-tools": "Development Tools",
                messaging: "Messaging & Streaming",
                monitoring: "Monitoring & Logging",
                "operating-systems": "Operating Systems",
                softskills: "Soft Skills",
                languages: "Languages",
                all: "All Skills"
            },
            experienceLabel: "Experience",
            categoryLabel: "Category",
            itemsCount: "items",
            skillsCount: "skills",
            noItems: "No items found.",
            center: "Skills",
            categoryNames: {
                "programming-languages": "Languages",
                frameworks: "Frameworks",
                database: "Database",
                devops: "DevOps",
                "development-tools": "Dev Tools",
                messaging: "Messaging",
                monitoring: "Monitoring",
                "operating-systems": "OS",
                softskills: "Soft Skills",
                languages: "Human Languages"
            },
            // Skill descriptions
            skills: {
                java: { description: "Main language for back-end development. Experience with Java 8, 11, and 17.", experience: "8+ years" },
                springboot: { description: "Framework for developing enterprise applications and REST APIs.", experience: "7+ years" },
                camel: { description: "Integration framework for managing enterprise patterns.", experience: "7+ years" },
                mysql: { description: "Main relational database for enterprise applications.", experience: "7+ years" },
                vertica: { description: "Analytical database for big data and data warehousing.", experience: "3+ years" },
                elasticsearch: { description: "Distributed search and analytics engine for unstructured data.", experience: "5+ years" },
                redis: { description: "In-memory data store for cache and session management.", experience: "1+ years" },
                sqlserver: { description: "Microsoft relational database for enterprise applications.", experience: "1+ years" },
                hbase: { description: "Distributed NoSQL database for big data based on Hadoop.", experience: "1+ years" },
                docker: { description: "Application containerization for deployment and development.", experience: "7+ years" },
                kubernetes: { description: "Container orchestration for distributed applications.", experience: "1+ years" },
                azure: { description: "Cloud platform for deployment and managed services.", experience: "5+ years" },
                git: { description: "Code versioning system and collaboration.", experience: "8+ years" },
                maven: { description: "Build automation and dependency management for Java projects.", experience: "7+ years" },
                intellij: { description: "Main IDE for Java and Spring development.", experience: "7+ years" },
                vscode: { description: "Lightweight and customizable source code editor.", experience: "1+ years" },
                cursor: { description: "Code editor with integrated AI for assisted development.", experience: "1+ year" },
                kafka: { description: "Streaming platform for events and distributed messaging.", experience: "6+ years" },
                activemq: { description: "Message broker for asynchronous communication between services.", experience: "7+ years" },
                graylog: { description: "Log management and analytics platform.", experience: "6+ years" },
                grafana: { description: "Open-source platform for monitoring, visualization and metrics analysis.", experience: "7+ years" },
                linux: { description: "Main operating system for development and deployment.", experience: "8+ years" },
                macos: { description: "Desktop development environment.", experience: "8+ years" },
                windows: { description: "Microsoft operating system for development and deployment.", experience: "8+ years" },
                leadership: { name: "Leadership", description: "Scrum Master with experience in team facilitation and Agile ceremonies.", experience: "Experience" },
                "problem-solving": { name: "Problem Solving", description: "Analysis and resolution of complex problems in high-scalability contexts.", experience: "Experience" },
                communication: { name: "Communication", description: "Effective collaboration with multidisciplinary teams and stakeholders.", experience: "Experience" },
                adaptability: { name: "Adaptability", description: "Flexibility in managing changes and new technologies.", experience: "Experience" },
                teamwork: { name: "Teamwork", description: "Effective collaboration in distributed and multidisciplinary teams.", experience: "Experience" },
                quality: { name: "Focus on Quality", description: "Best practices, testing, and monitoring to ensure excellence.", experience: "Experience" },
                italiano: { description: "Native language. Full proficiency in writing, reading, and conversation.", experience: "Native" },
                inglese: { description: "Intermediate level. Proficiency in reading technical documentation and professional communication.", experience: "Intermediate" }
            }
        },
        // Projects
        projects: {
            error: {
                title: "Error loading projects",
                rateLimit: "GitHub API rate limit reached",
                rateLimitMessage: "You have exceeded the daily API call limit for GitHub.",
                visitProfile: "Visit my GitHub profile to see the projects.",
                usingCache: "⚠️ GitHub API rate limit reached. Showing projects from cache.",
                cacheWarning: "Data may not be up to date.",
                errorCache: "⚠️ Error loading. Showing projects from cache."
            }
        }
    }
};

