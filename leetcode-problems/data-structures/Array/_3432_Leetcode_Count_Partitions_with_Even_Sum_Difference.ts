function countPartitions(nums: number[]): number {
    let firstPartition = 0
    let secondPartition = 0
    let result = 0

    nums.map(num => {
        secondPartition += num
    })

    for(let i = 0; i < nums.length - 1; i++){
        firstPartition += nums[i]
        secondPartition -= nums[i]

        result = Math.abs(firstPartition - secondPartition) % 2 === 0 ? result + 1 : result
    }

    return result 
};