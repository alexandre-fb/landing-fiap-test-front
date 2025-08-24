
import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
  title?: string;
  subtitle?: string;
};

export default function SectionTitle({
  title = "Cursos",
  subtitle = "Cursos de Curta Duração",
}: SectionTitleProps) {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.subtitle}>{subtitle}</h4>
    </div>
  );
}