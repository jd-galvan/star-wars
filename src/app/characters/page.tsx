import { CharacterItem } from "@/components/listItems/CharacterItem/CharacterItem"
import { getCharacters } from "@/services/swapi/characters"
import styles from './page.module.css'
import Link from "next/link"

interface CharactersPageProps {
  searchParams: {
    page: string;
  }
}

export default async function Characters({ searchParams }: CharactersPageProps) {
  const { nextPage, previousPage, characters } = await getCharacters(searchParams.page)


  return (
    <section className={styles.Characters}>
      <h3>Select a character</h3>
      <div>
        {characters?.map((e: CharacterType) => (
          <CharacterItem key={e.name} {...e} />
        )
        )}
      </div>
      <Link className={previousPage ? "linkEnabled" : "linkDisabled"} href={previousPage ? `/characters?page=${previousPage}` : '#'}>Anterior</Link>
      <Link className={nextPage ? "linkEnabled" : "linkDisabled"} href={nextPage ? `/characters?page=${nextPage}` : '#'}>Siguiente</Link>
    </section>
  )
}
