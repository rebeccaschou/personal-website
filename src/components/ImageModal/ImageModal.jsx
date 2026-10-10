import React, { useState, useEffect, useCallback } from "react";
import styles from "./ImageModal.module.scss";

export default function ImageModal({ isOpen, onClose, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const handleNext = useCallback(() => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  const handlePrev = useCallback(() => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className={styles.slideshow}>
          {images.length > 1 && (
            <button
              className={`${styles.navBtn} ${styles.prev}`}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          <div className={styles.imageContainer}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
              className={styles.slideImage}
            />
            {images[currentIndex].caption && (
              <p className={styles.caption}>{images[currentIndex].caption}</p>
            )}
          </div>

          {images.length > 1 && (
            <button
              className={`${styles.navBtn} ${styles.next}`}
              onClick={handleNext}
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className={styles.dotsContainer}>
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}