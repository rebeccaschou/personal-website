import React from "react";
import styles from "./MinorProjects.module.scss";

import ProjectCard from "./ProjectCard/ProjectCard";

export default function MinorProjects(props) {
  return (
    <div className={styles[`minor-projects`]} id="minor-projects">
      <h1 className={styles.intro}>
        A few snippets of other projects I've done!
      </h1>
      <div className={styles.gallery}>
        {props.array.map((project) => {
          return (
            <div key={project.title}>
              <ProjectCard
                className={styles.card}
                image={project.image}
                title={project.title}
                tags={project.tags}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
