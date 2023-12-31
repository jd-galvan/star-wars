import Link from 'next/link'
import styles from './Description.module.css'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <p>
        A fan guide based on <Link target='blank' href="https://swapi.dev/">Swapi</Link> and <Link target='blank' href="https://akabab.github.io/starwars-api/">starwars-api</Link>
      </p>
    </section>
  )
}
