/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // let memo = new Map()
  let memo = {};

  return function (...args) {
    const key = args.join(",");

    if (key in memo) {
      return memo[key];
    }

    const result = fn(...args);

    memo[key] = result;

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
