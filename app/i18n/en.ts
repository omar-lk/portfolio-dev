import type { SiteDictionary } from './types';

export const en: SiteDictionary = {
  metadata: {
    home: {
      title: 'Omar Lekouch — Senior Full-Stack Engineer | Billing, Payments & AI',
      description:
        'Senior Full-Stack Engineer with 9+ years of experience building production systems for billing, payments, integrations, SaaS, and AI-powered products.',
    },
    about: {
      title: 'About Omar Lekouch — Senior Full-Stack Engineer',
      description:
        'Learn more about Omar Lekouch, a senior full-stack engineer based in Marrakech with experience across energy, fintech, SaaS, and AI.',
    },
    gallery: {
      title: 'Photography Gallery — Omar Lekouch',
      description:
        'A selection of street and travel photography by Omar Lekouch.',
    },
  },
  nav: {
    home: 'Home',
    work: 'Work',
    about: 'About',
    resume: 'Resume',
    contact: 'Contact',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    switchLanguage: 'Passer en français',
  },
  hero: {
    title: 'Senior Full-Stack Engineer — 9+ years building production systems',
    subhead:
      'I build billing and payment platforms, complex third-party integrations, and SaaS products for companies across France, Switzerland, Germany, the US, and Morocco — and, more recently, modern AI-powered products.',
    current:
      'Currently: contract & billing platform for a French energy company. React, Next.js, Node.js, PostgreSQL, Docker. Fluent in French and English.',
    availability:
      'Open to full-time roles and long-term contracts — available immediately.',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    resume: 'Resume',
    portraitAlt: 'Omar Lekouch — Senior Full-Stack Engineer',
  },
  proof: [
    '9+ years professional engineering',
    '$100K+ earned on Upwork',
    '7,790+ hours delivered',
    '20–30 month client engagements',
    '5 countries',
  ],
  work: {
    title: 'Selected Work',
    subtitle:
      "Production systems I've built for clients across Europe and the US — plus one independent AI project.",
    whatIBuilt: 'What I built',
    integrations: 'Integrations',
    aiSectionLabel: 'Independent AI Project',
    projects: [
      {
        title: 'Energy management, contracts & billing platform',
        meta: 'European energy-tech company · Full-Stack Engineer · 2024–2026 · Remote',
        paragraphs: [
          'Worked as a full-stack engineer on a production energy-management platform serving customers, partners, and internal operations teams. Developed contract creation and review workflows, role-based access controls, and customer dashboards for tracking contracts, invoices, electricity consumption, and energy production.',
          'On the backend, built and maintained data pipelines that ingest and validate energy-delivery XML files, apply tariff and consumption calculations, and prepare billing data for accounting. Integrated Haulogy for customer and contract synchronization, Enedis for delivery-point and metering data, Pennylane for invoice and accounting workflows, and DocuSign for electronic signatures and signed-contract archiving. Also contributed to the GoCardless payment workflow, including mandates, payment tracking, webhooks, and reconciliation.',
          'The platform was containerized with Docker, deployed on DigitalOcean, and monitored in production with scheduled jobs, structured logging, and Sentry.',
        ],
        integrations: ['Haulogy', 'Enedis', 'Pennylane', 'DocuSign', 'GoCardless'],
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
        note: 'Internal platform — not publicly accessible',
      },
      {
        title: 'Ovadiator',
        meta: 'European energy-tech company · Internal accounting platform',
        paragraphs: [
          'Developed an internal platform that helps an accounting department manage invoices and payment data more efficiently. Ovadiator automates XML invoice processing, matches customers with their GoCardless payment mandates, centralizes client records, and exports validated data to CSV.',
          'By reducing repetitive manual work and data-entry errors, the platform streamlines the accounting workflow and makes payment preparation faster and more reliable.',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'GoCardless', 'XML'],
        note: 'Internal platform — not publicly accessible',
      },
      {
        title: 'German Pharmacy Platform',
        meta: 'Germany · Frontend Engineer',
        paragraphs: [
          'Built the complete customer-facing frontend for a production pharmacy platform using Next.js.',
        ],
        technologies: ['Next.js'],
        link: {
          href: 'https://apotheke-marienheide.de/de',
          label: 'View live site →',
        },
      },
      {
        title: 'Interlincx Media',
        meta: 'Los Angeles, USA · 2021–2024',
        paragraphs: [
          'Built form builders and a drag-and-drop template builder for content editors and analysts producing monetizable articles, including offer and template systems for editorial tooling, and worked directly with the engineering team to extend the Netlify CMS.',
        ],
        technologies: ['React', 'Netlify CMS'],
      },
      {
        title: 'Mobiletic',
        meta: 'Geneva, Switzerland · Full-Stack Engineer',
        paragraphs: [
          'Built a large-scale e-learning platform used by multiple companies, with REST APIs, SSO authentication, and real-time features via WebSockets. Worked on database query optimization, caching, background queues, and transactional email.',
        ],
        technologies: ['Laravel', 'React', 'Angular'],
      },
      {
        title: 'Sagatech',
        meta: 'Meknes, Morocco · 2019–2020',
        paragraphs: [
          'Built payment gateway and barcode integrations on a SQL Server backend, then led the migration and rebuild toward a cloud architecture using Laravel, React, and MySQL.',
        ],
        technologies: ['Laravel', 'React', 'MySQL', 'SQL Server'],
      },
      {
        title: 'Coffee AI',
        meta: 'Marrakech, Morocco',
        paragraphs: [
          "A live RAG application exploring semantic search, vector retrieval, and LLM-powered recommendations — coffee shop data is embedded with OpenAI and stored in PostgreSQL via pgvector, each query is matched against that index by semantic similarity, and the retrieved results are passed to Anthropic's Claude to generate the response.",
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
          label: 'View live demo →',
        },
        aiProject: true,
      },
    ],
  },
  stack: {
    title: 'Core Technologies',
    backend: 'Backend & APIs',
    database: 'Database',
    frontend: 'Frontend',
    devops: 'DevOps / Infrastructure',
    ai: 'AI / LLM',
  },
  experiences: {
    title: 'Experiences',
    entries: [
      {
        title: 'Full-Stack Engineer (Freelance)',
        company: 'European Energy-Tech Company',
        location: 'Remote',
        duration: '2024–2026',
        description:
          "Built production contract, customer, energy-data, billing, and payment workflows for an energy-management platform, integrating Haulogy, Enedis, Pennylane, DocuSign, and GoCardless. Also developed Ovadiator, an internal invoice and payment-data platform for the company's accounting team.",
        caseStudyLinkLabel: 'Full case studies above.',
      },
      {
        title: 'React Developer',
        company: 'Interlincx',
        companyUrl: 'https://www.interlincx.com/',
        location: 'Los Angeles, CA',
        duration: '2021–2024',
        description:
          'Built form builders and client templates for content editors and analysts producing monetizable articles, and worked directly with the engineering team to extend the Netlify CMS.',
      },
      {
        title: 'Full Stack Developer',
        company: 'Mobiletic',
        companyUrl: 'https://mobiletic.com/',
        location: 'Geneva, Switzerland',
        duration: '2020–2022',
        description:
          'Built a large-scale e-learning platform with SSO authentication and real-time features via web sockets, using Laravel, React, and Angular.',
      },
      {
        title: 'Full Stack Developer',
        company: 'Sagatech',
        location: 'Meknes, Morocco',
        duration: '2019–2020',
        description:
          'Built payment gateway and barcode scanner integrations on a SQL Server backend, then rebuilt the product as a cloud version using Laravel, React/Node, and MySQL.',
      },
      {
        title: 'Full Stack Developer',
        company: 'IN4',
        companyUrl: 'https://www.in4.digital/',
        location: 'Meknes, Morocco',
        duration: '2018–2019',
        description:
          'Built multiple e-commerce websites, each with client-specific requirements, using Laravel.',
      },
    ],
  },
  contact: {
    title: 'Hiring for a senior engineer who ships production systems?',
    description:
      "Billing and payment platforms, complex integrations, SaaS products, and AI-powered systems. Open to full-time positions and long-term contracts — let's talk about what your team is building.",
    emailMe: 'Email me',
    linkedin: 'Connect on LinkedIn',
    emailLabel: 'Email',
  },
  footer: {
    resume: 'Resume',
  },
  about: {
    title: "Hey! I'm Omar LEKOUCH",
    paragraphs: [
      "I'm a senior full-stack engineer with 9+ years of experience building production software across energy, fintech, SaaS, and AI.",
      'I like taking ownership of things from architecture to deployment, especially when the problem is complex and the software actually matters. A lot of my work has been around systems where things need to be right — billing, payments, APIs, business workflows, data synchronization, and automation.',
      "I'm based in Marrakech and work remotely with teams around the world. I speak English, French, and Arabic.",
      "Outside of work, I'm usually taking photos in the streets, cooking Mediterranean food slowly, sitting in a good coffee shop, or watching more TV shows than I probably should.",
      "I like building serious software, but I'm a big believer in keeping life simple. Calm life, on purpose.",
    ],
    galleryLink: 'My Gallery',
    portraitAlt: 'Portrait of Omar Lekouch',
  },
  gallery: {
    title: 'Gallery',
    imageAlts: [
      'Gallery photograph 1',
      'Gallery photograph 2',
      'Gallery photograph 3',
      'Gallery photograph 4',
      'Gallery photograph 5',
      'Gallery photograph 6',
      'Gallery photograph 7',
      'Gallery photograph 8',
      'Street photograph in Marrakech',
    ],
  },
};
