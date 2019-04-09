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
