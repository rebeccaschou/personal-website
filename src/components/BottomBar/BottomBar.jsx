import styles from "./BottomBar.module.scss";

export default function BottomBar() {
  return (
    <div className={styles[`bottom-bar`]}>
      <div className={styles.container}>
        <hr className={styles.divider}></hr>
        <div>
          <p>© Rebecca Chou 2025</p>
        </div>
      </div>
    </div>
  );
}
