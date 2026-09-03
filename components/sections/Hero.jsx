import { Phone } from 'lucide-react'
import Button from '../ui/Button.jsx'
import { siteConfig } from '../../data/siteConfig.js'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>Edmonton roofs, built for real winters.</h1>

          <p className={styles.subhead}>
            Red Eagle Roofing installs and repairs residential and commercial roofs
            across {siteConfig.serviceArea}. Licensed, insured, and backed by a
            workmanship warranty on every job.
          </p>

          <div className={styles.actions}>
            <Button as="a" href="#contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
            <Button
              as="a"
              href={siteConfig.phone.href}
              variant="secondary"
              size="lg"
              className={styles.callButton}
            >
              <Phone size={18} aria-hidden="true" />
              Call Now — {siteConfig.phone.display}
            </Button>
          </div>
        </div>

        <div className={styles.imageWrap} aria-hidden="true">
          <svg viewBox="0 0 480 520" className={styles.roofArt}>
            <rect width="480" height="520" fill="var(--color-ink)" />
            <g stroke="var(--color-paper)" strokeOpacity="0.08" strokeWidth="2">
              <line x1="0" y1="80" x2="480" y2="80" />
              <line x1="0" y1="160" x2="480" y2="160" />
              <line x1="0" y1="240" x2="480" y2="240" />
              <line x1="0" y1="320" x2="480" y2="320" />
              <line x1="0" y1="400" x2="480" y2="400" />
            </g>
            <path
              d="M0 360 L120 200 L240 360 L360 200 L480 360 L480 520 L0 520 Z"
              fill="var(--color-red)"
            />
            <path
              d="M0 400 L120 260 L240 400 L360 260 L480 400 L480 520 L0 520 Z"
              fill="var(--color-red-deep)"
              fillOpacity="0.75"
            />
          </svg>

          <div className={styles.badge}>
            <span className={styles.badgeValue}>15-Year</span>
            <span className={styles.badgeLabel}>Workmanship Warranty</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero