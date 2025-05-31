/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let a_idx = -1;
    let b_idx = s.length;
    let check_b = false;
    for (let i = 0; i < s.length; i++) {
        if (!check_b && s[i] == "b") {
            b_idx = i;
            check_b = true;
        }
        if (s[i] == "a") a_idx = i;
    }
    return a_idx < b_idx;
};