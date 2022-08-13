import React from 'react'
import styles from '../styles/Home.module.css'

const ModelX = () => {
  return (
    <section className={styles.section}>
    <div className={styles.textsArea}>
        <h3>Model X</h3>
        <p>Order Online for <span className={styles.touchless}>Touchless Delivery</span></p>
    </div>
    <div className={styles.buttons}>
        <div className={styles.btnMain}>
            <a href="#" className={styles.btn}>
                custom order
            </a>
            <a href="#" className={styles.btn}>
                Existing Inventory
            </a>
        </div>
    </div>
    </section>
  )
}

export default ModelX