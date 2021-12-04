/**
 * @param arr
 * @param i
 * @returns {*}
 * Note: The array should be sorted before invoking this function
 */
const getLargestElementLesserThanGivenItem = (arr, i) => {
    if (!arr || !arr.length) {
        console.error('empty array');
        return;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = parseInt((start + end)/2);
        if (arr[mid] > i) {
            end = mid - 1;
        } else {
            if (arr[mid + 1] > i) {
                return arr[mid];
            }
            start = mid + 1;
        }
    }

    if (arr[start] > i) {
        return - 1;
    }

    return arr[start];
};

const getLowestElementGreaterThanGivenItem = (arr, i) => {
    if (!arr || !arr.length) {
        console.error('empty array');
        return;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = parseInt((start + end)/2);
        if (arr[mid] < i) {
            start = mid + 1;
        } else {
            if (arr[mid-1] < i) {
                return arr[mid];
            }
            end = mid - 1;
        }
    }

    if (arr[start] < i) {
        return -1;
    }

    return arr[start];
};

//console.log(getLargestElementLesserThanGivenItem([10,11,13,17,18], 12));

console.log(getLowestElementGreaterThanGivenItem([10,13,-1,17,18], 12));