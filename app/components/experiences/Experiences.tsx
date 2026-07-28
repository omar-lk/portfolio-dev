import React from 'react';
import styles from './experiences.module.css';

const Experiences = () => {
  return (
    <div className={styles.experiencesContainer}>
      <h1 className={styles.sectionTitle}>Experiences</h1>
      <div className={styles.experience}>
        <h2>Senior React &amp; Next.js Engineer (Freelance)</h2>
        <p className={styles.company}>European Energy-Tech Company</p>
        <p className={styles.location}>Remote</p>
        <p className={styles.duration}>2024–Present</p>
        <p>
          Contract creation flows, customer dashboards, and billing automation
          for a French energy company, integrating Haulogy, Enedis, and
          Pennylane. Full case study{' '}
          <a href="#work" className={styles.caseStudyLink}>above</a>.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>React Developer</h2>
        <a href="https://www.interlincx.com/" target="_blank">
          <p className={styles.company}>Interlincx</p>
        </a>
        <p className={styles.location}>Los Angeles, CA</p>
        <p className={styles.duration}>2021–2024</p>
        <p>
          Built form builders and client templates for content editors and
          analysts producing monetizable articles, and worked directly with
          the engineering team to extend the Netlify CMS.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>Full Stack Developer</h2>
        <a href="https://mobiletic.com/" target="_blank">
          <p className={styles.company}>Mobiletice</p>
        </a>
        <p className={styles.location}>Geneva, Switzerland</p>
        <p className={styles.duration}>2020–2022</p>
        <p>
          Built a large e-learning platform with SSO authentication and
          real-time features via web sockets, using Laravel and React.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>Full Stack Developer</h2>
        <p className={styles.company}>Sagatech</p>
        <p className={styles.location}>Meknes, Morocco</p>
        <p className={styles.duration}>2019–2020</p>
        <p>
          Built payment gateway and barcode scanner integrations on a SQL
          Server backend, then rebuilt the product as a cloud version using
          Laravel, React/Node, and MySQL.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>Full Stack Developer</h2>
        <a href="https://www.in4.digital/" target="_blank">
          <p className={styles.company}>IN4</p>
        </a>
        <p className={styles.location}>Meknes, Morocco</p>
        <p className={styles.duration}>2018–2019</p>
        <p>
          Built multiple e-commerce websites, each with client-specific
          requirements, using Laravel.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
