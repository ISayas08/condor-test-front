import { combineReducers } from "redux";
import { requestInfo } from "./requestStatusReducer";
import { user } from "./userReducer";
import { products, productOnDetail } from "./productReducer";

export const rootReducer = combineReducers({
  requestInfo,
  user,
  products,
  productOnDetail
});
