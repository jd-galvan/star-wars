import Link from 'next/link';
import styles from './CharacterItem.module.css'

interface CharacterItemPageProps {
  name: string;
  id: string;
}

export const CharacterItem = ({ name, id }: CharacterItemPageProps) => {
  return (
    <>
      <Link className={styles.CharacterItem__link} href={`/characters/${id}`}>
        <div className={styles.CharacterItem__container}>
          {name}
        </div>
      </Link>
    </>
  )
}