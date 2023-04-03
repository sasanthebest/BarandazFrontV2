import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, triger, setTriger }) => {
  return (
    <>
      {triger && (
        <div className={styles.modal}>
          <div onClick={() => setTriger(false)} className={styles.overlay} />
          <div className={styles.modal_content}>
            {children}

            <button
              onClick={() => setTriger(false)}
              className={styles.button_close}
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
