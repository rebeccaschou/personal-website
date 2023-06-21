import React from "react";
import styles from "./Projects.module.scss";

import Project from "../Project/Project";
import MinorProjects from "../MinorProjects/MinorProjects";

export default function Projects(props) {
  return (
    <div>
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
      <MinorProjects />
    </div>
  );
}
