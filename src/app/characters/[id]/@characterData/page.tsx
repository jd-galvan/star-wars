import { getCharacterById } from "@/services/swapi/characters";
import styles from './page.module.css'

interface CharacterPageProps {
  params: {
    id: string;
  }
}

async function CharacterData(props: CharacterPageProps) {
  const { id } = props.params
  const character = await getCharacterById(id)

  return (
    <div className={styles.CharacterData}>
      <h2>{character.name}</h2>
      <h3>Height: </h3><p>{character.height}</p><br />
      <h3>Mass: </h3><p>{character.mass}</p><br />
      <h3>Hair Color: </h3><p>{character.hair_color}</p><br />
      <h3>Skin Color: </h3><p>{character.skin_color}</p><br />
      <h3>Eye Color: </h3><p>{character.eye_color}</p><br />
      <h3>Birth Year: </h3><p>{character.birth_year}</p><br />
      <h3>Gender: </h3><p>{character.gender}</p><br />
    </div>
  )
}

export default CharacterData