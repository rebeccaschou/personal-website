import styles from "./PieceDetails.module.scss";
import BottomBar from "../../BottomBar/BottomBar"
import tongue from "../../../assets/writing/tongue.gif";

export default function She() {
  return (
    <div className={styles[`project-details`]} id="chirp">
      <img className={styles.image} src={tongue} alt=""></img>
      <div className={styles.container}>
        <h1 classNames={styles.title}>舌</h1>

        <hr className={styles.divider}></hr>

        <div className={styles.summary}>
          <div>
            <p className={styles[`summary-header`]}>Attribution</p>
            <p>Rebecca Chou</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Date</p>
            <p>March 2025</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Media</p>
            <p>Hand-Drawn 2D Animation</p>
            <p>Essay</p>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles[`text-section`]}>
          <p className={styles.header}>FULL DESCRIPTION</p>
          <p>As early as the beginning of the 19th century, Chinese immigrants were making their way to the United States. Now, generations later, their descendants grapple with that decision: the benefits they have reaped, and the disconnect they have found between themselves and their roots. In particular, the ability of families to speak Mandarin seems to dissipate with each passing generation, as the importance of learning English is highlighted time and time again. 舌 seeks to find the bridge between (evolving) language, culture, and identity, and while 舌 leaves the questions of language loss and generational divide unresolved, it gives voice to the experience. The essay finds solace in figuring modern and interpretive meanings in the Mandarin language, even from the perspective of a foreign tongue. </p>
          <br></br>
          <p>The foundation of 舌 is formed by the etymological evolution of the tongue in the Mandarin language, from the first appearance of the pictograph in oracle-bone script, to its use in bronze script and small-seal script, to its modern form as a character. This historical tracing is achieved both textually and visually, through description and hand-drawn 2D animation. The essay component traces the involvement of the tongue in speech (言) and language (話), in both the literal appearance of the symbol 舌 as a radical within each character, as well as the figurative involvement of the tongue within the author’s lived experience of the Mandarin language (i.e. tongue). </p>
          <br></br>
          <p>Inspired by the aesthetics of Ocean Vuong and Gloria Anzaldúa’s blend of English-and-Spanish prose, the essay mixes English prose with a nonfiction basis in fragments of Mandarin. Included at the bottom is an appendix of Mandarin words, phrases, and idioms, all stemming from the word for the tongue. The appendix highlights the prevalence of the tongue in the Mandarin language, and the many ways in which the tongue is involved in speech, language, and culture. </p>
        </div>

      </div>
      <BottomBar/>
    </div>
  );
}