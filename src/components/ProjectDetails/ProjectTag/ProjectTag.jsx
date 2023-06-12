import React from "react";
import styles from "./ProjectTag.module.scss";

export default function ProjectTag(props) {
  return (
    <button className={styles[`project-tag`]}>
      <p>{props.title}</p>
    </button>
  );
}
