class Sort {
    constructor(list) {
        this._list = list;
        this._gaps = [];
    }

    shellSort() {
        let len = this.list.length;

        this.getGaps();

        for(let g = 0, gap; gap = this.gaps[g]; g++)
            for(let i = gap; i < len; i++)
                for(let j = i; j >= 0; j--) 
                    if(this.list[j - gap] > this.list[j]) 
                        this.swapOne(j - gap, j);

        return this.list;
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

    swapOne(i, j) {
        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
    }

    set gaps(list) {this._gaps = list;}
    get gaps() {return this._gaps;}
    set list(list) {this._list = list;}
    get list() {return this._list;}
}


class Search {
    constructor(list) {
        this.list = list;
    }
    
    seqSearch(value) {
        let timer = this.timer(),
                r = {
                    index: -1,
                    value: -1
                };

        for(let i = 0, n; n = this.list[i]; i++)
            if(value === n) {
                r.index = i;
                r.value = n;

                console.log(r, this.list, timer(), ' : finish time!');

                return;
            }
    }    

    binarySearch(value) { // 이진 검색은 반드시 정렬된 데이터를 가지고만 움직일 수 있다. 이것이 전제 조건. 
        let timer = this.timer(), 
            list  = new Sort(this.list).shellSort(), 
            upper = this.list.length - 1,
            lower = 0, 
            mid   = null; 

        while(lower <= upper) {
            mid = Math.floor((upper + lower) / 2);

            if(this.list[mid] < value) 
                lower = mid + 1; 
            else if(this.list[mid] > value)
                upper = mid - 1;
            else 
                return console.log(`${this.list[mid]} : ${mid}, ${this.list}, ${timer()} : finish time`); 
        }

        console.log(`not found, ${this.list}, ${timer()} : finish time`); 
    }

    timer() {
        let start = performance.now();
        return () => performance.now() - start;
    }

    get list() {return this._list;}
    set list(list) {this._list = list;}
}


//seq search 
new Search(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).seqSearch(5);

//shell + binary search
new Search(new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1)).binarySearch(5);


// 당연히 정렬까지 포함하면 seqSearch가 월등히 빠름을 확인하였다. 





2_