import { connect } from "react-redux";
import { PresentationalProductDetail } from "./presentation_product_detail_page";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: id => console.log("Get Products", id)
  };
};

export const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalProductDetail);
