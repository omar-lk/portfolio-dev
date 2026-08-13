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
          <h1>Hey! I&apos;m Omar LEKOUCH</h1>

          <p>
            I&apos;m a senior full-stack engineer with 9+ years of experience
            building production software across energy, fintech, SaaS, and AI.
          </p>

          <p>
            I like taking ownership of things from architecture to deployment,
            especially when the problem is complex and the software actually
            matters. A lot of my work has been around systems where things need
            to be right  billing, payments, APIs, business workflows, data
            synchronization, and automation.
          </p>

          <p>
            I&apos;m based in Marrakech and work remotely with teams around the
            world. I speak English, French, and Arabic.
          </p>

          <p>
            Outside of work, I&apos;m usually taking photos in the streets,
            cooking Mediterranean food slowly, sitting in a good coffee shop,
            or watching more TV shows than I probably should.
          </p>

          <p>
            I like building serious software, but I&apos;m a big believer in
            keeping life simple. Calm life, on purpose.
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