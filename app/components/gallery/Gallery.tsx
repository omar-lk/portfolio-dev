import Image from 'next/image';
import React from 'react';
import type { Locale, SiteDictionary } from '../../i18n';
import Navbar from '../NavBar/NavBar';
import Footer from '../footer/Footer';
import styles from './gallery.module.css';

const IMAGE_PATHS = [
  '/gallery-pictures/1.jpg',
  '/gallery-pictures/2.jpg',
  '/gallery-pictures/3.jpg',
  '/gallery-pictures/4.jpg',
  '/gallery-pictures/5.jpg',
  '/gallery-pictures/6.jpg',
  '/gallery-pictures/7.jpg',
  '/gallery-pictures/8.jpg',
  '/gallery-pictures/452.jpg',
];

type GalleryProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

const Gallery = ({ locale, dictionary }: GalleryProps) => {
  return (
    <div className={styles.pageContainer}>
      <Navbar locale={locale} currentPath="/gallery" copy={dictionary.nav} />
      <div className={styles.galleryContainer} id="gallery">
        <h1 className={styles.galleryTitle}>{dictionary.gallery.title}</h1>
        <div className={styles.galleryGrid}>
          {IMAGE_PATHS.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={dictionary.gallery.imageAlts[index]}
              width={300}
              height={200}
            />
          ))}
        </div>
      </div>
      <Footer locale={locale} copy={dictionary.footer} />
    </div>
  );
};

export default Gallery;
