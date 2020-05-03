/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const sum = nums.reduce((acc,curr) => acc + curr);
    //console.log('initial sum ', sum);
    let minSeqLen = nums.length;
    let res = [];
    let maxSum = 0;
    const rec = function (curr, arr, currSum) {
        if (arr.length > minSeqLen) return;
        console.log('arr is ', arr);
        console.log('currSum is ', currSum);
        if (currSum > sum - currSum && minSeqLen >= arr.length) {
            if (minSeqLen === arr.length) {
                if (currSum > maxSum) {
                    res = arr;
                    maxSum = currSum;
                }
            } else {
                res = arr;
                maxSum = currSum;
            }
            minSeqLen = arr.length;
        }
        if (curr >= nums.length) {
            return;
        }
        for (let i = curr; i < nums.length; i++) {

            rec(i+1, [...arr, nums[i]], currSum + nums[i])
        }
    };



    rec(0, [], 0);

    return res.sort((a,b) => b - a);
};

console.log(minSubsequence([4,3,10,9,8]));