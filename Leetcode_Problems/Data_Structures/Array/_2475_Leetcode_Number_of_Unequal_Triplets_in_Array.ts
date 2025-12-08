function unequalTriplets(nums: number[]): number {
    const length = nums.length
    return nums.reduce((acc, cur, idx) => {
        if(idx < length - 2){
            for(let i = idx + 1; i < length - 1; i++){
                for(let j = i + 1; j < length; j++){
                    if(cur !== nums[i] && cur !== nums[j] && nums[j] !== nums[i]){
                        acc += 1
                    }
                }
            }
        }

        return acc
    }, 0)
};