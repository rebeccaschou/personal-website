import React from "react";
import styles from "./ProjectDetails.module.scss";

import ProjectTag from "./ProjectTag/ProjectTag";

export default function ProjectDetails(props) {
  return (
    <div
      className={styles[`project-details`]}
      id={`project-details- ${props.id}`}
    >
      <div className={styles.card}>
        <div className={styles.tags}>
          {props.tags.map((tag) => (
            <ProjectTag title={tag} />
          ))}
        </div>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.bullets}>
          <div className={styles.left}>
            <h2 className={styles[`title-minor`]}>MY ROLE</h2>
            <p className={styles[`bullet-text`]}>{props.role}</p>
            <h2 className={styles[`title-minor`]}>TIMELINE</h2>
            <p className={styles[`bullet-text`]}>{props.timeline}</p>
          </div>
          <div className={styles.right}>
            <h2 className={styles[`title-minor`]}>TOOLS</h2>
            <ul className={styles[`tool-list`]}>
              {props.tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
