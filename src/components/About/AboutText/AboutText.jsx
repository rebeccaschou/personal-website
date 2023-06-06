import React from "react";
import styles from "./AboutText.module.scss";

import AboutMediaLinks from "../AboutMediaLinks/AboutMediaLinks";

export default function AboutText() {
  return (
    <div className={styles.text}>
      <h1 className={styles.header}>Welcome!</h1>
      <p className={styles.description}>
        I'm <span>Rebecca Chou</span>, a sophomore studying computer science at
        Brown University!
      </p>
      <AboutMediaLinks />
    </div>
  );
}
