import React from "react";
import styles from "./Project1.module.scss";

import Project1Image from "./Project1Image/Project1Image";
import Project1Text from "./Project1Text/Project1Text";

export default function Project1() {
  return (
    <div className={styles.project} id="project1">
      <div className={styles.left}>
        <Project1Image />
      </div>
      <div className={styles.right}>
        <Project1Text />
      </div>
    </div>
  );
}
