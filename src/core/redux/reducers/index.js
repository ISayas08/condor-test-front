import { combineReducers } from "redux";
import { requestInfo } from "./requestStatusReducer";
import { user } from "./userReducer";

export const rootReducer = combineReducers({
  requestInfo,
  user
});
