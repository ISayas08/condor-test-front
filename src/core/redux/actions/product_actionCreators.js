import * as REQ_ACTIONS from "./request_actionCreators";
import { createStandardAction } from "./utils";
import { PRODUCT } from "../../../shared/const/actions_consts";
import { _product } from "./../../services/product/product";

export const setProductList_ActionCreator = productList =>
  createStandardAction(PRODUCT.SET_PRODUCTS, productList);

export const setProductOnDetail_ActionCreator = productToBeDetailed =>
  createStandardAction(PRODUCT.SET_PRODUCTS_ON_DETAIL, productToBeDetailed);

export const getProducts_ActionCreator = () => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action());

    return _product
      .getAll()
      .then(res => {
        dispatch(setProductList_ActionCreator(res.body.response));
        dispatch(REQ_ACTIONS.create_request_successful_action());
      })
      .catch(err => {
        dispatch(
          REQ_ACTIONS.create_request_error_action(err.status, err.message)
        );
      });
  };
};

export const getProduct_ActionCreator = productId => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action());

    return _product
      .getOne(productId)
      .then(res => {
        dispatch(setProductOnDetail_ActionCreator(res.body.response));
        dispatch(REQ_ACTIONS.create_request_successful_action());
      })
      .catch(err => {
        dispatch(
          REQ_ACTIONS.create_request_error_action(err.status, err.message)
        );
      });
  };
};
