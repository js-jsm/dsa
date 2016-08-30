class Search {
    constructor() {
        this.list = this._list = new Array(1000).fill(0).map(v => Math.floor(Math.random() * 100) + 1);
    }
    
    seqSearch(value, count) {
        let timer = this.timer(),
            cnt   = 0,
            r = {
                index: -1,
                value: -1
            };

        for(let i = 0, n; n = this.list[i]; i++) {
            if(value === n) 
                cnt++;
            

            if(value === n && cnt === count) {
                r.index = i;
                r.value = n;

                console.log(r, this.list, timer(), ' : finish time!');

                return;
            }

        }   

        console.log('not found', r, this.list, timer(), ' : finish time!');
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
new Search().seqSearch(5, 2);
