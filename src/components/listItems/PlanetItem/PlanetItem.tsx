import styles from './PlanetItem.module.css'

interface PlanetItemPageProps {
  name: string;
}

export const PlanetItem = (props: PlanetItemPageProps) => {
  return (
    <div className={styles.PlanetItem}>
      {props.name}
    </div>
  )
}