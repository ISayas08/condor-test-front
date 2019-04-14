import React, { Component } from "react";
import { Product } from "./../../../../shared/components/product/product";
import { isEmpty } from "../../../../shared/utils/objets";

import "./product_detail_page.scss";

export class PresentationalProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        available: "60",
        category: "Fruits",
        description: "Lorem ipsun dolor sit ament",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/condor-labs-test.appspot.com/o/apples.jpg?alt=media&token=8c8e2380-7f63-40b3-8b76-79005c801d22",
        name: "Apples",
        price: "120000"
      }
    };

    console.error("ACTIVATE PRODUCT DETAIL REQUEST");

    // this.props
    //   .getProduct(this.props.match.params.id)
    //   .then(result => {
    //     this.setState({
    //       product: this.props.product
    //     });
    //   })
    //   .catch(err => {});
  }

  onAdd = () => {
    this.props.addProductToCart(
      this.props.cartId,
      this.props.match.params.id,
      "1"
    );
  };

  onSubstract = () => {
    this.props.addProductToCart(
      this.props.cartId,
      this.props.match.params.id,
      "-1"
    );
  };

  render() {
    return (
      <div className="product-detail">
        {!isEmpty(this.state.product) && (
          <div className="product-detail__content">
            <h2 className="product-detail__title">{this.state.product.name}</h2>
            <Product
              {...Object.assign({}, this.state.product, {
                onAdd: this.onAdd,
                onSubs: this.onSubstract,
                isOnDetail: true
              })}
            />
          </div>
        )}
      </div>
    );
  }
}
