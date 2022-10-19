import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/SecondNavbar.css'

const SecondNavbar = () => {
  return (
    <div className='second-navbar'>
      <div className="container">

        <div className="navbar-left">
          <Link to='/'><h3 className='brand'>Fixxo.</h3></Link>

          <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/'>Categories</Link>
            <Link to='/products'>Products</Link>
            <Link to='/'>Pages</Link>
            <Link to='/blog'>Blog</Link>
          </div>
        </div>

        <div className="navbar-right">
          <div>Login</div>

          <div>My Cart / $23.00</div>

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