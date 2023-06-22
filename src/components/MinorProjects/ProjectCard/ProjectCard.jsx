import React from "react";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard(props) {
  return (
    <div className={styles[`project-card`]} id="project-card">
      <img src={props.image} className={styles.image}></img>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.tags}>{props.tags.join(" | ")}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
