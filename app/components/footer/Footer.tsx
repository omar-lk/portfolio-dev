import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
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
          <a href="/resume.pdf" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
