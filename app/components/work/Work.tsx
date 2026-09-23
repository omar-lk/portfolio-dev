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
          <h2>Energy management, contracts &amp; billing platform</h2>
        </div>
        <p className={styles.meta}>
          European energy-tech company · Full-Stack Engineer · 2024–2026 ·
          Remote
        </p>

        <span className={styles.label}>What I built</span>
        <p>
          Worked as a full-stack engineer on a production energy-management
          platform serving customers, partners, and internal operations teams.
          Developed contract creation and review workflows, role-based access
          controls, and customer dashboards for tracking contracts, invoices,
          electricity consumption, and energy production.
        </p>
        <p>
          On the backend, built and maintained data pipelines that ingest and
          validate energy-delivery XML files, apply tariff and consumption
          calculations, and prepare billing data for accounting. Integrated
          Haulogy for customer and contract synchronization, Enedis for
          delivery-point and metering data, Pennylane for invoice and
          accounting workflows, and DocuSign for electronic signatures and
          signed-contract archiving. Also contributed to the GoCardless
          payment workflow, including mandates, payment tracking, webhooks,
          and reconciliation.
        </p>
        <p>
          The platform was containerized with Docker, deployed on DigitalOcean,
          and monitored in production with scheduled jobs, structured logging,
          and Sentry.
        </p>

        <span className={styles.label}>Integrations</span>
        <div className={styles.tagRow}>
          <span className={styles.tag}>Haulogy</span>
          <span className={styles.tag}>Enedis</span>
          <span className={styles.tag}>Pennylane</span>
          <span className={styles.tag}>DocuSign</span>
          <span className={styles.tag}>GoCardless</span>
        </div>

        <div className={styles.tagRow}>
          <span className={styles.tag}>Next.js 14</span>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>TypeScript</span>
          <span className={styles.tag}>Node.js</span>
          <span className={styles.tag}>Prisma</span>
          <span className={styles.tag}>PostgreSQL</span>
          <span className={styles.tag}>Docker</span>
          <span className={styles.tag}>DigitalOcean</span>
          <span className={styles.tag}>Sentry</span>
        </div>

        <span className={styles.privateNote}>Internal platform — not publicly accessible</span>
      </div>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Ovadiator</h2>
        </div>
        <p className={styles.meta}>
          European energy-tech company · Internal accounting platform
        </p>

        <span className={styles.label}>What I built</span>
        <p>
          Developed an internal platform that helps an accounting department
          manage invoices and payment data more efficiently. Ovadiator
          automates XML invoice processing, matches customers with their
          GoCardless payment mandates, centralizes client records, and exports
          validated data to CSV.
        </p>
        <p>
          By reducing repetitive manual work and data-entry errors, the
          platform streamlines the accounting workflow and makes payment
          preparation faster and more reliable.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>TypeScript</span>
          <span className={styles.tag}>Tailwind CSS</span>
          <span className={styles.tag}>Supabase</span>
          <span className={styles.tag}>GoCardless</span>
          <span className={styles.tag}>XML</span>
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
