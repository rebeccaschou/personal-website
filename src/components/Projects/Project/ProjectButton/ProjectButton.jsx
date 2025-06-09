import React from "react";
import "./ProjectButton.module.scss";
import styles from "./ProjectButton.module.scss";

import { HiArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ProjectButton(props) {
  return (
    <Link to={"/" + props.id}>
      <HiArrowRightCircle className={styles[`arrow-button`]}/>
    </Link>
  );
}
