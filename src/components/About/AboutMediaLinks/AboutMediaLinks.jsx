import React from "react";
import styles from "./AboutMediaLinks.module.scss";

export default function AboutMediaLinks() {
  return (
    <ul className={styles.media}>
      <li>
        <a
          href="https://github.com/rebeccaschou/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="assets/github.png" alt="github"></img>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rebeccaschou/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="assets/linkedin.png" alt="linkedin"></img>
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1o2AcGPZIgfd3Fj9GdlZM0gUobjQRpt65/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <img src="assets/resume.png" alt="resume"></img>
        </a>
      </li>
    </ul>
  );
}
