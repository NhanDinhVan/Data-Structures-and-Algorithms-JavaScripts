/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function (nums, digit) {
  let result = 0;

  function countAppearances(num) {
    let ans = 0;

    while (num > 0) {
      const finalNum = num % 10;

      if (digit === 0 && finalNum === 0) {
        ans++;
      } else if (finalNum % digit === 0 && Math.floor(finalNum / digit) === 1) {
        ans++;
      }

      num = Math.floor(num / 10);
    }

    return ans;
  }

  nums.map((num) => {
    result += countAppearances(num);
  });

  return result;
};
