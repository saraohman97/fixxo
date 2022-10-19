import React from 'react'
import HomeSalesCard from './HomeSalesCard.js'

const ProductSales = () => {
  return (
    <div className='container'>
      <div className='product-sales'>
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <button className='btn'>FLASH SALE</button>
        </div>
        <div className='sales-card-wrapper-upper'>
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard />
        </div>
      </div>
      <div className="product-sales">
        <div className='sales-card-wrapper-lower'>
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard />
        </div>
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <button className='btn'>FLASH SALE</button>
        </div>
      </div>
    </div>
  )
}

export default ProductSales