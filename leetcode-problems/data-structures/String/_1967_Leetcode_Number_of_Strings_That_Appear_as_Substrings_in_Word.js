/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    return patterns.reduce((acc, item) => {
        if(word.includes(item)) {
            acc++
        }

        return acc
    }, 0)
};