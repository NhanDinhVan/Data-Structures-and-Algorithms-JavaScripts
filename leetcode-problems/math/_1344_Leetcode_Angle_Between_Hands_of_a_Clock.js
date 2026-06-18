/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  let hourAngle = hour * 30 + minutes / 2;
  let minAngle = minutes * 6;

  const result = Math.abs(hourAngle - minAngle);

  return result <= 180 ? result : 360 - result;
};
