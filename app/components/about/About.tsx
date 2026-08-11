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
          <h1>Hey there! I&apos;m Omar LEKOUCH</h1>

          <p>
            I&apos;m a senior full-stack engineer with 9+ years shipping
            production software — billing platforms, payment integrations,
            and complex business systems — for companies in France,
            Switzerland, Germany, the US, and Morocco. My client engagements
            typically run 20 to 30 months, and I&apos;ve earned $100K+ across
            long-term and fixed-scope contracts on Upwork alone.
          </p>

          <p>
            Most recently, I&apos;ve extended that production experience into
            AI engineering:{' '}
            <a href="/#work" className={styles.inlineLink}>Coffee AI</a>, a
            live retrieval-augmented generation product, plus hands-on work
            integrating OpenAI and Anthropic APIs, vector search, and modern
            AI application patterns.
          </p>

          <p>
            On the full-stack side, my most recent work is a production
            platform for a French energy company — contract flows, billing
            automation, and integrations with Haulogy, Enedis, and Pennylane.
            Before that: an e-learning platform for a Swiss company
            (Mobiletice), and business systems for clients in Morocco.
          </p>

          <p>
            Based in Marrakech, Morocco. Fluent in French and English, and
            I&apos;ve worked remotely with teams across Morocco, Switzerland,
            France, and the US since 2016.
          </p>

          <p>
            Outside of work I&apos;m into photography and the slow life
            Marrakech offers — a few shots are in my gallery below.
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
