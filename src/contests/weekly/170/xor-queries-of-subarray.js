/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let output = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] ^ arr[i-1];
    }

    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 0) {
            output.push(arr[queries[i][1]]);
        } else {
            output.push(arr[queries[i][1]] ^ arr[queries[i][0] - 1]);
        }
    }

    return output;

};

console.log(xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]]));