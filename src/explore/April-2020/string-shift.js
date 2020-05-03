/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let prev = shift[0][0];
    let leftShiftCount = 0;
    let rightShiftCount = 0;
    let resultShift = shift[0][0];
    let resultCount = 0;
    const shiftOp = () => {
        let resultStr = s;
        let n = resultStr.length;
        for (let i = 0; i < resultCount; i++) {
            if (resultShift) {
                resultStr = resultStr[n-1] + resultStr.substr(0,n-1);
            } else {
                resultStr = resultStr.substr(1,n) + resultStr[0];
            }
        }

        return resultStr;
    };
    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0]) {
            rightShiftCount += shift[i][1];
        } else {
            leftShiftCount += shift[i][1];
        }
        const diff = leftShiftCount - rightShiftCount;
        resultShift = diff > 0 ? 0 : 1;
        resultCount = Math.abs(diff);
        leftShiftCount = diff > 0 ? diff : 0;
        rightShiftCount = diff < 0 ? -diff : 0;
        prev = shift[i][0];
    }

    return shiftOp();
};

stringShift('abc', [[0,1],[1,2]]);