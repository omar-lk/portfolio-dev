import React from 'react';
import styles from './page.module.css';
import Hero from './components/hero/Hero';
import Stack from './components/stacks/Stack';
import Navbar from './components/NavBar/NavBar';
import Experiences from './components/experiences/Experiences';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Stack />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
