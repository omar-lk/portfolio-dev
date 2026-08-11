import React from 'react';
import styles from './work.module.css';

const Work = () => {
  return (
    <div id="work" className={styles.workContainer}>
      <h1 className={styles.sectionTitle}>Selected Work</h1>
      <p className={styles.sectionSubtitle}>
        Production systems I&apos;ve built for clients across Europe and the
        US — plus one independent AI project.
      </p>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Contract &amp; billing platform for a French energy company</h2>
        </div>
        <p className={styles.meta}>Freelance · 2024–2026 · Remote</p>

        <span className={styles.label}>Problem</span>
        <p>
          Contract creation, billing, and reconciliation were split across
          manual steps and disconnected external systems — energy delivery
          data arrived as XML files that had to be validated before it could
          be turned into an accurate invoice.
        </p>

        <span className={styles.label}>What I built</span>
        <p>
          Built the core contract creation flows and customer-facing
          dashboards, then built the billing pipeline end to end: ingesting
          and validating XML delivery data, running the business calculations
          that turn usage data into charges, and generating invoices.
          Integrated Haulogy for energy contract data, Enedis for electricity
          delivery point data, Pennylane for accounting synchronization, and
          DocuSign for contract signature — with a GoCardless payment
          integration in progress. Deployed and operated the platform in
          production.
        </p>

        <span className={styles.label}>Integrations</span>
        <div className={styles.tagRow}>
          <span className={styles.tag}>Haulogy</span>
          <span className={styles.tag}>Enedis</span>
          <span className={styles.tag}>Pennylane</span>
          <span className={styles.tag}>DocuSign</span>
          <span className={styles.tag}>GoCardless (in progress)</span>
        </div>

        <div className={styles.tagRow}>
          <span className={styles.tag}>Next.js</span>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>Node.js</span>
          <span className={styles.tag}>Prisma</span>
          <span className={styles.tag}>PostgreSQL</span>
          <span className={styles.tag}>Docker</span>
          <span className={styles.tag}>DigitalOcean</span>
        </div>

        <span className={styles.privateNote}>Internal platform — not publicly accessible</span>
      </div>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>German Pharmacy Platform</h2>
        </div>
        <p className={styles.meta}>Germany · Frontend Engineer</p>

        <span className={styles.label}>What I built</span>
        <p>
          Built the complete customer-facing frontend for a production
          pharmacy platform using Next.js.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>Next.js</span>
        </div>

        <a
          href="https://apotheke-marienheide.de/de"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demoLink}
        >
          View live site →
        </a>
      </div>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Interlincx Media</h2>
        </div>
        <p className={styles.meta}>Los Angeles, USA · 2021–2024</p>

        <span className={styles.label}>What I built</span>
        <p>
          Built form builders and a drag-and-drop template builder for
          content editors and analysts producing monetizable articles,
          including offer and template systems for editorial tooling, and
          worked directly with the engineering team to extend the Netlify CMS.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>Netlify CMS</span>
        </div>
      </div>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Mobiletic</h2>
        </div>
        <p className={styles.meta}>Geneva, Switzerland · Full-Stack Engineer</p>

        <span className={styles.label}>What I built</span>
        <p>
          Built a large-scale e-learning platform used by multiple companies,
          with REST APIs, SSO authentication, and real-time features via
          WebSockets. Worked on database query optimization, caching,
          background queues, and transactional email.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>Laravel</span>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>Angular</span>
        </div>
      </div>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Sagatech</h2>
        </div>
        <p className={styles.meta}>Meknes, Morocco · 2019–2020</p>

        <span className={styles.label}>What I built</span>
        <p>
          Built payment gateway and barcode integrations on a SQL Server
          backend, then led the migration and rebuild toward a cloud
          architecture using Laravel, React, and MySQL.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>Laravel</span>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>MySQL</span>
          <span className={styles.tag}>SQL Server</span>
        </div>
      </div>

      <div className={styles.aiSection}>
        <p className={styles.aiSectionLabel}>Independent AI Project</p>

        <div className={`${styles.caseStudy} ${styles.aiCaseStudy}`}>
          <div className={styles.caseStudyHeader}>
            <h2>Coffee AI</h2>
          </div>
          <p className={styles.meta}>Marrakech, Morocco</p>

          <p>
            A live RAG application exploring semantic search, vector
            retrieval, and LLM-powered recommendations — coffee shop data is
            embedded with OpenAI and stored in PostgreSQL via pgvector, each
            query is matched against that index by semantic similarity, and
            the retrieved results are passed to Anthropic&apos;s Claude to
            generate the response.
          </p>

          <div className={styles.tagRow}>
            <span className={styles.tag}>OpenAI Embeddings</span>
            <span className={styles.tag}>PostgreSQL</span>
            <span className={styles.tag}>pgvector</span>
            <span className={styles.tag}>Anthropic Claude</span>
            <span className={styles.tag}>RAG</span>
          </div>

          <a
            href="https://coffee-ai-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoLink}
          >
            View live demo →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
