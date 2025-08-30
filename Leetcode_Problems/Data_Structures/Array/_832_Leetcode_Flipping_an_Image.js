function flipAndInvertImage(image: number[][]): number[][] {
    function revert(arr: number[]){
        let l = 0
        let r = arr.length - 1
        while(l <= r){
            let tmp = arr[l] 
            arr[l] = Math.abs(arr[r] - 1)
            arr[r] = Math.abs(tmp - 1)
            l++
            r--
        }
        return arr
    }
    return image.map(arr => revert(arr))
};