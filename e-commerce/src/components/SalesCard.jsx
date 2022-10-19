import React from 'react'
import './SalesCard.css'

const SalesCard = (product) => {
  return (
    <div className='product-page-card'>
      <div className='product-page-inner-card'>
        <div className='product-page-card-picture'>
          {/* <img src="#" alt="" /> */}
        </div>
        <small>Category</small>
        <p>Modern Black Blouse{product.data}</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h3>$35.00</h3>
      </div>
      
    </div>
  )
}

export default SalesCard