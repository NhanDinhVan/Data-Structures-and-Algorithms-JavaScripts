/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let countArr = new Array(26).fill(0);
    let maxOdd = -1;
    let minEven = Number.MAX_SAFE_INTEGER;

    for (let c of s) {
        countArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let n of countArr) {
        if (n > 0) {
            if (n % 2 === 1) {
                if (n > maxOdd) maxOdd = n;
            } else {
                if (n < minEven) minEven = n;
            }
        }
    }

    return maxOdd === -1 || minEven === Number.MAX_SAFE_INTEGER ? 0 : maxOdd - minEven;
};