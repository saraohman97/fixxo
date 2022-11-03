import actionTypes from "../actionTypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const productsReducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes().products.getAllProducts:
      return {
        ...state,
        loading: true
      }

    case actionTypes().products.getAllProductsSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }

    case actionTypes().products.getAllProductsFailure:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default productsReducer;