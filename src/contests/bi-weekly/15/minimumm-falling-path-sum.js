/**
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    const n = arr[0].length;
    let minSum = Infinity;
    let currSum = 0;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = undefined;
        }
    }
    const dfs = function(sum, i, prevJ, a) {
        let leastCurrPathSum = Infinity;  
        if (i >= n) {
            console.log('a', a);
            console.log('sum', sum);
            minSum = Math.min(minSum, sum);
            console.log('minSum', minSum);
            dp[i-1][prevJ] = arr[i-1][prevJ];
            currSum = sum;
            return;
        }
        for (let j = 0; j < n; j++) {
            if (j === prevJ) continue;
            // check if there is minimum sum for row i and col j, if so return that
            if (dp[i][j]) {
                minSum = Math.min(minSum, sum + dp[i][j]);
                leastCurrPathSum = Math.min(leastCurrPathSum, dp[i][j]);
                console.log(`${sum} + dp[${i}][${j}] : ${dp[i][j]} = `, sum + dp[i][j]);
                console.log('minSum', minSum);
            } else {  // if no value in dp then dfs
                dfs(arr[i][j] + sum, i + 1, j, [...a, arr[i][j]]);
                leastCurrPathSum = Math.min(leastCurrPathSum, currSum - sum);
            }   
        }
        
        
        if (leastCurrPathSum !== Infinity && dp[i-1]) dp[i-1][prevJ] = leastCurrPathSum + arr[i-1][prevJ];
    }
    
    dfs(0, 0, -1, []);
    return minSum;
};

console.log(minFallingPathSum([
    [11,28,-35,-96,73],
    [15,-83,82,-51,-11],
    [-49,1,42,-95,53],
    [63,52,-19,15,-89],
    [-80,60,90,25,-50]]));