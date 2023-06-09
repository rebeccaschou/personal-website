import React from "react";
import styles from "./Menu.module.scss";

import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.menu} ${menuOpen && styles.active}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/forfun">For Fun</Link>
        </li>
      </ul>
    </div>
  );
}
