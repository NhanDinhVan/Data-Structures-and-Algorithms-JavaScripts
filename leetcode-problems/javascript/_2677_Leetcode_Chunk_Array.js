/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 *
 * Example 1:
 * Input: arr = [1,2,3,4,5], size = 1
 * Output: [[1],[2],[3],[4],[5]]
 * Explanation: The arr has been split into sub-arrays each with 1 element.
 */
var chunk = function (arr, size) {
  let results = [];

  for (let i = 0; i < arr.length; i += size) {
    results.push(arr.slice(i, i + size));
  }

  return results;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
