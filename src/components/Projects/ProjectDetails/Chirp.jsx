import styles from "./ProjectDetails.module.scss";
import BottomBar from "../../BottomBar/BottomBar"

export default function Chirp() {
  return (
    <div className={styles[`project-details`]} id="chirp">
      <div className={styles.container}>
        <h1 classNames={styles.title} style={{ color: 'rgb(69, 80, 173)' }}>Chirp</h1>
        <h2 classNames={styles.description}>Transforming a research tool into an organic social platform</h2>

        <hr className={styles.divider}></hr>

        <div className={styles.summary}>
          <div>
            <p className={styles[`summary-header`]}>Role</p>
            <p>Mobile Engineer</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Timeline</p>
            <p>Fall 2024</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Team</p>
            <p>1 UX Designer</p>
            <p>1 Mobile Engineer</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Skills/Tools</p>
            <p>Dart</p>
            <p>Flutter</p>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles[`text-section`]}>
          <p className={styles.header}>CONTEXT</p>
          <p>Extended description coming soon!</p>
        </div>

      </div>
      <BottomBar/>
    </div>
  );
}