import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={require("../../assets/Vector.png")} alt="img" width={30}/>
          <img src={require("../../assets/Igstudio.png")} alt="img" width={101} height={15}/>
        </div>
        <div className={styles.tabs}>
            <a href='/'>Home</a>
            <a href='/attorney'>Attorney</a>
            <a href='/practise'>Practise Areas</a>
            <a href='/about'>About Us</a>
        </div>
        
        <button className={styles.btn}>Contact Now</button>
    </div>
  )
}

export default Navbar