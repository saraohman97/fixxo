import actionTypes from "../actionTypes";
import axios from "axios";
const initState = {
  orders: [getAllProducts],
  loading: false,
  error: null
}

const getAllProducts = async () => {
  const products = await axios.get("https://localhost:7271/api/Products")
  return products.data;
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