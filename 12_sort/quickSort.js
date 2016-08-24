class Arr {
    constructor() {
        this._list = [6, 10, 1, 9, 4, 8, 2, 7, 3];
        //this._list = new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1);
    }

    quickSort(arr) {
        if(!arr)
            arr = this.list;
 
        if(arr.length == 0)
            return [];

        //[6, 10, 1, 9, 4, 8, 2, 7, 3]
        
        let less    = [],
            greater = [],
            pivot   = arr[0];
 
        for(let i = 1, v; v = arr[i]; i++)
            v < pivot ? less.push(v) : greater.push(v);

        //less = [1, 2, 3, 4];
        //pivot = 6;
        //greater = [7, 8, 9, 10];
    
        return this.quickSort(less).concat(pivot, this.quickSort(greater));
    }

    merge(left, right, start) {
        for(let i = left.length + right.length; i--; start++) 
            this.list[start] = right[0] ? left[0] <= right[0] ? left.shift() : right.shift() : left.shift();
    }
    
    timer() {
        let start = new Date().getTime();
        return () =>  new Date().getTime() - start;
    }


    set list(list) {this._list = list;}
    get list() {return this._list;}
}

console.log(new Arr().quickSort());