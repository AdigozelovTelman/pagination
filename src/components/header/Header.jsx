import React from 'react'
import styles from './Header.module.scss'
import { FaBasketShopping, FaRegHeart } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  return (
    <>
        <div className={styles.header}>
            <div className={styles.shopMax}>
                <h5>SHOPMAX</h5>
            </div>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">CATALOGUE</a></li>
                        <li><a href="#">NEW ARRIVALS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.icon}>
            <IoSearch />
            <FaRegHeart />
            <FaBasketShopping /> <span>2</span>
            <div className={styles.hamburger}>
            <RxHamburgerMenu />
            </div>
            </div>
        </div>
    </>
  )
}

export default Header