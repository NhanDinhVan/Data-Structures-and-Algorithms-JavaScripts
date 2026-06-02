/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.split(/\s+/);
    const reverse = function (str) {
        let arr = str.split('');
        let l = 0;
        let r = str.length - 1;

        while (l < r) {
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++; r--;
        }
        return arr.join('');
    }

    for (let i = 0; i < words.length; i++) {
        words[i] = reverse(words[i]);
    }

    return words.join(' ');
};