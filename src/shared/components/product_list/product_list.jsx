import { connect } from "react-redux";
import { PresentationalProductList } from "./presentational_product_list";

import { getProducts_ActionCreator } from "../../../core/redux/actions/product_actionCreators";
import { addProductToCart } from "../../../core/redux/actions/cart_actionCreator";

const mapStateToProps = state => {
  return {
    products: state.products ? state.products : {},
    isFetching: state.requestInfo.isFetching,
    cart: state.shoppingCart,
    filterOptions: state.filterOptions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts_ActionCreator()),
    addToCart: product => dispatch(addProductToCart(product))
  };
};

export const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalProductList);
