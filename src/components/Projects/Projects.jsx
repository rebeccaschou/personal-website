import React from "react";
import styles from "./Projects.module.scss";
import { HiArrowLongDown } from "react-icons/hi2";

import Project from "./Project/Project";
import BottomBar from "../BottomBar/BottomBar"
// import MinorProjects from "../../MinorProjects/MinorProjects";

export default function Projects(props) {
  return (
    <div>
      <div className={styles.projects} id="projects">
        <div className={styles[`projects-header`]}>
          <p>featured works</p>
          <HiArrowLongDown className={styles.arrow} />
        </div>
        {props.projects.map((project) => (
          <Project
            color={project.color}
            id={project.id}
            title={project.title}
            tags={project.tags}
            description={project.description}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
      <BottomBar />
      {/* <MinorProjects array={props.array} /> */}
    </div>
  );
}
