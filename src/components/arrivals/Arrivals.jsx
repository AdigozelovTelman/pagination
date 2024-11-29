import React from 'react'
import styles from './Arrivals.module.scss'

const Arrivals = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.arrivals}>
                    <img src="https://preview.colorlib.com/theme/shopmax/images/model_3.png" alt="arrival" />
                </div>
                <div className={styles.arrivalsText}>
                    <p>#New Summer Collection 2019</p>
                    <h2>Arrivals Sales</h2>
                    <a href="#">SHOP NOW</a>
                </div>
            </div>
        </> 
    )
}

export default Arrivals