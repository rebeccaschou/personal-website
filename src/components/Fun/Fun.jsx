import React from "react";
import styles from "./Fun.module.scss";

export default function Fun(props) {
  return (
    <div className={styles.fun} id="fun">
      <div className={styles.gallery}>
        {props.images.map((item, index) => {
          return (
            <div key={index}>
              <img className={styles.pic} src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
