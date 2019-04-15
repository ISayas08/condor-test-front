import { connect } from "react-redux";
import { PresentationalFilterBar } from "./presentational_filter_bar";

import {
  setSearchFilter_actionCreator,
  setCategoryFilter_actionCreator
} from "../../../core/redux/actions/filter_actionCreator";

const mapStateToProps = state => {
  return {
    categories: Object.keys(state.products)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearch: word => dispatch(setSearchFilter_actionCreator(word)),
    setCategory: category => dispatch(setCategoryFilter_actionCreator(category))
  };
};

export const FilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentationalFilterBar);
