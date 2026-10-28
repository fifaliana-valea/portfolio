/**
 * Contenu bilingue du portfolio — source unique de vérité.
 * Modifier ici les textes, expériences, projets et compétences.
 * Ne pas traduire : noms propres, technologies, entreprises, URLs.
 */
window.PORTFOLIO_CONTENT = {
  meta: {
    name: "Fifaliana Valea",
    fullName: "Razakarimalala Fifaliana Valea",
    title: { fr: "Développeuse Full-Stack Web Junior", en: "Junior Full-Stack Web Developer" },
    location: { fr: "Antananarivo, Madagascar", en: "Antananarivo, Madagascar" },
    email: "valeafifaliana@gmail.com",
    phone: "+261 34 20 235 43",
    phoneHref: "+261342023543",
    links: {
      portfolio: "https://fifalianavalea.vercel.app/",
      github: "https://github.com/fifaliana-valea",
      linkedin: "https://www.linkedin.com/in/fifaliana-valea-razakarimalala-603360350/",
      cv: "files/CV_Fifaliana_Valea.pdf"
    }
  },

  ui: {
    fr: {
      nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        experience: "Expériences",
        projects: "Projets",
        education: "Formation",
        contact: "Contact",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        themeLight: "Passer en mode clair",
        themeDark: "Passer en mode sombre",
        langSwitch: "Passer en anglais",
        skip: "Aller au contenu principal"
      },
      hero: {
        greeting: "Bonjour, je suis",
        title: "Développeuse Full-Stack Web Junior",
        tagline:
          "Jeune développeuse full-stack, récemment diplômée d'une Licence en Informatique (IT University, 2025). De septembre 2025 à mars 2026, j'ai contribué à des applications web métier chez Adrware Consulting — Symfony, Angular, TypeScript, API REST, exports PDF/Excel et billetterie dynamique. Curieuse, rigoureuse et orientée équipe, je recherche aujourd'hui un premier poste en CDI pour continuer à apprendre et livrer des solutions concrètes.",
        ctaProjects: "Découvrir mes projets",
        ctaContact: "Me contacter",
        ctaCv: "Télécharger mon CV",
        socialGithub: "Profil GitHub",
        socialLinkedin: "Profil LinkedIn"
      },
      about: {
        title: "À propos",
        lead:
          "Développeuse Full-Stack Web Junior, diplômée d'une Licence en Informatique, option Web et Design, à IT University (2025). Je conçois et fais évoluer des applications web métier, du back-end à l'interface, en m'appuyant sur des technologies comme Symfony, PHP, Angular et TypeScript.",
        body:
          "De septembre 2025 à mars 2026, chez Adrware Consulting, j'ai participé à la maintenance et à l'évolution d'applications existantes : correction de bugs, développement de nouvelles fonctionnalités, intégration d'API REST, exports de données et systèmes de billetterie. J'apprécie particulièrement les projets où je peux comprendre le besoin métier, proposer une solution technique claire et la livrer avec rigueur. Je suis aujourd'hui à la recherche d'un premier poste en CDI pour approfondir mes compétences et m'investir durablement dans une équipe.",
        qualitiesTitle: "Approche professionnelle",
        qualities:
          "Collaborative et méthodique, je m'intègre rapidement dans une équipe, partage volontiers mes connaissances et m'adapte aux contextes techniques. Orientée résultats, je privilégie la clarté du code, la rigueur et l'amélioration continue — des valeurs que j'applique aussi bien en autonomie qu'en travail collectif.",
        languagesTitle: "Langues",
        languages: [
          { name: "Malgache", level: "Langue maternelle" },
          { name: "Français", level: "Niveau opérationnel B2" },
          { name: "Anglais", level: "Niveau intermédiaire B1" }
        ]
      },
      skills: {
        title: "Compétences",
        subtitle: "Technologies et pratiques utilisées dans mes projets académiques et professionnels.",
        categories: [
          {
            id: "frontend",
            title: "Front-End & Mobile",
            items: ["React Native", "Angular", "React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
          },
          {
            id: "backend",
            title: "Back-End",
            items: ["PHP", "Symfony", "Laravel", "Java", "Spring Boot", "C#", "ASP.NET Core"]
          },
          {
            id: "databases",
            title: "Bases de données",
            items: ["SQL", "PostgreSQL", "MySQL", "MariaDB", "SQL Server", "Oracle", "MongoDB", "Firebase"]
          },
          {
            id: "devops",
            title: "Outils & DevOps",
            items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Composer", "Maven", "Trello"]
          },
          {
            id: "architecture",
            title: "Architecture, Intégration & Automatisation",
            items: [
              "API REST",
              "JSON",
              "JWT",
              "MVC",
              "POO",
              "Authentification API",
              "Intégration de systèmes",
              "Automatisation de workflows"
            ]
          },
          {
            id: "languages",
            title: "Langages de programmation",
            items: ["Java", "C#", "PHP", "JavaScript", "TypeScript", "Python", "SQL"]
          }
        ]
      },
      experience: {
        title: "Expériences professionnelles",
        subtitle: "Contributions passées au sein d'Adrware Consulting sur des applications métier.",
        items: [
          {
            id: "ubix-solar",
            role: "Développeuse Web",
            company: "Adrware Consulting",
            project: "UBIX-SOLAR",
            period: "Septembre 2025 – Mars 2026",
            ended: true,
            technologies: ["Angular", "TypeScript", "Symfony", "PHP", "REST API"],
            description:
              "Application web métier destinée aux professionnels des installations photovoltaïques, existante et en constante évolution, à laquelle j'ai contribué au sein de l'équipe de développement.",
            missions: [
              "Participation à la gestion et à l'amélioration des workflows métier existants afin de faciliter le suivi des tâches, des documents et des validations.",
              "Analyse et correction de bugs afin d'améliorer la stabilité et la fiabilité de l'application.",
              "Développement et intégration de nouvelles fonctionnalités selon les besoins du projet.",
              "Amélioration et adaptation de fonctionnalités existantes.",
              "Respect des rôles, permissions et autorisations déjà définis dans l'application.",
              "Intervention sur différents workflows et processus métier existants.",
              "Gestion et suivi des échanges, documents et validations.",
              "Gestion collaborative des tâches : attribution, suivi et commentaires.",
              "Développement de fonctionnalités d'export des données et rapports en PDF, Excel et autres formats.",
              "Utilisation d'API REST pour les échanges entre les différentes parties de l'application.",
              "Travail sur un projet existant nécessitant la compréhension d'une architecture et de règles métier déjà établies."
            ]
          },
          {
            id: "aiolia-event",
            role: "Développeuse Full-Stack",
            company: "Adrware Consulting",
            project: "AIOLIA-EVENT",
            period: "Octobre 2025 – Janvier 2026",
            ended: true,
            technologies: ["Symfony", "PHP", "PostgreSQL", "REST API"],
            description:
              "Développement d'une application de gestion d'événements avec billetterie dynamique, au sein d'Adrware Consulting.",
            missions: [
              "Développement d'une application de gestion d'événements.",
              "Gestion complète des événements : CRUD, médias, catégorisation, duplication et détection de conflits.",
              "Développement d'un système de billetterie dynamique.",
              "Gestion des quotas, QR codes uniques, ventes en temps réel et alertes de stock.",
              "Gestion des promotions et codes promotionnels.",
              "Suivi des modifications de prix.",
              "Développement et utilisation d'API REST.",
              "Travail avec PostgreSQL et architecture backend Symfony."
            ]
          }
        ]
      },
      projects: {
        title: "Projets",
        subtitle: "Projets académiques et techniques illustrant mon parcours de développement.",
        viewDetails: "Voir les détails",
        hideDetails: "Masquer les détails",
        viewGithub: "Voir sur GitHub",
        illustrativeNote: "Visuel illustratif",
        academicLabel: "Projet académique — IT University",
        items: [
          {
            id: "erpnext",
            academic: true,
            title: "Synchronisation RH entre ERPNext et application .NET",
            date: "Juin 2025",
            image: "assets/images/project-erp.jpg",
            imageAlt: "Visuel illustratif d'un tableau de bord analytique sur ordinateur",
            technologies: ["ERPNext", "ASP.NET Core", "C#", "REST API", "SQL"],
            summary:
              "Projet basé sur un ERP existant avec développement d'une application .NET permettant l'échange et la synchronisation de données RH.",
            features: [
              "API sécurisée pour l'authentification via les comptes ERPNext",
              "Importation et validation de fichiers CSV (employés, salaires, fiches de paie)",
              "Statistiques et tableaux de suivi des données RH"
            ],
            details: [
              "Développement d'une API sécurisée pour l'authentification via les comptes ERPNext.",
              "Communication avec les services d'un ERP existant.",
              "Importation de fichiers CSV contenant les données des employés, salaires et fiches de paie.",
              "Validation des données et des formats, notamment les dates.",
              "Réinitialisation et mise à jour des données existantes avant import.",
              "Gestion des données liées aux employés, salaires et fiches de paie.",
              "Génération et mise à jour des données.",
              "Création de statistiques et tableaux de suivi."
            ],
            links: [{ label: "GitHub", url: "https://github.com/fifaliana-valea/ERPNextNewApp" }]
          },
          {
            id: "cryptomonai",
            academic: true,
            title: "Cryptomonaï — Plateforme de gestion de cryptomonnaies",
            date: "Décembre 2024 – Février 2025",
            image: "assets/images/project-crypto.jpg",
            imageAlt: "Visuel illustratif lié aux cryptomonnaies et à la finance numérique",
            technologies: ["React Native", "Java", "Spring Boot", "Laravel", "REST API", "Docker", "Firebase"],
            summary:
              "Plateforme multi-couches de gestion de cryptomonnaies : API Spring Boot, interface Laravel et application mobile React Native.",
            features: [
              "API REST sécurisée par JWT et logique métier Spring Boot",
              "Tableau de bord analytique Laravel",
              "Application mobile React Native avec notifications push"
            ],
            details: [
              "Backend avec Spring Boot : API REST sécurisée par JWT, gestion des transactions et logique métier.",
              "Frontend avec Laravel : interface responsive, tableau de bord analytique et visualisation des données.",
              "Application mobile avec React Native : suivi de portefeuille en temps réel et notifications push.",
              "Déploiement et sécurité : conteneurisation Docker et intégration de Firebase pour l'authentification utilisateur."
            ],
            links: [
              { label: "Utilisateur", url: "https://github.com/TsitoNyAvoSoaRazaFindrakoto/utilisateur" },
              { label: "Laravel", url: "https://github.com/TsitoNyAvoSoaRazaFindrakoto/laravel-tier" },
              { label: "Mobile", url: "https://github.com/TsitoNyAvoSoaRazaFindrakoto/Crypta-mobile" }
            ]
          },
          {
            id: "projet-sprint",
            academic: true,
            title: "Projet Sprint — Framework Java personnalisé",
            date: null,
            image: "assets/images/project-java.jpg",
            imageAlt: "Visuel illustratif de code source sur un écran",
            technologies: ["Java", "Spring MVC", "Annotations", "POO"],
            summary:
              "Framework Java personnalisé inspiré de Spring MVC, conçu pour simplifier le développement d'applications web et comprendre les mécanismes fondamentaux d'un framework web.",
            features: [
              "Découverte des contrôleurs via init-param",
              "Routage GET basé sur les annotations",
              "ModelView et gestion d'erreurs personnalisée"
            ],
            details: [
              "Sprint 1 : test avec init-param pour récupérer le nom du package contrôleur.",
              "Sprint 2 : méthode GET avec annotation_get et URL associée.",
              "Sprint 3 : gestion des URLs non associées avec message d'erreur personnalisé.",
              "Sprint 4 : création de ModelView (du Sprint 1 au Sprint 14)."
            ],
            links: [{ label: "GitHub", url: "https://github.com/fifaliana-valea/Projet_Sprint" }]
          },
          {
            id: "pharmacie",
            academic: true,
            title: "Gestion de Pharmacie",
            date: null,
            image: "assets/images/project-pharmacy.jpg",
            imageAlt: "Visuel illustratif lié à la santé et à la gestion pharmaceutique",
            technologies: ["Java", "PostgreSQL"],
            summary:
              "Application web de gestion de stock et des ventes avec recherche multicritère et fonctionnalités CRUD.",
            features: [
              "Recherche multicritère et CRUD complet",
              "Gestion intégrée des stocks : achats et ventes",
              "Coordination des tâches en rôle de cheffe de projet"
            ],
            details: [
              "Recherche multicritère et CRUD complet.",
              "Gestion intégrée des stocks : achats et ventes.",
              "Coordination des tâches et livraison dans les délais dans le cadre d'un rôle de cheffe de projet."
            ],
            links: [{ label: "GitHub", url: "https://github.com/fifaliana-valea/Phramacie" }]
          }
        ]
      },
      education: {
        title: "Formation",
        subtitle: "Parcours académique et formations complémentaires.",
        academicHeading: "Parcours académique",
        complementaryHeading: "Formations complémentaires",
        themesLabel: "Thématiques abordées",
        orgLinkLabel: "Page de l'organisme",
        statusUpcoming: "À venir",
        statusOngoing: "En cours",
        statusCompleted: "Terminée",
        items: [
          {
            school: "IT University",
            degree: "Licence en Informatique",
            option: "Option Web et Design",
            period: "2022–2025",
            status: "Diplôme obtenu"
          },
          {
            school: "Lycée Moderne Ampefiloha",
            degree: "Baccalauréat, série S",
            option: "Mention Assez Bien",
            period: "2019–2022",
            status: null
          }
        ],
        complementary: [
          {
            id: "ia-generative-odc",
            title: "IA générative avancée",
            organization: "Orange Digital Center Madagascar",
            organizationUrl: "https://www.facebook.com/OrangeDigitalCenterMadagascar/",
            period: "26–28 octobre 2026",
            startDate: "2026-10-26",
            endDate: "2026-10-28",
            description:
              "Formation consacrée à l'utilisation avancée de l'intelligence artificielle générative pour créer des contenus de qualité, automatiser des tâches, optimiser les flux de travail et améliorer la productivité, tout en adoptant une utilisation responsable et sécurisée des outils d'IA.",
            themes: [
              "Intelligence artificielle générative",
              "Automatisation des tâches",
              "Création de contenu",
              "Optimisation de la productivité",
              "Utilisation responsable et sécurisée de l'IA"
            ]
          }
        ]
      },
      contact: {
        title: "Contact",
        subtitle:
          "Actuellement disponible pour de nouvelles opportunités. N'hésitez pas à me contacter pour échanger sur un projet ou un poste.",
        emailLabel: "E-mail",
        phoneLabel: "Téléphone",
        locationLabel: "Localisation",
        formTitle: "Envoyer un message",
        name: "Nom",
        email: "Adresse e-mail",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer",
        sending: "Envoi en cours…",
        success: "Message envoyé avec succès. Je vous répondrai rapidement.",
        errorRequired: "Ce champ est obligatoire.",
        errorEmail: "Veuillez saisir une adresse e-mail valide.",
        errorSend:
          "L'envoi n'a pas pu être effectué. Utilisez le lien e-mail ci-dessous ou configurez un service d'envoi.",
        mailtoFallback: "Écrire un e-mail",
        formNote:
          "Le formulaire nécessite une configuration Formspree (voir README). En attendant, utilisez le lien e-mail."
      },
      footer: {
        rights: "Tous droits réservés.",
        built: "Portfolio de développeuse Full-Stack — disponible pour un premier CDI."
      },
      backToTop: "Retour en haut"
    },

    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        themeLight: "Switch to light mode",
        themeDark: "Switch to dark mode",
        langSwitch: "Switch to French",
        skip: "Skip to main content"
      },
      hero: {
        greeting: "Hello, I am",
        title: "Junior Full-Stack Web Developer",
        tagline:
          "Junior full-stack developer, recently graduated with a Bachelor's degree in Computer Science (IT University, 2025). From September 2025 to March 2026, I contributed to business web applications at Adrware Consulting — Symfony, Angular, TypeScript, REST APIs, PDF/Excel exports, and dynamic ticketing. Curious, rigorous, and team-oriented, I am now looking for a first permanent position to keep learning and deliver concrete solutions.",
        ctaProjects: "View my projects",
        ctaContact: "Contact me",
        ctaCv: "Download my CV",
        socialGithub: "GitHub profile",
        socialLinkedin: "LinkedIn profile"
      },
      about: {
        title: "About",
        lead:
          "Junior Full-Stack Web Developer with a Bachelor's degree in Computer Science, Web and Design track, from IT University (2025). I design and evolve business web applications, from backend to interface, using technologies such as Symfony, PHP, Angular, and TypeScript.",
        body:
          "From September 2025 to March 2026, at Adrware Consulting, I contributed to maintaining and evolving existing applications: bug fixing, new feature development, REST API integration, data exports, and ticketing systems. I particularly enjoy projects where I can understand the business need, propose a clear technical solution, and deliver it rigorously. I am now looking for a first permanent position to deepen my skills and invest sustainably in a team.",
        qualitiesTitle: "Professional approach",
        qualities:
          "Collaborative and methodical, I integrate quickly into a team, readily share knowledge, and adapt to technical contexts. Results-oriented, I value code clarity, rigor, and continuous improvement — values I apply both independently and in collective work.",
        languagesTitle: "Languages",
        languages: [
          { name: "Malagasy", level: "Native language" },
          { name: "French", level: "Operational level B2" },
          { name: "English", level: "Intermediate level B1" }
        ]
      },
      skills: {
        title: "Skills",
        subtitle: "Technologies and practices used in my academic and professional projects.",
        categories: [
          {
            id: "frontend",
            title: "Front-End & Mobile",
            items: ["React Native", "Angular", "React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
          },
          {
            id: "backend",
            title: "Back-End",
            items: ["PHP", "Symfony", "Laravel", "Java", "Spring Boot", "C#", "ASP.NET Core"]
          },
          {
            id: "databases",
            title: "Databases",
            items: ["SQL", "PostgreSQL", "MySQL", "MariaDB", "SQL Server", "Oracle", "MongoDB", "Firebase"]
          },
          {
            id: "devops",
            title: "Tools & DevOps",
            items: ["Git", "GitHub", "Docker", "Linux", "Postman", "Composer", "Maven", "Trello"]
          },
          {
            id: "architecture",
            title: "Architecture, Integration & Automation",
            items: [
              "REST API",
              "JSON",
              "JWT",
              "MVC",
              "OOP",
              "API authentication",
              "System integration",
              "Workflow automation"
            ]
          },
          {
            id: "languages",
            title: "Programming languages",
            items: ["Java", "C#", "PHP", "JavaScript", "TypeScript", "Python", "SQL"]
          }
        ]
      },
      experience: {
        title: "Professional experience",
        subtitle: "Past contributions at Adrware Consulting on business applications.",
        items: [
          {
            id: "ubix-solar",
            role: "Web Developer",
            company: "Adrware Consulting",
            project: "UBIX-SOLAR",
            period: "September 2025 – March 2026",
            ended: true,
            technologies: ["Angular", "TypeScript", "Symfony", "PHP", "REST API"],
            description:
              "Business web application for photovoltaic installation professionals — an existing, evolving product I contributed to as part of the development team.",
            missions: [
              "Contributed to the evolution and maintenance of an existing business application.",
              "Analyzed and fixed bugs to improve application stability and reliability.",
              "Developed and integrated new features according to project needs.",
              "Improved and adapted existing features.",
              "Respected roles, permissions, and authorizations already defined in the application.",
              "Worked on various existing workflows and business processes.",
              "Managed and tracked exchanges, documents, and validations.",
              "Collaborative task management: assignment, tracking, and comments.",
              "Developed data export and reporting features in PDF, Excel, and other formats.",
              "Used REST APIs for exchanges between application components.",
              "Worked on an existing project requiring understanding of established architecture and business rules."
            ]
          },
          {
            id: "aiolia-event",
            role: "Full-Stack Developer",
            company: "Adrware Consulting",
            project: "AIOLIA-EVENT",
            period: "October 2025 – January 2026",
            ended: true,
            technologies: ["Symfony", "PHP", "PostgreSQL", "REST API"],
            description:
              "Development of an event management application with dynamic ticketing, at Adrware Consulting.",
            missions: [
              "Developed an event management application.",
              "Full event management: CRUD, media, categorization, duplication, and conflict detection.",
              "Developed a dynamic ticketing system.",
              "Managed quotas, unique QR codes, real-time sales, and stock alerts.",
              "Managed promotions and promotional codes.",
              "Tracked price changes.",
              "Developed and used REST APIs.",
              "Worked with PostgreSQL and a Symfony backend architecture."
            ]
          }
        ]
      },
      projects: {
        title: "Projects",
        subtitle: "Academic and technical projects that illustrate my development path.",
        viewDetails: "View details",
        hideDetails: "Hide details",
        viewGithub: "View on GitHub",
        illustrativeNote: "Illustrative visual",
        academicLabel: "Academic Project — IT University",
        items: [
          {
            id: "erpnext",
            academic: true,
            title: "HR synchronization between ERPNext and a .NET application",
            date: "June 2025",
            image: "assets/images/project-erp.jpg",
            imageAlt: "Illustrative visual of an analytics dashboard on a computer",
            technologies: ["ERPNext", "ASP.NET Core", "C#", "REST API", "SQL"],
            summary:
              "Project based on an existing ERP with a .NET application enabling HR data exchange and synchronization.",
            features: [
              "Secure API for authentication via ERPNext accounts",
              "CSV import and validation (employees, salaries, payroll)",
              "HR statistics and tracking dashboards"
            ],
            details: [
              "Developed a secure API for authentication via ERPNext accounts.",
              "Communicated with services of an existing ERP.",
              "Imported CSV files containing employee, salary, and payroll data.",
              "Validated data and formats, including dates.",
              "Reset and updated existing data before import.",
              "Managed employee, salary, and payroll-related data.",
              "Generated and updated data.",
              "Created statistics and tracking tables."
            ],
            links: [{ label: "GitHub", url: "https://github.com/fifaliana-valea/ERPNextNewApp" }]
          },
          {
            id: "cryptomonai",
            academic: true,
            title: "Cryptomonaï — Cryptocurrency management platform",
            date: "December 2024 – February 2025",
            image: "assets/images/project-crypto.jpg",
            imageAlt: "Illustrative visual related to cryptocurrency and digital finance",
            technologies: ["React Native", "Java", "Spring Boot", "Laravel", "REST API", "Docker", "Firebase"],
            summary:
              "Multi-tier cryptocurrency management platform: Spring Boot API, Laravel interface, and React Native mobile app.",
            features: [
              "JWT-secured REST API and Spring Boot business logic",
              "Laravel analytics dashboard",
              "React Native mobile app with push notifications"
            ],
            details: [
              "Spring Boot backend: JWT-secured REST API, transaction management, and business logic.",
              "Laravel frontend: responsive interface, analytics dashboard, and data visualization.",
              "React Native mobile app: real-time portfolio tracking and push notifications.",
              "Deployment and security: Docker containerization and Firebase for user authentication."
            ],
            links: [
              { label: "Utilisateur", url: "https://github.com/TsitoNyAvoSoaRazaFindrakoto/utilisateur" },
              { label: "Laravel", url: "https://github.com/TsitoNyAvoSoaRazaFindrakoto/laravel-tier" },
              { label: "Mobile", url: "https://github.com/TsitoNyAvoSoaRazaFindrakoto/Crypta-mobile" }
            ]
          },
          {
            id: "projet-sprint",
            academic: true,
            title: "Sprint Project — Custom Java framework",
            date: null,
            image: "assets/images/project-java.jpg",
            imageAlt: "Illustrative visual of source code on a screen",
            technologies: ["Java", "Spring MVC", "Annotations", "OOP"],
            summary:
              "Custom Java framework inspired by Spring MVC, designed to simplify web application development and explore the fundamentals of a web framework.",
            features: [
              "Controller discovery via init-param",
              "Annotation-based GET routing",
              "ModelView and custom error handling"
            ],
            details: [
              "Sprint 1: test with init-param to retrieve the controller package name.",
              "Sprint 2: GET method with annotation_get and associated URL.",
              "Sprint 3: handling of unmapped URLs with a custom error message.",
              "Sprint 4: creation of ModelView (from Sprint 1 to Sprint 14)."
            ],
            links: [{ label: "GitHub", url: "https://github.com/fifaliana-valea/Projet_Sprint" }]
          },
          {
            id: "pharmacie",
            academic: true,
            title: "Pharmacy Management",
            date: null,
            image: "assets/images/project-pharmacy.jpg",
            imageAlt: "Illustrative visual related to healthcare and pharmacy management",
            technologies: ["Java", "PostgreSQL"],
            summary:
              "Web application for stock and sales management with multi-criteria search and CRUD features.",
            features: [
              "Multi-criteria search and full CRUD",
              "Integrated stock management: purchases and sales",
              "Task coordination as project lead"
            ],
            details: [
              "Multi-criteria search and full CRUD.",
              "Integrated stock management: purchases and sales.",
              "Task coordination and on-time delivery in a project lead role."
            ],
            links: [{ label: "GitHub", url: "https://github.com/fifaliana-valea/Phramacie" }]
          }
        ]
      },
      education: {
        title: "Education",
        subtitle: "Academic background and complementary training.",
        academicHeading: "Academic background",
        complementaryHeading: "Complementary training",
        themesLabel: "Topics covered",
        orgLinkLabel: "Organization page",
        statusUpcoming: "Upcoming",
        statusOngoing: "In progress",
        statusCompleted: "Completed",
        items: [
          {
            school: "IT University",
            degree: "Bachelor's degree in Computer Science",
            option: "Web and Design track",
            period: "2022–2025",
            status: "Degree obtained"
          },
          {
            school: "Lycée Moderne Ampefiloha",
            degree: "Baccalaureate, series S",
            option: "Mention Assez Bien",
            period: "2019–2022",
            status: null
          }
        ],
        complementary: [
          {
            id: "ia-generative-odc",
            title: "Advanced generative AI",
            organization: "Orange Digital Center Madagascar",
            organizationUrl: "https://www.facebook.com/OrangeDigitalCenterMadagascar/",
            period: "October 26–28, 2026",
            startDate: "2026-10-26",
            endDate: "2026-10-28",
            description:
              "Training focused on the advanced use of generative artificial intelligence to create quality content, automate tasks, optimize workflows, and improve productivity, while adopting a responsible and secure use of AI tools.",
            themes: [
              "Generative artificial intelligence",
              "Task automation",
              "Content creation",
              "Productivity optimization",
              "Responsible and secure AI use"
            ]
          }
        ]
      },
      contact: {
        title: "Contact",
        subtitle:
          "Currently available for new opportunities. Feel free to reach out to discuss a project or a role.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        formTitle: "Send a message",
        name: "Name",
        email: "Email address",
        subject: "Subject",
        message: "Message",
        send: "Send",
        sending: "Sending…",
        success: "Message sent successfully. I will get back to you soon.",
        errorRequired: "This field is required.",
        errorEmail: "Please enter a valid email address.",
        errorSend:
          "The message could not be sent. Use the email link below or configure a sending service.",
        mailtoFallback: "Write an email",
        formNote:
          "The form requires Formspree configuration (see README). Meanwhile, please use the email link."
      },
      footer: {
        rights: "All rights reserved.",
        built: "Full-Stack developer portfolio — available for a first permanent position."
      },
      backToTop: "Back to top"
    }
  }
};