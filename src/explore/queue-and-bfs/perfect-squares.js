/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // create a list of all possible squares upto and not including n
    let edges = [];
    let i = 1;
    while (true) {
        if (i * i > n) break;
        edges.push(i * i);
        i += 1;
    }
    let queue = [0];
    let visitedMap = {};
    let numOfSquares = -1;
    while (queue.length) {
        let m = queue.length;
        numOfSquares++;
        while (m > 0) {
            let currSum = queue.shift();
            if (currSum === n) return numOfSquares;
            for (let i = 0; i < edges.length; i++) {
                let nextSum = currSum + edges[i];
                if (nextSum > n) break;
                if (!visitedMap[nextSum]) queue.push(nextSum);
                visitedMap[nextSum] = true;
            }
            m--;
        }
    }
    
    return -1;
};

console.log(numSquares(12))