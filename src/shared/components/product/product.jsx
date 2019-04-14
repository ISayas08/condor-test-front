import React from "react";
import { PresentationalProductItem } from "./presentational_product_item";
import { PresentationalProductOnDetail } from "./presentational_product_detail";

export const Product = props => {
  return props.isOnDetail ? (
    <PresentationalProductOnDetail {...props} />
  ) : (
    <PresentationalProductItem {...props} />
  );
};
