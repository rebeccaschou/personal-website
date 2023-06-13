import React from "react";
import styles from "./AboutDetails.module.scss";

export default function AboutDetails() {
  return (
    <div className={styles[`about-details`]} id="about-details">
      <div className={styles.card}>
        <h1>About Me</h1>
        <div className={styles[`top-details`]}>
          <div className={styles.left}>
            <img
              src="assets/profile-photo-details.png"
              alt="profile"
              className={styles[`about-details-image`]}
            ></img>
          </div>
          <div className={styles.summary}>
            <h2 className={styles.header}>FULL NAME</h2>
            <p className={styles.subtext}>Rebecca Chou</p>
            <h2 className={styles.header}>EMAIL</h2>
            <p className={styles.subtext}>rebecca_chou@brown.edu</p>
            <h2 className={styles.header}>LINKEDIN</h2>
            <a
              href="https://www.linkedin.com/in/rebeccaschou/"
              className={styles.subtext}
            >
              https://www.linkedin.com/in/rebeccaschou/
            </a>
            <h2 className={styles.header}>GITHUB</h2>
            <a
              href="https://github.com/rebeccaschou"
              className={styles.subtext}
            >
              https://github.com/rebeccaschou
            </a>
          </div>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className={styles[`resume-button`]}>
          <a href="https://github.com/rebeccaschou">Download Resume</a>
        </button>
      </div>
    </div>
  );
}
