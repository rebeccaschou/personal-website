import React from "react";
import styles from "./Menu.module.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.menu} ${menuOpen && styles.active}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#project1">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#fun">For Fun</a>
        </li>
      </ul>
    </div>
  );
}
