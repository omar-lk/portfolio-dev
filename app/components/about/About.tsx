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
            I&apos;m a senior full stack engineer with 9+ years building
            production web platforms — and over the last year I&apos;ve
            deliberately specialized in AI engineering, shipping real products
            with retrieval-augmented generation, LLM integration, and semantic
            search rather than just reading about them.
          </p>

          <p>
            That specialization is backed by shipped work, not a certificate:{' '}
            <a href="/#work" className={styles.inlineLink}>Coffee AI</a>, a
            live RAG-powered chatbot built on pgvector, OpenAI embeddings, and
            Anthropic Claude, plus hands-on experience with the Model Context
            Protocol (MCP) and modern LLM application architecture.
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
