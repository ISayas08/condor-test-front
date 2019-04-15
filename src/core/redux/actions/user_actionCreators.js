import * as REQ_ACTIONS from "./request_actionCreators";
import { _user } from "../../services/user/user_service";
import { USER } from "../../../shared/const/actions_consts";
import { setCart_ActionCreator } from "./cart_actionCreator";
import { createStandardAction } from "./utils";

export const create_set_user_action = userId =>
  createStandardAction(USER.SET_USER, { userId: userId });

export const create_new_user_action = () => {
  return dispatch => {
    dispatch(REQ_ACTIONS.create_request_start_action("Create new user"));

    return _user
      .createUser()
      .then(res => {
        dispatch(create_set_user_action(res.body.response.userId));
        dispatch(
          REQ_ACTIONS.create_request_successful_action("Create new user")
        );
      })
      .catch(err => {
        dispatch(
          REQ_ACTIONS.create_request_error_action(
            err.status,
            err.message,
            "Create new user"
          )
        );
      });
  };
};

export const create_update_user_action = newUser => {
  if (newUser)
    return dispatch => {
      dispatch(REQ_ACTIONS.create_request_start_action("Update user"));

      return _user
        .updateUser(newUser)
        .then(res => {
          dispatch(create_set_user_action(res.body.response.userId));
          dispatch(REQ_ACTIONS.create_request_successful_action("Update user"));
        })
        .catch(err => {
          dispatch(
            REQ_ACTIONS.create_request_error_action(
              err.status,
              err.message,
              "Update user"
            )
          );
        });
    };
  throw new Error("Bad function call");
};

export const create_get_user_action = userId => {
  if (userId)
    return dispatch => {
      dispatch(REQ_ACTIONS.create_request_start_action("Get user"));

      return _user
        .getUser(userId)
        .then(res => {
          dispatch(create_set_user_action(res.body.response._id));
          dispatch(REQ_ACTIONS.create_request_successful_action("Get user"));
        })
        .catch(err => {
          dispatch(
            REQ_ACTIONS.create_request_error_action(
              err.status,
              err.message,
              "Get user"
            )
          );
        });
    };
  throw new Error("Bad function call");
};
