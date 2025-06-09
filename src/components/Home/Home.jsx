import React from "react";
import styles from "./Home.module.scss";

import HomeImage from "./HomeImage/HomeImage";
import HomeText from "./HomeText/HomeText";
import Projects from "../Projects/Projects"

export default function Home(props) {
  return (
    <React.Fragment>
      <div className={styles.about} id="about">
        <div className={styles.left}>
          <HomeImage />
        </div>
        <div className={styles.right}>
          <HomeText />
        </div>
      </div>
      <div id="projects-section">
        <Projects projects={props.projects} array={props.array} />
      </div>
    </React.Fragment>
  );
}
