var transformArray = function(arr) {

    
    while(true) {
        const newArr = new Array(...arr);
        let numOfElementsChanged = 0;
        for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            --newArr[i];
            ++numOfElementsChanged;
        }
        else if (arr[i] < arr[i-1] && arr[i] < arr[i+1]) {
            ++newArr[i];
            ++numOfElementsChanged
        }
    }
        arr = newArr;
        if (numOfElementsChanged === 0) {
            return arr;
        }
    }
    
    
};

const arr = [1,6,3,4,3,5];
console.log(transformArray(arr));