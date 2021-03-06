const REQUEST_START = "REQUEST_START";
const REQUEST_ERROR = "REQUEST_ERROR";
const REQUEST_SUCCESSFUL = "REQUEST_SUCCESSFUL";

const SET_USER = "SET_USER";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_PRODUCTS_ON_DETAIL = "SET_PRODUCTS_ON_DETAIL";

const SET_CART = "SET_CART";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_CART = "UPDATE_CART";

const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

export const FILTER = {
  SET_CATEGORY_FILTER,
  SET_SEARCH_FILTER
};

export const REQUEST = {
  REQUEST_START,
  REQUEST_ERROR,
  REQUEST_SUCCESSFUL
};

export const USER = {
  SET_USER
};

export const PRODUCT = {
  SET_PRODUCTS,
  SET_PRODUCTS_ON_DETAIL
};

export const CART = {
  SET_CART,
  UPDATE_CART,
  REMOVE_PRODUCT,
  ADD_PRODUCT
};
