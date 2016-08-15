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
