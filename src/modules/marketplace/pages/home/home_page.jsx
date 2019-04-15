import React from "react";
import { ProductList } from "../../../../shared/components/product_list/product_list";
import { FilterBar } from "../../../../shared/components/filterBar/filter_bar";

import "./home_page.scss";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__content">
          <FilterBar showSearchBar={true} />
          <ProductList />
        </div>
      </div>
    );
  }
}
