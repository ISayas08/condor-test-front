import React from "react";

import { RouteManager } from "./../../../../core/components/routeManager/RouteManager";
import { marketPlace_routes } from "./../../../../config/routes";
import { HeaderComponent } from "../../../../shell/components/header/header_component";
import { FooterComponent } from "../../../../shell/components/footer/footer_component";

export class PresentationalMarketPlaceMain extends React.Component {
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
        if (!this.props.cart) this.props.createCart();
        else this.props.getCart();
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
