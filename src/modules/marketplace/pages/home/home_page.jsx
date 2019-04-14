import { connect } from "react-redux";
import { PresentationalHomePage } from "./presentational_home_page";

import * as USER_ACTIONS from "./../../../../core/redux/actions/user_actionCreators";
import * as CART_ACTIONS from "./../../../../core/redux/actions/cart_actionCreator";

const mapStateToProps = state => {
  return {
    user: state.user,
    cartId: state.shoppingCart.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: userId => dispatch(USER_ACTIONS.create_get_user_action(userId)),
    createUser: () => dispatch(USER_ACTIONS.create_new_user_action()),
    updateUser: newUser =>
      dispatch(USER_ACTIONS.create_update_user_action(newUser)),
    createCart: () => dispatch(CART_ACTIONS.createCart_ActionCreator())
  };
};

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalHomePage);
