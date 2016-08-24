class Sort {
    constructor(list) {
        this._list = list;
        this.gaps  = [];
    }

    bubbleSort() {
        let len       = this.list.length,
            cnt       = len,
            timer     = this.timer(),
            loopCount = 0;

        for(let i = 0; i < len; i++, cnt--)
            for(let j = 0; j < cnt; j++, loopCount++) 
                if(this.list[j] > this.list[j + 1])
                    this.swapOne(j, j + 1);

        console.log(this.list);

        console.log('bubble sort : ', 'count : ' + loopCount, 'million Seccond : ' + timer());

        return this;
    }

    selectSort() {
        let len       = this.list.length,
            cnt       = 0,
            loopCount = 0,
            timer = this.timer();

        for(let i = 0, min, index = 0; i < len; i++, cnt++) {
            
            min = this.list[index];

            for(let j = cnt; j < len; j++, loopCount++) 
                if(min > this.list[j]) {
                    min   = this.list[j];
                    index = j;
                }
            

            this.swapOne(cnt, index);
        }

        console.log(this.list);

        console.log('select sort : ', 'count : ' + loopCount, 'million Seccond : ' + timer());
    }

    insertSort() {
        let len       = this.list.length,
            loopCount = 0,
            timer     = this.timer();

        for(let i = 0; i < len; i++) 
            for(let j = i; j >= 0; j--, loopCount++) 
                if(this.list[j - 1] > this.list[j]) 
                    this.swapOne(j - 1, j);

        
        console.log(this.list);

        console.log('inser sort : ', 'count : ' + loopCount, 'million Seccond : ' + timer());
    }

    shellSort() {
        let len       = this.list.length,
            loopCount = 0,
            timer     = this.timer();

            this.getGaps();

        for(let g = 0, gap; gap = this.gaps[g]; g++)
            for(let i = gap; i < len; i++)
                for(let j = i; j >= 0; j--)
                    if(this.list[j - gap] > this.list[j]) 
                        this.bitSwap(j - gap, j);

        console.log(this.list);

        console.log('shell sort : ', 'count : ' + loopCount, 'million Seccond : ' + timer());
    }

    getGaps() {
        let len = this.list.length,
            gap = 1;

        if(!len)
            return;

        //gap의 시작값을 구하는 반복문
        while(gap < len / 3) 
            gap = 3 * gap + 1;

        this.gaps.push(gap);

        //gap의 다음 수를 구하는 반복문.
        while(gap >= 1) {
            gap = (gap - 1) / 3;

            if(gap != 0) //마지막 값은 0이 나올 수 있으므로 +ㅅ +/
                this.gaps.push(gap);
        }
    }

    mergeSort() {
        let timer   = this.timer(),
            listLen = this.list.length,
            loopLen = listLen / 2;

        for(let step = 1; step < listLen; step *= 2)
            for(let i = 0, start = 0, end = step; i < loopLen; i += step, start += step * 2, end = start + step) 
                this.merge(
                    this.getList(start, end), 
                    this.getList(end, start + step * 2), 
                    start
                );


        console.log(this.list);

        console.log('merge sort : ', 'million Seccond : ' + timer());
    }

    merge(left, right, start) {
        for(let i = left.length + right.length; i--; start++) 
            this.list[start] = right[0] ? left[0] <= right[0] ? left.shift() : right.shift() : left.shift();
    }

    quickSort(arr) {
        if(!arr)
            arr = this.list;
 
        if(arr.length == 0)
            return [];

        let less    = [],
            greater = [],
            pivot   = arr[0];
 
        for(let i = 1, v; v = arr[i]; i++)
            v < pivot ? less.push(v) : greater.push(v);

        return this.quickSort(less).concat(pivot, this.quickSort(greater));
    }

    getList(start, end) {
        return this.list.slice(start, end);
    }

    swapTwo(i, j) {
        this.list[j] = [this.list[i], this.list[i] = this.list[j]][0];
    }

    swapOne(i, j) {
        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
    }

    bitSwap(i, j) {
        if(this.list[i] == this.list[j])
            return;

        this.list[i] ^= this.list[j];
        this.list[j] ^= this.list[i];
        this.list[i] ^= this.list[j];
    }
    
    timer() {
        let start = new Date().getTime();
        return () =>  new Date().getTime() - start;
    }

    set list(list) {this._list = list;}
    get list() {return this._list;}
}

new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).bubbleSort();
new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1).sort()).bubbleSort();
//정렬된게 빠름.


new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).selectSort();
new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1).sort()).selectSort();
//정렬되지 않은게 더 빠름.

new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).insertSort();
new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1).sort()).insertSort();
//정렬되지 않은게 더 빠름.

new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).shellSort();
new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1).sort()).shellSort();
//정렬되지 않은게 더 빠르다. 

new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).mergeSort();
new Sort(new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1).sort()).mergeSort();
//정렬된게 더 빠르다.


const timer = () => {
    let start = new Date().getTime();
    return () =>  new Date().getTime() - start;
}

let time = timer();

console.log(new Sort(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).quickSort());
console.log('quick sort : ', 'million Seccond : ' + time());

time = timer()

console.log(new Sort(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1).sort()).quickSort());
console.log('quick sort : ', 'million Seccond : ' + time());

//정렬된게 더 빠르다.
