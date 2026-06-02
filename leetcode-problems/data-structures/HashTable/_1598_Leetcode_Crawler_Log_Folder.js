/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let stack = [];
    for (log of logs) {
        if (log === "./") continue;
        if (log === '../') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(log);
        }
    }
    return stack.length;
};