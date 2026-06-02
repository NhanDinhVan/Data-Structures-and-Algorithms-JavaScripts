function kthCharacter(k: number): string {
    let ans : string = "a";
    while(ans.length < k){
        let len = ans.length;
        for(let i = 0; i < len; i++){
            if(ans[i] === 'z') {
                ans += 'a';
            }else{
                ans += String.fromCharCode(ans[i].charCodeAt(0) + 1);
            }
        }
    }
    return ans[k-1];
};