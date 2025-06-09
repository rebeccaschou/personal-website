import styles from "./ProjectDetails.module.scss";
import website from "../../../assets/projects/personal-website-image.png";
import BottomBar from "../../BottomBar/BottomBar"

export default function PersonalWebsite() {
  return (
    <div className={styles[`project-details`]} id="personal-website">
      <img className={styles.image} src={website} alt=""></img>
      <div className={styles.container}>
        <h1 classNames={styles.title} style={{ color: "lightpink" }}>Personal Website</h1>
        <h2 classNames={styles.description}>Creating a responsive personal portfolio website with React</h2>

        <hr className={styles.divider}></hr>

        <div className={styles.summary}>
          <div>
            <p className={styles[`summary-header`]}>Role</p>
            <p>Web Engineer</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Timeline</p>
            <p>Jun-Aug 2023 (14 wks)</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Team</p>
            <p>1 Web Engineer</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Skills/Tools</p>
            <p>Figma</p>
            <p>React</p>
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