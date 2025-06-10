import styles from "./Piece.module.scss";
import { Link } from "react-router-dom";

export default function Piece(props) {
  return (
    <div className={styles.piece} id={props.id}>
      <Link to={"/writing/" + props.id} className={styles[`piece-container`]}>
        <hr className={styles.divider}></hr>
        <div className={styles.contents}>
          <img className={styles.image} src={props.image} alt={props.alt}></img>
          <div className={styles.info}>
            <h1>{props.title}</h1>
            <p className={styles.header}>MEDIA</p>
            <p>{props.media}</p>
            <p className={styles.header}>DESCRIPTION</p>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}