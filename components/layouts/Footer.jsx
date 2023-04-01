import Link from "next/link";
import { FaHome, FaUser, FaSkyatlas, FaPlus, FaList } from "react-icons/fa";
import styles from "./Layout.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer__content}>
      <ul className={styles.Footer__icons}>
        <li className={styles.Footer__icon}>
          <Link className={styles.NavButton} href="/">
            <FaHome size="1.5em"></FaHome>
          </Link>
        </li>
        <li className={styles.Footer__icon}>
          <Link className={styles.NavButton} href="/navtest">
            <FaList size="1.5em"></FaList>
          </Link>
        </li>
        <li className={styles.Footer__icon}>
          <Link className={styles.NavButton} href="/navtest">
            <FaPlus size="1.7em"></FaPlus>
          </Link>
        </li>
        <li className={styles.Footer__icon}>
          <Link className={styles.NavButton} href="/ads">
            <FaSkyatlas size="1.5em"></FaSkyatlas>
          </Link>
        </li>
        <li className={styles.Footer__icon}>
          <Link className={styles.NavButton} href="/login">
            <FaUser size="1.5em"></FaUser>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
