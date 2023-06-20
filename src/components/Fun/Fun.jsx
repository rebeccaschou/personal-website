import React from "react";
import styles from "./Fun.module.scss";

import img0 from "../../assets/gallery/blind-contour.png";
import img1 from "../../assets/gallery/ceramic-cupcake.png";
import img2 from "../../assets/gallery/crochet-tobi.png";
import img3 from "../../assets/gallery/cross-hatch-car-dog.png";
import img4 from "../../assets/gallery/grayscale-car-dog.png";
import img5 from "../../assets/gallery/ocean-painting.png";
import img6 from "../../assets/gallery/puzzle-mug.png";
import img7 from "../../assets/gallery/reebok-line-drawing.png";
import img8 from "../../assets/gallery/castle-mosaic.png";

export default function Fun() {
  const images = [
    { id: 0, src: img0, alt: "blind contour" },
    { id: 1, src: img1, alt: "ceramic cupcake" },
    { id: 2, src: img2, alt: "crochet tobi" },
    { id: 3, src: img3, alt: "cross hatch car dog" },
    { id: 4, src: img4, alt: "grayscale car dog" },
    { id: 5, src: img5, alt: "ocean painting" },
    { id: 6, src: img6, alt: "puzzle mug" },
    { id: 7, src: img7, alt: "reebok line drawing" },
    { id: 8, src: img8, alt: "castle mosaic" },
  ];

  return (
    <div className={styles.fun} id="fun">
      <div className={styles.gallery}>
        {images.map((item, index) => {
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
