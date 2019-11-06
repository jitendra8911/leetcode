var numberOfSubarrays = function(nums, k) {
    const output = computeNumberOfNiceArrays(nums,k);
    
    return output;
    
};

function computeNumberOfNiceArrays(arr, k) {
    let count = 0;
    let total = 0;
    let dequeue = [];
    dequeue[0] = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            dequeue.push(i);
            count++;
        } 
        if (count === k) {
            total += dequeue[1] - dequeue[0];
        }
        if (count > k) {
            dequeue.shift();
            total += dequeue[1] - dequeue[0];
            count--;
        }
    }
    
    return total;
}

console.log(numberOfSubarrays([1,1,1,1,1], 1));