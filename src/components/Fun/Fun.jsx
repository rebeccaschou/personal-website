import React from "react";
import styles from "./Fun.module.scss";

export default function Fun(props) {
  return (
    <div className={styles.fun} id="fun">
      <div className={styles.text}>
        <h1>For fun!</h1>
        <p>
          A small gallery of the crafts and pieces I've made in my free time!
        </p>
      </div>
      <div className={styles.gallery}>
        {props.images.map((item, index) => {
          return (
            <div key={index}>
              <img className={styles.pic} src={item.src} alt={item.alt} />
              <p className={styles.caption}>{item.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
