class Search {
    constructor() {
        this.list = new Array(100).fill(0).map(() => Math.round(Math.random() * 100) + 1);
    }
    
    seqSearch(value) {
        let r = {
            index: -1,
            value: -1
        };

        for(let i = 0, n; n = this.list[i]; i++)
            if(value === n) {
                r.index = i;
                r.value = n;
            }

        console.log(r, this.list);
    }    

    selfSortSeqSearch(value) { //자체 정렬 데이터 기법을 적용한 seq 함수. 
        let r = {
            index: -1,
            value: -1
        };

        for(let i = 0, n; n = this.list[i]; i++)
            if(value === n) {
                r.index = i;
                r.value = n;

                if(i > 0) //검색 되면 한칸씩 계속 앞으로 밀려 나가게 된다. 검색의 우선순위가 높아질 수록 최상단에 위치하게 된다.  
                    this.swap(i, i - 1);


                console.log(r, this.list);
                return;
            }

        console.log(r, this.list);
    }

    upgradeSelfSortSeqSearch(value) { // 자체 정렬 데이터 기법을 조금더 업그레이드 한 seq 함수이다. 
        let r = {
            index: -1,
            value: -1
        };

        for(let i = 0, len = this.list.length, n; n = this.list[i]; i++)
            if((value === n) && (i > len * 0.2)) {  //만약 검색된 결과값이 배열의 20% 이외에 있다면, 최상단으로 앞당긴다. 
                r.index = i;
                r.value = n;
                this.swap(i, i - 1);
                
                console.log(r, this.list);

                return;
            } else if(value === n) {
                r.index = i;
                r.value = n;

                console.log(r, this.list);

                return;
            }


            console.log(r, this.list);
    }

    swap(i, j) {
        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
    }

    get list() {return this._list;}
    set list(list) {this._list = list;}
}


new Search().selfSortSeqSearch(5);