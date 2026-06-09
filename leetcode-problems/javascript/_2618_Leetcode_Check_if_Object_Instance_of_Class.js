/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (
    obj === null ||
    obj === undefined ||
    typeof classFunction !== "function"
  ) {
    return false;
  }

  if (Object.getPrototypeOf(obj) === classFunction.prototype) {
    return true;
  }

  return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction);
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
