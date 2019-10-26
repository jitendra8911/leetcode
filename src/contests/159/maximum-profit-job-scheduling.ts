// function doTimeRangesOverlap(x1: number, y1: number, x2: number, y2: number) {
//     if (x1 === x2) return true;
//     if (x1 < x2 && y1 > x2) return true;
//     if (x1 > x2 && y2 > x1) return true;

//     return false;
// }

function getMaximumProfit(startTime: number[], endTime: number[], profit: number[]) {
    const items = [];
    for (let i = 0; i < startTime.length; i++) {
        items.push([startTime[i], endTime[i], profit[i]]);
    }
    items.sort(jobScheduleComparator);
    const end: number = Math.max(...endTime);
    const mem = [];
    const maxProfit: number = getMaximumProfitForStartTimeIndex(items, 0, end, 0, mem);

    return maxProfit;
}

function getMaximumProfitForStartTimeIndex(items, prevEndTime: number, end: number, i: number, mem) {
    if (i === items.length) return 0;

    const currStart = items[i][0];
    const currEnd = items[i][1];
    const currProfit = items[i][2];
    if (currStart < prevEndTime) 
    {
        const leastIndexGreaterThanOrEqualToPrevEndTime = binarySearchItems(items, i, prevEndTime);
        return leastIndexGreaterThanOrEqualToPrevEndTime ? getMaximumProfitForStartTimeIndex(items, prevEndTime, end, leastIndexGreaterThanOrEqualToPrevEndTime, mem)
        : 0;
    }
    if (mem[i]) return mem[i];

    const profitIncludingCurrentItem = getMaximumProfitForStartTimeIndex(items, currEnd, end, i+1, mem)
    + currProfit;
    const profitExcludingCurrentItem = getMaximumProfitForStartTimeIndex(items, prevEndTime, end, i+1, mem);

    const maxProfit: number = Math.max(
        profitIncludingCurrentItem,
        profitExcludingCurrentItem
    );

    mem[i] = maxProfit;

    console.log(`maxProfit for ${currStart} is `, maxProfit);

    return maxProfit;
}

function binarySearchItems(items, startIndex, prevEndTime) {
    let j = items.length - 1;
    let leastIndexGreaterThanOrEqualToPrevEndTime;
    while (startIndex <= j) {
        const mid = Math.floor((startIndex+j)/2);
        if (items[mid][0] >= prevEndTime) {
            j = mid;
            leastIndexGreaterThanOrEqualToPrevEndTime = j;
            if (startIndex === j) break;
        } 
        else startIndex = mid +1;
    }

    return leastIndexGreaterThanOrEqualToPrevEndTime;
}

//console.log(binarySearchItems([[1],[2],[3],[4],[6]], 10));

function jobScheduleComparator(item1, item2) {
    if (item1[0] > item2[0]) return 1;
    if (item1[0] < item2[0]) return -1;
    if (item1[0] === item2[0]) {
        if (item1[1] > item2[1]) return 1;
        else return -1;
    }
}

let startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
console.log(getMaximumProfit(startTime, endTime, profit));





