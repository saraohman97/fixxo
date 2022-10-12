import React from 'react'
import SalesCard from './SalesCard'

const ProductSales = () => {
  return (
    <div className='container'>
      <div className='product-sales'>
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <button className='btn'>FLASH SALE</button>
        </div>
        <div className='sales-card-wrapper-upper'>
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
        </div>
      </div>
      <div className="product-sales">
        <div className='sales-card-wrapper-lower'>
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
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