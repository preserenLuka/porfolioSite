import { PiMapPinFill } from "react-icons/pi";
import styles from "./css/about.module.css";

/* sample data — replace later */
const AboutSection = () => (
  <section className={styles.aboutCard}>
    <h1 className={styles.name}>Jakub Žitník</h1>

    <a
      href="https://www.google.com/maps/search/?api=1&query=Ostrava"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.location}
    >
      <PiMapPinFill className={styles.pinIcon} />
      Ostrava, Czech Republic
    </a>

    <p className={styles.description}>
      I'm a web developer building small tools and projects. I work mainly with
      React and Node, and I like experimenting with game-related and UI work.
      This portfolio shows a few projects and what I use day-to-day.
    </p>
  </section>
);

export default AboutSection;
