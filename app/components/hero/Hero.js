import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.aboutContainer}>
          <h1>hey, I&apos;m Omar👋.</h1>
          <h2>
            I build unique, efficient web applications tailored to your needs.
            Let&apos;s turn your ideas into reality and create something amazing
            together!
          </h2>
        </div>
        <div className={styles.profilePicture}>
          <img src="/gallery-pictures/profile.jpg" />
        </div>
      </div>
    </div>
  )
}
export default Hero
