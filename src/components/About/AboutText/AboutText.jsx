import React from "react";
import styles from "./AboutText.module.scss";

import { Link } from "react-router-dom";

// import AboutMediaLinks from "../AboutMediaLinks/AboutMediaLinks";

export default function AboutText() {
  return (
    <div className={styles.text}>
      <h1 className={styles.header}>Welcome!</h1>
      <p className={styles.description}>
        I'm <span>Rebecca Chou</span>, a student at Brown University and an
        aspiring mobile engineer!
      </p>
      <button className={styles[`projects-button`]}>
        <Link to="/projects">Go to Projects</Link>
      </button>
      {/* <AboutMediaLinks /> */}
    </div>
  );
}
