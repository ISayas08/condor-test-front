import * as REQ_ACTIONS from "./request_actionCreators";
import { _user } from "../../services/user/user_service";
import { USER } from "../../../shared/const/actions_consts";
import { createStandardAction } from "./utils";

export const create_set_user_action = user =>
  createStandardAction(USER.SET_USER, user);

export const create_new_user_action = () => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action());

    return _user
      .createUser()
      .then(res => {
        dispatch(create_set_user_action(res.body.response));
        dispatch(REQ_ACTIONS.create_request_successful_action());
      })
      .catch(err => {
        dispatch(
          REQ_ACTIONS.create_request_error_action(err.status, err.message)
        );
      });
  };
};

export const create_update_user_action = newUser => {
  if (newUser)
    return dispatch => {
      dispatch(REQ_ACTIONS.create_request_start_action());

      return _user
        .updateUser(newUser)
        .then(res => {
          dispatch(create_set_user_action(res.body.response));
          dispatch(REQ_ACTIONS.create_request_successful_action());
        })
        .catch(err => {
          dispatch(
            REQ_ACTIONS.create_request_error_action(err.status, err.message)
          );
        });
    };
  throw new Error("Bad function call");
};
