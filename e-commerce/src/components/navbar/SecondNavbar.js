import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../navbar/SecondNavbar.css'
import Menu from '../Menu/Menu'

const SecondNavbar = () => {

  const [showMenu, setShowMenu] = useState(false)


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
            <Link to='/blogpage'>Blog</Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className='d-none'>Login</div>

          <div className='d-none'>My Cart / $23.00</div>

          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-code-compare d-none"></i>
            <i className="fa-regular fa-heart d-none"><small className='number'>1</small></i>
            <i className="fa-solid fa-bag-shopping"><small className='number'>3</small></i>
          </div>

          <button className='button' onClick={() => setShowMenu(true)}><i className="fa-solid fa-bars"></i></button>
          {showMenu && <Menu setShowMenu={setShowMenu} />}
        </div>

      </div>
    </div>
  )
}

export default SecondNavbar