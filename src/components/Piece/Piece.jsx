import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Piece.module.scss";
import Footer from "../Footer/Footer";
import { writingData } from "../../data/writing";

export default function WritingDetail() {
  const { id } = useParams();
  const piece = writingData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!piece) {
    return (
      <main className={styles.pageWrapper}>
        <div className={styles.container}>
          <h2>Piece Not Found</h2>
          <Link to="/writing" className={styles.backBtn}>← Back to Writing</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          <Link to="/writing" className={styles.backBtn}>← Back to Writing</Link>

          <header className={styles.header}>
            <div className={styles.metaRow}>
              <span className={styles.category}>{piece.category}</span>
              <span className={styles.date}>{piece.date}</span>
            </div>
            <h1>{piece.title}</h1>
            <div className={styles.divider} />
          </header>

          <article className={styles.content}>
            {piece.content.map((block, index) => {
              const isItalicClass = block.isItalic ? styles.italicText : "";

              switch (block.type) {
                case "heading":
                  return (
                    <h3 key={index} className={`${styles.heading} ${isItalicClass}`}>
                      {block.text}
                    </h3>
                  );

                case "verse":
                  return (
                    <div key={index} className={styles.verseBlock}>
                      {block.stanzas
                        ? block.stanzas.map((stanza, sIdx) => (
                            <div key={sIdx} className={styles.stanza}>
                              {stanza.map((line, lIdx) => {
                                const isObj = typeof line === "object";
                                const lineText = isObj ? line.text : line;
                                const isItalic = isObj && line.italic;

                                return (
                                  <div
                                    key={lIdx}
                                    className={`${styles.verseLine} ${isItalic ? styles.italicText : ""}`}
                                  >
                                    {lineText}
                                  </div>
                                );
                              })}
                            </div>
                          ))
                        : block.lines?.map((line, lIdx) => {
                            const isObj = typeof line === "object";
                            const lineText = isObj ? line.text : line;
                            const isItalic = isObj && line.italic;

                            return (
                              <div
                                key={lIdx}
                                className={`${styles.verseLine} ${isItalic ? styles.italicText : ""}`}
                              >
                                {lineText}
                              </div>
                            );
                          })}
                    </div>
                  );

                case "paragraph":
                default:
                  return (
                    <p key={index} className={`${styles.paragraph} ${isItalicClass}`}>
                      {block.segments
                        ? block.segments.map((seg, i) => (
                            <span key={i} className={seg.italic ? styles.italicText : ""}>
                              {seg.text}
                            </span>
                          ))
                        : block.text}
                    </p>
                  );
              }
            })}
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}