import { createStandardAction } from "./utils";
import { FILTER } from "./../../../shared/const/actions_consts";

export const setSearchFilter_actionCreator = word =>
  createStandardAction(FILTER.SET_SEARCH_FILTER, { toSearch: word });

export const setCategoryFilter_actionCreator = category =>
  createStandardAction(FILTER.SET_CATEGORY_FILTER, { category: category });
