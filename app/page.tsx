import React from 'react';
import styles from './page.module.css';
import Hero from './components/hero/Hero';
import Proof from './components/proof/Proof';
import Stack from './components/stacks/Stack';
import Navbar from './components/NavBar/NavBar';
import Work from './components/work/Work';
import Experiences from './components/experiences/Experiences';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Proof />
      <Work />
      <Stack />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
