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

    comparePerf() {
        if(this.array) {

            let arr = new Array(6).fill(performance);

            [arr[1], arr[3], arr[7]] = 
            [this.bubbleSort(), this.selectionSort(), this.insertionSort()]

            let arr2 = arr.map((v, i) => {
                 let type = Object.prototype.toString.call(v);
                 return type === '[object Performance]'? v.now() : v(); 
            });

            this.perf['bubble']    = (arr2[1] -arr2[0]).toFixed(4)
            this.perf['selection'] = (arr2[3] -arr2[2]).toFixed(4)
            this.perf['insertion'] = (arr2[5] -arr2[4]).toFixed(4)
            
            return console.table(this.perf)
        }
    }

}

var sort = new SortCollections('draw into the mouth by contracting the muscles of the lip and mouth to make a partial vacuum');

sort.comparePerf();
