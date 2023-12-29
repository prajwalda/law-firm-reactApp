import React from "react";
import styles from "./Attorney.module.css";
import Card from "./Card/Card";

const Attorney = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>Let’s Introduce Ourself</div>
        <hr className={styles.vertical_line} />
        <div className={styles.right}>
          <h2>Criminal Lawyer</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <div className={styles.wrapper1}>
        <h1 className={styles.h1}>Why Choose us?</h1>

        <div className={styles.boxes}>
        <Card rateData={98}/>
        <Card rateData={100}/>
        <Card rateData={100}/>
        </div>

      </div>
    </div>
  );
};

export default Attorney;
