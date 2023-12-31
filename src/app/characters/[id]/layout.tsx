import styles from './layout.module.css'

function CharacterLayout({ characterImage, characterData }: { characterImage: React.ReactNode, characterData: React.ReactNode }) {
  return (
    <div className={styles.Character__container}>
      <div className={styles.Character__container__left}>
        {characterImage}
      </div>
      <div className={styles.Character__container__right}>
        {characterData}
      </div>
    </div>

  )
}

export default CharacterLayout