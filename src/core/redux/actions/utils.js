export const createStandardAction = (
  type,
  payload = {},
  error = null,
  meta = null
) => {
  if (type) {
    let newAction = {
      type: type,
      payload: payload,
      error: error
    };

    return meta ? Object.assign({ meta: meta }, newAction) : newAction;
  }

  throw new Error("Invalid action type");
};
