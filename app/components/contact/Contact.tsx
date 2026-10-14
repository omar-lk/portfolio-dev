import React from 'react';
import type { SiteDictionary } from '../../i18n';
import styles from './contact.module.css';

const Contact = ({ copy }: { copy: SiteDictionary['contact'] }) => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>{copy.title}</h1>
      <p className={styles.contactDescription}>{copy.description}</p>
      <div className={styles.contactCtaRow}>
        <a href="mailto:omar.lekouch@gmail.com" className={styles.contactButton}>
          {copy.emailMe}
        </a>
        <a
          href="https://www.linkedin.com/in/omar-lekouch/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButtonSecondary}
        >
          {copy.linkedin}
        </a>
      </div>
      <p className={styles.contactEmailLine}>
        {copy.emailLabel}: <a href="mailto:omar.lekouch@gmail.com">omar.lekouch@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
