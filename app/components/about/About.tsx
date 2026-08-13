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
            src="/image-about.jpg"
            alt="Omar Lekouch portrait"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>

        <div className={styles.aboutText}>
          <h1>Hey ! I&apos;m Omar LEKOUCH</h1>

          <p>
            I'm a senior engineer who enjoys turning complex business problems into reliable, production-ready software.

            Over the years, I've worked across SaaS, energy, fintech, e-learning, and AI, usually taking ownership from architecture and development through integrations and deployment.

            Most of my work involves systems where things need to be correct and dependable — billing, payments, business workflows, APIs, data synchronization, and automation. More recently, I've been applying the same engineering mindset to AI products.

            I work remotely from Marrakech, Morocco, and speak English, French, and Arabic.

            Outside of code, you'll usually find me with a camera, looking for a good coffee, or exploring new places.
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
