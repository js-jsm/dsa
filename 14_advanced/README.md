#작성중

#14 Advanced Algorithms

##14.1 동적프로그래밍
>- 자바스크립트를 포함한 많은 언어는 재귀코드에 최적화 되어 있지 않아 효율성이 떨어짐.
>- 일부 명령형, 객체지향 프로그래밍 언어에서는 재귀를 중요한 프로그래밍 기법으로 여기지 않아 재귀 성능이 좋지 않은 편.
>- 재귀 기법으로 해결 할 수 있는 대부분은 동적프로그래밍으로 해결 가능.

###14.1.1 동적프로그래밍 예제 : 피보나치 숫자 계산
>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

```js
function recurFib(n) {
    if ( n < 2 ) {
        return n;
    } else {
        return recurFib(n - 1) + recurFib(n - 2);
    }
}

console.log(recurFib(10));
```

```js
//동적 프로그래밍 방식의 피보나치 숫자 계산

function dynFib(n) {
    var val = [];
    
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }

    if ( n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}

//결과값 : val = [0, 1, 2, 3, 5, 8, 13, ...]
```

####[예제 14-1] 피보나치 함수 재귀 버전과 동적 프로그래밍 버전의 성능 테스트
```js
function recurFib(n) {
    if ( n < 2 ) {
        return n;
    } else {
        return recurFib(n-1) + recurFib(n-2);
    }
}

function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
        val[i] = 0;
    }

    if ( n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}

var start = new Date().getTime();
console.log(recurFib(10));
var stop = new Date().getTime();
console.log("recursive time - " + (stop - start) + "ms");
start = new Date().getTime();
console.log(dynFib(10));
stop = new Date().getTime();
console.log("dynamic programing time - " + (stop - start) + "ms");

/*
[10을 실행한 결과]

832040
recursive time - 0 ms

832040
dynamic programing time - 0 ms
*/

/*
[20을 실행한 결과]

6765
recursive time - 1 ms

6765
dynamic programing time - 0 ms
*/

/*
[30을 실행한 결과]

832040
recursive time - 17 ms

832040
dynamic programing time - 0 ms
*/
```

```js
//재귀 기법이 아닌 반복 기법을 사용한 피보나치 함수

function iterFib(n) {
    var last = 1,
        nextLast = 1,
        result = 1;

    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
```


###14.1.2 가장 긴 공통 문자열 찾기

####[예제 14-2] 두 문자열의 가장 긴 공통 문자열을 찾는 함수
```js
function lcs(word1, word2) {
    var max = 0,
        index = 0,
        lcsarr = new Array(word1.length+1);

    for (var i = 0; i <= word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length+1);
        for (var j = 0; j <word2.length + 1; ++j) {
            lcsarr[i][j] = 0;
        }
    }

    for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            } else {
                if (word1[i-1] == word2[j-1]) {
                    lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
                } else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }

    var str = "";

    if (max == 0) {
        return "";
    } else {
        for (var i = index - max; i <= max; ++i) {
            str += word2[i];
        }
        return str;
    }
}
```

###14.1.3 배낭 문제 : 재귀해법
```js
function max(a, b) {
    return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }

    if (size[n-1] > capacity) {
        return knapsack(capacity, size, value, n-1);
    } else {
        return max(
            value[n-1]
            + knapsack(capacity - size[n-1], size, value, n-1),
            knapsack(capacity, size, value, n-1)
        );
    }
}

var value = [4, 5, 10, 11, 13],
    size = [3, 4, 7, 8, 9],
    capacity = 16,
    n = 5;
console.log(knapsack(capacity, size, value, n));

//출력결과 : 23
```

###14.1.4 배낭문제 : 동적 프로그래밍 해법
####[예제 14-3] 동적 프로그래밍을 이용한 배낭문제 해결
```js
function max(a, b) {
    return (a > b) > a : b;
}

function dknapsack(capacity, size, value, n) {
    var K = [];
    for (var i = 0; i <= capacity + 1; ++i) {
        K[i] = [];
    }
    for (var i = 0; i <= n; i++) {
        for ( var w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0) {
                K[i][w] = 0;
            } else if (size[i-1] <= w) {
                K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]], K[i-1][w]);
            } else {
                K[i][w] = K[i-1][w];
            }
            putstr(K[i][w] + " ");
        }
        print();
    }
    return K[n][capacity];
}

var value = [4, 5, 10, 11, 13],
    size = [3, 4, 7, 8, 9],
    capacity = 16,
    n = 5;
console.log(dknapsack(capacity, size, value, n));

/*
결과값

0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0  0
0  0  0  4  4  4  4  4  4  4  4  4  4  4  4  4  4
0  0  0  4  5  5  5  9  9  9  9  9  9  9  9  9  9
0  0  0  4  5  5  5 10 10 10 14 15 15 15 19 19 19
0  0  0  4  5  5  5 10 11 11 14 15 16 16 19 21 21
0  0  0  4  5  5  5 10 11 13 14 15 17 18 19 21 23
23
*/
```


##14.2 탐욕 알고리즘
###14.2.1 첫번째 탐욕 알고리즘 예제 : 동전 거스름돈 문제
####[예제 14-4] 탐욕 알고리즘을 이용해 동전 거스름돈 문제 해결
```js
function makeChange(origAmt, coins) {
    var remainAmt = 0;

    if (origAmt % 0.25 < origAmt) {
        coins[3] = parseInt(origAmt / 0.25);
        remainAmt = origAmt % 0.25;
        origAmt = remainAmt;
    }

    if (origAmt % 0.1 < origAmt) {
        coins[2] = parseInt(origAmt / 0.1);
        remainAmt = origAmt % 0.1;
        origAmt = remainAmt;
    }

    if (origAmt % 0.05 < origAmt) {
        coins[1] = parseInt(origAmt / 0.05);
        remainAmt = origAmt % 0.05;
        origAmt = remainAmt;
    }

    coins[0] = parseInt(origAmt / 0.01);
}

function showChange(coins) {
    if(coins[3] > 0) {
        console.log("Number of quarters - " + coins[3] + " - " + coins[3] * 0.25);
    }

    if(coins[2] > 0) {
        console.log("Number of dimes - " + coins[2] + " - " + coins[2] * 0.10);
    }

    if(coins[1] > 0) {
        console.log("Number of nickels - " + coins[1] + " - " + coins[1] * 0.05);
    }

    if(coins[0] > 0) {
        console.log("Number of pennis - " + coins[0] + " - " + coins[0] * 0.01);
    }
}

var origAmt = 0.63,
    coins = [];
makeChange(origAmt, coins);
showChange(coins);

/*
결과값

Number of quarters - 2 - 0.5
Number of dimes - 1 - 0.1
Number of quarters - 3 - 0.03
*/
```

###14.2.2 탐욕 알고리즘으로 배낭 문제 해결하기
>배낭문제의 알고리즘
>1. 배낭의 용량은 W, 물건의 가치는 v, 물건의 무게는 w다.
>2. 항목의 값어치는 v/w 비율로 평가한다.
>3. 값어치가 높은 물건부터 고려한다.
>4. 가능한 한 많은 물건을 추가한다.

####[표 14-1] 물건의 무게, 값, 비율 정보
| 물건 | A  | B   | C  | D  |
|:----:|:--:|:---:|:--:|:--:|
| 값   | 50 | 140 | 60 | 60 |
| 무게 | 5  | 20  | 10 | 12 |
| 비율 | 10 | 7   | 6  | 5  |