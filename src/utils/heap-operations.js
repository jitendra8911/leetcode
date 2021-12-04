let stones = [601,158,460,215,935,492,289,451,69,324,218,981,308,985,745,664,945,531,308,479,435,952,982,199,504,536,172,843,246,838]

class MaxHeap {
    constructor(arr) {
        this.arr = arr;
        this.heapSize = arr.length;
        this.buildHeap();
    }

    maxHeapify(i) {
        let largest;
        let l = this.left(i);
        let r = this.right(i);
        if (l < this.heapSize && this.arr[l] > this.arr[i]) {
            largest = l;
        } else {
            largest = i;
        }
        if (r < this.heapSize && this.arr[r] > this.arr[largest]) {
            largest = r;
        }

        if (largest !== i) {
            let temp = this.arr[i];
            this.arr[i] = this.arr[largest];
            this.arr[largest] = temp;
            this.maxHeapify(largest)
        }
    }

    buildHeap() {
        for (let i = parseInt(this.heapSize/2) - 1; i >= 0; i--) {
            this.maxHeapify(i);
        }
    }

    heapExtractMax() {
        const max = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize--;
        this.maxHeapify(0);

        return max;
    }

    heapIncreaseKey(i, key) {
        if (this.arr[i] > key) {
            console.error(`cannot increase key ${key} at i: ${i} which already has a value greater than key of ${this.arr[i-1]}`);
        }
        this.arr[i] = key;
        while (i > 0 && this.arr[i] > this.arr[this.parent(i)]) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    maxHeapInsert(key) {
        this.heapSize++;
        this.arr[this.heapSize - 1] = Number.NEGATIVE_INFINITY;
        this.heapIncreaseKey(this.heapSize - 1, key);
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



const countRemainingStones = () => {
    let heap = new MaxHeap(stones);

    while (heap.heapSize >= 2) {
        const l1 = heap.heapExtractMax();  // O(lg n)
        const l2 = heap.heapExtractMax(); // O(lg n)
        const diff = l1 - l2;
        if (diff) {
            heap.maxHeapInsert(diff) // O(lg n)
        }
    }

    return heap.heapSize ? stones[0] : 0;
};

//console.log(countRemainingStones());

const minHeap = new MinHeap([16,12,20,14]);
minHeap.heapExtractMin();
minHeap.heapExtractMin();
minHeap.heapExtractMin();
minHeap.heapExtractMin();

console.log(minHeap);