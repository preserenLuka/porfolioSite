import { Link } from "react-router-dom";
import styles from "./css/navbar.module.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <div className={styles.left}>Luka Prešeren</div>
        <ul className={styles.right}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="toggle">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
