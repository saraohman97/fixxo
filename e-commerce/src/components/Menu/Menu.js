import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ setShowMenu }) => {

  return (
    <div className='menu-dropdown'>
        <div className="top">
            <button onClick={() => setShowMenu(false)}><i className="fa-solid fa-bars"></i></button>
        </div>
        <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/'>Categories</Link>
            <Link to='/products'>Products</Link>
            <Link to='/'>Pages</Link>
            <Link to='/blogpage'>Blog</Link>
            <div className='dark'>Login</div>
            <div className='dark'>My Cart / $23.00</div>
        </div>


        <div className="icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-code-compare d-none"></i>
          <i className="fa-regular fa-heart d-none"><small className='number'>1</small></i>
          <i className="fa-solid fa-bag-shopping"><small className='number'>3</small></i>
        </div>
    </div>
  )
}

export default Menu