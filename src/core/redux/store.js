import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import { rootReducer } from "./reducers";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, //For asyc.
    loggerMiddleware //for log sstate change
  )
);

export { store };
