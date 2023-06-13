import React from "react";
import styles from "./BackButton.module.scss";

import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <button className={styles[`back-button`]}>
      <Link to={"/projects"}>Back</Link>
    </button>
  );
}
