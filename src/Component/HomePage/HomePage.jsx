import React from 'react'
import styles from "./HomePage.module.css"
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'

const HomePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Navbar />
            <Banner />
        </div>
    </div>
  )
}

export default HomePage