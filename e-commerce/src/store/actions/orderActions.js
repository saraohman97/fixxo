import actionTypes from '../actionTypes';
import axios from 'axios';

export const createOrder = (payload) => {
  return async dispatch => {
    dispatch({
      type: actionTypes().order.createOrder
    })
    try {
      const res = await axios.post('http://localhost:****/api/orders', payload.order, { headers: { Authentication: "Bearer " + token }})
      dispatch(createOrderSuccess(res.data))
    }
    catch (err) {
      dispatch(createOrderFailure(err))
    }
  }
}

const createOrderSuccess = () => {
  return {
    type: actionTypes().orders.createOrderSuccess,
    payload: null
  }
}

const createOrderFailure = (err) => {
  return {
    type: actionTypes().orders.createOrderFailure,
    payload: err
  }
}

export const getSingelUserOrder = id => {
  return async dispatch => {
    dispatch({
      type: actionTypes().order.getSingleUserOrder
    })
    try {
      let res;
      if(id){
        res = await axios.get(`http://localhost:****/api/orders/user/${id}`, { headers: { Authentication: "Bearer " + token }})
      }
      
      if(res.status === 200){
        dispatch(getOrderSuccess(res.data))
      }
      else {
        throw new Error('Could not fetch the order')
      }
    } 
    catch (err) {
      dispatch(getOrderFailure(err.message))
    }
  }
}

const getOrderSuccess = order => {
  return {
    type: actionTypes().order.getSingleUserOrderSuccess,
    payload: order
  }
}

const getOrderFailure = err => {
  return {
    type: actionTypes().order.getSingleUserOrderFailure,
    payload: err
  }
}