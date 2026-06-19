/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const n = img1.length;

  function calOverlapPoint(dx, dy) {
    let point = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const ni = i + dx;
        const nj = j + dy;

        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
          point += img1[i][j] * img2[ni][nj];
        }
      }
    }

    return point;
  }

  let result = 0;

  for (let i = -(n - 1); i < n; i++) {
    for (let j = -(n - 1); j < n; j++) {
      result = Math.max(result, calOverlapPoint(i, j));
    }
  }

  return result;
};
