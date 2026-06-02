/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    const countChar = function (str) {
        let map = new Map;
        for (let i = 0; i < str.length; i++) {
            map.set(str[i], (map.get(str[i]) || 0) + 1);
        }
        return map;
    }

    let result = null;
    let l = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
    let license = countChar(l);
    for (let w of words) {
        let wordCount = countChar(w.toLowerCase());
        let isVal = true;
        for ([key, value] of license.entries()) {
            if ((wordCount.get(key) || 0) < value) {
                isVal = false;
                break;
            }
        }
        if (isVal && (result === null || result.length > w.length)) {
            result = w;
        }
    }
    return result;
};