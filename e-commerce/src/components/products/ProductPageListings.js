import React, { useState } from 'react';
import SalesCard from './SalesCard'

let option = 12;
let tempsalesCards = [];
for (let i = 0; i < option; i++) {
  tempsalesCards.push(<SalesCard/>);
}
  
const ProductPageListings = () => {

  const [salesCards, setSalesCards] =  useState(tempsalesCards);
  const calcNrDisplay = () => {

    tempsalesCards = [];
    for (let i = 0; i < option; i++) {
      tempsalesCards.push(<SalesCard/>);
    }
    setSalesCards(tempsalesCards);

  }
  

  
  const handleChange = (e) => {
    option = e.target.value;
    calcNrDisplay();
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
            {salesCards.map((card) => {
              return <SalesCard/>;
            })}
      
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