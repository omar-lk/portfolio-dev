import React from 'react';
import type { ProjectCopy, SiteDictionary } from '../../i18n/types';
import styles from './work.module.css';

type WorkProps = {
  copy: SiteDictionary['work'];
};

type CaseStudyProps = {
  project: ProjectCopy;
  whatIBuilt: string;
  integrationsLabel: string;
};

const CaseStudy = ({ project, whatIBuilt, integrationsLabel }: CaseStudyProps) => (
  <div className={`${styles.caseStudy} ${project.aiProject ? styles.aiCaseStudy : ''}`}>
    <div className={styles.caseStudyHeader}>
      <h2>{project.title}</h2>
    </div>
    <p className={styles.meta}>{project.meta}</p>

    {!project.aiProject && <span className={styles.label}>{whatIBuilt}</span>}
    {project.paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}

    {project.integrations && (
      <>
        <span className={styles.label}>{integrationsLabel}</span>
        <div className={styles.tagRow}>
          {project.integrations.map((integration) => (
            <span key={integration} className={styles.tag}>{integration}</span>
          ))}
        </div>
      </>
    )}

    <div className={styles.tagRow}>
      {project.technologies.map((technology) => (
        <span key={technology} className={styles.tag}>{technology}</span>
      ))}
    </div>

    {project.link && (
      <a
        href={project.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.demoLink}
      >
        {project.link.label}
      </a>
    )}

    {project.note && <span className={styles.privateNote}>{project.note}</span>}
  </div>
);

const Work = ({ copy }: WorkProps) => {
  const regularProjects = copy.projects.filter((project) => !project.aiProject);
  const aiProjects = copy.projects.filter((project) => project.aiProject);

  return (
    <div id="work" className={styles.workContainer}>
      <h1 className={styles.sectionTitle}>{copy.title}</h1>
      <p className={styles.sectionSubtitle}>{copy.subtitle}</p>

      {regularProjects.map((project) => (
        <CaseStudy
          key={project.title}
          project={project}
          whatIBuilt={copy.whatIBuilt}
          integrationsLabel={copy.integrations}
        />
      ))}

      {aiProjects.length > 0 && (
        <div className={styles.aiSection}>
          <p className={styles.aiSectionLabel}>{copy.aiSectionLabel}</p>
          {aiProjects.map((project) => (
            <CaseStudy
              key={project.title}
              project={project}
              whatIBuilt={copy.whatIBuilt}
              integrationsLabel={copy.integrations}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
