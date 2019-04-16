import { connect } from "react-redux";

import { PresentationalCat } from "./car_presentational_page";
import { removeProduct_actionCreator } from "../../../../core/redux/actions/cart_actionCreator";

const mapStateToProps = state => {
  return {
    cart: state.shoppingCart || [],
    isFetching: state.requestInfo.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: cartId => dispatch(removeProduct_actionCreator(cartId))
  };
};

export const CartPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalCat);
