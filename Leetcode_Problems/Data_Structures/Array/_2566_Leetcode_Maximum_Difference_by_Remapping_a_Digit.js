/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let str = num.toString();
    let max = 0;
    let min = 0;

    for (let n of str) {
        if (n != '9') {
            max = parseInt(str.replaceAll(n, '9'), 10);
            break;
        }
    }

    for (let n of str) {
        if (n != '0') {
            min = parseInt(str.replaceAll(n, '0'), 10);
            break;
        }
    }
    max = Math.max(max, num);
    // console.log(max, min);
    return max - min;
};