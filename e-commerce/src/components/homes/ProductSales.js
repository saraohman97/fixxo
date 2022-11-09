import React from 'react'
import HomeSalesCard from './HomeSalesCard.js'
import useWindowDimensions from '../../hooks/useWindowWidth.js';
import { Link } from 'react-router-dom';
const ProductSales = () => {

  const {height, width } = useWindowDimensions();


  return (
    <div className='container'>
      <div className='product-sales'>
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <Link to='/products'><button className='btn'>FLASH SALE</button></Link>
        </div>
        
          {width > 768 ? <div className='sales-card-wrapper-upper'>
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard /></div> :
          <div className='sales-card-wrapper-upper'><HomeSalesCard />
          <HomeSalesCard /></div>
          }
        
      </div>
      <div className="product-sales">
      {width > 768 ? <div className='sales-card-wrapper-lower'>
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard />
          <HomeSalesCard /></div> :
          <div className='sales-card-wrapper-lower'><HomeSalesCard />
          <HomeSalesCard /></div>
          }
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <Link to='/products'><button className='btn'>FLASH SALE</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ProductSales