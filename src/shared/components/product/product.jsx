import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as PlusIcon } from "./../../../assets/icons/plus-button.svg";
import { marketPlace_routes } from "./../../../config/routes";
import "./product.scss";

export const Product = props => {
  return (
    <div className="product">
      <div className="product__content">
        <img
          className="product__preview"
          src={props.imgURL}
          alt="Product preview"
        />
        <div className="product__detail-box">
          <span className="product__name">{props.name}</span>
          <span className="product__available">{props.available} Units</span>
          <p className="product__description">{props.description}</p>
          <div className="product__see-more-box">
            <NavLink
              className="product__see-more"
              to={marketPlace_routes[1].route.replace(":id", props.id)}
            >
              See detail
            </NavLink>
          </div>
          <span className="product__price">
            {" COP $ "}
            {props.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </span>
          <button onClick={props.onAdd} className="product__add-button">
            <PlusIcon className="product__add-icon" />
            <span className="product__add-button-text">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
