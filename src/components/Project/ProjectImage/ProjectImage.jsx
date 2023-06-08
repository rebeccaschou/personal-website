import React from "react";
import styles from "./ProjectImage.module.scss";

export default function ProjectImage(props) {
  return <img className={styles.image} src={props.image} alt={props.alt}></img>;
}
