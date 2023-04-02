"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TimeWraper from "../card/TimeWraper";
import CardCarousel from "./CardCarousel";
import styles from "./CardDetail.module.css";

const CardDetial = ({ advertisment, error }) => {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        rtl="true"
        theme="colored"
        closeOnClick
        pauseOnHover
      ></ToastContainer>
      {/* {error && error[0] == 404 && <div> {error[1]}</div>}
      {advertisment && (
        <Head>
          <title>{advertisment.title}</title>
          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
      )} */}
      {advertisment && (
        <div className={styles.Card_Content}>
          <div className={styles.carousel}>
            <CardCarousel advertisment={advertisment} />
          </div>
          <div className={styles.details}>
            <div>{advertisment.title}</div>
            <div className={styles.time_and_category}>
              <TimeWraper item={advertisment}></TimeWraper>

              <div>{" در دسته  "}</div>
              <div className={styles.category}>
                {advertisment.category_name}
              </div>
            </div>
            {advertisment.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetial;
