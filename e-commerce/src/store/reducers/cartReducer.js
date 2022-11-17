import actionTypes from "../actionTypes";

const initState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes().cart.addToCart: {
      const ref = state.cart.find(item => item.product.id === action.payload.product.id)
      const newProduct = { ...action.payload }
      
      console.log(ref)
      ref
        ? ref.quantity += action.payload.quantity
        : state.cart = [...state.cart, newProduct]


      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }

    }

    case actionTypes().cart.removeFromCart: {
      state.cart = state.cart.filter(product => product._id !== action.payload)

      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }

    }

    case actionTypes().cart.increment: {
      const ref = state.cart.find(item => item._id === action.payload)

      ref.quantity >= 99
        ? ref.quantity = 99
        : ref.quantity += 1

      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }
    }

    case actionTypes().cart.decrement: {
      const ref = state.cart.find(item => item._id === action.payload)

      ref.quantity <= 1
        ? ref.quantity = 1
        : ref.quantity -= 1
      
      return {
        ...state,
        totalQuantity: setTotalQuantity(state.cart),
        totalPrice: setTotalPrice(state.cart)
      }
    }

    case actionTypes().cart.getCart: {
      const cart = localStorage.getItem("cart")
      if (cart) {
        state.cart = cart
        return {
          ...state,
          totalQuantity: setTotalQuantity(state.cart),
          totalPrice: setTotalPrice(state.cart)
        }
        
      }
      break;
    }

    default:
      return state
  }
}

export default cartReducer;

const setTotalQuantity = cart => {
  let quantity = 0

  cart.forEach(product => {
    quantity += product.quantity
  })

  return quantity
}

const setTotalPrice = cart => {
  let price = 0
  console.log(cart)
  cart.forEach(product => {
    console.log(product)
    price += product.product.price * product.quantity
  })

  return price
}