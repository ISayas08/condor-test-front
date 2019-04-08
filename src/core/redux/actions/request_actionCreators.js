import { createStandardAction } from "./utils";
import { REQUEST } from "./../../../shared/const/actions_consts";

export const create_request_start_action = () =>
  createStandardAction(REQUEST.REQUEST_START);

export const create_request_successful_action = () =>
  createStandardAction(REQUEST.REQUEST_SUCCESSFUL);

export const create_request_error_action = (status, errorMessage) =>
  createStandardAction(
    REQUEST.REQUEST_ERROR,
    { status: status, message: errorMessage },
    true
  );
