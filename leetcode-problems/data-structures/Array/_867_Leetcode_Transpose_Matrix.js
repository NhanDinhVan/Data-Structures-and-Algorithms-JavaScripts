function transpose(matrix: number[][]): number[][] {
    return matrix.reduce((acc, cur, idx) => {
        for(let i = 0; i < cur.length; i++){
            acc[i][idx] = cur[i]
        }
        return acc
    }, Array.from({length: matrix[0].length}, () => Array(matrix.length).fill(0)))
};