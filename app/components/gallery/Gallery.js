'use client'

import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../footer/Footer'
import Image from 'next/image'
import styles from './gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.galleryContainer} id="gallery">
        <h1 className={styles.galleryTitle}>Gallery</h1>
        <div className={styles.galleryGrid}>
          <Image
            src="/gallery-pictures/1.jpg"
            alt="Gallery Photo 1"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/2.jpg"
            alt="gallery-pictures Photo 2"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/3.jpg"
            alt="gallery-pictures Photo 3"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/4.jpg"
            alt="gallery-pictures Photo 4"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/5.jpg"
            alt="gallery-pictures Photo 5"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/6.jpg"
            alt="gallery-pictures Photo 6"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/7.jpg"
            alt="gallery-pictures Photo 7"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/8.jpg"
            alt="Gallery Photo 8"
            width={300}
            height={200}
          />
          <Image
            src="/gallery-pictures/452.jpg"
            alt="kech street"
            width={300}
            height={200}
          />
          {/* Add more images as needed */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
