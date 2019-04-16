import React from "react";
import { NavLink } from "react-router-dom";
import "./header_component.scss";
import logo from "./../../../assets/img/handy-logo.png";
import { ReactComponent as CartIcon } from "./../../../assets/icons/cart.svg";
import { marketPlace_routes } from "../../../config/routes";

export const PresentationalHeaderComponent = props => {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo-box">
          <NavLink
            className="header__logo-link"
            to={marketPlace_routes[0].route}
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__cart-box">
          <NavLink
            className="product__see-more"
            to={marketPlace_routes[1].route}
          >
            <span className="header__cart-count"> {props.count} </span>
            <CartIcon className="header__cart" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
