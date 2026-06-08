var pivotArray = function (nums, pivot) {
  const less = [];
  const equal = [];
  const greater = [];

  for (const num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...less, ...equal, ...greater];
};
