import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/actions/cartActions'


const HomeSalesCard = ({product}) => {
  const dispatch = useDispatch()
  const onClick = e => {
    dispatch(addToCart({product, quantity: 1}))
  }
  
  return (
    <div className='home-sales-card card'>
      <div className='card-picture'>
        <img src={product.imgUrl} alt="" className='card-picture-img' />
      <Link to='/details' className="quick-view">QUICK VIEW</Link>  
      <div className="featured-icons">
        <i className="fa-solid fa-code-compare"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-bag-shopping" onClick={onClick}></i>
      </div>
      <div className="layer"></div>
      </div>
      <small>{product.categoryName}</small>
      <p>{product.name}</p>
      <div>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <h6>${product.price}</h6>
    </div>
  )
}

export default HomeSalesCard