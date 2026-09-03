import { Home, Wrench, ClipboardCheck, CloudLightning, Building2, Droplets } from 'lucide-react'
import { services } from '../../data/services.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import styles from './Services.module.css'

const ICONS = {
  Home,
  Wrench,
  ClipboardCheck,
  CloudLightning,
  Building2,
  Droplets,
}

function Services() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="services" className={styles.services} aria-label="Services">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Roofing services for Edmonton homes and businesses</h2>
          <p className={styles.intro}>
            From a single repair to a full commercial re-roof, every job is measured,
            documented, and warrantied — no shortcuts, no surprises on the invoice.
          </p>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${isVisible ? 'is-visible' : ''}`}>
          {services.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <div key={service.id} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services