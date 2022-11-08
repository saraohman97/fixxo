import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import grayBox from '../../img/gray-box.svg'
import star from '../../img/star.svg'
import { addToCart } from '../../store/actions/cartActions'

const ProductItem = () => {
  const dispatch = useDispatch()
  const onClick = e => {
    dispatch(addToCart())
  }

  return (
    <Link to='/details' className='product-item'>

      <div className="quick-view">QUICK VIEW</div>  
      <div className="featured-icons">
        <i className="fa-solid fa-code-compare"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-bag-shopping" onClick={onClick}></i>
      </div>
      <div className="layer"></div>

      <img src={grayBox} className='gray-box' alt="" />
      <div className="text">
          <small className='clr-gray'>Category</small>
          <strong className='not-so-strong'>Modern Black Blouse</strong>
          <div className="stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
          </div>
          <div>$30.00</div>
        </div>
    </Link>
  )
}

export default ProductItem