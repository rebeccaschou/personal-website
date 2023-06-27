import React from "react";
import styles from "./ProjectDetails.module.scss";
import { Link } from "react-router-dom";

import ProjectTag from "./ProjectTag/ProjectTag";
import Paragraph from "./Paragraph/Paragraph";

export default function ProjectDetails(props) {
  return (
    <div
      className={styles[`project-details`]}
      id={`project-details- ${props.id}`}
    >
      <div className={styles.left}>
        <Link to="/projects" className={styles.back}>
          ← Return to Projects
        </Link>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.tags}>
          {props.tags.map((tag) => (
            <ProjectTag title={tag} />
          ))}
        </div>
        {/* <p className={styles.description}>{props.description}</p> */}
        {props.description.map((text) => (
          <Paragraph text={text}></Paragraph>
        ))}
        <div className={styles.summary}>
          <div className={styles[`summary-left`]}>
            <h2 className={styles[`header`]}>MY ROLE</h2>
            <p className={styles[`bullet-text`]}>{props.role}</p>
            <h2 className={styles[`header`]}>TIMELINE</h2>
            <p className={styles[`bullet-text`]}>{props.timeline}</p>
          </div>
          <div className={styles[`summary-right`]}>
            <h2 className={styles[`header`]}>TOOLS</h2>
            <ul className={styles[`list`]}>
              {props.tools.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className={styles[`github-button`]}>
          <a
            href="https://github.com/rebeccaschou"
            rel="noreferrer"
            target="_blank"
          >
            See GitHub Project
          </a>
        </button>
      </div>
      <div className={styles.right}>
        <img
          src={props.image}
          alt="project"
          className={styles[`project-image`]}
        ></img>
      </div>
    </div>
  );
}
