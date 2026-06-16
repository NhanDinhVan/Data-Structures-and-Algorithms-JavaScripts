/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const curChar = s.charAt(i);

    if (curChar === "*") {
      if (result.length > 0) {
        result = result.slice(0, result.length - 1);
      }
    } else if (curChar === "#") {
      result = result + result;
      // s += result
    } else if (curChar === "%") {
      result = result.split("").reverse().join("");
    } else {
      result += curChar;
    }

    console.log(result);
  }

  return result;
};
