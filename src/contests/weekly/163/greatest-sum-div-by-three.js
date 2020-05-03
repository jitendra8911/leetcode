/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThreeMySolution = function(nums) {
    let sum = 0;
    let maxSum = 0;
    
    var DFS = function(nums, sum, i) {
        //console.log(`path ${path} sum ${sum}`);
        if (sum % 3 === 0) maxSum = maxSum > sum ? maxSum : sum;
        if (i > nums.length - 1) return;
        for (let j = i; j < nums.length; j++) {
           DFS(nums, sum + nums[j], j + 1);
            
        }
        
    }
    
    DFS(nums, 0, 0, "");
    
    return maxSum;
    
};

var maxSumDivThree = function(nums) {
    let dp = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
        for (let i = 0; i < nums.length; i++) {
            //console.log(nums[i]);
            let dp2 = [];
            for (let j = 0; j < 3; ++j) {
                dp2[(nums[i] + j) % 3] = Math.max(dp[(nums[i] + j) % 3], nums[i] + j)
            }
            dp = dp2;
        }
            
        return dp[0]
}

console.log(maxSumDivThree([3,6,5,1,8]))