/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let i = 1;
    let result = [];

    while (i <= n) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
            i++;
            continue;
        }
        if (i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`)
        }
        i++;
    }
    return result;
};