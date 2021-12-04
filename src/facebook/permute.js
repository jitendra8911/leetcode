/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    const getPermutations = (first) => {
        if(first === nums.length) {
            result.push([...nums]);
        }

        for(let i = first; i < nums.length; i++) {
            console.log(`i: ${i} first: ${first}`);
            [nums[first], nums[i]] = [nums[i], nums[first]];

            getPermutations(first + 1);

            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    }

    getPermutations(0);
    return result;
};


const nums = [1,2,3];
console.log(permute(nums));