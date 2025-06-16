/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    // let max = Number.MIN_SAFE_INTEGER;
    // for(let i = 0; i < nums.length - 1; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i] < nums[j]) {
    //             max = Math.max(max, nums[j] - nums[i]);
    //         }
    //     }
    // }
    // return (max === Number.MIN_SAFE_INTEGER) ? -1 : max;

    let max = -1;
    let left = 0;
    for(let right = 1; right < nums.length; right++){
        if(nums[right] < nums[left]){
            left = right;
        }else if(nums[right] > nums[left]){
            max = Math.max(max, nums[right] - nums[left]);
        }
    }
    return max;
};