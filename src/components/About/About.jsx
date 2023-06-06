import React from "react";
import styles from "./About.module.scss";

import AboutImage from "./AboutImage/AboutImage";
import AboutText from "./AboutText/AboutText";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.left}>
        <AboutImage />
      </div>
      <div className={styles.right}>
        <AboutText />
      </div>
    </div>
  );
}
