import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import styles from "./css/about.module.css";

const AboutSection = () => (
  <section className={styles.aboutCard}>
    <h1 className={styles.name}>Luka Prešeren</h1>
    <a
      href="https://maps.google.com/?q=đaloviče 15a"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.location}
    >
      <PiMapPinFill className={styles.pinIcon} />
      đaloviče 15a
    </a>
    <p className={styles.description}>
      I'm 20 years old, learning web development and working towards becoming a
      fullstack developer. I enjoy building things that work and learning new
      tech along the way.
    </p>
  </section>
);

export default AboutSection;
