class Sort {
    constructor(list) {
        this._list = list;
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

new Sort(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).bubbleSort();
new Sort(
    new Array(100).fill(0).map(v => {
        let s = '';

        for(let j = 0, len = Math.round(Math.random() * 5) + 1; j < len; j++) 
            s += String.fromCharCode(Math.round(Math.random() * 127) + 1);

        return s;
})).bubbleSort();
//문자열이 조금더 빠르다. 


new Sort(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).selectSort();
new Sort(
    new Array(100).fill(0).map(v => {
        let s = '';

        for(let j = 0, len = Math.round(Math.random() * 5) + 1; j < len; j++) 
            s += String.fromCharCode(Math.round(Math.random() * 127) + 1);

        return s;
})).selectSort();
//숫자가 조금더 빠르다




new Sort(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).insertSort();
new Sort(
    new Array(100).fill(0).map(v => {
        let s = '';

        for(let j = 0, len = Math.round(Math.random() * 5) + 1; j < len; j++) 
            s += String.fromCharCode(Math.round(Math.random() * 127) + 1);

        return s;
})).insertSort();
//숫자가 조금더 빠르다






