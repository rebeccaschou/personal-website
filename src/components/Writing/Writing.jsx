import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Writing.module.scss";
import Footer from "../Footer/Footer";
import { writingData } from "../../data/writing";

export default function Writing() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const appRoot = document.getElementById("root");
    if (appRoot) appRoot.scrollTop = 0;
  }, []);

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Writing</h2>
          <div className={styles.divider} />

          <div className={styles.writingList}>
            {writingData.map((item) => (
              <Link
                key={item.id}
                to={`/writing/${item.id}`}
                className={styles.writingRowLink}
              >
                <article className={styles.writingRow}>
                  <div className={styles.rowHeader}>
                    <h3>{item.title}</h3>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <p className={styles.excerpt}>{item.excerpt}</p>
                  <span className={styles.date}>{item.date}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}