import React from "react";
import Card from "./card/Card";
import styles from "./Body.module.css";

export default async function AdsBody({ promise }) {
  const data = await promise;

  return (
    <div className={styles.grid}>
      {data.results.map((ad) => (
        <Card item={ad} />
      ))}
    </div>
  );
}
