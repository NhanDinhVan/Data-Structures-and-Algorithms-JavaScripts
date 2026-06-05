/**
 * @param {number[]} nums
 * @return {void}
 * 
    Example 1:

    Input: nums = [[1,2],[3,4]], operation = "Add"
    Output: 10
        Explanation:
        const obj1 = new ArrayWrapper([1,2]);
        const obj2 = new ArrayWrapper([3,4]);
        obj1 + obj2; // 10

    Example 2:

    Input: nums = [[23,98,42,70]], operation = "String"
    Output: "[23,98,42,70]"
        Explanation:
        const obj = new ArrayWrapper([23,98,42,70]);
        String(obj); // "[23,98,42,70]"
 * 
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.flatMap((num) => num).reduce((a, b) => a + b, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  const flatNums = this.nums.flatMap((num) => num);

  return `[${flatNums.join(",")}]`;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
