import React from 'react'
import { Link } from 'react-router-dom'
import SecondNavbar from '../components/navbar/SecondNavbar'
import './styles/ProductDetails.css'

const ProductDetails = () => {

  return (
    <>
    <SecondNavbar />
   
    <div className="intro-container">
      <div><h1 className='promo'>Get 25% OFF at the Fixxo selection-shop Now!</h1></div>
      <div className="home">
        <ul className='home-list'>
          <li> <i className="fa-solid fa-house"></i>Home <i className="fa-solid fa-greater-than"></i></li>
          <li>product signal</li>
        </ul>
      </div>
      <div className="pdtdetails-container">
        <div className="pdt-images" >
          {/* <img src="../images/main.png" alt="main-img" style={{backgroundColor:'red'}} /> */}
          <img src="https://via.placeholder.com/540X444" alt="" className='main-img' />
          <div className="small-images">
            <img className='small-img' src="https://via.placeholder.com/160X132" alt="" />
            <img className='small-img' src="https://via.placeholder.com/160X132" alt="" />
            <img className='small-img' src="https://via.placeholder.com/160X132" alt="" />
          </div>

        </div>
        <div className="pdt-specs">
          <h1>Modern Black Blouse</h1>
          <div className="brand">
            <span>SKU: 12345670</span>
            <span>BRAND:The Northland</span>
          </div>
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p className="price" stye={{fontSize:'1.1rem'}}>$35.00</p>
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut quod sequi optio deleniti perspiciatis ipsam doloribus iure alias nulla non magni, quaerat eum eaque dolores molestias obcaecati veritatis? Necessitatibus blanditiis libero quasi a, similique rerum   <Link t0='/details'>(read more)</Link></p>
          </div>

          <div className="sizes">
            <span className='size'>Size:</span>
            <span className='size-btn'><button>S</button></span>
            <span className='size-btn'><button>M</button></span>
            <span className='size-btn'><button>L</button></span>
            <span className='size-btn'><button>X</button></span>
          </div>
          <div className="color">
            <span className=''>Color:</span>
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

          <div className="share" >
            <span>Share:</span>
            <div className="brand-specs">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

          </div>
        </div>
      </div>
      <div className="product-description">
        <ul className='steps-list'>
          <li className='active'><Link to="/">Description</Link></li>
          <li> <Link to="/">Additional</Link></li>
          <li><Link to="/">Shopping & Returns</Link></li>
          <li> <Link to="/">Reviews</Link></li>
          {/* <li>Shopping & Returns</li>
          <li>Reviews</li> */}
        </ul>
        <div className='steps'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis aspernatur, adipisci numquam pariatur odio magni, quidem facilis omnis porro nisi ducimus maiores natus hic sint ipsum ex non sequi officia exercitationem animi neque eum atque? Quas ipsam adipisci velit vel temporibus perferendis, porro dolorem quae cum saepe ipsa deleniti!
          </p>
          <ul >
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
          {/* <img src="../images/arrow-ios-back-outline@2x.png" alt="back-btn" />
          <img src="../images/arrow-ios-forward-fill.png" alt="forward-btn" style={{color:'red'}} /> */}
          <button><i className="fa-solid fa-less-than"></i></button>
          <button><i className="fa-solid fa-greater-than"></i></button>
        </div>
      </div>
      <div className="related-pdts-img">
        <div className="card">
          <img src="https://via.placeholder.com/255X210" alt="" />
          <div className="category">
            <p style={{ fontSize: '0.8rem' }}>Category</p>
            <p className='blouse'>Modern Black Blouse</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="price">$35.00</p>
          </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/255X210" alt="" />
          <div className="category">
            <p  style={{ fontSize: '0.8rem' }}>Category</p>
            <p className='blouse'>Modern Black Blouse</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="price">$35.00</p>
          </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/255X210" alt="" />
          <div className="category">
            <p  style={{ fontSize: '0.8rem' }}>Category</p>
            <p className='blouse'>Modern Black Blouse</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="price">$35.00</p>
          </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/255X210" alt="" />
          <div className="category">
            <p  style={{ fontSize: '0.8rem' }}>Category</p>
            <p className='blouse'>Modern Black Blouse</p>
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="price">$35.00</p>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ProductDetails