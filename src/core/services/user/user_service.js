import { _http } from "./../http/http";
import {
  CREATE_USER_ENDPOINT,
  UPDATE_USER_ENDPOINT
} from "../../../config/config";

let instance;

class UserService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  createUser() {
    return _http.post(CREATE_USER_ENDPOINT, {});
  }

  updateUser(newUser) {
    return _http.put(UPDATE_USER_ENDPOINT, newUser, [newUser.userId]);
  }

  getUser(userId) {
    return _http.get(UPDATE_USER_ENDPOINT, [userId]);
  }
}

export const _user = new UserService();
