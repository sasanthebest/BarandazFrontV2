import styles from "./Card.module.css";
import Link from "next/link";

const CityBadge = ({ item }) => {
  return (
    <Link href={`/city/${item.city}`}>
      <span className={styles.city}>{item.city_name}</span>
    </Link>
  );
};

export default CityBadge;
