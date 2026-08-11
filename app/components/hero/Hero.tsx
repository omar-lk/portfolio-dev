import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.aboutContainer}>
          <h1>Senior Full-Stack Engineer — 9+ years building production systems</h1>
          <p className={styles.subhead}>
            I build billing and payment platforms, complex third-party
            integrations, and SaaS products for companies across France,
            Switzerland, Germany, the US, and Morocco — and, more recently,
            modern AI-powered products.
          </p>
          <p className={styles.currentLine}>
            Currently: contract &amp; billing platform for a French energy
            company. React, Next.js, Node.js, PostgreSQL, Docker. Fluent in
            French and English.
          </p>
          <p className={styles.availability}>
            Open to full-time roles and long-term contracts — available immediately.
          </p>
          <div className={styles.ctaRow}>
            <a href="#work" className={styles.ctaPrimary}>View my work</a>
            <a href="#contact" className={styles.ctaSecondary}>Get in touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
              Resume
            </a>
          </div>
        </div>
        <div className={styles.profilePicture}>
          <Image
            src="/gallery-pictures/profile.jpg"
            alt="Omar Lekouch - Senior Full Stack Engineer"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
