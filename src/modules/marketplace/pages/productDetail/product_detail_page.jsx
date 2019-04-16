import { connect } from "react-redux";
import { PresentationalProductDetail } from "./presentation_product_detail_page";

import { getProduct_ActionCreator } from "./../../../../core/redux/actions/product_actionCreators";
import { addProductToCart } from "../../../../core/redux/actions/cart_actionCreator";

const mapStateToProps = state => {
  return {
    product: state.productOnDetail,
    isFetching: state.requestInfo.isFetching,
    cartId: state.shoppingCart.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => dispatch(getProduct_ActionCreator(id)),
    addProductToCart: product => dispatch(addProductToCart(product))
  };
};

export const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalProductDetail);
