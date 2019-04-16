import { PRODUCT } from "./../../../shared/const/actions_consts";
import { normalizeArray } from "./../../../shared/utils/objets";

export const products = (products = {}, action) => {
  switch (action.type) {
    case PRODUCT.SET_PRODUCTS:
      return Object.assign({}, products, normalizeArray(action.payload, "_id"));
    default:
      return products;
  }
};

export const productOnDetail = (productOnDetail = {}, action) => {
  switch (action.type) {
    case PRODUCT.SET_PRODUCTS_ON_DETAIL:
      return Object.assign({}, productOnDetail, action.payload.doc);
    default:
      return productOnDetail;
  }
};
