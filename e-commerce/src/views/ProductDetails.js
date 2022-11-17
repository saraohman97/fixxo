import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SecondNavbar from '../components/navbar/SecondNavbar'
import './styles/ProductDetails.css'
import { addToCart } from '../store/actions/cartActions'
import { getProduct } from '../store/actions/productActions'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const {data:product, loading, error} = useSelector(state => state.productReducer)


  useEffect(() => {
    dispatch(getProduct(id))
  
    
  }, [id])
  
  

  return (
    <>
    <SecondNavbar />
   {product && 
    <div className="intro-container">
      <div><h1 className='promo'>Get 25% OFF at the Fixxo selection-shop Now!</h1></div>
      <div className="home">
        <ul className='home-list'>
          <li> <i className="fa-solid fa-house"></i>Home <i className="fa-solid fa-greater-than"></i></li>
          <li>Product details</li>
        </ul>
      </div>
      <div className="pdtdetails-container">
        <div className="pdt-images" >
          {/* <img src="../images/main.png" alt="main-img" style={{backgroundColor:'red'}} /> */}
          <img src={product.colors[0].imgUrl} alt="" className='main-img' />
          <div className="small-images">
            <img className='small-img' src="https://via.placeholder.com/160X132" alt="" />
            <img className='small-img' src="https://via.placeholder.com/160X132" alt="" />
            <img className='small-img' src="https://via.placeholder.com/160X132" alt="" />
          </div>

        </div>
        <div className="pdt-specs">
          <h1>{product.name}</h1>
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
          <p className="price" stye={{fontSize:'1.1rem'}}>${product.price}</p>
          <div className="description">
            <p>{product.description}</p>
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
            <span><button className='qty-btn' onClick={() => setQuantity(state => state - 1)}>-</button></span>
            <span><input className='qty-btn qty-input' type="number" value={quantity} onChange={e => setQuantity(e.target.value)} /></span>
            <span><button className='qty-btn' onClick={() => setQuantity(state => state + 1)}>+</button></span>
            <span><button onClick={() => dispatch(addToCart({product, quantity}))} className=' add-to-cart'>ADD TO CART</button></span>
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
            {
              product.additionalInformationResponses.length > 0 &&
            product.additionalInformationResponses[0].data}
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
    }
    </>
  )
}

export default ProductDetails