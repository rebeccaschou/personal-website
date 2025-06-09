import styles from "./ProjectText.module.scss";
import ProjectButton from "../ProjectButton/ProjectButton";

export default function ProjectText(props) {
  return (
    <div className={styles.text}>
      <p className={styles.tags} style={{ textTransform: 'uppercase' }}>{props.tags.join(" | ")}</p>
      <h1 className={styles.header}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <ProjectButton color={props.color} id={props.id} />
    </div>
  );
}
