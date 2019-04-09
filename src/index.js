import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { store } from "./core/redux/store";

// import { getProducts_ActionCreator } from "./core/redux/actions/product_actionCreators";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// store.dispatch(getProducts_ActionCreator());
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
