import { combineReducers } from "redux";
import { requestInfo } from "./requestStatusReducer";
import { user } from "./userReducer";
import { products, productOnDetail } from "./productReducer";
import { shoppingCart } from "./cartReducer";

export const rootReducer = combineReducers({
  requestInfo,
  user,
  products,
  productOnDetail,
  shoppingCart
});
