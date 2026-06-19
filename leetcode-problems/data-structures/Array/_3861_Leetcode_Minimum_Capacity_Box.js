/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
  let minBox = -1;

  capacity.reduce((acc, value, index) => {
    if (value >= itemSize && value < acc) {
      minBox = index;
      return value;
    }

    return acc;
  }, 101);

  return minBox;
};
