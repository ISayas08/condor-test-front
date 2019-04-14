import React from "react";
import { ProductList } from "../../../../shared/components/product_list/product_list";

import "./home_page.scss";

export class PresentationalHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.getUserData();
  }

  getUserData = () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      this.createAndSaveUser();
    } else {
      this.props.getUser(userId).then(() => {
        if (this.props.cartId)
          localStorage.setItem("cartId", this.props.cartId);
        else {
          localStorage.removeItem("userId");
          localStorage.removeItem("cartId");
          this.createAndSaveUser();
        }
      });
    }
  };

  createAndSaveUser = () => {
    this.props
      .createUser()
      .then(result => {
        localStorage.setItem("userId", this.props.user.userId);
        return this.props.createCart();
      })
      .then(res => {
        localStorage.setItem("cartId", this.props.cartId);
        return this.props.updateUser(
          Object.assign({}, this.props.user, {
            shoppingCartId: this.props.cartId
          })
        );
      })
      .catch(err => {});
  };

  render() {
    return (
      <div className="home">
        <div className="home__content">
          <ProductList />
        </div>
      </div>
    );
  }
}
