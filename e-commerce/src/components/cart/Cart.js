import React from 'react'
import { useSelector } from 'react-redux'
import './cart.css'
import CartItem from './CartItem'



const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(state => state.cartReducer)
  return (
    <div className='cart-main'>
      <div>
        <h6>Cart</h6>
      </div>
      <div className='cart-content'>

        <div className='cart-items'>
          {cart && cart.map(item => <CartItem key={item.product.id} item={item} />)}
        </div>
        <div className='cart-bottom'>
          <div className='cart-price'>
            <p className='cart-total-price'>Total price: </p>
            <p>{totalPrice > 0 && '$' + totalPrice}</p>
          </div>
          <div><button className='btn-order'>Checkout</button></div>
        </div>
      </div>
    </div>
  )
}

export default Cart