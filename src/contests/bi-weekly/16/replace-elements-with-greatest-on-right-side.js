/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i++) {
        arrCopy[i] = {val: arr[i], index: i};
    }
    arrCopy.sort((a,b) => b.val - a.val);
    let indexTouched = [];
    let output = [];
    let top = arrCopy[0];
    let topIndex = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        indexTouched.push(i);
        while (indexTouched.includes(top.index)) {
            topIndex = topIndex + 1;
            top = arrCopy[topIndex];
        }
        output.push(top.val);
    }

    output.push(-1);
    return output;

    //console.log(arrCopy);

};

console.log(replaceElements([18,18,18,4,6,1]));