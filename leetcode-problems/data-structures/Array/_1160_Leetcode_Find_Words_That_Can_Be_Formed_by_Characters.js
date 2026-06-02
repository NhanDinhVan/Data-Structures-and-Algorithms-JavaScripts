function countCharacters(words: string[], chars: string): number {
    const charCountArr = Array(26).fill(0);
    let ans = 0

    chars.split("").map((c) => {
        let tmp = c.charCodeAt(0) - 'a'.charCodeAt(0)
        charCountArr[tmp]++;
    })

    words.map((word) => {
        let arr = Array(26).fill(0)

        word.split("").map((w) => {
            arr[w.charCodeAt(0) - 'a'.charCodeAt(0)]++
            return 
        })

        let isFormed = true

        for(let i = 0; i < arr.length; i++){
            if(arr[i] > charCountArr[i]) {
                isFormed = false
            }
        }
        ans += isFormed ? word.length : 0
    })

    return ans
};