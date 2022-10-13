import React from 'react'

const ProductPageListings = () => {
  return (
    <div>
        <div>
        <select name="sorting" id="sorting">
            <option value="most-popular">Most Popular</option>
            <option value="recently-added">Recently Added</option>
        </select>

        <label for="show-options">Show: </label>
        <select name="show-options" id="show-options">
            <option value="option-12">12</option>
            <option value="option-15">15</option>

        </select>
        </div>
        
    </div>
  )
}

export default ProductPageListings