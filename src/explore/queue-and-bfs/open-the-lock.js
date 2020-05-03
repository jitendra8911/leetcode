/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let queue = ['0000'];
    let visitedMap = {'0000': true};
    let numberOfTurns = -1;
    while (queue.length) {
        let currQueueLength = queue.length;
        numberOfTurns++;
        while (currQueueLength > 0) {
        let currLockCode = queue.shift();
        if (currLockCode === target) return numberOfTurns;
        for (let i = 0; i < 4; i++) {
            let charAtDigit = currLockCode[i];
            if (charAtDigit !== '9') {
                let newDigit1 = parseInt(charAtDigit) + 1;
                let newLock1 = currLockCode.substr(0,i) + newDigit1 + currLockCode.substr(i+1, 4);
                if (!visitedMap[newLock1] && !deadends.includes(newLock1)) {
                    visitedMap[newLock1] = true;
                    queue.push(newLock1);
                }
            }
            
            if (charAtDigit === '0') {
                let newDigit9 = parseInt(charAtDigit) + 9;
            let newLock9 = currLockCode.substr(0,i) + newDigit9 + currLockCode.substr(i+1, 4);
            if (!visitedMap[newLock9] && !deadends.includes(newLock9)) {
                visitedMap[newLock9] = true;
                queue.push(newLock9);
            }
            }

            if (charAtDigit !== '0') {
                let newDigitMinu1 = parseInt(charAtDigit) - 1;
            let newLockMinu1 = currLockCode.substr(0,i) + newDigitMinu1 + currLockCode.substr(i+1, 4);
            if (!visitedMap[newLockMinu1] && !deadends.includes(newLockMinu1)) {
                visitedMap[newLockMinu1] = true;
                queue.push(newLockMinu1);
            }
            }
           
        }
        currQueueLength--;
        }
    }
    
    return -1;
    
};

console.log(openLock(["0201","0101","0102","1212","2002"], '0202'));