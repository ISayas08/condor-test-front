import React from "react";

import { marketPlace_routes } from "../../../config/routes";
import { _routes } from "./../../../core/providers/routes/routes";

import "./filter_bar.scss";

export const PresentationalFilterBar = props => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__content">
        <div className="filter-bar__menu">
          {_routes.getMapedRoutesAsLinks(
            marketPlace_routes.filter(r => r.title),
            "filter-bar__menu-item",
            "filter-bar__menu-item--active"
          )}
        </div>
        {props.showSearchBar && (
          <div className="filter-bar__search-section">
            <input
              placeholder="Write the name of a product"
              onInput={event => props.setSearch(event.target.value)}
              type="text"
              className="filter-bar__search-input"
            />
            <select
              onChange={event => props.setCategory(event.target.value)}
              className="filter-bar__category"
            >
              {[""].concat(props.categories).map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};
