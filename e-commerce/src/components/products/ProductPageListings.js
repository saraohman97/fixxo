import React, { useState, useEffect } from 'react';
import SalesCard from './SalesCard'
import axios from 'axios'

// let option = 12;
// let tempsalesCards = [];
// for (let i = 0; i < option; i++) {
//   tempsalesCards.push(<SalesCard/>);
// }




const ProductPageListings = () => {
  const [salesCards, setSalesCards] =  useState();

  useEffect(() => {
    getAllProducts()
    
  }, [])
  

  const getAllProducts = async () => {
    const products = await axios.get("http://localhost:9999/products")
    setSalesCards(products.data)
    console.log(products.data)
  }
  // const calcNrDisplay = () => {

  //   tempsalesCards = [];
  //   for (let i = 0; i < option; i++) {
  //     tempsalesCards.push(<SalesCard/>);
  //   }
  //   setSalesCards(tempsalesCards);

  // }
  

  
  const handleChange = (e) => {
    // option = e.target.value;
    // calcNrDisplay();
    console.log(salesCards);
  };



  return (
    <div className='center-align'>
        <div className='product-page-div'>
          <div className='product-page-listings-filters'>
            <div>
            <select name="sorting" id="sorting" className='sorting-options'>
                  <option value="most-popular">Most Popular</option>
                  <option value="recently-added">Recently Added</option>
              </select>
            </div>
            <div>
              <label for="show-options" className='show-options-label'>Show: </label>
              <select name="show-options" id="show-options" className='show-options-select' onChange={handleChange}>
                  <option value="12">12</option>
                  <option value="15">15</option>

              </select>

            </div>
              
          </div>
          
          <div className='product-page-listings'>
            {salesCards ? salesCards.map((product) => (
              <SalesCard key={product.id} product={product} />
            )) : <div></div>}
      
          </div>
          <div class="pagination">
            <a href="/#">&laquo;</a>
            <a href="/#" class="active">01</a>
            <a href="/#">02</a>
            <a href="/#">03</a>
            <a href="/#">&raquo;</a>
          </div>
        </div>
        
    </div>
  )
}

export default ProductPageListings