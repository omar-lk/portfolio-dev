export type Locale = 'en' | 'fr';

export type PagePath = '/' | '/about' | '/gallery';

export type NavCopy = {
  home: string;
  work: string;
  about: string;
  resume: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
  switchLanguage: string;
};

export type ProjectCopy = {
  title: string;
  meta: string;
  paragraphs: string[];
  integrations?: string[];
  technologies: string[];
  note?: string;
  link?: {
    href: string;
    label: string;
  };
  aiProject?: boolean;
};

export type ExperienceCopy = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  description: string;
  caseStudyLinkLabel?: string;
};

export type SiteDictionary = {
  metadata: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    gallery: { title: string; description: string };
  };
  nav: NavCopy;
  hero: {
    title: string;
    subhead: string;
    current: string;
    availability: string;
    viewWork: string;
    getInTouch: string;
    resume: string;
    portraitAlt: string;
  };
  proof: string[];
  work: {
    title: string;
    subtitle: string;
    whatIBuilt: string;
    integrations: string;
    aiSectionLabel: string;
    projects: ProjectCopy[];
  };
  stack: {
    title: string;
    backend: string;
    database: string;
    frontend: string;
    devops: string;
    ai: string;
  };
  experiences: {
    title: string;
    entries: ExperienceCopy[];
  };
  contact: {
    title: string;
    description: string;
    emailMe: string;
    linkedin: string;
    emailLabel: string;
  };
  footer: {
    resume: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    galleryLink: string;
    portraitAlt: string;
  };
  gallery: {
    title: string;
    imageAlts: string[];
  };
};
