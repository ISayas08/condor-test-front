import { createStandardAction } from "./utils";
import { REQUEST } from "./../../../shared/const/actions_consts";

export const create_request_error_action = (status, errorMessage) =>
  createStandardAction(
    REQUEST.REQUEST_ERROR,
    { status: status, message: errorMessage },
    true
  );

export const create_request_start_action = () =>
  createStandardAction(REQUEST.REQUEST_START);

export const create_request_successful_action = () =>
  createStandardAction(REQUEST.REQUEST_SUCCESSFUL);

export const basic_http_action = requestCallback => {
  if (requestCallback) {
    return dispatch => {
      dispatch(create_request_start_action());

      return requestCallback(dispatch);
    };
  }
  throw new Error("Invalid callback");
};
