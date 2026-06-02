function isMonotonic(nums: number[]): boolean {

    // ----- 1 ------

    // let type = 0

    // for (let i = 0; i < nums.length - 1; i++) {
    //     const x = nums[i + 1] - nums[i]

    //     if (x === 0) continue

    //     if (type === 0) {
    //         type = Math.sign(x)   // lấy dấu: -1 hoặc 1
    //     } else if (Math.sign(x) !== type) {
    //         return false
    //     }
    // }
    // return true

    // ----- 2 ------

    // let desc = true
    // let insc = true

    // for(let i = 0; i < nums.length - 1; i++){
    //     if(nums[i+1] - nums[i] < 0) insc = false
    //     if(nums[i+1] - nums[i] > 0) desc = false
    // }

    // return insc || desc

    // ----- 3 ------

    return (
        nums.every((v, i) => i === 0 || v <= nums[i - 1]) ||
        nums.every((v, i) => i === 0 || v >= nums[i - 1])
    )
}
