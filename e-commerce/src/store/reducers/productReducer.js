import actionTypes from "../actionTypes";

const initState = {
  data: null,
  loading: false,
  error: null
}

const productReducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes().product.getSingleProduct:
      return {
        ...state,
        loading: true
      }

    case actionTypes().product.getSingleProductSuccess:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }

    case actionTypes().product.getSingleProductFailure:
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

export default productReducer;