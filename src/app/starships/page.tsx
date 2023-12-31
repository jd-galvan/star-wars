import styles from './page.module.css'
import Link from "next/link"
import { StarshipItem } from '@/components/listItems/StarshipItem/StarshipItem'
import { getStarships } from '@/services/swapi/starships'

interface StarshipsPageProps {
  searchParams: {
    page: string;
  }
}

export default async function Starships({ searchParams }: StarshipsPageProps) {
  const { nextPage, previousPage, starships } = await getStarships(`https://swapi.dev/api/starships?page=${searchParams.page}`)
  return (
    <section className={styles.Starships}>
      <div>
        {starships?.map(e => (
          <StarshipItem key={e} {...e} />
        )
        )}
      </div>
      <Link className={previousPage ? "linkEnabled" : "linkDisabled"} href={previousPage ? `/starships?page=${previousPage}` : '#'}>Anterior</Link>
      <Link className={nextPage ? "linkEnabled" : "linkDisabled"} href={nextPage ? `/starships?page=${nextPage}` : '#'}>Siguiente</Link>
    </section>
  )
}
