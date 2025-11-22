function minimumOperations(nums: number[]): number {
    // Solution 1: Using forEach
    // let count = 0;

    // nums.forEach(num => {
    //     if(num % 3 !== 0) count++
    //     return
    // });

    // return count

    // Solution 2: Using reduce
    return nums.reduce((acc, num) => {
        if(num % 3 !== 0) acc++;
        return acc;
    }, 0)
}