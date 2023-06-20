import React from "react";
import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.navbar} ${menuOpen && styles.active}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link to="/about" className={styles.logo}>
            rebecca.
          </Link>
        </div>
        <div className={styles.right}>
          <ul className={styles.navitems}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/forfun">For Fun</Link>
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
