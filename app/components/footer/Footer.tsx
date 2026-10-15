import React from 'react';
import { resumePath, type Locale, type SiteDictionary } from '../../i18n';
import styles from './footer.module.css';

type FooterProps = {
  locale: Locale;
  copy: SiteDictionary['footer'];
};

const Footer = ({ locale, copy }: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerPowered}>© 2026 Omar Lekouch</div>
      <div className={styles.footerInfo}>
        <div className={styles.footerLinks}>
          <a
            href="https://github.com/omar-lincx"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/omar-lekouch/"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={resumePath(locale)} className={styles.footerLink} download>
            {copy.resume}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
