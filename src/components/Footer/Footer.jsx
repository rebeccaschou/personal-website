import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© Rebecca Chou 2026</p>
      </div>
    </footer>
  );
}