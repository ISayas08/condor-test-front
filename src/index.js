import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./core/components/app/App";

import * as serviceWorker from "./serviceWorker";
import { store } from "./core/redux/store";

// import { addProductToCart_actionCreator } from "./core/redux/actions/cart_actionCreator";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);

// store.dispatch(addProductToCart_actionCreator("3wTNVuHaxL3shxA4teGd", "3W3qSS6rCck1PJDgPXBv", "200"));
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
