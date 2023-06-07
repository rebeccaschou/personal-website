import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.navbar} ${menuOpen && styles.active}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#about" className={styles.logo}>
            rebecca.
          </a>
        </div>
        <div className={styles.right}>
          <ul className={styles.navitems}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project1">Projects</a>
            </li>
            <li>
              <a href="#fun">For Fun</a>
            </li>
          </ul>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
