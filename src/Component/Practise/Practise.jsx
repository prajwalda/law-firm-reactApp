import React from "react";
import styles from "./Practise.module.css";

const Practise = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Area of Practices</h1>

      <div className={styles.images}>
        <h3 className={styles.item1}>BUSINESS LAW</h3>
        <h3 className={styles.item2}>PARTNERSHIP LAW</h3>
        <h3 className={styles.item3}>REAL ESTATE LAW</h3>
        <h3 className={styles.item4}>BUSINESS LAW</h3>
        <h3 className={styles.item5}>LANDLORD DISPUTES</h3>
        <h3 className={styles.item6}>ELDER ABUSE</h3>
      </div>
    </div>
  );
};

export default Practise;
