import styles from "./Card.module.css";
const DesciptionWrapper = ({ item }) => {
  const characterCounter = (string) => {
    if (string) {
      const len = string.length;
      const limit = 110;
      return len && len <= limit ? string : `${string.substring(0, limit)} ...`;
    }
  };

  return (
    <div className={styles.description}>
      <p> {characterCounter(item.description)}</p>
    </div>
  );
};

export default DesciptionWrapper;
