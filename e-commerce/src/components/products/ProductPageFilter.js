import React from 'react'
import MultiRangeSlider from './multiRangeSlider/MultiRangeSlider'


const ProductpageFilter = () => {
  return (
    <div className='product-page-filter'>
        <div className='all-categories'>
            <h1 className='border'>All Categories</h1>
            <div className='all-categories-examples'>
                <h2>Accessories</h2>
                <h2>Watch Fashion</h2>
                <h2>Tees, Knits & Polos</h2>
                <h2>Pants & Denim</h2>
            </div>
        </div>
        <div className='price'>
            <h1 className='border'>Price</h1>
            <MultiRangeSlider min={0}
            max={5000}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            
        </div>
        <div className='size'>
            <h1 className='border'>Size</h1>
            <div className='size-choices'>
                <h2>Small</h2>
                <h2>Medium</h2>
                <h2>Large</h2>
                <h2>Extra Large</h2>
            </div>
        </div>
        <div className='color'>
            <h1 className='border'>Color</h1>
            <div className='checkbox-colors'>
                <div className='checkbox'>
                    <label className='checkbox' for="myCheckboxBlack">
                        <input className='checkbox-input' type="checkbox" name="checkboxBlack" id="myCheckboxBlack"/>
                        <div className='checkbox-box'></div>
                        Black
                    </label>
                </div>
                <div className='checkbox'>
                    <label className='checkbox' for="myCheckboxBlue">
                        <input className='checkbox-input' type="checkbox" name="checkboxBlue" id="myCheckboxBlue"/>
                        <div className='checkbox-box'></div>
                        Blue
                    </label>
                </div>
                <div className='checkbox'>
                    <label className='checkbox' for="myCheckboxRed">
                        <input className='checkbox-input' type="checkbox" name="checkboxRed" id="myCheckboxRed"/>
                        <div className='checkbox-box'></div>
                        Red
                    </label>
                </div>
                <div className='checkbox'>
                    <label className='checkbox' for="myCheckboxGreen">
                        <input className='checkbox-input' type="checkbox" name="checkboxGreen" id="myCheckboxGreen"/>
                        <div className='checkbox-box'></div>
                        Green
                    </label>
                </div>

            </div>
        </div>
        <div className='brands'>
            <h1 className='border'>Brands</h1>
            <div className='brands-choices'>
                <h2>Accessories</h2>
                <h2>Watch Fashion</h2>
                <h2>Tees, Knits & Polos</h2>
                <h2>Pants & Denim</h2>
            </div>
        </div>
        
    </div>
  )
}

export default ProductpageFilter