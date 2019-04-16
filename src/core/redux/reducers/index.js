import { combineReducers } from "redux";
import { requestInfo } from "./requestStatusReducer";
import { user } from "./userReducer";
import { products, productOnDetail } from "./productReducer";
import { shoppingCart } from "./cartReducer";
import { filterOptions } from "./filterReducer";

export const rootReducer = combineReducers({
  user,
  requestInfo,
  products,
  productOnDetail,
  shoppingCart,
  filterOptions
});
