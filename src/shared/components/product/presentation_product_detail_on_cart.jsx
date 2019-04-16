import React from "react";
import { ReactComponent as PlusIcon } from "./../../../assets/icons/plus-button.svg";

import "./product.scss";

export const PresentationalProductOnCart = props => {
  return (
    <div className="product product--cart">
      <div className="product__content">
        <img
          className="product__preview"
          src={props.imgURL}
          alt="Product preview"
        />
        <div className="product__detail-box">
          <div className="product__title">{props.name}</div>
          <div className="product__quantity">
            Quantity: {props.quantity} units
          </div>
          <div className="product__price">
            {" COP $ "}
            {props.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </div>
          <div className="product__add-box">
            <button
              onClick={() => props.onAdd(props.id)}
              className="product__add-button"
            >
              <span className="product__add-button-text">Remove from cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
