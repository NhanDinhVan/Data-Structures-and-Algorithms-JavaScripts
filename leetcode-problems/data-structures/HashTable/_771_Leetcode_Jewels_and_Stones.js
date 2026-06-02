/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let ans = 0;
    let map = new Map();

    for (let j of jewels) {
        map.set(j, (map.get(j) || 0) + 1);
    }

    for (let st of stones) {
        if (map.has(st)) ans++;
    }

    return ans;
};