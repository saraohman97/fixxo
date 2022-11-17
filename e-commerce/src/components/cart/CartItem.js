import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, removeFromCart } from '../../store/actions/cartActions'



const CartItem = ({item}) => {
  const dispatch = useDispatch()
  console.log(item)
  return (
    <div className='cart-item'>

      <div className='cart-item-content d-flex align-items-center'>
        <img src={item.product.imgUrl} className="img-fluid cart-image" />
        <div>
          <div><strong>{item.name}</strong></div>
          <div><small>{item.quantity} x {item.price}</small></div>
        </div>
      </div>
      <div>
        <div className="" role="group">
          <button className='btn-cart' onClick={() => dispatch(decrement(item._id))}>-</button>
          <button className='btn-cart' onClick={() => dispatch(increment(item._id))}>+</button>
        </div>
        <button className='btn-trash' onClick={() => dispatch(removeFromCart(item._id))}>TRASH CAN</button>
      </div>
    </div>
  )
}

export default CartItem