import type { SiteDictionary } from './types';

export const fr: SiteDictionary = {
  metadata: {
    home: {
      title:
        'Omar Lekouch — Développeur Full-Stack Senior | SaaS, paiements et IA',
      description:
        'Développeur Full-Stack Senior avec plus de 9 ans d’expérience dans la conception et l’évolution d’applications SaaS en production : facturation, paiements, intégrations métier et fonctionnalités basées sur l’IA.',
    },

    about: {
      title: 'À propos d’Omar Lekouch — Développeur Full-Stack Senior',
      description:
        'Découvrez le parcours d’Omar Lekouch, développeur Full-Stack Senior basé à Marrakech, spécialisé dans les applications SaaS, les systèmes métier, les intégrations et l’IA.',
    },

    gallery: {
      title: 'Galerie photo — Omar Lekouch',
      description:
        'Une sélection de photographies de rue et de voyage réalisées par Omar Lekouch.',
    },
  },

  nav: {
    home: 'Accueil',
    work: 'Projets',
    about: 'À propos',
    resume: 'CV',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    switchLanguage: 'Switch to English',
  },

  hero: {
    title:
      'Développeur Full-Stack Senior — plus de 9 ans à construire des produits en production',

    subhead:
      'Je développe et fais évoluer des applications SaaS, des plateformes métier et des intégrations complexes pour des entreprises en France, en Suisse, en Allemagne, aux États-Unis et au Maroc. Plus récemment, j’intègre également l’IA, le RAG et les LLM dans des produits concrets.',

    current:
      'Dernière mission : près de deux ans sur une plateforme de gestion des contrats, de la facturation et des paiements pour un fournisseur d’énergie français, avec React, Next.js, Node.js et PostgreSQL.',

    availability:
      'Disponible immédiatement pour un poste à temps plein ou une mission freelance de longue durée.',

    viewWork: 'Voir mes projets',
    getInTouch: 'Me contacter',
    resume: 'CV',
    portraitAlt: 'Omar Lekouch — Développeur Full-Stack Senior',
  },

  proof: [
    'Plus de 9 ans d’expérience',
    'Plus de 100 k$ facturés sur Upwork',
    'Plus de 7 790 heures réalisées',
    'Des collaborations clients jusqu’à 2 ans et demi',
    'Expérience internationale dans 5 pays',
  ],

  work: {
    title: 'Projets sélectionnés',

    subtitle:
      'Une sélection de produits et de plateformes en production développés pour des clients en Europe et aux États-Unis, ainsi qu’un projet personnel autour de l’IA.',

    whatIBuilt: 'Ce que j’ai réalisé',
    integrations: 'Intégrations',
    aiSectionLabel: 'Projet personnel autour de l’IA',

    projects: [
      {
        title: 'Plateforme de gestion de contrats, facturation et énergie',

        meta: 'Fournisseur d’énergie français · Développeur Full-Stack Senior · 2024–2026 · Remote',

        paragraphs: [
          'J’ai travaillé pendant près de deux ans sur une plateforme métier en production utilisée par les clients, les partenaires et les équipes internes d’un fournisseur d’énergie français. J’ai pris en charge de nombreuses fonctionnalités liées à la gestion des contrats, aux espaces client et administrateur, aux droits d’accès, à la facturation ainsi qu’au suivi de la consommation et de la production d’électricité.',

          'Côté backend, j’ai développé et fait évoluer plusieurs workflows métier et intégrations avec Haulogy, Enedis, Pennylane, DocuSign et GoCardless. J’ai notamment travaillé sur la synchronisation des contrats et des clients, le traitement de données énergétiques, la génération de factures, la signature électronique, les paiements et la gestion des échanges avec les systèmes externes.',

          'J’ai également participé à la fiabilisation de la plateforme en production : validation des données, gestion des erreurs et des cas limites, tâches planifiées, supervision, déploiements Docker et infrastructure DigitalOcean.',
        ],

        integrations: [
          'Haulogy',
          'Enedis',
          'Pennylane',
          'DocuSign',
          'GoCardless',
        ],

        technologies: [
          'Next.js 14',
          'React',
          'TypeScript',
          'Node.js',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'DigitalOcean',
          'Sentry',
        ],

        note: 'Plateforme interne — non accessible au public',
      },

      {
        title: 'Ovadiator',

        meta: 'Outil interne de gestion comptable et des paiements',

        paragraphs: [
          'J’ai développé une application interne destinée à simplifier le traitement des factures et des paiements pour l’équipe comptable. Elle automatise l’import et le traitement de fichiers XML, associe les clients à leurs mandats GoCardless, centralise les informations nécessaires au suivi des dossiers et permet d’exporter les données validées au format CSV.',

          'L’objectif était de réduire les tâches manuelles, limiter les erreurs de saisie et rendre la préparation des opérations comptables et des paiements plus fiable.',
        ],

        technologies: [
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Supabase',
          'GoCardless',
          'XML',
        ],

        note: 'Plateforme interne — non accessible au public',
      },

      {
        title: 'Plateforme web pour une pharmacie allemande',

        meta: 'Allemagne · Développeur Frontend',

        paragraphs: [
          'J’ai développé l’interface client d’une plateforme de pharmacie en production avec Next.js et Strapi. Le projet comprend la gestion de contenu multilingue, des parcours de commande et de prescription électronique, des intégrations API et une interface responsive pensée pour une utilisation fluide sur mobile et desktop.',
        ],

        technologies: ['Next.js', 'React', 'Strapi'],

        link: {
          href: 'https://apotheke-marienheide.de/de',
          label: 'Voir le site →',
        },
      },

      {
        title: 'Interlincx Media',

        meta: 'Los Angeles, États-Unis · Développeur React · 2021–2024',

        paragraphs: [
          'Pendant plus de deux ans, j’ai travaillé sur des outils React destinés aux équipes éditoriales et aux analystes. J’ai notamment développé des générateurs de formulaires, un éditeur de modèles en glisser-déposer ainsi que différents outils liés à la création et à la monétisation de contenus. J’ai également contribué à l’évolution de Netlify CMS avec l’équipe d’ingénierie.',
        ],

        technologies: ['React', 'JavaScript', 'Netlify CMS'],
      },

      {
        title: 'Mobiletic',

        meta: 'Genève, Suisse · Développeur Full-Stack · 2020–2021',

        paragraphs: [
          'J’ai travaillé sur une plateforme e-learning utilisée par plusieurs entreprises, avec Laravel et React. Mes contributions incluaient des API REST, l’authentification SSO, des fonctionnalités temps réel via WebSockets, l’optimisation de requêtes SQL, la mise en cache, les files de tâches en arrière-plan et les e-mails transactionnels.',
        ],

        technologies: ['Laravel', 'React', 'Angular', 'MySQL'],
      },

      {
        title: 'Sagatech',

        meta: 'Meknès, Maroc · Développeur Full-Stack · 2019–2020',

        paragraphs: [
          'J’ai travaillé sur des applications métier intégrant notamment une passerelle de paiement et des lecteurs de codes-barres avec SQL Server. J’ai ensuite participé à leur évolution vers une architecture web/cloud basée sur Laravel, React, Node.js et MySQL.',
        ],

        technologies: ['Laravel', 'React', 'Node.js', 'MySQL', 'SQL Server'],
      },

      {
        title: 'Coffee AI',

        meta: 'Projet personnel · Marrakech, Maroc',

        paragraphs: [
          'Coffee AI est une application RAG permettant de rechercher des cafés à Marrakech en langage naturel. Les informations sont transformées en embeddings avec OpenAI puis stockées dans PostgreSQL avec pgvector. Lorsqu’un utilisateur pose une question, l’application effectue une recherche sémantique, classe les résultats les plus pertinents et fournit ce contexte à Claude afin de générer une réponse plus précise et ancrée dans les données disponibles.',
        ],

        technologies: [
          'OpenAI Embeddings',
          'PostgreSQL',
          'pgvector',
          'Anthropic Claude',
          'RAG',
        ],

        link: {
          href: 'https://coffee-ai-delta.vercel.app/',
          label: 'Voir la démo →',
        },

        aiProject: true,
      },
    ],
  },

  stack: {
    title: 'Technologies principales',
    backend: 'Backend et API',
    database: 'Bases de données',
    frontend: 'Frontend',
    devops: 'DevOps / Infrastructure',
    ai: 'IA / LLM',
  },

  experiences: {
    title: 'Expérience professionnelle',

    entries: [
      {
        title: 'Développeur Full-Stack Senior — Freelance',

        company: 'Entreprise française du secteur de l’énergie',

        location: 'À distance',

        duration: '2024–2026',

        description:
          'Pendant près de deux ans, j’ai contribué au développement et à l’évolution d’une plateforme métier couvrant la gestion des clients et des contrats, les données énergétiques, la facturation et les paiements. J’ai également travaillé sur plusieurs intégrations critiques avec Haulogy, Enedis, Pennylane, DocuSign et GoCardless, ainsi que sur Ovadiator, un outil interne destiné à l’équipe comptable.',

        caseStudyLinkLabel: 'Voir les études de cas ci-dessus.',
      },

      {
        title: 'Développeur React',

        company: 'Interlincx',

        companyUrl: 'https://www.interlincx.com/',

        location: 'Los Angeles, Californie',

        duration: '2021–2024',

        description:
          'Pendant plus de deux ans, j’ai développé des outils React destinés aux équipes éditoriales et aux analystes, notamment des générateurs de formulaires, des éditeurs de modèles et des fonctionnalités liées à la création de contenus monétisables. J’ai également contribué à l’évolution de Netlify CMS.',
      },

      {
        title: 'Développeur Full-Stack',

        company: 'Mobiletic',

        companyUrl: 'https://mobiletic.com/',

        location: 'Genève, Suisse',

        duration: '2020–2021',

        description:
          'J’ai développé et fait évoluer une plateforme e-learning avec Laravel et React, notamment sur les API REST, l’authentification SSO, les fonctionnalités temps réel via WebSockets et plusieurs problématiques backend de performance et de fiabilité.',
      },

      {
        title: 'Développeur Full-Stack',

        company: 'Sagatech',

        location: 'Meknès, Maroc',

        duration: '2019–2020',

        description:
          'J’ai développé des fonctionnalités métier autour des paiements, des lecteurs de codes-barres et de SQL Server, puis participé à l’évolution du produit vers une architecture web/cloud basée sur Laravel, React, Node.js et MySQL.',
      },

      {
        title: 'Développeur Full-Stack',

        company: 'IN4',

        companyUrl: 'https://www.in4.digital/',

        location: 'Meknès, Maroc',

        duration: '2018–2019',

        description:
          'J’ai développé plusieurs applications et sites e-commerce avec Laravel, adaptés aux besoins métier spécifiques de différents clients.',
      },
    ],
  },

  contact: {
    title:
      'Vous recherchez un développeur senior capable de prendre en charge un produit en production ?',

    description:
      'Applications SaaS, plateformes métier, APIs et intégrations complexes, paiements ou fonctionnalités basées sur l’IA : je suis disponible pour un poste à temps plein ou une mission freelance de longue durée.',

    emailMe: 'M’envoyer un e-mail',
    linkedin: 'Me contacter sur LinkedIn',
    emailLabel: 'E-mail',
  },

  footer: {
    resume: 'CV',
  },

  about: {
    title: 'Bonjour, je suis Omar Lekouch',

    paragraphs: [
      'Je suis développeur Full-Stack Senior avec plus de 9 ans d’expérience dans la conception, le développement et l’évolution d’applications web en production.',

      'J’aime prendre en charge un produit de bout en bout, de la compréhension du besoin jusqu’à la mise en production. J’ai particulièrement travaillé sur des systèmes où la fiabilité est essentielle : facturation, paiements, APIs, workflows métier, synchronisation de données et intégrations avec des services externes.',

      'Ces dernières années, je me suis également intéressé à l’intégration de l’IA dans des produits concrets, notamment à travers les LLM, le RAG, les embeddings et la recherche vectorielle.',

      'Je suis basé à Marrakech et je travaille à distance avec des équipes internationales. Je parle couramment français, anglais et arabe.',

      'En dehors du travail, j’aime la photographie de rue, cuisiner, découvrir de bons cafés et probablement regarder un peu trop de séries.',
    ],

    galleryLink: 'Voir ma galerie',
    portraitAlt: 'Portrait d’Omar Lekouch',
  },

  gallery: {
    title: 'Galerie',

    imageAlts: [
      'Photographie de la galerie 1',
      'Photographie de la galerie 2',
      'Photographie de la galerie 3',
      'Photographie de la galerie 4',
      'Photographie de la galerie 5',
      'Photographie de la galerie 6',
      'Photographie de la galerie 7',
      'Photographie de la galerie 8',
      'Photographie de rue à Marrakech',
    ],
  },
};
