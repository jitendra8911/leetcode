
class MinHeap {
    constructor(arr) {
        this.arr = arr;
        this.heapSize = arr.length;
        this.buildHeap();
    }

    minHeapify(i) {
        let smallest;
        let l = this.left(i);
        let r = this.right(i);
        if (l < this.heapSize && this.arr[l] < this.arr[i]) {
            smallest = l;
        } else {
            smallest = i;
        }
        if (r < this.heapSize && this.arr[r] < this.arr[smallest]) {
            smallest = r;
        }

        if (smallest !== i) {
            let temp = this.arr[i];
            this.arr[i] = this.arr[smallest];
            this.arr[smallest] = temp;
            this.minHeapify(smallest)
        }
    }

    buildHeap() {
        for (let i = parseInt(this.heapSize/2) - 1; i >= 0; i--) {
            this.minHeapify(i);
        }
    }

    heapExtractMin() {
        const min = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize--;
        this.minHeapify(0);

        return min;
    }

    heapDecreaseKey(i, key) {
        if (this.arr[i] < key) {
            console.error(`cannot decrease key ${key} at i: ${i} which already has a value smaller than key of ${this.arr[i-1]}`);
        }
        this.arr[i] = key;
        while (i > 0 && this.arr[i] < this.arr[this.parent(i)]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    minHeapInsert(key) {
        this.heapSize++;
        this.arr[this.heapSize - 1] = Number.POSITIVE_INFINITY;
        this.heapDecreaseKey(this.heapSize - 1, key);
    }

    left(i) {
        return (2 * i) + 1;
    }

    right(i) {
        return (2 * i) + 2;
    }

    parent(i) {
        if (i % 2 === 0) {
            return (i/2) - 1;
        }
        return parseInt(i/2);
    }
}

var minMeetingRooms = function(intervals) {
    const sortedIntervals = sortIntervals(intervals);

    return computeMinimumRoomsRequired(sortedIntervals);

};

const sortIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((interval1, interval2) => {
        if (interval1[0] === interval2[0]) {
            return interval2[1] - interval1[1];
        }
        return interval1[0] - interval2[0];
    });

    return sortedIntervals;
};

const computeMinimumRoomsRequired = (intervals) => {
    const heap = new MinHeap([]);
    let maxHeight = 0;
    for (let i = 0; i < intervals.length; i++) {
        if (heap.heapSize === 0) {
            heap.minHeapInsert(intervals[i][1]);
            maxHeight = Math.max(maxHeight, heap.heapSize);
        } else {
            while (heap.heapSize > 0 && intervals[i][0] >= heap.arr[0]) {
                heap.heapExtractMin();
            }
            heap.minHeapInsert(intervals[i][1]);
            maxHeight = Math.max(maxHeight, heap.heapSize);
        }
    }

    return maxHeight;
};

const intervals = [[2,11],[6,16],[11,16]];
console.log(minMeetingRooms(intervals));