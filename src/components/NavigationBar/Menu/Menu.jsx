import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Menu.module.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
      <ul>
        <li>
          <a href="/#about" onClick={(e) => handleNavClick(e, "about")}>
            Home
          </a>
        </li>
        <li>
          <a href="/#research" onClick={(e) => handleNavClick(e, "research")}>
            Research
          </a>
        </li>
        <li>
          <Link to="/cv" onClick={() => setMenuOpen(false)}>
            CV
          </Link>
        </li>
      </ul>
    </div>
  );
}