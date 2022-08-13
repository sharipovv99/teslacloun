import React from 'react'
import styles from '../styles/Home.module.css'

const SolarPanels = () => {
  return (
    <section className={styles.section}>
    <div className={styles.textsArea}>
        <h3>Solar Panels</h3>
        <p>Lowest Cost Solar Panels in America</p>
    </div>
    <div className={styles.buttons}>
        <div className={styles.btnMain}>
            <a href="#" className={styles.btn}>
                order now
            </a>
            <a href="#" className={styles.btn}>
                learn more
            </a>
        </div>
    </div>
    </section>
  )
}

export default SolarPanels