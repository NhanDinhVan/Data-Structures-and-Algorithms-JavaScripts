/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const myMap = {}

    for(let i = 0; i < nums.length; i++) {
        if(myMap[nums[i]] === undefined) {
            myMap[nums[i]] = 0
        }

        myMap[nums[i]]++

        if(myMap[nums[i]] > 1) {
            return nums[i]
        }
    }

    return 0
};