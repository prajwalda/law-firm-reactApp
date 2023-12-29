import React from "react";
import styles from "./Card.module.css";
import giftBox from "../../../assets/giftBox.svg";

const Card = ({ rateData }) => {
  return (
    <div className={styles.wrapper}>
      <img src={giftBox} alt="giftbox" width={100}/>
      <h2 className={styles.h2}>{rateData}% Success Rate</h2>
      <p className={styles.text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.btn}>Read More</button>
    </div>
  );
};

export default Card;
