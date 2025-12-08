function countTriples(n: number): number {
    let result = 0

    for(let i = 1; i <= n - 2; i++){
        for(let j = i + 1; j <= n - 1; j++){
            for(let q = j + 1; q <= n; q++){
                if(i*i + j*j === q*q){
                    result += 2
                }
            }
        }
    }

    return result
};