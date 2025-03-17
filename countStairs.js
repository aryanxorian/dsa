
//The function name is cliffhangers which is crazy, I Know. Don't fucking Judge
const cliffhangers = (target, clff) => {
    if (target < 0) return 0;  
    if (target === 0) return 1;

    let count = 0;
    for (let i of clff) {
        const remainder = target - i;
        count += cliffhangers(remainder, clff);  //Yo Yo HONEY Singh
    }
    return count;
};

console.log(cliffhangers(3, [1, 2]));
