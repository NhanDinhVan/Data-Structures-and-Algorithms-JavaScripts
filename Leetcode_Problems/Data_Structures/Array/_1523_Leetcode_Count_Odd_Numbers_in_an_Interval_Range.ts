function countOdds(low: number, high: number): number {
    let count = 0

    for(let i = low; i <= high; i++){
        count = (i%2 !== 0) ? count + 1 : count
    }

    return count
};