import { NavLink } from 'react-router-dom'
import './styles/Home.css'
import React from 'react'
import useWindowDimensions from '../hooks/useWindowWidth'

import headerImg1 from '../img/header-img-1.svg'
import headerImg2 from '../img/header-img-2.svg'
import ProductItem from '../components/homes/ProductItem'

import BestSellingSection from '../components/homes/BestSellingSection'
import FlashSaleShowcase from '../components/homes/FlashSaleShowcase'
import InfoCircles from '../components/homes/InfoCircles'
import ProductSales from '../components/homes/ProductSales'


const Home = () => {
    const { height, width } = useWindowDimensions();

return (
        <div className='home'>
            <div className="header">
                <div className="container">

                    <div className="menu">
                        <h3 className='brand'>Fixxo.</h3>

                        <div className="nav-links">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/products'>Categories</NavLink>
                            <NavLink to='/products'>Products</NavLink>
                            <NavLink to='/'>Pages</NavLink>
                            <NavLink to='/blogpage'>Blog</NavLink>
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
                    <img src={headerImg1} alt="showcase background person" />

                    <div className="text">
                        <h1>SALE UP <br /> To 50% off</h1>
                        <p>Online shopping free home delivery over $100</p>
                        <button className='btn btn-pink'>SHOP NOW</button>
                    </div>

                    <img src={headerImg2} alt="showcase background person" />
                </div>
            </div>

            <div className="second-showcase">
                <div className="container">

                    <div className="first-placeholder">
                        <div className="text">
                            <h2>Winter Clearance <br /> Up to 70% Off!</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                            <button className='btn btn-black'>SHOP NOW</button>
                        </div>
                    </div>

                    <div className="second-placeholder">
                        <h2>New <br />Arrivals</h2>
                        <button className='btn btn-black'>SHOP NOW</button>
                    </div>

                </div>
            </div>


            <div className="featured">
                <strong className='title'>Featured Product</strong>
                <div className="products">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>

            <div className="third-showcase">
                <div className="container">

                    <div className="third-placeholder">
                        <h2 className='clr-white'>Pamela Reif's <br />Top Picks</h2>
                        <button className='btn btn-black'>SHOP NOW</button>
                    </div>

                    <div className="fourth-placeholder">
                        <h2>Let's Be <br />Conscious</h2>
                        <button className='btn'>FLASE SALE</button>
                    </div>

                </div>
            </div>


            <div className="our-speciality">
                <div className="container">
                    <strong className='title'>Our Speciality</strong> <br /><br />

                    <div className="box-container">
                        <div className="box-group">
                            <div className="box">
                                <p>Track Your Order</p>
                                <small>Get Started <i className="fa-solid fa-chevron-right"></i></small>
                            </div>
                            <div className="box-gray"></div>
                        </div>

                        <div className="box-group">
                            <div className="box">
                                <p>Make a Return</p>
                                <small>Get Started <i className="fa-solid fa-chevron-right"></i></small>
                            </div>
                            <div className="box-gray"></div>
                        </div>

                        <div className="box-group">
                            <div className="box">
                                <p>Request a Price <br />Adjustment</p>
                                <small>Get Started <i className="fa-solid fa-chevron-right"></i></small>
                            </div>
                            <div className="box-gray"></div>
                        </div>

                    </div>
                </div>
            </div>


            {/* HOME PAGE LOWER */}
            <ProductSales />
            <FlashSaleShowcase />
            <BestSellingSection />
            <div className='section-divider'></div>
            {width > 768 ?
            <div className='info-circles'>
            <InfoCircles icon={'/img/customer-service.svg'} title={'Customer Support'} text={'Village did removed enjoyed explain talking.'} />
            <InfoCircles icon={'/img/credit-card (1).svg'} title={'Secured Payment'} text={'Village did removed enjoyed explain talking.'} />
            <InfoCircles icon={'/img/delivery-truck.svg'} title={'Free Home Delivery'} text={'Village did removed enjoyed explain talking.'} />
            <InfoCircles icon={'/img/delivery-truck.svg'} title={'30 Day Reuters'} text={'Village did removed enjoyed explain talking.'} />
        </div> :
        <div className='info-circles'>
            <div className='info-circles-mobile'>
                <InfoCircles icon={'/img/customer-service.svg'} title={'Customer Support'} text={'Village did removed enjoyed explain talking.'} />
                <InfoCircles icon={'/img/credit-card (1).svg'} title={'Secured Payment'} text={'Village did removed enjoyed explain talking.'} />
            </div>
            <div className='info-circles-mobile'>
                <InfoCircles icon={'/img/delivery-truck.svg'} title={'Free Home Delivery'} text={'Village did removed enjoyed explain talking.'} />
                <InfoCircles icon={'/img/delivery-truck.svg'} title={'30 Day Reuters'} text={'Village did removed enjoyed explain talking.'} />
            </div>
            </div>    
        
        }
        </div>
    )
}

export default Home