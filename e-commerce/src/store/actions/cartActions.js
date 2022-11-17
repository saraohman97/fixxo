import actionTypes from '../actionTypes';

export const addToCart = product => {
  return {
    type: actionTypes().cart.addToCart,
    payload: product
  }
}

export const removeFromCart = id => {
  return {
    type: actionTypes().cart.removeFromCart,
    payload: id
  }
}

export const increment = id => {
  return {
    type: actionTypes().cart.increment,
    payload: id
  }
}

export const decrement = id => {
  console.log(id,"AJSHDUJKASDHJASDHkj")
  return {
    type: actionTypes().cart.decrement,
    payload: id
  }

}
export const getCart = () => {
  return {
    type: actionTypes().cart.getCart
  }
}