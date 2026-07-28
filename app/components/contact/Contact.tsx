import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Hiring for a senior AI or full-stack role?</h1>
      <p className={styles.contactDescription}>
        Open to full-time positions and long-term contracts. Let&apos;s talk
        about what your team is building.
      </p>
      <div className={styles.contactCtaRow}>
        <a href="mailto:omar.lk.dev@gmail.com" className={styles.contactButton}>
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/omar-lekouch/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButtonSecondary}
        >
          Connect on LinkedIn
        </a>
      </div>
      <p className={styles.contactEmailLine}>
        Email: <a href="mailto:omar.lk.dev@gmail.com">omar.lk.dev@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
