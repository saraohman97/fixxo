import React, { useState, useEffect } from 'react';
import SalesCard from './SalesCard'
import axios from 'axios'
import { set } from 'lodash';
import { useSelector } from 'react-redux'

const ProductPageListings = () => {
  const { data: products, loading, error } = useSelector(state => state.productsReducer)
  console.log(products)
  const [option, setOption] = useState(12);


  useEffect(() => {
    getAllProducts()

  }, [])


  const getAllProducts = async () => {
    // const products = await axios.get("http://localhost:9999/products")
    // setSalesCards(products);
  }


  const handleChange = (e) => {
    setOption(e.target.value);
  };



  return (
    <div className='product-page-main'>


      <div className='product-page-listings-filters'>

        <div>
          <select name="sorting" id="sorting" className='sorting-options'>
            <option value="most-popular">Most Popular</option>
            <option value="recently-added">Recently Added</option>
          </select>
        </div>
        <div>
          <label htmlFor="show-options" className='show-options-label'>Show: </label>
          <select name="show-options" id="show-options" className='show-options-select' onChange={handleChange}>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>

        </div>

      </div>

      <div className='product-page-listings'>
        {products && products.map((product, index) => {
          if (index < option) {
            return (<SalesCard key={product.id} product={product} />)
          }
          return <div></div>
        })}
      </div>
      <div></div>

      <div className="pagination">
        <a href="/#">&laquo;</a>
        <a href="/#" className="active">01</a>
        <a href="/#">02</a>
        <a href="/#">03</a>
        <a href="/#">&raquo;</a>
      </div>

    </div>
  )
}

export default ProductPageListings