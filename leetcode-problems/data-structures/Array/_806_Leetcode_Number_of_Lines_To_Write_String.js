/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let len = s.length;
    let res = [0, 0];
    for (let i = 0; i < len; i++) {
        res[1] += widths[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
        if (i < len - 1 && res[1] + widths[s[i + 1].charCodeAt(0) - 'a'.charCodeAt(0)] > 100) {
            res[1] = 0;
            res[0]++;
        }
    }
    res[0]++;
    return res;
};