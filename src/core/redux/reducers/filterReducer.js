import { FILTER } from "./../../../shared/const/actions_consts";

export const filterOptions = (
  state = { toSearch: "", category: "" },
  action
) => {
  switch (action.type) {
    case FILTER.SET_SEARCH_FILTER:
      return { ...state, ...action.payload };

    case FILTER.SET_CATEGORY_FILTER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
