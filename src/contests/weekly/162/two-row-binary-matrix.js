/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    let a = [];
    for (let i = 0; i < 2; i++) {
        a[i] = [];
        for (let j = 0; j < colsum.length; j++) {
            a[i].push(0);
        }
    }
    let upperLeftOver = upper;
    let lowerLeftOver = lower;
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] === 2) {
            a[0][i] = 1;
            a[1][i] = 1;
            upperLeftOver--;
            lowerLeftOver--;
        }
    }
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] === 1) {
            if (upperLeftOver > 0) {
                 a[0][i] = 1;
                 upperLeftOver--;
            } 

            else if (lowerLeftOver > 0) {
                a[1][i] = 1;
                lowerLeftOver--;
           } else return [];
        }
    }
    if (lowerLeftOver !== 0 || upperLeftOver !== 0) return [];

    return a;
    
};



console.log(reconstructMatrix(5,5,[2,1,2,0,1,0,1,2,0,1]))