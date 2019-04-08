import { USER } from "./../../../shared/const/actions_consts";

export const user = (
  user = {
    userId: "",
    userName: "New User",
    userEmail: "Unknown"
  },
  action
) => {
  switch (action.type) {
    case USER.SET_USER:
      return Object.assign({}, user, action.payload);
    default:
      return user;
  }
};
