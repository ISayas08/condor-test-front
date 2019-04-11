import { _cart } from "./../../services/cart/cartService";
import * as REQ_ACTIONS from "./request_actionCreators";
import { createStandardAction } from "./utils";
import { CART } from "./../../../shared/const/actions_consts";

export const setCart_ActionCreator = cart =>
  createStandardAction(CART.SET_CART, cart);

export const updateCart_ActionCreator = cart =>
  createStandardAction(CART.UPDATE_CART, cart);


export const createCart_ActionCreator = () => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action());

    return _cart
      .createOne()
      .then(res => {
        dispatch(setCart_ActionCreator(res.body.response));
        dispatch(REQ_ACTIONS.create_request_successful_action());
      })
      .catch(err => {
        dispatch(
          REQ_ACTIONS.create_request_error_action(err.status, err.message)
        );
      });
  };
};

export const getCart_actionCreator = cartId => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action());

    return _cart
      .getOne(cartId)
      .then(res => {
        console.error(res.body.response)
        dispatch(updateCart_ActionCreator(res.body.response));
        dispatch(REQ_ACTIONS.create_request_successful_action());
      })
      .catch(err => {
        dispatch(
          REQ_ACTIONS.create_request_error_action(err.status, err.message)
        );
      });
  };
};

export const addProductToCart_actionCreator = (cartId, productId, quantity) => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action());

    return _cart.addProductToCart(cartId, productId, quantity).then(res => {
      dispatch(REQ_ACTIONS.create_request_successful_action());
    }).catch(err => {
      dispatch(REQ_ACTIONS.create_request_error_action(err.status, err.message))
    })
  }
};
