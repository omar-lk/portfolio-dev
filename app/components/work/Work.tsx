import React from 'react';
import styles from './work.module.css';

const Work = () => {
  return (
    <div id="work" className={styles.workContainer}>
      <h1 className={styles.sectionTitle}>Selected Work</h1>
      <p className={styles.sectionSubtitle}>
        Two production systems — one enterprise integration platform, one AI-native product.
      </p>

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Coffee AI — RAG-powered coffee shop finder</h2>
        </div>
        <p className={styles.meta}>Live product · Marrakech, Morocco</p>

        <span className={styles.label}>Problem</span>
        <p>
          Finding a coffee shop that actually fits what you need — reliable
          wifi, a quiet corner, a specific neighborhood — means scrolling
          generic map listings with no way to ask a real question.
        </p>

        <span className={styles.label}>What I built</span>
        <p>
          A conversational search tool: you ask in plain language (&quot;a quiet
          spot with good wifi in Gueliz&quot;) and get back relevant shops, not
          keyword matches. Coffee shop data is embedded with OpenAI and stored
          in Postgres via pgvector; each query is embedded and matched against
          that index with semantic similarity search, and the retrieved
          results are passed to Anthropic&apos;s Claude to generate a direct,
          conversational answer — a full retrieval-augmented generation
          pipeline, not a thin wrapper around a single API call.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>Next.js</span>
          <span className={styles.tag}>Supabase</span>
          <span className={styles.tag}>pgvector</span>
          <span className={styles.tag}>OpenAI Embeddings</span>
          <span className={styles.tag}>Anthropic Claude</span>
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

      <div className={styles.caseStudy}>
        <div className={styles.caseStudyHeader}>
          <h2>Contract &amp; billing platform for a French energy company</h2>
        </div>
        <p className={styles.meta}>Freelance · 2024–Present · Remote</p>

        <span className={styles.label}>Problem</span>
        <p>
          Contract creation, billing, and reconciliation were split across
          manual steps and three disconnected external systems, with no
          single dashboard tying the process together.
        </p>

        <span className={styles.label}>What I built</span>
        <p>
          Built the core contract creation flows and customer-facing
          dashboards, then automated billing by integrating three separate
          external systems: Haulogy for energy contract data, Enedis for
          electricity delivery point retrieval, and Pennylane for accounting
          synchronization — replacing manual data entry between them with
          direct API integrations.
        </p>

        <div className={styles.tagRow}>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>Next.js</span>
          <span className={styles.tag}>Node.js</span>
          <span className={styles.tag}>Prisma</span>
          <span className={styles.tag}>PostgreSQL</span>
          <span className={styles.tag}>Docker</span>
          <span className={styles.tag}>DigitalOcean</span>
        </div>

        <span className={styles.privateNote}>Internal platform — not publicly accessible</span>
      </div>

      <p className={styles.moreWork}>
        Also shipped: a large-scale e-learning platform for a Swiss company
        (Mobiletice), with SSO authentication and real-time features via web
        sockets, built on Laravel and React.
      </p>
    </div>
  );
};

export default Work;
