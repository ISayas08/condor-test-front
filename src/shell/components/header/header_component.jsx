import { connect } from "react-redux";
import { PresentationalHeaderComponent } from "./presentational_header_component";

import { getCart_actionCreator } from "../../../core/redux/actions/cart_actionCreator";

const mapStateToProps = state => {
  return {
    count: state.shoppingCart.products
      ? Object.keys(state.shoppingCart.products).length
      : 0,
    carId: state.shoppingCart.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCart: id => dispatch(getCart_actionCreator(id))
  };
};

export const HeaderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalHeaderComponent);
