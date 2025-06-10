import styles from "./PieceDetails.module.scss";
import BottomBar from "../../BottomBar/BottomBar"
import countingSheep from "../../../assets/writing/counting-sheep.png";

export default function CountingSheep() {
  return (
    <div className={styles[`project-details`]} id="chirp">
      <img className={styles.image} src={countingSheep} alt=""></img>
      <div className={styles.container}>
        <h1 classNames={styles.title}>Counting Sheep</h1>

        <hr className={styles.divider}></hr>

        <div className={styles.summary}>
          <div>
            <p className={styles[`summary-header`]}>Attribution</p>
            <p>Rebecca Chou</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Date</p>
            <p>April 2025</p>
          </div>
          <div>
            <p className={styles[`summary-header`]}>Media</p>
            <p>Illustrated Desktop Poem</p>
            <p>Prose</p>
            <p>Poetry</p>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles[`text-section`]}>
          <p className={styles.header}>FULL DESCRIPTION</p>
          <p>What happens between the hours of 2:00 and 5:00 AM? Set during the haunting time between night and morning when the rest of the world is still, Counting Sheep explores the fitful waking hours of a narrator, not through their dictated story, but through fragments of their life found on their desktop. The narrator traces their own history of this time of night, from the magic found in the after-bedtime hours of childhood, to the fears that now preclude their sleep.</p>
          <br></br>
          <p>In fragments of writing, from jotted, jumbled thoughts in the notes app to a fully-formed essay PDF ready to print, the narrator’s myriad of perspectives and experiences with the nighttime are revealed. Embedded in the artifacts of Counting Sheep are four prose and poem pieces: Speedway Gas Station on 24 North Beacon Street (a prose piece on liminal spaces), stargazing (a poem), Untitled 12 (a prose poem), and Untitled document (a short prose piece).</p>
          <br></br>
          <p>While the identity of the narrator of Counting Sheep is unspecified, the nature of the Desktop poem is deeply personal and revealing. From the social networks exposed by messaging apps to the search history saved on the browser, a person’s individual desktop provides a unique window into the thoughts, fears, and life of the user. Diverging from the original formulation of the Desktop poem, however, Counting Sheep creates an interactive version of the Desktop poem by physically collaging together the artifacts found in the poem, lending itself to rearrangement—and discovery—by both author and audience.</p>
          <br></br>
          <p>Counting Sheep explores the loss of childhood magic—and innocence—and the thoughts that now haunt us when we cannot fall asleep. This particular narrator has a penchant for doom scrolling: with the online world at their fingertips, they meet an onslaught of content claiming calamity and ruin. Yet, they cannot look away. Counting Sheep documents the hours of late night to early morning, the transition from child to adult, and the process of growing up to find a world that may—or may not—be doomed.</p>
        </div>

      </div>
      <BottomBar/>
    </div>
  );
}