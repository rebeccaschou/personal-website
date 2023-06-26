import React from "react";
import styles from "./AboutDetails.module.scss";
import photo from "../../../assets/profile/profile-photo-details.png";

export default function AboutDetails() {
  return (
    <div className={styles[`about-details`]} id="about-details">
      <div className={styles.left}>
        <h1 classNames={styles.greeting}>Hi, I'm Rebecca!</h1>
        <p className={styles.description}>
          I'm a sophomore studying computer science on a software track at Brown
          University. I'm interested in the intersection of social justice and
          technology. Outside of class, I'm co-mentorship chair for Brown's
          Women in Computer Science (WiCS) organization and a teaching assistant
          for the Data Structures and Algorithms class (CSCI0200). <br></br>
          <br></br> In my free time, I love to crochet, care for my houseplants,
          and compete on the Brown Taekwondo team. I'm currently learning how to
          make amigurumi birds! Please feel free to reach out to me at
          rebecca_chou@brown.edu if you’d like to chat!
        </p>
        <div className={styles.summary}>
          <h2 className={styles.header}>LINKEDIN</h2>
          <a
            href="https://www.linkedin.com/in/rebeccaschou/"
            rel="noreferrer"
            target="_blank"
            className={styles.subtext}
          >
            linkedin.com/in/rebeccaschou
          </a>
          <h2 className={styles.header}>GITHUB</h2>
          <a
            href="https://github.com/rebeccaschou"
            rel="noreferrer"
            target="_blank"
            className={styles.subtext}
          >
            github.com/rebeccaschou
          </a>
        </div>
        <button className={styles[`resume-button`]}>
          <a
            href="https://drive.google.com/drive/folders/1ljLVoyGqNlAbMf14-tB9OaHF1IC4saZM"
            rel="noreferrer"
            target="_blank"
          >
            Download Resume
          </a>
        </button>
      </div>
      <div className={styles.right}>
        <img
          src={photo}
          alt="profile"
          className={styles[`about-details-image`]}
        ></img>
      </div>
    </div>
  );
}
