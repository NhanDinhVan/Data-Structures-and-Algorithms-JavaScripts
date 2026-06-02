function isOneBitCharacter(bits: number[]): boolean {
    let i = 0
    while (i < bits.length) {
        if(bits[i] === 1) {
            i += 2
        } else {
            if(i === bits.length - 1) return true
            i += 1
        }
    }
    return false
};