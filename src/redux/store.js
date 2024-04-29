import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducer/restaurantReducer";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  product: productReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
