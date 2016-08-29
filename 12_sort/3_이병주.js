
    class Arr {
        constructor(list,type) {
            this._list = list;
            this._type = type;
        }

        selectSort() {
            let len = this.list.length,
                    cnt = 0,
                    loopCount = 0,
                    timer = this.timer();

            // for(let i = 0, index, tmpList, min; i < len; i++, cnt++) {
            // 	tmpList = this.list.slice(cnt); //배열의 순회한곳 이후부터 복사한다.
            // 	min     = tmpList.reduce((v1, v2) => v1 < v2 ? v1 : v2); //그중 최소값을 구한다. //여기서 한번 루프
            // 	index   = tmpList.findIndex(v => v == min); //해당 배열의 인덱스값을 찾는다. // 여기서 한번 루프를 돈다. 비효율.

            // 	this.swapOne(cnt, cnt + index);
            // }

            //loop Time을 비교하면 이러하다 !


            //재남씨의 코드
            //selectionSort(){
            //     for(let i = 0, cnt = 0, length = this[Store].length; i < length ; i++, cnt++) {
            //         let res = this[Store].slice(cnt).reduce((p, c, cur) => ({
            //             min: p.min >= c ? c : p.min,
            //             idx: p.min >= c ? cur : p.idx
            //         }), {min: 1000000, idx: -1})
            //         this.swap(this[Store], cnt, res.idx)
            //     }
            // }

            //따라서 이 방법이 더 효율적일 것 같다.
            for (let i = 0, min, index = 0; i < len; i++, cnt++) {

                min = this.list[index];

                for (let j = cnt; j < len; j++, loopCount++)
                    if (min > this.list[j]) {
                        min = this.list[j];
                        index = j;
                    }


                this.swapOne(cnt, index);
            }

//            console.log(this.list, loopCount + ' : count', timer() + ' : million Seccond');
            timer();
        }

        insertSort() {
            let len = this.list.length,
                    loopCount = 0,
                    timer = this.timer();

            for (let i = 0; i < len; i++)
                for (let j = i; j >= 0; j--, loopCount++)
                    if (this.list[j - 1] > this.list[j])
                        this.swapOne(j - 1, j);

//            console.log(this.list, loopCount + ' : count', timer() + ' : million Seccond');
            timer();
        }

        bubbleSort() {
            let len = this.list.length,
                    cnt = len,
                    loopCount = 0,
                    timer = this.timer();

            //100 -> 1 회차 -> 100회
            //99 -> 2회차 -> 99회.
            //98 -> 3회차 -> 98..
            //
            //
            //0
            for (let i = 0; i < len; i++, cnt--)
                for (let j = 0; j < cnt; j++, loopCount++)
                    if (this.list[j] > this.list[j + 1])
                        this.bitSwap(j, j + 1);

            //cnt를 사용하지 않고 루프를 돌릴 경우 약 5000회 이상의 반복문을 추가하게 된다.
//            console.log(this.list, loopCount);
//            console.log(this.list, loopCount + ' : count', timer() + ' : million Seccond');
            timer();
        }

        swapTwo(i, j) {
            this.list[j] = [this.list[i], this.list[i] = this.list[j]][0];
        }

        swapOne(i, j) {
            [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
        }

        bitSwap(i, j) {
            if (this.list[i] == this.list[j])
                return;

            this.list[i] ^= this.list[j];
            this.list[j] ^= this.list[i];
            this.list[i] ^= this.list[j];
        }

        timer() {
            let start = console.time(this._type)
            return () =>  console.timeEnd(this._type);
        }

        set list(list) {
            this._list = list;
        }

        get list() {
            return this._list;
        }
    }
    var arr = [];
    for(var i = 1000; i > 0; i--){
        arr.push(i);
    }
//    console.log(arr)
    const bubble = new Arr(arr,"bubble");
    const select = new Arr(arr,"select");
    const insert = new Arr(arr,"insert");
//
    bubble.bubbleSort();
    select.selectSort();
    insert.insertSort();


//100회정도 테스트해본결과 select -> insert -> bubble순으로 빠르다
