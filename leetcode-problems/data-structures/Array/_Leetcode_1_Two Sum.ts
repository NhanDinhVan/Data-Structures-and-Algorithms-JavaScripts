function twoSum(nums: number[], target: number): number[] {
    const myMap = new Map()

    for(let i = 0; i < nums.length; i++){
        if(myMap.has(target - nums[i])){
            return [myMap.get(target - nums[i]), i]
            break
        }
        myMap.set(nums[i], i)
    }

    return []
};