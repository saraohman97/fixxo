import React from 'react'
import { Link } from 'react-router-dom'

const FlashSaleShowcase = () => {
  return (
      <div className='container showcase-flash-sale'>
        <h2>Up to 70% off*</h2>
        <h5>Women's, Men's & Kids' Winter Fashion</h5>
        <Link to='/products'><button className='btn'>FLASH SALE</button></Link>
      </div>
  )
}

export default FlashSaleShowcase