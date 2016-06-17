## 재귀함수의 종류
###1. Linear Recursion 선형재귀
재귀를 돌 때마다 이전 함수의 결과가 다음함수의 인자로 됨.
```js
function factorial(n){
  if(n < 1) return 1;
  return n * factorial(n-1);
}
```

###2. Tail Recursion 꼬리재귀
이전 함수의 결과값을 기억할 필요 없이 마지막 결과만을 기억하면 되는 선형재귀.  
선형재귀를 꼬리재귀로 치환하면, 반복문으로 바꾸기가 용이해진다.
```js
function factorial(num){
  function loop(n, ans){
    if(n <= 0) return ans;
    return loop(n - 1, n * ans);
  }
  return loop(num, 1);
}
```

```js
function factorialWithWhile(n){
  let ans = 1;
  while(n > 0) {
    ans = ans * n--;
  }
  return ans;
}
```

###3. Binary Recursion 
재귀함수 내에 함수호출이 두 개 이상인 경우.  
예) 조합 (nCr), 피보나치수열, (x+y)^n의 결과값 도출 등.

###4. Nested Recursion
재귀함수의 인자에 재귀함수 자체가 쓰이는 경우.  
기하급수적으로 재귀호출이 늘어나므로 컴퓨터 성능테스트 용으로 쓰인다.


###5. Mutual Recursion
두 개의 함수가 서로 상대 함수를 호출하는 형태.
```js
function isEven(n){
  if(n === 0) return true;
  return isOdd(n-1);
}
function isOdd(n){
  return !isEven(n);
}
```


### > 참고
[Recursive Algorithm](http://proneer.tistory.com/230)  
[Type of Recursion](http://proneer.tistory.com/231)
