import React from "react";
import "./ProjectButton.module.scss";
import styles from "./ProjectButton.module.scss";

import { Link } from "react-router-dom";

export default function ProjectButton(props) {
  return (
    <button class={styles[`learn-more-button`]}>
      <Link to={"/project-details-" + props.id}>Learn More</Link>
    </button>
  );
}
