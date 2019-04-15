export const normalizeArray = (array = [], propertyName) => {
  if (array && array.length) {
    const auxObj = {};

    array.forEach(item => {
      const auxItem = Object.assign({}, item);
      delete auxItem[propertyName];
      auxObj[item[propertyName]] = auxItem;
    });

    return auxObj;
  }
  return {};
};

export const isEmpty = obj => {
  return obj ? !Object.keys(obj).length : true;
};

export const pick = (obj, ...keys) => {
  if (keys.length && !isEmpty(obj)) {
    const auxObj = {};
    keys.forEach(key => {
      if (obj[key]) auxObj[key] = obj[key];
    });
    return auxObj;
  }
  return {};
};
