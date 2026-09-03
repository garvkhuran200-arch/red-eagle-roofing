import { CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import styles from './About.module.css'

const COMMITMENTS = [
  'Licensed and fully insured across Alberta',
  'Manufacturer-certified installation crews',
  'Same crew lead from quote to final walkthrough',
  'Daily site cleanup, always',
]

function About() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className={styles.about} aria-label="About Red Eagle Roofing">
      <div ref={ref} className={`container ${styles.grid} reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>Built by roofers who call Edmonton home.</h2>

          <p className={styles.paragraph}>
            Red Eagle Roofing started with a simple idea: treat every roof like
            it's protecting our own family. Our crews are Edmonton-based,
            trained on the manufacturer systems we install, and equipped for
            the freeze-thaw cycles that wear out lesser roofs within a decade.
          </p>

          <p className={styles.paragraph}>
            We show up when we say we will, communicate directly with the
            person doing the work, and leave your property cleaner than we
            found it.
          </p>

          <ul className={styles.list} role="list">
            {COMMITMENTS.map((item) => (
              <li key={item} className={styles.listItem}>
                <CheckCircle2 size={18} aria-hidden="true" className={styles.listIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageWrap}>
          <svg viewBox="0 0 480 480" className={styles.blueprintArt} aria-hidden="true">
            <rect width="480" height="480" fill="var(--color-paper-dim)" />

            {/* roofline */}
            <path
              d="M90 240 L240 100 L390 240"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="3"
              strokeLinejoin="round"
            />

            {/* walls */}
            <rect x="110" y="240" width="260" height="170" fill="none" stroke="var(--color-ink)" strokeWidth="3" />

            {/* windows */}
            <rect x="150" y="270" width="42" height="42" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
            <rect x="288" y="270" width="42" height="42" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />

            {/* door */}
            <rect x="212" y="330" width="56" height="80" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />

            {/* horizontal dimension line (blueprint annotation) */}
            <line x1="90" y1="435" x2="390" y2="435" stroke="var(--color-red)" strokeWidth="1.5" />
            <line x1="90" y1="425" x2="90" y2="445" stroke="var(--color-red)" strokeWidth="1.5" />
            <line x1="390" y1="425" x2="390" y2="445" stroke="var(--color-red)" strokeWidth="1.5" />

            {/* vertical dimension line */}
            <line x1="415" y1="100" x2="415" y2="410" stroke="var(--color-red)" strokeWidth="1.5" />
            <line x1="405" y1="100" x2="425" y2="100" stroke="var(--color-red)" strokeWidth="1.5" />
            <line x1="405" y1="410" x2="425" y2="410" stroke="var(--color-red)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default About