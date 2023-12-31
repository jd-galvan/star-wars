import styles from './PlanetItem.module.css'

interface PlanetItemPageProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export const PlanetItem = (props: PlanetItemPageProps) => {
  return (
    <div className={styles.PlanetItem}>
      {props.name}
    </div>
  )
}