'use client';

import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import styles from './about.module.css';
import Image from 'next/image';
import React, { type FC } from 'react';

const About: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/image-about.png"
            alt="Omar Lekouch portrait"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>

        <div className={styles.aboutText}>
          <h1>Hey there! I&apos;m Omar LEKOUCH</h1>

          <p>
            I&apos;m a senior full stack engineer based in Marrakech, Morocco.
            Since 2016 I&apos;ve been building web products for companies in
            Morocco, Switzerland, the United States, and France .
          </p>

          <p>
            I specialize in complex business logic — billing systems, contract
            flows, API integrations — not just interfaces. Most recent work was
            a production platform for a French energy company integrating
            Haulogy, Enedis, and Pennylane.
          </p>

          <p>
            I&apos;m fluent in French and English and work remotely with
            European and international teams. Outside of work I&apos;m into
            photography, travel, and the slow life Marrakech offers.
          </p>

          <a href="/gallery" className={styles.galleryLink}>
            My Gallery
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
