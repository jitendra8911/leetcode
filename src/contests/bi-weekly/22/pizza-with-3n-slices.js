/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
    const dp = {};
    let max = 0;
    const pickSlice = function(left, sum) {
        //if (dp[])
        //console.log('left', left);
        if (!left.length) {
            max = Math.max(max, sum);
            return 0;
        }
        for (let i = 0; i < left.length; i++) {
            const newPizza = [...left];
            const aliceSlice = (i - 1) < 0 ? left.length - 1 : i-1;
            const bobSlice = (i + 1) >= left.length ?  0 : i + 1;
            newPizza[i] = undefined;
            newPizza[aliceSlice] = undefined;
            newPizza[bobSlice] = undefined;
            pickSlice(newPizza.filter(i => i !== undefined), sum + left[i])
        }

    };
    pickSlice(slices, 0);
    console.log('max is ', max);

};

maxSizeSlices([6,3,1,2,6,2,4,3,10,4,1,4,6,5,5,3,4,7,6,5,8,7,3,8,8,1,7,1,7,8])