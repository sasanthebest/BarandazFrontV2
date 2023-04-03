import React from "react";
import styles from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  return (
    <>
      <input type="text" className={styles.search} placeholder="جستجو"></input>
    </>
  );
};

export default HeaderSearch;
