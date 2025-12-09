function specialTriplets(nums: number[]): number {
    const mod = 1_000_000_007
    const length = nums.length

    const leftMap = new Map<number, number>()
    const rightMap = new Map<number, number>()

    let result = 0

    for(const n of nums){
        rightMap.set(n, (rightMap.get(n) || 0) + 1)
    }

    for(let i = 0; i < length; i++){
        rightMap.set(nums[i], rightMap.get(nums[i])! - 1)
        
        const target = nums[i] * 2

        const leftCount = leftMap.get(target) || 0
        const rightCount = rightMap.get(target) || 0

        result = (result + leftCount * rightCount) % mod

        leftMap.set(nums[i], (leftMap.get(nums[i]) || 0) + 1)
    }
    
    return result
}
