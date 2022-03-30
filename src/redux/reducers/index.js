import { combineReducers } from "redux";
import {
  ProductReducer,
  selectedProductReducer,
  addToCartReducer,
} from "./ProductReducer";

const rootReducer = combineReducers({
  ProductReducer,
  selectedProductReducer,
  addToCartReducer,
});

export default rootReducer;
