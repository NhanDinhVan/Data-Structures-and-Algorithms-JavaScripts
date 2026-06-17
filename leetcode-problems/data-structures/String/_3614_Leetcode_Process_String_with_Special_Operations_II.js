/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */

var processStr = function (s, k) {
  let len = 0;

  for (const char of s) {
    if (char === "*") {
      len = len > 0 ? len - 1 : 0;
    } else if (char === "#") {
      len *= 2;
    } else if (char === "%") {
    } else {
      len++;
    }
  }

  if (k + 1 > len) {
    return ".";
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (char === "*") {
      len += 1;
    } else if (char === "#") {
      const half = Math.floor(len / 2);
      if (k >= half) {
        k -= half;
      }

      len = half;
    } else if (char === "%") {
      k = len - 1 - k;
    } else {
      if (k + 1 === len) {
        return char;
      }
      len--;
    }
  }

  return ".";
};
