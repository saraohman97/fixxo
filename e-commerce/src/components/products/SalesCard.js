import React from 'react'
import './SalesCard.css'

const SalesCard = ({product}) => {
  
  return (
    <div className='product-page-card'>
      <div className='product-page-inner-card'>
        <div className='product-page-card-picture'>
          {/* <img src="#" alt="" /> */}
        </div>
        <small>Category</small>
        <p>{product.name}</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h3>${product.price}</h3>
      </div>
      
    </div>
  )
}

export default SalesCard