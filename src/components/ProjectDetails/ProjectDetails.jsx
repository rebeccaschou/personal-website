import React from "react";
import styles from "./ProjectDetails.module.scss";

export default function ProjectDetails(props) {
  return (
    <div
      className={styles[`project-details`]}
      id={`project-details- ${props.id}`}
    >
      <h1>{props.title}</h1>
    </div>
  );
}
