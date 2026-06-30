/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const freQuence = [0, 0, 0];
  const len = s.length;
  let left = 0;
  let right = 0;

  let ans = 0;

  while (right < len) {
    const curChar = s.charAt(right);
    freQuence[s.charCodeAt(right) - "a".charCodeAt(0)]++;

    while (freQuence[0] > 0 && freQuence[1] > 0 && freQuence[2] > 0) {
      ans += len - right;

      freQuence[s.charCodeAt(left) - "a".charCodeAt(0)]--;
      left++;
    }

    right++;
  }

  return ans;
};
