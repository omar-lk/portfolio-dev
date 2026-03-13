'use client';

import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import styles from './about.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <Image
            src="/image-about.png"
            alt="Description of the image"
            width={500} // Specify the width of the image
            height={500} // Specify the height of the image
            layout="responsive" // Optional: Use 'fill', 'responsive', or other layouts as needed
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
