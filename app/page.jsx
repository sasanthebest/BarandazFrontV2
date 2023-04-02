import styles from "./page.module.css";
import getAllAds from "@/services/getAllAds";
import AdsBody from "@/components/body/AdsBody";

export default async function Home() {
  return (
    <main className={styles.main}>
      <AdsBody promise={getAllAds()} />
    </main>
  );
}
