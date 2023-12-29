import React from "react";
import styles from "./About.module.css";
import img1 from "./images/image1.png"
import img2 from "./images/image2.png"
import img3 from "./images/image3.png"
import Cards from "./Cards/Cards";


export const About = () => {
  const clients = [
    {
      name: "Jane Cooper",
      title: "Ceo of Hunt",
      img:img1,
    },
    {
      name: "Devon Lane",
      title: "Ceo of Hunt",
      img:img2,
    },
    {
      name: "Robert Fox",
      title: "Ceo of Hunt",
      img:img3,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.head}>What says our happy Clients</div>
        <div className={styles.swiper}>
          <button className={styles.leftbtn}>&larr;</button>
          <button className={styles.rightbtn}>&rarr;</button>
        </div>
      </div>
      <div className={styles.carousel}>
        {
            clients.map((item)=>(
                <Cards name={item.name} title={item.title} img={item.img}/>
            ))
        }
      </div>
    </div>
  );
};
