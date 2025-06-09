/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('');
    let i = 0;
    for (i = 0; i < s.length - k; i += 2 * k) {
        let l = i;
        let r = i + k - 1;
        while (l < r) {
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++;
            r--;
        }
    }
    if (s.length - i <= k) {
        let l = i;
        let r = s.length - 1;
        while (l < r) {
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++;
            r--;
        }
    }
    return arr.join('');
};