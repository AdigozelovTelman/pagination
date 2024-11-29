import React from 'react'
import Header from '../../components/header/Header'
import Arrivals from '../../components/arrivals/Arrivals'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div>
      <Header/>
      <Arrivals/>
      <Products/>
    </div>
  )
}

export default Home