import styles from './page.module.css'
import Link from "next/link"
import { PlanetItem } from "@/components/listItems/PlanetItem/PlanetItem"
import { getPlanets } from "@/services/swapi/planets"

interface PlanetsPageProps {
  searchParams: {
    page: string;
  }
}

export default async function Planets({ searchParams }: PlanetsPageProps) {
  const { nextPage, previousPage, planets } = await getPlanets(`https://swapi.dev/api/planets?page=${searchParams.page}`)
  return (
    <section className={styles.Planets}>
      <div>
        {planets?.map(e => (
          <PlanetItem key={e.name} {...e} />
        )
        )}
      </div>
      <Link className={previousPage ? "linkEnabled" : "linkDisabled"} href={previousPage ? `/planets?page=${previousPage}` : '#'}>Anterior</Link>
      <Link className={nextPage ? "linkEnabled" : "linkDisabled"} href={nextPage ? `/planets?page=${nextPage}` : '#'}>Siguiente</Link>
    </section>
  )
}
