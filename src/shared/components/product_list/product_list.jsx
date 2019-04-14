import { connect } from "react-redux";
import { PresentationalProductList } from "./presentational_product_list";

import { getProducts_ActionCreator } from "../../../core/redux/actions/product_actionCreators";

const mapStateToProps = state => {
  return {
    products: state.products ? state.products : {},
    fetch: state.requestInfo,
    carId: state.shoppingCart.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts_ActionCreator())
  };
};

export const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalProductList);
