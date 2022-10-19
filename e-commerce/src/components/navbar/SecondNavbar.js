import React from 'react'
import '../navbar/secondNavbar.css'

const SecondNavbar = () => {
  return (
    <div className='second-navbar'>
      <div className="container">

        <div className="navbar-left">
          <h3 className='brand'>Fixxo.</h3>

          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Products</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
          </div>
        </div>

        <div className="navbar-right">
          <a href="#">Login</a>

          <a href="#">My Cart / $23.00</a>

          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-code-compare"></i>
            <i className="fa-regular fa-heart"><small className='number'>1</small></i>
            <i className="fa-solid fa-bag-shopping"><small className='number'>3</small></i>
          </div>
        </div>



      </div>
    </div>
  )
}

export default SecondNavbar