import React from 'react'
import './Home.css'
import headerImg1 from './img/header-img-1.svg'
import headerImg2 from './img/header-img-2.svg'

const Home = () => {
  return (
    <div className='home'>
        <div className="header">
            <div className="container">
                <div className="menu">
                    <h3 className='brand'>Fixxo.</h3>
                    <div className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Categories</a>
                        <a href="#">Products</a>
                        <a href="#">Pages</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="menu-icons">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-code-compare"></i>
                        <i className="fa-regular fa-heart"><small className='number'>1</small></i>
                        <i className="fa-solid fa-bag-shopping"><small className='number'>3</small></i>
                    </div>
                </div>
            </div>

            <div className="showcase">
                <img src={headerImg1} alt="showcase background image person" />

                <div className="text">
                    <h1>SALE UP <br /> To 50% off</h1>
                    <p>Online shopping free home delivery over $100</p>

                    <button className='btn btn-pink'>SHOP NOW</button>
                </div>

                <img src={headerImg2} alt="showcase background image person" />
            </div>
        </div>
    </div>
  )
}

export default Home