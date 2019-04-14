import React from "react";

import { RouteManager } from "./../../../../core/components/routeManager/RouteManager";
import { marketPlace_routes } from "./../../../../config/routes";
import { HeaderComponent } from "../../../../shared/components/header/header_component";
import { FooterComponent } from "../../../../shared/components/footer/footer_component";

export class PresentationalMarketPlaceMain extends React.Component {
  constructor(props) {
    super(props);

    // this.getUserData();
    console.error("ACTIVAR USER AND CART");
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
      <div className="marketplace">
        <header className="marketplace__header">
          <HeaderComponent />
        </header>
        <section className="marketplace__page-box">
          <RouteManager routes={marketPlace_routes} />
        </section>
        <footer className="marketplace__footer">
          <FooterComponent />
        </footer>
      </div>
    );
  }
}
