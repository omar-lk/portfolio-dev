import React from 'react'
import styles from './projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.sectionTitle}>Projects</h1>

      <div className={styles.project}>
        <h2>React Developer</h2>
        <p className={styles.company}>Interlincx</p>
        <p className={styles.location}>Los Angeles, CA</p>
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

      <div className={styles.project}>
        <h2>Full Stack Developer</h2>
        <p className={styles.company}>Mobiletice</p>
        <p className={styles.location}>Suisse</p>
        <p>
          Built a large e-learning platform for Mobiletice clients using Laravel
          and React, incorporating SSO authentication, web sockets, database
          management, and deployments.
        </p>
      </div>

      <div className={styles.project}>
        <h2>Full Stack Developer</h2>
        <p className={styles.company}>IN4</p>
        <p className={styles.location}>Meknes</p>
        <p>
          Worked on building multiple e-commerce websites with specific
          requirements for each client using the Laravel framework.
        </p>
      </div>

      <div className={styles.project}>
        <h2>Full Stack Developer</h2>
        <p className={styles.company}>Sagacatch</p>
        <p className={styles.location}>Meknes City</p>
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
    </div>
  )
}

export default Projects
