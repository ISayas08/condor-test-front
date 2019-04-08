import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { store } from "./core/redux/store";

import { create_add_user_action } from "./core/redux/actions/user_actionCreator";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
store.dispatch(create_add_user_action());
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
