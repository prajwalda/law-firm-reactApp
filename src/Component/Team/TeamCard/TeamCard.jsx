import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ img, name, cases, selected }) => {
  const wrapperClassName = selected ? styles.wrapperClassName : styles.wrapper;

  return (
    <div className={wrapperClassName}>
      <div className={styles.left}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.right}>
        <div>{name}</div>
        <p>{cases} cases</p>
      </div>
    </div>
  );
};

export default TeamCard;
