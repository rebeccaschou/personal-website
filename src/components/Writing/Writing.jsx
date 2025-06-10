import styles from "./Writing.module.scss";
import { HiArrowLongDown } from "react-icons/hi2";
import BottomBar from "../BottomBar/BottomBar";
import Piece from "./Piece/Piece";

export default function Writing(props) {
  return (
    <div>
      <div className={styles.writing} id="fun">
        <div className={styles[`writing-header`]}>
            <p>featured works</p>
            <HiArrowLongDown className={styles.arrow} />
          </div>
      </div>
      {props.pieces.map((piece) => (
        <Piece
          id={piece.id}
          title={piece.title}
          description={piece.description}
          image={piece.image}
          alt={piece.alt}
          media={piece.media}
          year={piece.year}
        />
      ))}
      <BottomBar/>
    </div>
  );
}
