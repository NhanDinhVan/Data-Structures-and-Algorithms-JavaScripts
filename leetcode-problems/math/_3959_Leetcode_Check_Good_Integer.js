/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
  let square = 0;
  let sum = 0;

  while (n > 0) {
    square += Math.pow(n % 10, 2);
    sum += n % 10;

    n = Math.floor(n / 10);
  }

  return square - sum >= 50;
};
