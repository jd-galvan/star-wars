import styles from './SectionTitle.module.css'

interface SectionTitlePageProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitlePageProps) => {
  return (
    <h1 className={styles.SectionTitle}>{title}</h1>
  )
}
