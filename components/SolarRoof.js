import React from 'react'
import styles from '../styles/Home.module.css'

const SolarRoof = () => {
  return (
    <section className={styles.section}>
    <div className={styles.textsArea}>
        <h3>Solar Roof</h3>
        <p>Produce Clean Energy From Your Roof</p>
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

export default SolarRoof