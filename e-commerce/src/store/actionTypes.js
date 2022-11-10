const actionTypes = () => {
  return {
    products: {
      getAllProducts: 'GET_ALL_PRODUCTS',
      getAllProductsSuccess: 'GET_ALL_PRODUCTS_SUCCESS',
      getAllProductsFailure: 'GET_ALL_PRODUCTS_FAILURE'
    },
    product: {
      getSingleProduct: 'GET_SINGLE_PRODUCT',
      getSingleProductSuccess: 'GET_SINGLE_PRODUCT_SUCCESS',
      getSingleProductFailure: 'GET_SINGLE_PRODUCT_FAILURE'
    },
    cart: {
      addToCart: 'ADD_PRODUCT_TO_CART',
      removeFromCart: 'REMOVE_PRODUCT_FROM_CART',
      increment: 'INCREMENT',
      decrement: 'DECREMENT',
      getCart: 'GET_CART'
    },
    orders: {
      getAllUserOrders: 'GET_ALL_USER_ORDERS',
      getAllUserOrdersSuccess: 'GET_ALL_USER_ORDERS_SUCCESS',
      getAllUserOrdersFailure: 'GET_ALL_USER_ORDERS_FAILURE'
    },
    order: {
      getSingleUserOrder: 'GET_SINGLE_USER_ORDER',
      getSingleUserOrderSuccess: 'GET_SINGLE_USER_ORDER_SUCCESS',
      getSingleUserOrderFailure: 'GET_SINGLE_USER_ORDER_FAILURE',
      createOrder: 'CREATE_ORDER',
      createOrderSuccess: 'CREATE_ORDER_SUCCESS',
      createOrderFailure: 'CREATE_ORDER_FAILURE',
    },

  }
}

export default actionTypes