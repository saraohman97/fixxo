import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import ordersReducer from './ordersReducer';
import orderReducer from './orderReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productsReducer,
  productReducer,
  ordersReducer,
  orderReducer,
  cartReducer
})