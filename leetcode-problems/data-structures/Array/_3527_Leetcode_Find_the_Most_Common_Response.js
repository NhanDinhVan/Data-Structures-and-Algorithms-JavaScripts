/**
 * @param {string[][]} responses
 * @return {string}
 */
var findCommonResponse = function (responses) {
  responses = responses.map((res) => {
    return [...new Set(res)];
  });

  const counter = {};
  let result = null;

  responses
    .flatMap((res) => res)
    .map((res) => {
      if (result === null) {
        result = res;
      }

      if (!counter[res]) {
        counter[res] = 0;
      }

      counter[res]++;

      if (counter[res] > counter[result]) {
        result = res;
      }

      if (counter[res] === counter[result] && res < result) {
        result = res;
      }
    });

  return result;
};
