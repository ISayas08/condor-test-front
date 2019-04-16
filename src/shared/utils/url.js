export const RESTify = (url, params, paramsId = "{PARAM}") => {
  const allParamsRgx = createParamRegex(paramsId);
  return params.length
    ? (() => {
        // Replace all param slots.
        params.forEach(param => (url = url.replace(paramsId, param)));
        // Delete unsetted param slots.
        url = url.replace(allParamsRgx, "");
        return url;
      })()
    : // Delete param slots if params not sent.
      url.replace(allParamsRgx, "");
};

const createParamRegex = paramId => {
  return new RegExp(paramId + "/?", "g");
};
