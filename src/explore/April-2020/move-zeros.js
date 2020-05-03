/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums && (nums.length === 0 || nums.length === 1)) return nums;
    let referenceIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0 && nums[referenceIndex] !== 0) {
            referenceIndex = i;
        } else if (nums[i] !== 0 && nums[referenceIndex] === 0) {
            const temp = nums[i];
            nums[referenceIndex] = temp;
            nums[i] = 0;
            referenceIndex++;
        }
    }

    return nums;
};

console.log(moveZeroes([1,0,1]));