#04 Stack

##4.2 스택 구현
```js
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
}
```

```js
function push(element){
	this.dataStore[this.top++] = element;
}
```

```js
function pop(){
	return this.dataStore[--this.top];
}
```

```js
function peek(){
	return this.dataStore[this.top-1];
}
```

```js
function length(){
	return this.top;
}
```

```js
function clear(){
	this.top = 0;
}
```

```js
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function peek(){
	return this.dataStore[this.top-1];
}

function pop(){
	return this.dataStore[--this.top];
}

function clear(){
	this.top = 0;
}

function length(){
	return this.top;
}
```

```js
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length:" + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
```

##4.3 Stack  클래스 이용하기
###4.3.1 진법전환
```js
function mulBase(num, base){
	var s = new Stack();
	var converted = "";
	do{
		s.push(num % base);
		num = Math.floor(num /= base);
	} while(num > 0);
	while(s.length() > 0){
		converted= s.pop();
	}
	return converted;
}
```

```js
function mulBase(num, base){
	var s = new Stack();
	var converted = "";
	do{
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0);
	while(s.length() > 0){
		converted += s.pop();
	}
	return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
```

> 실은 `[num].toString([base])`만 쓰면 됨.
```js
(125).toString(8);  // "175" (10진수 125를 8진수로 전환)
(240).toString(16); // "f0"  (10진수 240을 16진수로 전환)
```


###4.3.2 회문
```js
function isPalindrome(word){
	var s = new Stack();

	for(var i = 0; i < word.length; ++i){
		s.push(word[i]);
	}
	var rword = "";
	while(s.length() > 0){
		rword+= s.pop();
	}
	if (word == rword){
		return true;
	}
	else{
		return false;
	}
}

var word = "hello";
if (isPalindrome(word)){
	console.log(word + " is a palindrome.");
} else{
	console.log(word + " is not a palindrome.");
}

word = "racecar";
if (isPalindrome(word)){
	console.log(word + " is a palindrome.");
} else {
	console.log(word + " is not a palindrome.");
}
```

> #### 회문 개선
> 아이디어 : n/2번만 비교해도 충분하다.
```js
function isPalindrome(word){
	var leftHalf = [];
	var rightHalf = [];
	word = word.split('');
	for(var i = 0 ; i < word.length / 2 ; i++){
		leftHalf.push(word[i]);
		rightHalf.push(word.pop());
	}
	if(leftHalf.every((v, i) => v === rightHalf[i])) return true;
	return false;
}
var word = "hello";
if (isPalindrome(word)){
	console.log(word + " is a palindrome.");
} else{
	console.log(word + " is not a palindrome.");
}
word = "racecar";
if (isPalindrome(word)){
	console.log(word + " is a palindrome.");
} else {
	console.log(word + " is not a palindrome.");
}
```

###4.3.3 재귀

```
5! = 5 * 4 * 3 * 2 * 1 = 120
```

```js
function factorial(n){
	if(n===0){
		return 1;
	} else {
		return n * factorial(n-1);
	}
}
```

```js
function fact(n){
	var s = new Stack();
	var product = 1;
	while (n > 1){
		s.push(n--);
	}
	while(s.length() > 0){
		product *= s.pop();
	}
	return product;
}
console.log(factorial(5)); //120 출력
console.log(fact(5)); //120 출력
```
