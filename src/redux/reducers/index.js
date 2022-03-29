import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./ProductReducer";

const rootReducer = combineReducers({
  ProductReducer,
  selectedProductReducer,
});

export default rootReducer;
