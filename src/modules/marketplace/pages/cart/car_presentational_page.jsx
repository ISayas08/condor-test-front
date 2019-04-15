import React from "react";
import { Product } from "../../../../shared/components/product/product";
import "./cart_page.scss";
import { FilterBar } from "../../../../shared/components/filterBar/filter_bar";
import { Loading } from "../../../../shared/components/loading/loading";

export class PresentationalCat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cartDetail">
        <FilterBar showSearchBar={false} />
        <h2 className="cartDetail__title">Shopping Cart</h2>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <div className="cartDetail__product-list">
            {this.props.cart.products.length ? (
              this.props.cart.products.map(p => (
                <Product
                  key={p.id}
                  {...Object.assign({}, p, {
                    onAdd: this.props.removeFromCart,
                    mode: "PRODUCT_CART"
                  })}
                />
              ))
            ) : (
              <div className="cartDetail__no-products">The cart is empty.</div>
            )}
          </div>
        )}
      </div>
    );
  }
}
