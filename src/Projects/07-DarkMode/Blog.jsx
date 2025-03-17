import React, { useContext } from "react";
import Styles from "./blog.module.css";
import { ThemeContext } from "./theme-context";

function Blog() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={Styles.blogContainer}>
      <div className={Styles.blogTitle}>
        <h1>My Blog with {theme} Theme</h1>
      </div>
      <div className={Styles.blogContent}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iste
          delectus sit aspernatur ipsam quod unde, quas provident, saepe eveniet
          praesentium perspiciatis at aliquid? Vero optio id doloribus
          voluptatum veniam.
        </p>
      </div>
      <p role="button" className={Styles.themeButton} onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
        
      </p>
    </div>
  );
}

export default Blog;
