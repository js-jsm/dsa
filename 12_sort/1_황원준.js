class SortCollections {
    constructor(items) {
        this.array = [...items];
        this.prev  = [...items]; 
        this.perf  = [];
        this._len  = this.array.length;
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
        this.array = this.prev.slice();        
        console.log(`bubble${this.prev}`)
        return `bubble-sort complete`
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
        this.array = this.prev.slice();  
        console.log(`selection${this.prev}`)
        return `selection-sort complete`;
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
        this.array = this.prev.slice();  
        console.log(`insertion${this.prev}`)
        return `insertion-sort complelte`;
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
    toString() {
        return this.prev;
    }

}

var charSort = new SortCollections('draw into the mouth by contracting the muscles of the lip and mouth to make a partial vacuum'); // 92char

var numSort = new SortCollections(new Array(92).fill(0).map(x => x += Math.floor(Math.random() * 100) + 1));

console.table(charSort.comparePerf());
console.table(numSort.comparePerf());
