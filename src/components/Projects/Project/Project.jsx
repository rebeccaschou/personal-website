import React from "react";
import styles from "./Project.module.scss";

import ProjectImage from "./ProjectImage/ProjectImage";
import ProjectText from "./ProjectText/ProjectText";

export default function Project(props) {
  return (
    <div className={styles.project} id={props.id}>
      <div className={styles[`project-card`]}>
        <div className={styles.left} style={{ backgroundColor: props.color }}>
          <ProjectImage image={props.image} alt={props.alt} />
        </div>
        <div className={styles.right}>
          <ProjectText
            color={props.color}
            id={props.id}
            title={props.title}
            tags={props.tags}
            description={props.description}
          />
        </div>
      </div>
    </div>
  );
}
