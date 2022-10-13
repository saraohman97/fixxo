import React from 'react'

const ProductpageFilter = () => {
  return (
    <div className='Product-Page-Filter'>
        <div className='AllCategories'>
            <h1 className='border'>All Categories</h1>
            <div className='AllCategoriesExamples'>
                <h2>Accessories</h2>
                <h2>Watch Fashion</h2>
                <h2>Tees, Knits & Polos</h2>
                <h2>Pants & Denim</h2>
            </div>
        </div>
        <div className='Price'>
            <h1 className='border'>Price</h1>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
            </div>
        </div>
        <div className='Size'>
            <h1 className='border'>Size</h1>
            <div className='SizeChoices'>
                <h2>Small</h2>
                <h2>Medium</h2>
                <h2>Large</h2>
                <h2>Extra Large</h2>
            </div>
        </div>
        <div className='Color'>
            <h1 className='border'>Color</h1>
            <div className='Checkbox-Colors'>
                <div className='Checkbox'>
                    <label className='checkbox' for="myCheckboxBlack">
                        <input className='checkbox-input' type="checkbox" name="checkboxBlack" id="myCheckboxBlack"/>
                        <div className='checkbox-box'></div>
                        Black
                    </label>
                </div>
                <div className='Checkbox'>
                    <label className='checkbox' for="myCheckboxBlue">
                        <input className='checkbox-input' type="checkbox" name="checkboxBlue" id="myCheckboxBlue"/>
                        <div className='checkbox-box'></div>
                        Blue
                    </label>
                </div>
                <div className='Checkbox'>
                    <label className='checkbox' for="myCheckboxRed">
                        <input className='checkbox-input' type="checkbox" name="checkboxRed" id="myCheckboxRed"/>
                        <div className='checkbox-box'></div>
                        Red
                    </label>
                </div>
                <div className='Checkbox'>
                    <label className='checkbox' for="myCheckboxGreen">
                        <input className='checkbox-input' type="checkbox" name="checkboxGreen" id="myCheckboxGreen"/>
                        <div className='checkbox-box'></div>
                        Green
                    </label>
                </div>

            </div>
        </div>
        <div className='Brands'>
            <h1 className='border'>Brands</h1>
            <div className='BrandsChoices'>
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