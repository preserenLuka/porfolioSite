import React, { useState, useEffect } from "react";
import { PiMapPinFill } from "react-icons/pi";
import styles from "./css/about.module.css";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.7198724707414!2d15.209884575365084!3d45.87691380580856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476500ae8504da41%3A0x461ef9fcc2ea070f!2zxb1hbG92acSNZSAxNSwgODIyMCDFoG1hcmplxaFrZSBUb3BsaWNl!5e0!3m2!1ssl!2ssi!4v1760816369331!5m2!1ssl!2ssi";

const AboutSection: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowMap(false);
    }
    if (showMap) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showMap]);

  const openMap = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowMap(true);
  };

  const closeMap = () => setShowMap(false);

  return (
    <>
      <section className={styles.aboutCard}>
        <h1 className={styles.name}>Luka Prešeren</h1>

        <a
          href="https://www.google.com/maps/search/?api=1&query=žaloviče+15a+Slovenija"
          onClick={openMap}
          className={styles.location}
          aria-haspopup="dialog"
        >
          <PiMapPinFill className={styles.pinIcon} />
          žaloviče 15a, Slovenija
        </a>

        <p className={styles.description}>
          I'm 20 years old, learning web development and working towards
          fullstack. I like building small tools, experimenting with UI, and
          learning new technologies.
        </p>
      </section>

      {showMap && (
        <div
          className={styles.mapOverlay}
          role="dialog"
          aria-modal="true"
          onClick={closeMap}
        >
          <div
            className={styles.mapModal}
            onClick={(e) => e.stopPropagation()}
            aria-label="Google map"
          >
            <button
              className={styles.closeBtn}
              onClick={closeMap}
              aria-label="Close map"
            >
              ×
            </button>

            <div className={styles.mapFrameWrap}>
              <iframe
                title="Location map"
                src={MAP_EMBED_SRC}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
