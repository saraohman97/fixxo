import React from 'react'

const ProductDetails = () => {

  return (
    <div className="container">
      <div><h1 className='promo'>Get 25% OFF at the Fixxo selection-shop Now!</h1></div>
      <div className="home">
        <ul className='home-list'>
          <li> <i class="fa-solid fa-house"></i>Home <i class="fa-solid fa-greater-than"></i></li>
          <li>product signal</li>
        </ul>
      </div>
      <div className="details-container">
        <div className="pdt-img">
          <img src="https://via.placeholder.com/350" alt="" /><br /><br />
          <img className='small-img' src="https://via.placeholder.com/110" alt="" />
          <img className='small-img' src="https://via.placeholder.com/110" alt="" />
          <img className='small-img' src="https://via.placeholder.com/110" alt="" />
        </div>
        <div className="pdt-specs">
          <h1>Modern Black House</h1>
          <div className="brand">
            <span>SKU: 12345670</span>
            <span>BRAND:The Northland</span>
          </div>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="price">$35.00</p>
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut quod sequi optio deleniti perspiciatis ipsam doloribus iure alias nulla non magni, quaerat eum eaque dolores molestias obcaecati veritatis? Necessitatibus blanditiis libero quasi a, similique rerum   <a href='#'>(read more)</a></p>
          </div>
          <div className="sizes">
            <span className='size'>Size:</span>
            <span className='size-btn'><button>S</button></span>
            <span className='size-btn'><button>M</button></span>
            <span className='size-btn'><button>L</button></span>
            <span className='size-btn'><button>X</button></span>
          </div>
          <div className="color">
            <span className='size'>Color:</span>
            <span>
              <select>
                <option value="0">Choose an option</option>
                <option value="1">Black</option>
                <option value="2">Blue</option>
                <option value="3">Red</option>
              </select>
            </span>
          </div>
          <div className="qty">
            <span className='size'>Qty:</span>
            <span><button className='qty-btn'>-</button></span>
            <span><button className='qty-btn one'>1</button></span>
            <span><button className='qty-btn'>+</button></span>
            <span><button className=' add-to-cart'>ADD TO CART</button></span>
          </div>

          <div className="share">
            <span className='size'>Share:</span>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="product-description">
        <ul className='steps-list'>
          <li className='active'>Description</li>
          <li>Additional</li>
          <li>Shopping & Returns</li>
          <li>Reviews</li>
        </ul>
        <div className='steps'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis aspernatur, adipisci numquam pariatur odio magni, quidem facilis omnis porro nisi ducimus maiores natus hic sint ipsum ex non sequi officia exercitationem animi neque eum atque? Quas ipsam adipisci velit vel temporibus perferendis, porro dolorem quae cum saepe ipsa deleniti!
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, animi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eos.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, blanditiis.</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta neque dolorem aperiam hic at? Rerum harum numquam dolorem, vitae perspiciatis eveniet, nemo qui, fuga quae maxime earum porro. Iusto, sed.
          </p>
        </div>
      </div>
      <div className="related-pdts">
        <p>Related Products</p>
        <div>
          <button><i class="fa-solid fa-less-than"></i></button>
          <button><i class="fa-solid fa-greater-than"></i></button>
        </div>
      </div>
      <div className="related-pdts-img">
        <div className="card">
          <img src="https://via.placeholder.com/200" alt="" />
         <div className="category">
         <p>Category</p>
          <p>Modern Black Blouse</p>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="price">$35.00</p>
         </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/200" alt="" />
         <div className="category">
         <p>Category</p>
          <p>Modern Black Blouse</p>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="price">$35.00</p>
         </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/200" alt="" />
         <div className="category">
         <p>Category</p>
          <p>Modern Black Blouse</p>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="price">$35.00</p>
         </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/200" alt="" />
         <div className="category">
         <p>Category</p>
          <p>Modern Black Blouse</p>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="price">$35.00</p>
         </div>
        </div>
      </div>
    </div>





  )
}

export default ProductDetails