import styles from "./Card.module.css";

const TimeWraper = ({ item }) => {
  const date = new Date();

  const timeCreator = () => {
    let created_at = Date.parse(`${item.created_at}`);
    let now = Date.now();
    let mytime = (now - created_at) / 1000;
    if (mytime >= 86400) {
      return `${Math.round(mytime / 86400)} روز پیش`;
    } else if (mytime < 86400 && mytime >= 3600) {
      return `${Math.round(mytime / 3600)} ساعت پیش`;
    } else if (mytime < 3600 && mytime >= 60) {
      return `${Math.round(mytime / 60)} دقیقه پیش`;
    }
    return mytime;
  };
  return <div className={styles.time}>{timeCreator()}</div>;
};

export default TimeWraper;
