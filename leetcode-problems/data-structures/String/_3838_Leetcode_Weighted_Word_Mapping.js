/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
  let result = "";

  for (let word of words) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += weights[word[i].charCodeAt(0) - "a".charCodeAt(0)];
    }

    result += String.fromCharCode("z".charCodeAt(0) - (sum % 26));
  }

  return result;
};
