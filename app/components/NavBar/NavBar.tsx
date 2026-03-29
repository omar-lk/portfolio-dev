'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarItem}>
        <div className={styles.logo}>
          <span className={styles.logoBracket}>&lt;</span>
          <span className={styles.logoText}>OMR</span>
          <span className={styles.logoBracket}>/&gt;</span>
        </div>
      </Link>
      {/* <div className={styles.navbarLogo}>
        <Image src="/logo-last.png" alt="logo" width={50} height={50} />
      </div> */}
      <div className={`${styles.navbarMenu} ${menuOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navbarItem}>
          Home
        </Link>
        <Link href="/about" className={styles.navbarItem}>
          About
        </Link>
        {/* <Link href="#projects" className={styles.navbarItem}>
          Projects
        </Link> */}
        <Link href="/#contact" className={styles.navbarItem}>
          Contact
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
