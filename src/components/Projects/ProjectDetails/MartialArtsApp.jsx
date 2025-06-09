import styles from "./ProjectDetails.module.scss";
import tangsoodo from "../../../assets/projects/martial-arts-app-image.png";
import BottomBar from "../../BottomBar/BottomBar"

export default function MartialArtsApp() {
  return (
    <div className={styles[`project-details`]} id="martial-arts-app">
      <img className={styles.image} src={tangsoodo} alt=""></img>
      <div className={styles.container}>
        <h1 classNames={styles.title} style={{ color: 'rgb(111, 40, 29)' }}>Martial Arts App</h1>
        <h2 classNames={styles.description}>Creating mobile solutions for a national organization</h2>

        <hr className={styles.divider}></hr>

        <div className={styles.summary}>
          <div>
            <p className={styles[`summary-header`]}>Role</p>
            <p>Mobile Engineer</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Timeline</p>
            <p>Feb-May 2022 (16 wks)</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Team</p>
            <p>1 Mobile Engineer</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Skills/Tools</p>
            <p>Swift</p>
            <p>XCode</p>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles[`text-section`]}>
          <p className={styles.header}>CONTEXT</p>
          <p>Created as a centralized source of information for the World Tang Soo Do Organization, the Tang Soo Do App provides a standardized syllabus, rank requirements, and journal feature for Tang Soo Do students. Each user’s account is personalized, only displaying the syllabus requirements specific to their rank, and logged practice sessions, classes, competitions, and tests appear in their personal martial arts journal with customizable notes.</p>
          <br></br>
          <p>Through this project, I learned to incorporate the Core Data framework to allow for data persistence of syllabus information, as well as Apple’s UserDefaults functionality to store individual user information. In addition, I had the opportunity to collaborate with Tang Soo Do studio owners to establish which features and layouts would be most beneficial. Tang Soo!</p>
        </div>

      </div>
      <BottomBar/>
    </div>
  );
}