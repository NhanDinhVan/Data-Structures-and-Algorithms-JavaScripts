function minOperations(nums: number[], k: number): number {
    return nums.reduce((acc, num) => acc + num, 0) % k
};