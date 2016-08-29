class SortCollections {
    constructor(items) {
        this.array = [...items];
        this._len  = this.array.length;
        this.perf  = [];
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
        let i, j, stop; 

         for (i = 0; i < this._len; i++) {
            for (j = 0, stop = this._len - i; j < stop; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    this.swap(j, j+1);
                }
            }
         }
        return `bubble-sort complete ${this.array}`
    }
    //better then bubbleSort
    selectionSort() {
        let i, j, min;

        for (i = 0; i < this._len - 1; i++) {
            min = i;
            for (j = i + 1; j < this._len; j++) {
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
        let i, j, temp;

        for (i = 1; i < this._len; i++) {
            j    = i;
            temp = this.array[i];

            while (j > 0 && this.array[j] > temp) {
                this.array[j] = this.array[j-1];
                j--;
            }
            this.array[j] = temp;
        }
        return `insertion-sort complelte ${this.array}`;
    }

    comparePerf() {
        if (this._len !== 0) {
            let arr = new Array(9).fill(performance);

            let arr2 = arr.map((v, i) => {
                switch(i) {
                    case 1  : return this.bubbleSort();
                    case 4  : return this.selectionSort();
                    case 7  : return this.insertionSort();
                    default : return v.now();
                }
            });

            this.perf['bubble']    = {time: (arr2[2] -arr2[0]).toFixed(4)}
            this.perf['selection'] = {time: (arr2[5] -arr2[3]).toFixed(4)}
            this.perf['insertion'] = {time: (arr2[8] -arr2[6]).toFixed(4)}
            
            return this.perf;
        }
    }

}

var sort = new SortCollections('draw into the mouth by contracting the muscles of the lip and mouth to make a partial vacuum');

console.table(sort.comparePerf());
