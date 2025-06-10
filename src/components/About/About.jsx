import styles from "./About.module.scss";
import photo from "../../assets/profile/profile-photo-details.png";

export default function About() {
  return (
    <div className={styles[`about-details`]} id="about-details">
      <div className={styles.left}>
        <h1 classNames={styles.greeting}>Hi, I'm Rebecca!</h1>
        <p className={styles.description}>
          I'm a senior studying computer science and literary arts at Brown
          University. Outside of class, I do research with the Human-Computer 
          Interaction Lab and the Secure Systems Lab. Formerly, I served as a 
          head teaching assistant for CS200: Data Structures and Algorithms and
          the technology chair of the Brown's Women in Computer Science (WiCS)
          organization.
        </p>
        <p className={styles.description}>In my free time, I love to crochet, 
          care for my houseplants, and compete on the Brown Taekwondo team. I'm 
          currently learning how to make amigurumi birds! Please feel free to 
          reach out to me at rebecca_chou@brown.edu if you’d like to chat!</p>
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
            href="https://drive.google.com/file/d/1KIhP6idzTK5od9DOWZOdo4_GsjSvzsRD/view?usp=drive_link"
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