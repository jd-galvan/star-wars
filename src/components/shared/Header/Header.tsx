import Link from "next/link"
import styles from './Header.module.css'

export const Header = () => {
  return (
    <section className={styles.Menu}>
      <ul>
        <li><Link href="/characters?page=1">Characters</Link></li>
        <li><Link href="/planets?page=1">Planets</Link></li>
        <li><Link href="/starships?page=1">Starships</Link></li>
      </ul>
    </section>
  )
}
