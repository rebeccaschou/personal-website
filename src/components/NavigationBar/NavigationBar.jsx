import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./NavigationBar.module.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Already on Home: smooth scroll directly
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigating from another route (/cv or /project/:id)
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <ul className={styles.navitems}>
            <li>
              <a href="/#about" onClick={(e) => handleNavClick(e, "about")}>
                Home
              </a>
            </li>
            <li>
              <a href="/#resaearch" onClick={(e) => handleNavClick(e, "research")}>
                Research
              </a>
            </li>
            <li>
              <Link to="/cv">CV</Link>
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