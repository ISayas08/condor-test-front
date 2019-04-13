import { connect } from "react-redux";
import { PresentationalHome } from "./presentational_home_page";

const mapStateToProps = state => {
  return {
    products: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartDetail: () => console.log("Get Cart")
  };
};

export const CartPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalHome);