import React from 'react'
import styles from "./Cards.module.css"

const Cards = ({name,title,img}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.card}>
        <img src={img} alt="img" width={105}/>
        <h2 className={styles.h2}>Jane cooper</h2>
        <p className={styles.p}>Ceo of Hunt</p>
        <p className={styles.p1}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
          dolor do amet sint. Velit officia
        </p>
        </div>
    </div>
  )
}

export default Cards