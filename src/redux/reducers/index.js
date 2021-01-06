import { combineReducers } from "redux";
import products from "./products";

const rootReducer = combineReducers({
  products: products,
});

export default rootReducer;
