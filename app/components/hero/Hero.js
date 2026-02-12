import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.aboutContainer}>
          <h1>hey, I&apos;m Omar👋.</h1>
          <h2>
            I’m a Senior React & Next.js Engineer with 9+ years of experience
            building scalable, production-ready web applications for companies
            across Europe and North America. I specialize in high-performance
            frontends and full-stack architectures using Next.js, React,
            PostgreSQL, and modern cloud infrastructure. I work fluently in
            English and French and focus on clean architecture, strong UX, and
            reliable execution.
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
