/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // sort the array first
    arr.sort((a,b) =>  a - b);
    let n = arr.length;
    let binarySearch = function(start, end) {
        let temp = arr[start];
        while (start <= end) {
            let mid = parseInt((end - start)/2) + start;
            if (2 * temp === arr[mid]) return true;
            else if (2 * temp > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return false;
    };
    for (let i = 0; i < n; i++) {
        // for each i find if there is any double the quantity through binary search
        if (binarySearch(i, n-1)) return true;
    }



    return false;



};

console.log(checkIfExist([10,2,51,3]));