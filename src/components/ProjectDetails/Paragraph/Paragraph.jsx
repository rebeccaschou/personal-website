import React from "react";
import styles from "./Paragraph.module.scss";

export default function Paragraph(props) {
  return <p className={styles.paragraph}>{props.text}</p>;
}
