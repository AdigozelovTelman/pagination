import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import Card from '../card/Card'

const Products = () => {


    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(4)

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setData(res.data.products)
            })
    }, [])

    const lastIndexProducts = currentPage * productsPerPage
    const firstIndexProducts = lastIndexProducts - productsPerPage

    const currentproducts = data.slice(firstIndexProducts, lastIndexProducts)

    let pages = []
    for (let i = 1; i <= Math.ceil(data.length / productsPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
            <div className={styles.button}>
                {currentproducts && currentproducts.map(item =>     <Card item={item}/>)}
            </div>
            {pages && pages.map(item => {
                return <button onClick={() => setCurrentPage(item)}>{item}</button>
            })}
        </>

    )
}

export default Products