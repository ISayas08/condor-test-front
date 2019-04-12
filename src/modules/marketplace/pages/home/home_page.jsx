import { connect } from "react-redux";
import { PresentationalHome } from "./presentational_home_page";

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => console.log("Get Products")
  };
};

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalHome);
