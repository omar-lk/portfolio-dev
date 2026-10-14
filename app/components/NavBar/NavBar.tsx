'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  alternateLocale,
  localizedPath,
  type Locale,
  type PagePath,
} from '../../i18n'
import type { NavCopy } from '../../i18n/types'
import styles from './Navbar.module.css'

type NavbarProps = {
  locale: Locale
  currentPath: PagePath
  copy: NavCopy
}

const Navbar = ({ locale, currentPath, copy }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const nextLocale = alternateLocale(locale)
  const languageHref = localizedPath(nextLocale, currentPath)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => setMenuOpen(false)

  const preserveHash = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.hash) {
      event.preventDefault()
      window.location.assign(`${languageHref}${window.location.hash}`)
    }
  }

  return (
    <nav className={styles.navbar}>
      <Link href={localizedPath(locale, '/')} className={styles.navbarItem}>
        <div className={styles.logo}>
          <span className={styles.logoBracket}>&lt;</span>
          <span className={styles.logoText}>OMR</span>
          <span className={styles.logoBracket}>/&gt;</span>
        </div>
      </Link>
      <div className={`${styles.navbarMenu} ${menuOpen ? styles.open : ''}`}>
        <Link href={localizedPath(locale, '/')} className={styles.navbarItem} onClick={closeMenu}>
          {copy.home}
        </Link>
        <Link href={`${localizedPath(locale, '/')}#work`} className={styles.navbarItem} onClick={closeMenu}>
          {copy.work}
        </Link>
        <Link href={localizedPath(locale, '/about')} className={styles.navbarItem} onClick={closeMenu}>
          {copy.about}
        </Link>
        <Link href="/resume.pdf" target="_blank" className={styles.navbarItem}>
          {copy.resume}
        </Link>
        <Link href={`${localizedPath(locale, '/')}#contact`} className={styles.navbarItem} onClick={closeMenu}>
          {copy.contact}
        </Link>
        <Link
          href={languageHref}
          hrefLang={nextLocale}
          lang={nextLocale}
          className={styles.languageSwitch}
          aria-label={copy.switchLanguage}
          title={copy.switchLanguage}
          onClick={preserveHash}
        >
          {nextLocale.toUpperCase()}
        </Link>
      </div>
      <button
        type="button"
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  )
}

export default Navbar
