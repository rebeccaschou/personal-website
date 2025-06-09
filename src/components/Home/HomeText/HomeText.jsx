import styles from "./HomeText.module.scss";

export default function HomeText() {
  return (
    <div className={styles.text}>
      <h1 className={styles.header}>Welcome!</h1>
      <p className={styles.description}>
        I'm <span>Rebecca Chou</span>, a student at Brown University and an
        aspiring mobile engineer!
      </p>
    </div>
  );
}
