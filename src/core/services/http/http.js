import superagent from "superagent";
import { RESTify } from "../../../shared/utils/url";

// We can change this for any compatible http request library
const http = superagent;

let instance;

class Http {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  get(url, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string"
      ? http.get(RESTify(url, params, paramsId))
      : Promise.reject({ status: 400, message: "Invalid function params" });
  }

  post(url, body, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string" && body
      ? http
          .post(RESTify(url, params, paramsId))
          .set("Content-Type", "application/json")
          .send(body)
      : Promise.reject({ status: 400, message: "Invalid function params" });
  }

  put(url, body, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string" && body
      ? http
          .put(RESTify(url, params, paramsId))
          .set("Content-Type", "application/json")
          .send(body)
      : Promise.reject({ status: 400, message: "Invalid function params" });
  }

  delete(url, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string"
      ? http.delete(RESTify(url, params, paramsId))
      : Promise.reject({ status: 400, message: "Invalid function params" });
  }
}

export const _http = new Http();
