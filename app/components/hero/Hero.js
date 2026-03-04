import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.aboutContainer}>
          <h1>hey, I&apos;m Omar👋.</h1>
          <h2>
            I'm a Senior Full Stack Engineer with 9+ years of experience
            building production web platforms for European companies. Most
            recent work: a complex internal platform for a French energy company
            — contract management, billing automation, invoice generation, and
            integrations with Haulogy, Enedis, and Pennylane. I work across
            React, Next.js, Laravel, Node.js, PostgreSQL, and Docker. Fluent in
            French and English. Available for remote contracts.
          </h2>
        </div>
        <div className={styles.profilePicture}>
          <img src="/gallery-pictures/profile.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
