import actionTypes from '../actionTypes';
import axios from 'axios';

export const getProduct = (id) => {
  return async dispatch => {
    dispatch({
      type: actionTypes().product.getSingleProduct
    })
    try {
      const res = await axios.get(`https://localhost:7271/api/products/${id}`)

      if(res.status === 200){
        dispatch(getProductSuccess(res.data))
      }
      else {
        throw new Error('Could not fetch the product')
      }
    }
    catch (err) {
      dispatch(getProductFailure(err.message))
    }
  }
}

const getProductSuccess = (product) => {
  return {
    type: actionTypes().product.getSingleProductSuccess,
    payload: product
  }
}

const getProductFailure = (err) => {
  return {
    type: actionTypes().product.getSingleProductFailure,
    payload: err
  }
}