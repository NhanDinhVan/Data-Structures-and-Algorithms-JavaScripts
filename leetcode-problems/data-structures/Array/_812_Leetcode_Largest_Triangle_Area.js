function largestTriangleArea(points: number[][]): number {

    function calArea(p1: number[], p2: number[], p3: number[]){
        const [x1, y1] = p1
        const [x2, y2] = p2
        const [x3, y3] = p3

        return Math.abs(
            x1*(y2-y3) + 
            x2*(y3-y1) +
            x3*(y1-y2)
        ) / 2
    }

    let max = 0
    for(let i = 0; i < points.length - 2; i++) {
        for(let j = i + 1; j < points.length - 1; j++){
            for(let q = j + 1; q < points.length; q++){
                max = Math.max(max, calArea(points[i], points[j], points[q]))
            }
        }
    }

    return max
};