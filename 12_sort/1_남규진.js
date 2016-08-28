class Sort {
    constructor(size) {
        this.dataStore = [];
        this.pos = 0;
        this.size = size;
    }

    initWithNumeric() {
        this.clear();
        for (let i=0; i<this.size; ++i) {
            this.dataStore[i] = i;
        }
            this.shuffle();
    }

    initWithString() {
        this.clear();
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        let strLength = 3;
        let randomstring ='';

        for (let i=0; i<this.size; ++i) {
            for (let j=0; j<strLength; ++j) {
                let rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum,rnum+1);
            }
            this.dataStore[i] = randomstring;
            randomstring = '';
        }

        this.shuffle();
    }

    shuffle() {
        let seed;
        let temp;

        for (let i=0; i<this.dataStore.length; ++i) {
            seed = Math.floor(Math.random()*(this.dataStore.length));
            temp = this.dataStore[i];
            this.dataStore[i] = this.dataStore[seed];
            this.dataStore[seed] = temp;
        }
    }

    bubbleSort() {
        let arrayLength = this.dataStore.length;
        let temp;

        console.log("=============== 버블정렬 ===============");
        for (let outer = arrayLength; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    this.swap(inner, inner+1);
                }
            }
            // console.log(`${this.dataStore.length - outer + 1}회전: ${this.dataStore.toString()}`);
        }
        this.isValidSorting();
    }

    selectionSort() {
        let arrayLength = this.dataStore.length;
        let smallest;

        console.log("=============== 선택정렬 ===============");
        for (let outer = 0; outer <= arrayLength-2; ++outer) {
            smallest = outer;

            for (let inner = outer+1; inner <= arrayLength-1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[smallest]) {
                    smallest = inner;
                }
            }
            this.swap(outer, smallest);
            //console.log(`${outer + 1}회전: ${this.dataStore.toString()}`);
        }
        this.isValidSorting();
    }

    insertionSort() {
        let arrayLength = this.dataStore.length;
        let temp;
        let inner;

        console.log("=============== 삽입정렬 ===============");
        for (let outer=1; outer <= arrayLength; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && this.dataStore[inner-1] > temp) {
                // 삽입정렬  특성상 왼쪽의  데이터는 모두 정렬이 되어 있음
                // 따라서, 바로 왼쪽의 데이터가 '선택' 값보다 크지 않다면 더이상 비교가 무의미
                
                // 한칸 오른쪽으로 밀어 temp 값이 들어갈 공간을 만듬.
                this.dataStore[inner] = this.dataStore[inner-1];
                --inner;
            }
            this.dataStore[inner] = temp;
            // console.log(outer + "회전: " + this.dataStore.toString());
        }
        this.isValidSorting();
    }

    swap(idx1, idx2) {
        let temp = this.dataStore[idx1];
        this.dataStore[idx1] = this.dataStore[idx2];
        this.dataStore[idx2] = temp;
    }

    clear() {
        for (let i=0; i<this.size; ++i) {
            this.dataStore[i] = 0;
        }
    }

    toString() {
        return `[${this.dataStore.join(',')}]`;
    }

    isValidSorting() {
        for (let i=0; i<this.dataStore.length-1; ++i) {
            if (i > i+1) {
                console.log("Sort Faild");
            }
        }
        return;
    }
}

////////////////// Test
let start, end, elapsed;
let obj = {};

// 버블정렬
let myNums = new Sort(2400);
obj.name = "BubbleSort";

myNums.initWithNumeric();
start = new Date().getTime();
myNums.bubbleSort();
end = new Date().getTime();
obj.numsorting = `${end-start}ms`;

myNums.initWithString();
start = new Date().getTime();
myNums.bubbleSort();
end = new Date().getTime();
obj.strsorting = `${end-start}ms`;

console.log(obj);

// 선택정렬
myNums = new Sort(2400);
obj.name = "SelectionSort";

start = new Date().getTime();
myNums.selectionSort();
end = new Date().getTime();
obj.numsorting = `${end-start}ms`;

myNums.initWithString();
start = new Date().getTime();
myNums.selectionSort();
end = new Date().getTime();
obj.strsorting = `${end-start}ms`;

console.log(obj);

// // 삽입정렬
myNums = new Sort(2400);
obj.name = "InsertionSort";

start = new Date().getTime();
myNums.insertionSort();
end = new Date().getTime();
obj.numsorting = `${end-start}ms`;

myNums.initWithString();
start = new Date().getTime();
myNums.insertionSort();
end = new Date().getTime();
obj.strsorting = `${end-start}ms`;

console.log(obj);
