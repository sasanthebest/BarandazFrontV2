import styles from "./Card.module.css";
import Link from "next/link";

const CategoryBadge = ({ item }) => {
  return (
    <Link href={`/category/${item.category}`} passHref>
      <span className={styles.category}>{item.category_name}</span>
    </Link>
  );
};

export default CategoryBadge;
