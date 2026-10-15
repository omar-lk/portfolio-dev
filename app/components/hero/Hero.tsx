import React from 'react';
import Image from 'next/image';
import { resumePath, type Locale, type SiteDictionary } from '../../i18n';
import styles from './hero.module.css';

type HeroProps = {
  locale: Locale;
  copy: SiteDictionary['hero'];
};

const Hero = ({ locale, copy }: HeroProps) => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.aboutContainer}>
          <h1>{copy.title}</h1>
          <p className={styles.subhead}>{copy.subhead}</p>
          <p className={styles.currentLine}>{copy.current}</p>
          <p className={styles.availability}>{copy.availability}</p>
          <div className={styles.ctaRow}>
            <a href="#work" className={styles.ctaPrimary}>{copy.viewWork}</a>
            <a href="#contact" className={styles.ctaSecondary}>{copy.getInTouch}</a>
            <a
              href={resumePath(locale)}
              download
              className={styles.ctaSecondary}
            >
              {copy.resume}
            </a>
          </div>
        </div>
        <div className={styles.profilePicture}>
          <Image
            src="/gallery-pictures/profile.jpg"
            alt={copy.portraitAlt}
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
