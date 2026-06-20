/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
  return matrix.reduce((acc, items) => {
    items.forEach((item, index) => {
      acc[index] += item;
    });

    return acc;
  }, new Array(matrix.length).fill(0));
};
