# 13 Searching Algorithms

## 13.1 순차 검색
#### [예제 13-1] seqSearch() 함수

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

#### [예제 13-2] seqSearch() 함수 실행

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

#### [예제 13-3] 발견된 데이터의 위치(발견하지 못하면 -1)를 반환하는 seqSearch() 함수

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

#### [예제 13-4] 새로운 seqSearch() 함수 테스트

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

## 13.1.1 최솟값과 최댓값 검색

#### [예제 13-5] findMin() 함수

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

#### [예제 13-6] 배열의 최솟값 찾기

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

#### [예제 13-7] findMax() 함수

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

#### [예제 13-8] findMax() 함수 사용

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

## 13.1.2 자체 정렬 데이터

#### [예제 13-9] 자체 정렬 데이터를 포함하는 seqSearch() 함수

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

#### [예제 13-10] 향상된 자체 정렬 데이터 기법을 적용한 seqSearch() 함수

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

#### [예제 13-11] 자체 정렬 데이터를 적용한 검색

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

## 13.2 이진검색

#### [예제 13-12] 이진 검색 알고리즘 사용

```js
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;

    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] >data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1
}

function insertionsort(arr) {
    var temp, inner;
    for (var outer=1; outer<=arr.length-1; ++outer) {
        temp = arr[outer];
        inner = outer;

        while (inner>0 && (arr[inner-1]>=temp)) {
            arr[inner] = arr[inner-1];
            --inner;
        }
        arr[inner] = temp;
    }
}


var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
console.log(nums);

var val = prompt("Enter a value to search for: ");
var retVal = binSearch(nums, val);
if (retVal >= 0) {
    console.log("Found " + val + " at position " + retVal);
} else {
    console.log(val + " is not in array.");
}
```

#### [예제 13-13] 중간값을 표시하는 binSearch() 함수

```js
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;

    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        console.log("Current midpoint: " + mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] >data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1
}
```

#### [예제 13-14] count() 함수

```js
function count(arr, data) {
    var count = 0;
    var positon = binSearch(arr, data);
    if (positon > -1) {
        ++count;
        for (var i=positon-1; i>0; --i) {
            if (arr[i] == data) {
                ++count;
            } else {
                break;
            }
        }

        for (var i=positon+1; i<arr.length; ++i) {
            if (arr[i] == data)  {
                ++count;
            } else {
                break;
            }
        }
    }
    return count;
}
```

#### [예제 13-15] count() 함수 사용

```js
var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}

insertionsort(nums);
console.log(nums);

var val = prompt("Enter a value to count: ");
var retVal = count(nums, val);
if (retVal >= 0) {
    console.log("Found " + retVal + " occurrences of " + val);
} else {
    console.log(val + " is not in array.");
}
```

#### [http://norvig.com/big.txt](http://norvig.com/big.txt)

> var text= "The nationalism of Hamilton was undemocratic. The democracy of Jefferson was, in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyond the mountains, peopled by men and women from all sections and free from those state traditions which ran back to the early days of colonization. The voice of the democratic nationalism nourished in the West was heard when Clay of Kentucky advocated his American system of protection for industries; when Jackson of Tennessee condemned nullification in a ringing proclamation that has taken its place among the great American state papers; and when Lincoln of Illinois, in a fateful hour, called upon a bewildered people to meet the supreme test whether this was a nation destined to survive or to perish. And it will be remembered that Lincoln's party chose for its banner that earlier device--Republican--which Jefferson had made a sign of power. The \"rail splitter\" from Illinois united the nationalism of Hamilton with the democracy of Jefferson, and his appeal was clothed in the simple language of the people, not in the sonorous rhetoric which Webster learned in the schools.";

#### [예제 13-16] seqSearch()를 이용해 텍스트 파일 검색

```js
function seqSearch(arr, data) {
    for (var i=0; i<arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}

var words = text.split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log("Found " + word + " at position " + position);
    console.log("Sequential search took " + elapsed + " milliseconds.");
} else {
    console.log(word + " is not in the file.");
}
```

#### [예제 13-17] binSearch()로 텍스트 데이터 검색

```js
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;

    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] >data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1
}

function insertionsort(arr) {
    var temp, inner;
    for (var outer=1; outer<=arr.length-1; ++outer) {
        temp = arr[outer];
        inner = outer;

        while (inner>0 && (arr[inner-1]>=temp)) {
            arr[inner] = arr[inner-1];
            --inner;
        }
        arr[inner] = temp;
    }
}

var words = text.split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
    console.log("Found " + word + " at position " + position);
    console.log("Sequential search took " + elapsed + " milliseconds.");
} else {
    console.log(word + " is not in the file.");
}
```
