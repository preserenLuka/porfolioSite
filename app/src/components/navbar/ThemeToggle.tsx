import React, { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div
      onClick={toggleTheme}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginLeft: "1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "2rem",
      }}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="light"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: hovered ? 1.25 : 1,
              color: hovered
                ? "var(--accent-blue-light)"
                : "var(--accent-blue)",
              filter: hovered
                ? "drop-shadow(0 0 6px var(--accent-blue-light))"
                : undefined,
            }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            style={{ display: "flex" }}
          >
            <CiLight />
          </motion.span>
        ) : (
          <motion.span
            key="dark"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: hovered ? 1.25 : 1,
              color: hovered
                ? "var(--accent-blue-light)"
                : "var(--accent-blue)",
              filter: hovered
                ? "drop-shadow(0 0 6px var(--accent-blue-light))"
                : undefined,
            }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            style={{ display: "flex" }}
          >
            <CiDark />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
