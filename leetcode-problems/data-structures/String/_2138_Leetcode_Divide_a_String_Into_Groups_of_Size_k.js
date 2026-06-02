/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let ans = [];
    let idx = 0;
    while (idx < s.length - s.length % k) {
        ans.push(s.substring(idx, idx + k));
        idx += k;
    }
    if (idx < s.length) {
        let remaining = s.substring(idx);
        while (remaining.length < k) {
            remaining += fill;
        }
        ans.push(remaining);
    }

    return ans;
};