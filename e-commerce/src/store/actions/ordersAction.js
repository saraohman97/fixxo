import actionTypes from '../actionTypes';
import axios from 'axios';

export const getAllUserOrders = id => {
  return async dispatch => {
    dispatch({
      type: actionTypes().orders.getAllUserOrders
    })
    try {
      let res;
      if(id){
        res = await axios.get(`http://localhost:****/api/orders/user/`, { headers: { Authentication: "Bearer " + token }})
      }

      if(res.status === 200){
        dispatch(getOrdersSuccess(res.data))
      }
      else {
        throw new Error('Could not fetch any orders')
      }
    }
    catch (err) {
      dispatch(getOrdersFailure(err.message))
    }
  }
}

const getOrdersSuccess = orders => {
  return {
    type: actionTypes().orders.getAllUserOrdersSuccess,
    payload: orders
  }
}

const getOrdersFailure = err => {
  return {
    type: actionTypes().orders.getAllUserOrdersFailure,
    payload: err
  }
}