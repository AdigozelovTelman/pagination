import React from 'react'
import styles from './Card.module.scss'

const Card = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.data}>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <img src={item.thumbnail} alt="..." />
            </div>
        </div>
    )
}

export default Card