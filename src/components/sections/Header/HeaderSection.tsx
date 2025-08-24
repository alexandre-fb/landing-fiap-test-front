import styles from "./HeaderSection.module.scss";

export default function HeaderSection() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.textWrapper}>
        <h1 className={styles.headerTitle}>
          <span className={styles.indented}>A Melhor Faculdade</span>
          <span>de Tecnologia</span>
        </h1>
        <h2 className={styles.headerSubtitle}>
          SOB<span className={styles.sobreRight}>RE</span>
        </h2>
      </div>
    </div>
  );
}
