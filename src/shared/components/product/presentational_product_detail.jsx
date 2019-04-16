import React from "react";
import { ReactComponent as PlusIcon } from "./../../../assets/icons/plus-button.svg";

import "./product.scss";

export const PresentationalProductOnDetail = props => {
  return (
    <div className="product product--detail">
      <div className="product__content">
        <img
          className="product__preview"
          src={props.imgURL}
          alt="Product preview"
        />
        <div className="product__detail-box">
          <span className="product__available">
            {props.available} Units available
          </span>
          <p className="product__description">{props.description}</p>

          <span className="product__price">
            {" COP $ "}
            {props.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </span>
          <div className="product__add-box">
            <button onClick={props.onAdd} className="product__add-button">
              <PlusIcon className="product__add-icon" />
              <span className="product__add-button-text">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
