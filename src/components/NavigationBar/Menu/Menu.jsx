import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.menu} ${menuOpen && styles.active}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/about">about</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/writing">writing</Link>
        </li>
      </ul>
    </div>
  );
}
