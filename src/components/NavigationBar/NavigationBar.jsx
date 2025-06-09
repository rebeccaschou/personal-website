import React from "react";
import styles from "./NavigationBar.module.scss";

import { Link } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.navbar} ${menuOpen && styles.active}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            周思恬
          </Link>
        </div>
        <div className={styles.right}>
          <ul className={styles.navitems}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/forfun">for fun</Link>
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
