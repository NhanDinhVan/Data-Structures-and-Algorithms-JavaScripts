/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    if (password.length < 8) return false;

    let lower_check = false;
    let upper_check = false;
    let digit_check = false;
    let special_check = false;
    const specialChars = "!@#$%^&*()-+";

    for (let i = 0; i < password.length; i++) {
        let c = password[i];
        if (i < password.length - 1 && c == password[i + 1]) return false;
        if (c >= 'a' && c <= 'z') {
            lower_check = true;
        } else if (c >= 'A' && c <= 'Z') {
            upper_check = true;
        } else if (specialChars.includes(c)) {
            special_check = true;
        } else if (c >= '0' && c <= '9') {
            digit_check = true;
        }
    }

    return lower_check && upper_check && digit_check && special_check;
};