import { REQUEST } from "./../../../shared/const/actions_consts";

export const requestInfo = (stateRequestInfo = {}, action) => {
  switch (action.type) {
    case REQUEST.REQUEST_SUCCESSFUL:
      return Object.assign({}, stateRequestInfo, {
        isFetching: false
      });
    case REQUEST.REQUEST_START:
      return Object.assign({}, stateRequestInfo, {
        isFetching: true
      });
    case REQUEST.REQUEST_ERROR:
      return Object.assign({}, stateRequestInfo, {
        requestError: action.error,
        isFetching: false,
        status: action.payload.status,
        errorMessage: action.payload.message
      });

    default:
      return stateRequestInfo;
  }
};
