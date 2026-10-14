import React from 'react';
import type { Locale, SiteDictionary } from '../i18n';
import Navbar from './NavBar/NavBar';
import Hero from './hero/Hero';
import Proof from './proof/Proof';
import Work from './work/Work';
import Stack from './stacks/Stack';
import Experiences from './experiences/Experiences';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import styles from '../page.module.css';

type HomeProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

export default function Home({ locale, dictionary }: HomeProps) {
  return (
    <main className={styles.main}>
      <Navbar locale={locale} currentPath="/" copy={dictionary.nav} />
      <Hero copy={dictionary.hero} />
      <Proof points={dictionary.proof} />
      <Work copy={dictionary.work} />
      <Stack copy={dictionary.stack} />
      <Experiences copy={dictionary.experiences} />
      <Contact copy={dictionary.contact} />
      <Footer copy={dictionary.footer} />
    </main>
  );
}
