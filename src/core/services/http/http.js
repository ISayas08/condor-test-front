import superagent from "superagent";
import { RESTify } from "../../../shared/utils/url";

let instance;

class Http {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.url = URL;

    return instance;
  }

  get(url, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string"
      ? superagent.get(RESTify(url, params, paramsId))
      : new Error("Invalid URL");
  }

  post(url, body, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string" && body
      ? superagent
          .post(RESTify(url, params, paramsId))
          .set("Content-Type", "application/json")
          .send(body)
      : new Error("Invalid function params");
  }

  put(url, body, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string" && body
      ? superagent
          .put(RESTify(url, params, paramsId))
          .set("Content-Type", "application/json")
          .send(body)
      : new Error("Invalid function params");
  }

  delete(url, params = [], paramsId = "{PARAM}") {
    return url && typeof url === "string"
      ? superagent.delete(RESTify(url, params, paramsId))
      : new Error("Invalid URL");
  }
}

export const _http = new Http();
