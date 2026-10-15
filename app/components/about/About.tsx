import Image from 'next/image';
import React from 'react';
import type { Locale, SiteDictionary } from '../../i18n';
import { localizedPath } from '../../i18n';
import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import styles from './about.module.css';

type AboutProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

const About = ({ locale, dictionary }: AboutProps) => {
  return (
    <div className={styles.pageContainer}>
      <Navbar locale={locale} currentPath="/about" copy={dictionary.nav} />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/image-about.jpg"
            alt={dictionary.about.portraitAlt}
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>

        <div className={styles.aboutText}>
          <h1>{dictionary.about.title}</h1>

          {dictionary.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <a href={localizedPath(locale, '/gallery')} className={styles.galleryLink}>
            {dictionary.about.galleryLink}
          </a>
        </div>
      </div>

      <Footer locale={locale} copy={dictionary.footer} />
    </div>
  );
};

export default About;
