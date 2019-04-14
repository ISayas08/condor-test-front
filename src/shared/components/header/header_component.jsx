import React from "react";
import { NavLink } from "react-router-dom";
import "./header_component.scss";
import logo from "./../../../assets/img/handy-logo.png";
import { ReactComponent as CartIcon } from "./../../../assets/icons/cart.svg";
import { marketPlace_routes } from "../../../config/routes";

export const HeaderComponent = props => {
  const count = 0;
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo-box">
          <NavLink
            className="product__see-more"
            to={marketPlace_routes[0].route}
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__cart-box">
          <span className="header__cart-count"> {count} </span>
          <CartIcon className="header__cart" />
        </div>
      </div>
    </div>
  );
};
