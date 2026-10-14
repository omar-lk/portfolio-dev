import React from 'react';
import type { SiteDictionary } from '../../i18n';
import styles from './experiences.module.css';

type ExperiencesProps = {
  copy: SiteDictionary['experiences'];
};

const Experiences = ({ copy }: ExperiencesProps) => {
  return (
    <div className={styles.experiencesContainer}>
      <h1 className={styles.sectionTitle}>{copy.title}</h1>

      {copy.entries.map((experience) => (
        <div key={`${experience.company}-${experience.duration}`} className={styles.experience}>
          <h2>{experience.title}</h2>
          {experience.companyUrl ? (
            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
              <p className={styles.company}>{experience.company}</p>
            </a>
          ) : (
            <p className={styles.company}>{experience.company}</p>
          )}
          <p className={styles.location}>{experience.location}</p>
          <p className={styles.duration}>{experience.duration}</p>
          <p>
            {experience.description}{' '}
            {experience.caseStudyLinkLabel && (
              <a href="#work" className={styles.caseStudyLink}>
                {experience.caseStudyLinkLabel}
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
