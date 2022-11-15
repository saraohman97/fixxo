import React from 'react'
import './SalesCard.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'

const SalesCard = ({product}) => {
  
  const dispatch = useDispatch()
  const onClick = e => {
    console.log(product)
    dispatch(addToCart({product, quantity: 1}))
  }


  return (
    <div className='product-page-card'>
      <Link to={'/details/' + product.id} className="quick-view">QUICK VIEW</Link>  
      <div className="featured-icons">
        <i className="fa-solid fa-code-compare"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-bag-shopping" onClick={onClick}></i>
      </div>
      <div className="layer"></div>
      <div className='product-page-inner-card'>
        <div className='product-page-card-picture'>
          <img className='product-page-card-picture' src={product.imgUrl} alt="" />
        </div>
        <small>Category</small>
        <p>{product.name}</p>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <h3>${product.price}</h3>
      </div>
      
    </div>
  )
}

export default SalesCard