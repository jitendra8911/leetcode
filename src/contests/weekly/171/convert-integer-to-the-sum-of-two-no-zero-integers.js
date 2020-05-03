/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i = 1; i <= n-1; i++) {
        if ((i % n !== 0) && ((n-i) % 10 !== 0)) {
            if (!checkIfNNumberHasZeros(i) && !checkIfNNumberHasZeros(n-i)) {
                return [i, n - i];
            }
        }
    }

};

const checkIfNNumberHasZeros = n => {
    while (n > 0) {
        let x = n % 10;
        if (x === 0) return true;
        n = Math.floor(n / 10);
    }

    return false;
};

console.log(getNoZeroIntegers(1010));