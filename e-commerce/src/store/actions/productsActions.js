import actionTypes from '../actionTypes';
import axios from 'axios';

export const getProducts = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes().products.getAllProducts
    })
    try {
      const res = await axios.get('https://localhost:7271/api/products')

      if(res.status === 200){
        dispatch(getProductsSuccess(res.data))
      }
      else {
        throw new Error('Could not fetch any products')
      }
    }
    catch (err) {
      dispatch(getProductsFailure(err.message))
    }
  }
}

const getProductsSuccess = (products) => {
  return {
    type: actionTypes().products.getAllProductsSuccess,
    payload: products
  }
}

const getProductsFailure = (err) => {
  return {
    type: actionTypes().products.getAllProductsFailure,
    payload: err
  }
}