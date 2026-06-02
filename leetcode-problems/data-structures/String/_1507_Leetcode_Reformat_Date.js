/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    let months = { "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12" }
    let parts = date.split(" ");
    let day = parts[0];
    let month = parts[1];
    let year = parts[2];

    day = day.substring(0, day.length - 2);
    day = (day < 10 ? 0 : "") + day;

    return `${year}-${months[month]}-${day}`;
};