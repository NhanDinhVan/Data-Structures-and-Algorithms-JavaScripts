/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let len = 0n;
  k = BigInt(k);

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "2" && s[i] <= "9") {
      len *= BigInt(s[i]);
    } else {
      len++;
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];

    k %= len;

    if (k === 0n && c >= "a" && c <= "z") {
      return c;
    }

    if (c >= "2" && c <= "9") {
      len /= BigInt(c);
    } else {
      len--;
    }
  }
};

// leetleetcodeleetleetcodeleetleetcode
//   l   e   e   t   2  c  o   d   e   3
// [ 1,  2,  3,  4,  8, 9, 10, 11, 12, 36 ]

// k = 10
