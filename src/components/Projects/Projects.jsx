import React from "react";
import styles from "./Projects.module.scss";

import Project from "../Project/Project";

export default function Projects(props) {
  return (
    <div className={styles.projects} id="projects">
      {props.projects.map((project) => (
        <Project
          id={project.id}
          title={project.title}
          tags={project.tags}
          description={project.description}
          image={project.image}
          alt={project.alt}
        />
      ))}
    </div>
  );
}
