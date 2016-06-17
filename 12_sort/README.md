#Sort Algorithms

## 12.1배열 테스트 베드
```javascript
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.setData  =setData;
    this.swap = swap;
    this.gaps =[5,3,1];

    for(var i = 0; i < numElements; ++i ){
        this.dataStore[i] = i;
    }


    function setData() {
        for( var i = 0 ; i< this.numElements; ++i ){
            this.dataStore[i] = Math.floor(Math.random()*(this.numElements+1));
        }
    }

    function clear(){
        for (var i = 0; i < this.dataStore.length; ++i){
            this.dataStore[i] = 0;
        }
    }

    function insert(element){
        this.dataStore[this.pos++] = element;
    }

    function toString(){
        var retstr = "";
        for(var i = 0 ;  i < this.dataStore.length; ++i ){
        retstr += this.dataStore[i] + " ";
         if(i > 0 && i %10 ==0 ){
            retstr += "\n";
            }
        }
        return retstr;
    }

    function swap(arr, index1 , index2){
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    function setGaps(arr){
        this.gaps = arr;
    }

}
//use test-bed

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
```

## 12.2 기본 정렬 알고리즘

### 12.2.1 버블정렬
```javascript
function bubbleSort(){
    var numElements = this.dataStore.length;
    var temp;

    for(var outer = numElements; outer >=2; --outer ){
        for(var inner = 0 ; inner <=outer-1; ++inner){
            if(this.dataStore[inner] > this.dataStore[inner+1]){
                swap(this.dataStore,inner,inner+1);
            }
        }
        console.log(this.toString());
    }
}

//bubbleSort 로 10개 숫자 정렬하기
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
console.log();
console.log(mynums.toString());

```

### 12.2.2 선택 정렬
```javascript
function selectionSort(){
var min , temp;
    for ( var outer = 0 ; outer <= this.dataStore.length-2; ++outer){
        min =outer;
        for(var inner = outer +1; inner<=this.dataStore.length-1;++inner){
            if(this.dataStore[inner] < this.dataStore[min]){
                min = inner;
            }
        }
        swap(this.dataStore,outer,min);
    }
}

```

### 12.2.3 삽입 정렬
```javascript
function insertionSort(){
    var temp,inner;
    for(var outer = 1; outer <= this.dataStore.length-1;++outer){
        temp = this.dataStore[outer];
        inner = outer;
        while ( inner > 0  && (this.dataStore[inner-1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner-1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

```
### 12.2.4 기본 정렬 알고리즘의 수행 시간 비교
```javascript
/*100개의 데이터로 수행시간 비교*/
var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
num.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the bubble sort on" + numElements + "elements is "+ elapsed+"milliseconds.");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the selection sort on" + numElements + "elements is "+ elapsed+"milliseconds.");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the insertion sort on" + numElements + "elements is "+ elapsed+"milliseconds.");

```

## 12.3고급 정렬 알고리즘
###12.3.1 셸 정렬 알고리즘
```javascript
function shellsort(){
    for(var g=0; g<this.gaps.length; ++g){
        for(var i = this.gaps[g]; i<this.dataStore.length; ++i){
            var temp = this.dataStore[i];
            for(var j = i ; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j-= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

//작은 데이터 집합에 shellsort 실행
import CArray from('./CArray.js');
var nums = new CArray(10);
nums.setData();
console.log("Before Shellsort : \n")
console.log(nums.toString());
console.log("\nDuring Shellsort : \n")
nums.shellsort();
console.log("\nAfter Shellsort : \n")
console.log(nums.toString());
```

### 12.3.1.1 동적 갭 시퀸스 계산 
```javascript
function shellsort1(){
    var N = this.dataStore.length;
    var h = 1;
    while( h < N/3 ){
        h = 3 * h + 1;
    }
    while( h >= 1 ){
        for(var i = h; i<N; i++){
            for(var j = i; j>=h && this.dataStore[j] < this.dataStore[j-h]; j-=h){
                swap(this.dataStore, j , j-h);
            }
        }
        h = (h-1)/3;
    }
}
import CArray from('./CArray.js');
var nums = new CArray(10);
nums.setData();
console.log("Before Shellsort1 : \n")
console.log(nums.toString());
console.log("\nDuring Shellsort1 : \n")
nums.shellsort1();
console.log("\nAfter Shellsort1 : \n")
console.log(nums.toString());

//두가지 알고리즘의 효율성은 같다는 사실을 확인해볼수 있습니다.

```

### 12.3.2 머지 정렬 알고리즘
```javascript
function mergeSort(arr){
    if(arr.length < 2){
        return;
    }
    var step =1;
    var left , right;
    while ( step < arr.length) {
        left = 0;
        right = step;
        while( right + step < arr.length) {
            mergeArrays(arr,left , left+step, right , right + step);
            left = right + step;
            right = left + step;
        }
        if(right < arr.length){
            mergeArrays(arr,left,left+step,right,arr.length);
        }
        step *= 2;
    }
}

function mergeArrays(arr , startLeft , stopLeft, startRight , stopRight ){
    var rightArr = new Array(stop - startRight +1);
    var leftArr = new Array(stopLeft - startLeft +1);

    var k=  startRight;
    for(var i=0; i< (rightArr.length-1); ++i){
        rightArr[i] = arr[k];
        ++k;
    }
    var k=  startLeft;
    for(var i=0; i< (leftArr.length-1); ++i){
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length-1] = Infinity ; //특수값
    leftArr[leftArr.length-1] = Infinity ; //특수값

    var m = 0;
    var n = 0;

    for(var k = startLeft; k < stopRight; ++k){
        if(leftArr[m] <=rightArr[n]){
        arr[k] = leftArr[m];
        m++;
        }else{
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ",leftArr);
    console.log("right array - ",rightArr);

} // end CArray 추가해서 사용 할수 있다.

var nums = [ 6,10,1,9,4,8,2,7,3,5];
console.log(nums);
console.log();
mergeSort(nums);
console.log();
console.log(nums);
```
### 12.3.3 퀵 정렬 알고리즘
```javascript
function qSort(list){
    if(list.length == 0 ){
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for(var i = 1; i < list.length; i++){
        if(list[i] <pivot){
            lesser.push(list[i]);
        }else{
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot,qSort(greater));
}

var a = [];
for ( var  i=0; i<10; ++i){
    a[i] = Math.floor((Math.random()*100)+1);
}

console.log(a);
console.log();
console.log(qSort(a));
```
