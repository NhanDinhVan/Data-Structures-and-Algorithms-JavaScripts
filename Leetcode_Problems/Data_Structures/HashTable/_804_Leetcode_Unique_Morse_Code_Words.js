/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let ans = new Set();

    for (let i = 0; i < words.length; i++) {
        let tmp = "";
        for (let c of words[i]) {
            tmp += arr[c.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        ans.add(tmp);
    }
    return ans.size;
};