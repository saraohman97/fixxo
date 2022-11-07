import React from 'react'
import { Link } from 'react-router-dom'

const SmallSalesCard = () => {
  return (
    <Link to='/details' className='d-flex'>
      <div className='card-picture'>
        {/* <img src="#" alt="" /> */}
      </div>
      <div className='card-content'>
        <small>Category</small>
        <p>Modern Black Blouse</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h6>$29.00</h6>
      </div>
    </Link>
  )
}

export default SmallSalesCard