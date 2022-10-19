import React from 'react'

const SalesCard = () => {
  return (
    <div className='card'>
      <div className='card-picture'>
        {/* <img src="#" alt="" /> */}
      </div>
      <small>Category</small>
      <p>Modern Black Blouse</p>
      <div>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h6>$29</h6>
    </div>
  )
}

export default SalesCard