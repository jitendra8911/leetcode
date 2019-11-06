var circularPermutation = function(n, start) {
    const arr = generateGrayCodeArray(n);
    const startIndex = arr.indexOf(start);
    // repeat rotation until startIndex startIndex becomes 0
    for (let i = startIndex; i > 0; i--) {
        let init = arr[0];
        for (let j = arr.length - 2; j > 0; j--) {
            let temp = arr[j];
            arr[j] = init;
            init = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    
    return arr;
};

function generateGrayCodeArray(n) { 
    const end = Math.pow(2, n) - 1;
    const arr = [];
    for (let i = 0; i <= end; i++) {
        arr[i] = i ^ (i >> 1);
    }
    
    return arr;
}

console.log(circularPermutation(2,3));