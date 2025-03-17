const canSum = (target, arr, memo={}) => {
    if(target in memo) return memo[target];
    if (target === 0) return []; 
    if (target < 0) return null;  
    for (let num of arr) {
        const remainder = target - num;
        const result = canSum(remainder,arr);
        if (result !== null) {
            memo[remainder] = [...result, num]
            return memo[remainder]
        }
    }
    memo[target] = null
    return null;
};
console.log(canSum(7, [5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(301, [2,25]))