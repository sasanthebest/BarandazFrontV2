import styles from "./Layout.module.css";

const HeaderSearch = () => {
  return (
    <>
      <input type="text" className={styles.search} placeholder="جستجو"></input>
    </>
  );
};

export default HeaderSearch;
