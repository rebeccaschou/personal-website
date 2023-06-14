import React from "react";
import styles from "./Fun.module.scss";

export default function Fun() {
  const images = [
    { id: 0, src: "assets/gallery/blind-contour.png" },
    { id: 1, src: "assets/gallery/castle-mosaic.png" },
    { id: 2, src: "assets/gallery/ceramic-cupcake.png" },
    { id: 3, src: "assets/gallery/crochet-tobi.png" },
    { id: 4, src: "assets/gallery/cross-hatch-car-dog.png" },
    { id: 5, src: "assets/gallery/grayscale-car-dog.png" },
    { id: 6, src: "assets/gallery/ocean-painting.png" },
    { id: 7, src: "assets/gallery/puzzle-mug.png" },
    { id: 8, src: "assets/gallery/reebok-line-drawing.png" },
  ];

  return (
    <div className={styles.fun} id="fun">
      <div className={styles.gallery}>
        {images.map((item, index) => {
          return (
            <div key={index}>
              <img className={styles.pic} src={item.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
