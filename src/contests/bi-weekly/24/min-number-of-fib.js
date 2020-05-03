/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const startTime = new Date();
    const startMillSec = startTime.getMilliseconds();
    if (k === 1) return 1;
    let dp = {};
    dp[1] = 1;
    const fib = [1,1];
    let i = 1;
    let j = 1;
    let sum = i + j;
    while (sum <= k) {
        if (sum === k) {
            return 1;
        }
        dp[sum] = 1;
        fib.push(sum);
        i = j;
        j = sum;
        sum = i + j;
    }
    let result = 0;
    let remSum = k;
    const find = (i) => {
        let start = 0;
        let end = fib.length - 1;
        while (start < end) {
            let mid = parseInt((end + start)/2);
            if (fib[mid] === i) return fib[mid];
            if (fib[mid] < i) {
                if (fib[mid + 1] <= i) {
                    start = mid + 1;
                } else {
                    return fib[mid];
                }
            } else {
                end = mid - 1;
            }
        }

        return fib[start];
    };
    while (remSum > 0) {
        result++;
        const currSum = find(remSum);
        remSum = remSum - currSum;
    }

    const endTime = new Date();
    const endMillSec = endTime.getMilliseconds();
    console.log(endMillSec - startMillSec);
    return result;
};

let findMinFibonacciNumbers_greedy = (k) => {
    if (k < 2) return k;
    let a = 1, b = 1, c = 2;
    while (b <= k) {
        c = a + b;
        a = b;
        b = c;
    }
    return 1 + findMinFibonacciNumbers(k - a);
};

const start1Time = new Date();
let res = findMinFibonacciNumbers_greedy(4972705);
const endTIme = new Date();
console.log('time taken ', endTIme - start1Time);
console.log('result ', res);

//console.log(findMinFibonacciNumbers(4972705));