import actionTypes from "../actionTypes";

const initState = {
  orders: [],
  loading: false,
  error: null
}

const ordersReducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes().orders.getAllUserOrders:
      return {
        ...state,
        loading: action.payload
      }

    case actionTypes().orders.getAllUserOrdersSuccess:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null
      }

    case actionTypes().orders.getAllUserOrdersFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default ordersReducer;