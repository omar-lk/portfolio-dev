import React from "react";
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Have a Project?</h1>
      <p className={styles.contactDescription}>
        Leverage my expertise as a seasoned product designer to elevate your ideas into exceptional, standout designs. 
        I excel in infusing innovation and functionality, ensuring your project not only meets but exceeds expectations.
      </p>
      <a href="mailto:omar.lk.dev@gmail.com">
      <button className={styles.contactButton}>Let&apos;s Talk</button>
      </a>
      <br></br>
      <br></br>
      <p>Email: <a href="mailto:your-email@example.com">omar.lk.dev@gmail.com</a></p>
    </div>
  );
}

export default Contact;
