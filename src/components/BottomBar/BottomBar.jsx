import styles from "./BottomBar.module.scss";

export default function BottomBar() {
  return (
    <div className={styles[`bottom-bar`]}>
      <div className={styles.container}>
        <hr className={styles.divider}></hr>
        <div className={styles.text}>
          <div className={styles.copyright}>
            <p>© Rebecca Chou 2025</p>
          </div>
          <div className={styles.contacts}>
            <a href="https://github.com/rebeccaschou" rel="noreferrer" target="_blank" className={styles.contact}>GitHub</a>
            <a href="https://www.linkedin.com/in/rebeccaschou/" rel="noreferrer" target="_blank" className={styles.contact}>LinkedIn</a>
            <a href="https://drive.google.com/file/d/1SYiJz-Fg2-nqP6rGwvw2f40fkPdaWgQF/view?usp=sharing" rel="noreferrer" target="_blank" className={styles.contact}>Curriculum Vitae</a>
          </div>
        </div>
      </div>
    </div>
  );
}
