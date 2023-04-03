import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = ({ children }) => {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavBarnav}>navbar</ul>
    </nav>
  );
};
export default Navbar;
