/* DSA - 정재남 @160616 */

/**
 * [ 피보나치수열(Fibonacci Sequence) ]
 * 0 1 1 2 3 5 8 13 21 34 55 식으로 무한히 증가하는 수열.
 * 연속된 두 개의 수를 더한 값이 다음 항의 값이 된다.
 * Fn = Fn-1 + Fn-2
 * F0 = 0, F1 = 1
 */

/**
 * QUIZ ) 사용자가 지정한 임의의 n번째의 피보나치 수를 구하시오.
 */


/**
 * [ Binary Recursion ]
 */
function fibonacci(n){
    if(n === 1) return 1;
    if(n === 0) return 0;
    return fibonacci(n-1) + fibonacci(n-2);
}
fibonacci(10) // 55


/**
 * [ Tail Recursion ]
 */
function fibo(n){
    function loop(arr){
        var i = arr.length;
        arr.push(arr[i-1] + arr[i-2]);
        if(i < n) loop(arr);
        return arr;
    }
    return loop([0, 1]).pop();
}
fibo(10) // 55


/**
 * [ convert to Loop ]
 */
function fbnc(n){
    var arr = [0, 1], i = 2;
    do {
        arr.push(arr[i-1] + arr[i-2]);
        i++;
        if(i > n) return arr.pop();
    } while(true);
}
fbnc(10) // 55


/*
성능비교 1 : http://jindo.dev.naver.com/jsMatch/index.html?d=236
성능비교 2 : http://jindo.dev.naver.com/jsMatch/index.html?d=237
통합비교   : http://jindo.dev.naver.com/jsMatch/index.html?d=238
*/