import React from 'react'
import SalesCard from './SalesCard'

const ProductSales = () => {
  return (
    <div className='container'>
      <div className='product-sales'>
        <div className='flash-sale'>
          <h2>2 FOR US $29</h2>
          <button>FLASH SALE</button>
        </div>
        <div className='sales-card-wrapper'>
          <SalesCard />
          <SalesCard />
          <SalesCard />
          <SalesCard />
        </div>
      </div>
    </div>
  )
}

export default ProductSales