import React from "react";
import styles from "./ProjectText.module.scss";

import ProjectButton from "../ProjectButton/ProjectButton";

export default function ProjectText(props) {
  return (
    <div className={styles.text}>
      <h1 className={styles.header}>{props.title}</h1>
      <p className={styles.tags}>{props.tags.join(" | ")}</p>
      <p className={styles.description}>{props.description}</p>
      <ProjectButton id={props.id} />
    </div>
  );
}
