/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b) => a - b);
    let end = stones.length - 1;

    const binSearch = (end, val) => {
        let start = 0;
        let indexToInsert = -1;
        while (start < end) {
            const mid = parseInt((end + start) / 2);
            indexToInsert = mid;
            if (val > stones[mid]) {
                start = mid + 1;
            } else if (val < stones[mid]) {
                end = mid - 1;
            } else {
                break;
            }
        }

        //console.log(start);
        indexToInsert = stones[start] > val ? start : start + 1;
        //console.log(indexToInsert);
        for (let i = end; i >= indexToInsert; i--) {
            const temp = stones[i];
            stones[i] = stones[i-1];
            stones[i+1] = temp;
        }
        stones[indexToInsert] = val;
    };
    while (end > 1) {
        const diff = stones[end] - stones[end - 1];
        if (diff === 0) {
            end = end - 2;
        } else {
            binSearch(end - 2, stones[end] - stones[end - 1]);
            end = end - 1;
        }
    }


    if (end < 0) return 0;
    else if (end === 1) return (stones[1] - stones[0]);
    else if (end === 0) return stones[0];

    return end ? stones[0] : 0;
};

console.log(lastStoneWeight([9,3,2,10]))