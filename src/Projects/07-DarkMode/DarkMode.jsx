import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./theme-context";

import Styles from "./blog.module.css";

function DarkMode() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  useEffect(() => {
    let docBody = document.body;
    switch (theme) {
      case themes.light:
        docBody.classList.add(Styles.darkMode);
        break;
      default:
        docBody.classList.remove(Styles.darkMode);
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}

export default DarkMode;
