class Sort {
    constructor(size) {
        this.dataStore = [];
        this.pos = 0;
        this.size = size;

        // this.init();
        this.initWithFunctional();
    }

    initWithFunctional() {
        this.dataStore = 
                new Array(this.size)
                    .fill().map((v, i) => i + 1)
                    .sort(function(a,b) {return Math.random()-0.5});
    }

    init() {
        for (let i=0; i<this.size; ++i) {
            this.dataStore[i] = i;
        }

        this.shuffle();
    }

    shuffle() {
        let seed;
        let temp;

        for (let i=0; i<this.dataStore.length; ++i) {
            seed = Math.floor(Math.random()*(this.dataStore.length));
            temp = this.dataStore[i];
            this.dataStore[i] = this.dataStore[seed];
            this.dataStore[seed] = temp;
        }
    }

    quickSort(arr) {
        if(!arr) {
            arr = this.dataStore;
        }

        if (arr.length <= 0) {
            return [];
        }

        // console.log("=============== 퀵정렬 ===============");
        let left = [];
        let right = [];
        let pivot = arr[0];
        for (let i=1; i<arr.length; ++i) {
            // console.log(`pivot: ${pivot}, current element: ${arr[i]}`);
            if (arr[i] < pivot) {
                // console.log(`moving ${arr[i]} to the left`);
                left.push(arr[i]);
            } else {
                // console.log(`moving ${arr[i]} to the right`);
                right.push(arr[i]);
            }
        }
        return this.quickSort(left).concat(pivot, this.quickSort(right));
    }

    mergeSort(arr) {
        if (!arr) {
            arr = this.dataStore;
        }

        if(arr.length < 2){
            return;
        }

        console.log("=============== 병합정렬 ===============");
        let step = 1;
        let left, right;
        while (step < arr.length) {
            left = 0;
            right = step;
            while ((right+step) <= arr.length) {
                this.mergeArrays(arr, left, left+step, right, right+step);
                left = right + step;
                right = left + step;
            }
            if (right < arr.length) {
                this.mergeArrays(arr, left, left+step, right, arr.length);
            }
            step *= 2;
        }

        console.log(`MergeSort: ${this.isValidSorting()}`);
    }

    mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
        let rightArr = new Array(stopRight - startRight + 1);
        let leftArr = new Array(stopLeft - startLeft + 1);
        let k = startRight;
        for (let i=0; i<rightArr.length-1; ++i) {
            rightArr[i] = arr[k++];
        }

        k = startLeft;
        for (let i=0; i<leftArr.length-1; ++i) {
            leftArr[i] = arr[k++];
        }

        rightArr[rightArr.length-1] = Infinity;
        leftArr[leftArr.length-1] = Infinity;

        let m = 0;
        let n = 0;
        for (k=startLeft; k<stopRight; ++k) {
            if (leftArr[m] <= rightArr[n]) {
                arr[k] = leftArr[m++];
            } else {
                arr[k] = rightArr[n++];
            }
        }
        // console.log(`left arrays - ${leftArr.toString()}`);
        // console.log(`right arrays - ${rightArr.toString()}`);
        // console.log(`arrays - ${arr.toString()}`);
    }

    swap(idx1, idx2) {
        let temp = this.dataStore[idx1];
        this.dataStore[idx1] = this.dataStore[idx2];
        this.dataStore[idx2] = temp;
    }

    toString() {
        return `[${this.dataStore.join(',')}];`
    }

    isValidSorting() {
        for (let i=0; i<this.dataStore.length-1; ++i) {
            if (i > i+1) {
                return "Test Faild";
            }
        }
        return "Test Passed!";
    }
}

////////////////// Test
let start, end, elapsed;
let result = [];

// 병합정렬
myNums = new Sort(10000);
start = new Date().getTime();
myNums.mergeSort();
end = new Date().getTime();
result.push(`MergeSort: ${(end-start)}ms`);

// 퀵정렬
console.log("=============== 퀵 정렬 ===============");
myNums = new Sort(10000);
start = new Date().getTime();
myNums.quickSort();
console.log(`QuickSort: ${myNums.isValidSorting()}`);
end = new Date().getTime();
result.push(`QuickSort: ${(end-start)}ms`);

console.log("=============== Result ===============");
for (let i=0; i<result.length; ++i) {
    console.log(result[i]);
}