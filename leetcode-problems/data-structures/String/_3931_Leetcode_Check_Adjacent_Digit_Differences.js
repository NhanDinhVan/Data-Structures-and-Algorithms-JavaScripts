/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(Number(s.charAt(i)) - Number(s.charAt(i + 1))) > 2) {
      return false;
    }
  }

  return true;
};
