'use client'

import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../footer/Footer'
import styles from './about.module.css'
import Image from 'next/image'

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
            Picture a web developer with the brain of a genius and the
            creativity of an artist – that&apos;s me! Since 2016, I&apos;ve been crafting
            digital wonders in the vibrant city of Marrakech, Morocco. Whether
            you need the next big app or a bug-fixing superhero, I&apos;m your go-to
            person.
          </p>
          <p>
            With expertise in React.js and Laravel, I transform code into
            user-friendly masterpieces. My communication skills ensure smooth
            sailing whether I&apos;m working solo or as part of a team. Got a tight
            deadline? I&apos;m nearly that fast.
          </p>
          <p>
            When I&apos;m not buried in code, you&apos;ll find me out on the streets
            capturing life&apos;s moments through my camera lens. Dive into my
            gallery for a visual treat. Let&apos;s create something amazing together!
          </p>
          <a href="/gallery" className={styles.galleryLink}>
            My Gallery
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
