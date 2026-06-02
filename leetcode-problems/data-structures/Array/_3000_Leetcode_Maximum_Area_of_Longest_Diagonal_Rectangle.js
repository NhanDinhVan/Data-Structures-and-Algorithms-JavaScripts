function areaOfMaxDiagonal(dimensions: number[][]): number {
    return dimensions.reduce((ans, curVal) => {
        const [h, w] = curVal
        const dia = Math.sqrt(h * h + w * w)
        const area = h * w

        if(dia > ans[0] || (dia === ans[0] && ans[1] < area)){
            ans[0] = dia
            ans[1] = area
        }

        return ans
    }, [0, 0])[1]
};