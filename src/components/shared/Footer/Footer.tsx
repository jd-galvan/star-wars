import Link from 'next/link'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <section className={styles.Footer}>
      <Link target='blank' href="https://www.jgalvan.tech">jgalvan.tech</Link>
    </section>
  )
}
