import React, { Component } from "react";
import { Product } from "./../../../../shared/components/product/product";
import { isEmpty, pick } from "../../../../shared/utils/objets";

import "./product_detail_page.scss";
import { FilterBar } from "../../../../shared/components/filterBar/filter_bar";
import { Loading } from "../../../../shared/components/loading/loading";

export class PresentationalProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };

    this.props
      .getProduct(this.props.match.params.id)
      .then(() => {
        this.setState({
          product: this.props.product
        });
      })
      .catch(err => {});
  }

  onAdd = () => {
    this.props.addProductToCart({
      ...pick(this.state.product, "imgURL", "name", "price"),
      id: this.props.match.params.id,
      quantity: "1"
    });
  };

  render() {
    return (
      <div className="product-detail">
        {this.props.isFetching ? (
          <Loading />
        ) : (
          !isEmpty(this.state.product) && (
            <div className="product-detail__content">
              <FilterBar showSearchBar={false} />
              <h2 className="product-detail__title">
                {this.state.product.name}
              </h2>
              <Product
                {...Object.assign({}, this.state.product, {
                  onAdd: this.onAdd,
                  onSubs: this.onSubstract,
                  mode: "PRODUCT_DETAIL"
                })}
              />
            </div>
          )
        )}
      </div>
    );
  }
}
