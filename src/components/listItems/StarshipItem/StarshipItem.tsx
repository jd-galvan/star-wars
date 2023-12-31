import styles from './StarshipItem.module.css'

interface StarshipItemPageProps {
  name: string;
}

export const StarshipItem = ({ name }: StarshipItemPageProps) => {
  return (
    <div className={styles.StarshipItem}>
      {name}
    </div>
  )
}