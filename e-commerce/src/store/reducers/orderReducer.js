import actionTypes from "../actionTypes";

const initState = {
  order: null,
  loading: false,
  error: null
}

const orderReducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes().order.getSingleUserOrder:
      return {
        ...state,
        loading: true
      }

    case actionTypes().order.getSingleUserOrderSuccess:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: null
      }

    case actionTypes().order.getSingleUserOrderFailure:
      return {
        ...state,
        order: null,
        loading: false,
        error: action.payload
      }

    case actionTypes().order.createOrder:
      return {
        ...state,
        loading: true
      }

    case actionTypes().order.createOrderSuccess:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: null
      }

    case actionTypes().order.createOrderFailure:
      return {
        ...state,
        order: null,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default orderReducer;