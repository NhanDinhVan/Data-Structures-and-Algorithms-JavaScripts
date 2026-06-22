/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let wordCounter = {
    b: 0,
    a: 0,
    l: 0,
    l: 0,
    o: 0,
    o: 0,
    n: 0,
  };

  for (let i = 0; i < text.length; i++) {
    const t = text.charAt(i);

    if (wordCounter[t] === undefined) {
      continue;
    }

    wordCounter[t]++;
  }

  wordCounter["o"] = Math.floor(wordCounter["o"] / 2);
  wordCounter["l"] = Math.floor(wordCounter["l"] / 2);

  return Math.min(...Object.values(wordCounter));
};
