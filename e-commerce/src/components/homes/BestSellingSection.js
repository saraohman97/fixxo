import React from 'react'
import SmallSalesCard from './SmallSalesCard.js'

const BestSellingSection = () => {
  return (
    <div className='selling-section'>
      <div className='top-selling-section'>
        <h5 className='selling-title'>Latest Product</h5>
        <div className='small-sales-card'>
          <SmallSalesCard />
          <SmallSalesCard />
          <SmallSalesCard />
        </div>
      </div>
      <div className='top-selling-section'>
        <h5 className='selling-title'>Best Selling Product</h5>
        <div className='small-sales-card'>
          <SmallSalesCard />
          <SmallSalesCard />
          <SmallSalesCard />
        </div>
      </div>
      <div className='top-selling-section'>
        <h5 className='selling-title'>Top Reacted Product</h5>
        <div className='small-sales-card'>
          <SmallSalesCard />
          <SmallSalesCard />
          <SmallSalesCard />
        </div>
      </div>
    </div>
  )
}

export default BestSellingSection