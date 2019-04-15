import * as REQ_ACTIONS from "./request_actionCreators";
import { createStandardAction } from "./utils";
import { CART } from "./../../../shared/const/actions_consts";

export const addProductToCart = product => {
  return createStandardAction(CART.ADD_PRODUCT, product);
};
export const removeProduct_actionCreator = productId =>
  createStandardAction(CART.REMOVE_PRODUCT, { productId: productId });

export const updateCart_ActionCreator = cart =>
  createStandardAction(CART.UPDATE_CART, cart);

export const createCart_ActionCreator = () => {
  return dispatch => {
    const newCart = {
      products: []
    };

    try {
      localStorage.setItem("cart", JSON.stringify(newCart));
      return dispatch(updateCart_ActionCreator(newCart));
    } catch (err) {
      dispatch(
        REQ_ACTIONS.create_request_error_action(
          err.status,
          err.message,
          "Error creating cart"
        )
      );
    }
  };
};

export const getCart_actionCreator = () => {
  return dispatch => {
    try {
      const newCart = JSON.parse(localStorage.getItem("cart"));
      return dispatch(updateCart_ActionCreator(newCart));
    } catch (err) {
      REQ_ACTIONS.create_request_error_action(
        err.status,
        err.message,
        "Error creating cart"
      );
    }

    return;
  };
};
