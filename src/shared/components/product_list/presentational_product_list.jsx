import React from "react";
import { Product } from "../product/product";

import "./product_list.scss";
import { pick } from "../../utils/objets";
import { Loading } from "../loading/loading";

export class PresentationalProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };

    this.props
      .getProducts()
      .then(() => {
        this.setState({
          products: Object.keys(this.props.products).map(key =>
            Object.assign({}, this.props.products[key], { id: key })
          )
        });
      })
      .catch(err => {});
  }

  addProduct = product => {
    this.props.addToCart({
      ...pick(product, "imgURL", "name", "price"),
      id: product.id,
      quantity: "1"
    });
  };

  render() {
    return (
      <div className="product-list">
        {this.props.isFetching ? (
          <Loading />
        ) : (
          this.state.products
            .filter(p => p.category.includes(this.props.filterOptions.category))
            .filter(p =>
              p.name
                .toLowerCase()
                .includes(this.props.filterOptions.toSearch.toLowerCase())
            )
            .map(p => (
              <Product
                key={p.id}
                {...Object.assign(p, {
                  onAdd: this.addProduct
                })}
              />
            ))
        )}
      </div>
    );
  }
}
