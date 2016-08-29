class SortCollections {
    constructor(items) {
        this.array = [...items];
        this.perf = [];
    }
/*basical sort*/   
    //used bubble,selection
    swap(index1, index2) {
        let temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
    }
    //basics sort 
    bubbleSort() {
        let len = this.array.length,
             i,
             j,
             stop;

         for (i = 0; i < len; i++) {
            for (j = 0, stop = len - i; j < stop; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j+1);
                }
            }
         }
        return `bubble-sort complete ${this.array}`
    }
    //better then bubbleSort
    selectionSort() {
        let len = this.array.length,
            i,
            j,
            min;

        for (i = 0; i < len - 1; i++) {
            min = i;
            for (j = i + 1; j < len; j++) {
                if (this.array[j] < this.array[min]) {
                    min = j;
                }
            }
            if (i !== min) {
                this.swap(i, min)
            }
        }
        return `selection-sort complete ${this.array}`;
    }
    //better then selectionSort
    insertionSort() {
        let len = this.array.length,
              i,
              j,
              temp;

        for (i = 1; i < len; i++) {
            j = i;
            temp = this.array[i];

            while (j > 0 && this.array[j] > temp) {
                this.array[j] = this.array[j-1];
                j--;
            }
            this.array[j] = temp;
        }
        return `insertion-sort complelte ${this.array}`;
    }

    comparePerformance() {
        if(this.array) {
                    let t0 = performance.now();
                    this.bubbleSort();
                    let t1 = performance.now();
                    this.perf.push({sort: 'bubble', time: (t1 - t0).toFixed(4)})
                    let t2 = performance.now();
                    this.selectionSort();
                    let t3 = performance.now();
                    this.perf.push({sort: 'selection', time:(t3 - t2).toFixed(4)})
                    let t4 = performance.now();
                    this.insertionSort();
                    let t5 = performance.now();
                    this.perf.push({sort: 'insertion', time: (t5 - t4).toFixed(4)})
            return console.table(this.perf)
        }
    }

}

var sort = new SortCollections('draw into the mouth by contracting the muscles of the lip and mouth to make a partial vacuum');

sort.comparePerformance();
