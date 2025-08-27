import { useState, useEffect } from "react";
import { ThemeToggleIcon } from "../../assets";
import styles from "./themeToggle.module.scss";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme} className={styles.toggle}>
      <ThemeToggleIcon />
    </button>
  );
};
