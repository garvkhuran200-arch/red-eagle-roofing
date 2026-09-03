import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button.jsx'
import { siteConfig } from '../../data/siteConfig.js'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Subtle elevation once the page has scrolled, instead of a shadow
  // that's always present on a flat design.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on Escape.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a
          href="#home"
          className={styles.logo}
          onClick={closeMenu}
          aria-label={`${siteConfig.businessName} — home`}
        >
          <svg viewBox="0 0 32 32" className={styles.logoMark} aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="var(--color-ink)" />
            <path d="M16 6 L26 22 L6 22 Z" fill="var(--color-red)" />
          </svg>
          <span className={styles.logoText}>
            Red Eagle
            <span className={styles.logoTextSub}>Roofing</span>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <Button as="a" href="#contact" variant="primary" size="md">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Mobile"
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileNavList} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          as="a"
          href="#contact"
          variant="primary"
          size="lg"
          className={styles.mobileCta}
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Get a Free Quote
        </Button>
      </nav>
    </header>
  )
}

export default Navbar