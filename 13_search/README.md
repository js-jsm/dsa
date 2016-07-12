#13 Searching Algorithms

##13.1 순차 검색
####[예제 13-1] seqSearch() 함수
```js
function seqSearch(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
```

####[예제 13-2] seqSearch() 함수 실행
```js
function dispArr(arr) {
    var printArr = [];

    for (var i=0; i<arr.length; ++i) {
        printArr.push(arr[i]);
    }
    console.log(printArr.join(","));
}

// 교재의 dispArr 함수 정의
// function dispArr(arr) {
//     for (var i=0; i<arr.length; ++i) {
//         putstr(arr[i] + " ");
//         if (i%10 == 9) {
//             putstr("\n");
//         }
//     }
//     if (i%10 != 0) {
//         putstr("\n");
//     }
// }

var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);

var num = prompt("Enter a number to search for: ");

if (seqSearch(nums, num)) {
    console.log(num + " is in the array.");
} else {
    console.log(num + " is not in the array.");
}

// 출력결과 예
// 5,1,7,4,2,10,9,3,6,8
// Enter a number to search for: 7
// 7 is in the array.
```

####[예제 13-3] 발견된 데이터의 위치(발견하지 못하면 -1)를 반환하는 seqSearch() 함수
```js
function seqSearch(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}
```

####[예제 13-4] 새로운 seqSearch() 함수 테스트
```js
var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);

num = prompt("Enter a number to search for: ");
var position = seqSearch(nums, num);

if (position > -1) {
    console.log(num + " is in the array at position " + position);
} else {
    console.log(num + " is not in the array.");
}

// 출력결과 예
// 5,1,7,4,2,10,9,3,6,8
// Enter a number to search for: 7
// 7 is in the array at postion 2
```

##13.1.1 최솟값과 최댓값 검색
####[예제 13-5] findMin() 함수
```js
function findMin(arr) {
    var min = arr[0];
    for (var i=1; i<arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
```

####[예제 13-6] 배열의 최솟값 찾기
```js
var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);

var minValue = findMin(nums);
console.log("The minimum value is: " + minValue);

// 출력결과 예
// 5,1,7,4,2,10,9,3,6,8
// The minimum value is: 1
```

####[예제 13-7] findMax() 함수
```js
function findMax(arr) {
    var max = arr[0];
    for (var i=1; i<arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

####[예제 13-8] findMax() 함수 사용
```js
var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);

var minValue = findMin(nums);
console.log("The minimum value is: " + minValue);

var maxValue = findMax(nums);
console.log("The maximum value is: " + maxValue);

// 출력결과 예
// 5,1,7,4,2,10,9,3,6,8
// The minimum value is: 1
// The maximum value is: 10
```

##13.1.2 자체 정렬 데이터
####[예제 13-9] 자체 정렬 데이터를 포함하는 seqSearch() 함수
```js
function seqSearch(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if (arr[i] == data) {
            if (i>0) {
                swap(arr, i, i-1);
            }
            return true;
        }
    }
    return false;
}

function swap(arr, index, index1) {
    temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}

function dispArr(arr) {
    var printArr = [];

    for (var i=0; i<arr.length; ++i) {
        printArr.push(arr[i]);
    }
    console.log(printArr.join(","));
}

var numbers = [5, 1, 7, 4, 2, 10, ,9, 3, 6, 8];
console.log(numbers.join(","));

for (var i=1; i<=3; i++) {
    seqSearch(numbers, 4);
    console.log(numbers.join(","));
}

// 출력결과 예
// 5,1,7,4,2,10,9,3,6,8
// 5,1,4,7,2,10,9,3,6,8
// 5,4,1,7,2,10,9,3,6,8
// 4,5,1,7,2,10,9,3,6,8
```

####[예제 13-10] 향상된 자체 정렬 데이터 기법을 적용한 seqSearch() 함수
```js
function seqSearch(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if ((arr[i]==data) && (i>arr.length*0.2)) {
            swap(arr, i, 0);
            return true;
        } else if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
```

####[예제 13-11] 자체 정렬 데이터를 적용한 검색
```js
var nums = [];
for (var i=0; i<10; ++i) {
    nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
var num = prompt("Enter a number to search for: ");

if (seqSearch(nums, num)) {
    console.log("Fount element: ");
    console.log(numbers.join(","));
} else {
    console.log(num + " is not in the array.");
}

// 출력결과 예
// 5,1,7,4,2,10,9,3,6,8
// Fount element: 6
// 6,1,7,4,2,10,9,3,5,8
// 
// 검색한 데이터가 데이터 집합의 앞부분에 위치할 때
// 5,1,7,4,2,10,9,3,6,8
// Fount element: 1
// 5,1,7,4,2,10,9,3,6,8
```

##13.2 이진검색
```js

```
