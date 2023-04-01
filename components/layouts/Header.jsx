import React from "react";
import Image from "next/image";

import styles from "./Layout.module.css";
import HeaderSearch from "./HeaderSearch";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.Header__content}>
      <Image
        src="/logo.svg"
        alt="logo"
        className={styles["App-logo"]}
        width={100}
        height={100}
      ></Image>
      <HeaderSearch></HeaderSearch>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
