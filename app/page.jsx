import styles from "./page.module.css";
import getAllAds from "@/services/getAllAds";

export default async function Home() {
  const data = await getAllAds();
  return (
    <main className={styles.main}>
      {data.results.map((ad) => (
        <li>{ad.title}</li>
      ))}
    </main>
  );
}
