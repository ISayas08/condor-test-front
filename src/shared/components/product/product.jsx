import React from "react";
import { PresentationalProductItem } from "./presentational_product_item";
import { PresentationalProductOnDetail } from "./presentational_product_detail";
import { PresentationalProductOnCart } from "./presentation_product_detail_on_cart";

export const Product = props => {
  switch (props.mode) {
    case "PRODUCT_DETAIL":
      return <PresentationalProductOnDetail {...props} />;
    case "PRODUCT_CART":
      return <PresentationalProductOnCart {...props} />;

    default:
      return <PresentationalProductItem {...props} />;
  }
};
