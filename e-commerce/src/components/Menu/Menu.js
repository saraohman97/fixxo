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
        </div>
    </div>
  )
}

export default Menu