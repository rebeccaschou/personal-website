import React from "react";
import styles from "./Project1Text.module.scss";

import Project1Button from "../Project1Button/Project1Button";

export default function Project1Text() {
  return (
    <div className={styles.text}>
      <h1 className={styles.header}>Personal Website</h1>
      <p className={styles.tags}> UI/UX | React | Django</p>
      <p className={styles.description}>
        Designing a personal website (that you're looking at right now!) to show
        personal projects, publications, and for-fun crafts!
      </p>
      <Project1Button />
    </div>
  );
}
