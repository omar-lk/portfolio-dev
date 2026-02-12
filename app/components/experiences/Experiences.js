import React from 'react';
import styles from './experiences.module.css';

const Experiences = () => {
  return (
    <div className={styles.experiencesContainer}>
      <h1 className={styles.sectionTitle}>Experiences</h1>
      <div className={styles.experience}>
        <h2>Senior React & Next.js Engineer (Freelance)</h2>
        <a href="#" target="_blank">
          <p className={styles.company}>European Energy-Tech Company</p>
        </a>
        <p className={styles.location}>Remote</p>
        <p className={styles.duration}>2024 Present</p>
        <p>
          Leading development of scalable web applications in the energy and
          billing domain using Next.js, React, Prisma, and PostgreSQL. Designed
          and maintained complex business logic for contract management, invoice
          generation, and third party API integrations.
        </p>
        <p>
          Architected full stack systems deployed on DigitalOcean using Docker,
          implementing CI/CD pipelines and performance optimizations.
          Collaborate closely with product managers and engineers to deliver
          production ready SaaS features serving real-world business operations.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>React Developer</h2>
        <a href="https://www.interlincx.com/" target="_blank">
          <p className={styles.company}>Interlincx</p>
        </a>
        <p className={styles.location}>Los Angeles, CA</p>
        <p className={styles.duration}>2021-2024</p>
        <p>
          Front-end developer responsible for creating sophisticated UIs to
          enable content editors and analysts to create monetizable articles.
          Iteratively built robust solutions like form builders and client
          templates using React, accounting for complex requirements.
          Collaborated with cross-functional teams including engineers, product
          managers, and business leaders to refine tools and processes. Worked
          closely with the engineering team, coordinating via GitHub and Slack,
          to continuously enhance the Netlify CMS. Demonstrated critical
          thinking and organization.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>Full Stack Developer</h2>
        <a href="https://mobiletic.com/" target="_blank">
          <p className={styles.company}>Mobiletice</p>
        </a>
        <p className={styles.location}>Geneva, Switzerland</p>
        <p className={styles.duration}>2020-2022</p>
        <p>
          Built a large e-learning platform for Mobiletice clients using Laravel
          and React, incorporating SSO authentication, web sockets, database
          management, and deployments.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>Full Stack Developer</h2>
        <a href="https://www.interlincx.com/" target="_blank">
          <p className={styles.company}>Sagatech</p>
        </a>
        <p className={styles.location}>Meknes, Morocco</p>
        <p className={styles.duration}>2019-2020</p>
        <p>
          Engineered user-friendly interfaces, integrated payment gateways and
          barcode scanners, optimized performance, and ensured data integrity.
          Designed efficient SQL Server databases and implemented complex
          business logic. Later, developed a cloud version using Laravel,
          React/Node, and MySQL, collaborating cross-functionally to gather
          requirements and deliver high-quality, reliable solutions through
          rigorous testing.
        </p>
      </div>

      <div className={styles.experience}>
        <h2>Full Stack Developer</h2>
        <a href="https://www.in4.digital/" target="_blank">
          <p className={styles.company}>IN4</p>
        </a>
        <p className={styles.location}>Meknes, Morocco</p>
        <p className={styles.duration}>2018-2019</p>
        <p>
          Worked on building multiple e-commerce websites with specific
          requirements for each client using the Laravel framework.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
