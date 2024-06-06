import React from 'react'
import styles from './footer.module.css'
import logo from './logo.png' // Make sure to replace with the actual path to your logo image

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* <img src="/logo-last.png" alt="Logo" className={styles.footerLogo} /> */}
      <div className={styles.footerPowered}>Powered by Omar LEKOUCH. All Rights Reserved 2024.</div>
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
            href="https://www.linkedin.com/in/omar-lekouch-2392ab127/"
            className={styles.footerLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
