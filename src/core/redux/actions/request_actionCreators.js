import { createStandardAction } from "./utils";
import { REQUEST } from "./../../../shared/const/actions_consts";

export const create_request_start_action = type =>
  createStandardAction(REQUEST.REQUEST_START, { requestType: type });

export const create_request_successful_action = type =>
  createStandardAction(REQUEST.REQUEST_SUCCESSFUL, { requestType: type });

export const create_request_error_action = (status, errorMessage, type) =>
  createStandardAction(
    REQUEST.REQUEST_ERROR,
    { status: status, message: errorMessage, requestType: type },
    true
  );
