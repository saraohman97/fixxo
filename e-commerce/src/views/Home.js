import React from 'react'
import FlashSaleShowcase from '../components/FlashSaleShowcase'
import ProductSales from '../components/ProductSales'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <ProductSales />
      <FlashSaleShowcase />
    </div>
  )
}

export default Home