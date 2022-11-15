import React, { useState, useEffect } from 'react'
import HomeSalesCard from './HomeSalesCard.js'
import useWindowDimensions from '../../hooks/useWindowWidth.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProductSales = () => {

  const { height, width } = useWindowDimensions();
  const [upperProducts, setUpperProducts] = useState([])
  const [lowerProducts, setLowerProducts] = useState([])
  const [_width, set_width] = useState(state => {
    if (width > 768) {
      return 4
    }
    else {
      return 2
    }
  })
  const { data: products, loading, error } = useSelector(state => state.productsReducer)

  const splitProducts = _products => {
    console.log(upperProducts)
    if (_products) {
      _products.forEach((product, index) => {
        if (index < 4) {
          setUpperProducts(state => [...state, product])
        }
        else if (index < 8) {
          console.log(lowerProducts)
          setLowerProducts(state => [...state, product])
        }
      });
    }
  }

  useEffect(() => {

    splitProducts(products)


  }, [products])




  return (
    <div className='container'>
      <div className='product-sales'>
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <Link to='/products'><button className='btn'>FLASH SALE</button></Link>
        </div>
        <div className='sales-card-wrapper-upper'>

          {upperProducts && upperProducts.map((product, index) => {
            if (index < _width) {
              return <HomeSalesCard key={product.id} product={product} />
            }

          })}
        </div>
      </div>
      <div className="product-sales">
        <div className='sales-card-wrapper-lower'>
          {lowerProducts && lowerProducts.map((product, index) => {
            if (index < _width) {
              return <HomeSalesCard key={product.id} product={product} />
            }

          })}</div>
        <div className='flash-sale'>
          <h2 className='flash-text'>2 FOR US $29</h2>
          <Link to='/products'><button className='btn'>FLASH SALE</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ProductSales