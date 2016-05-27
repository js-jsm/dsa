#02 Arrays

##2.2 배열 사용하기
###2.2.1 배열 만들기
```js
var numbers = [];
```

```js
print(numbers.length); // 0
```

```js
var numbers = [1, 2, 3, 4, 5];
print(numbers.length); // 5
```

```js
var numbers = new Array();
print(numbers.length); // 0
```

```js
var numbers = new Array(1, 2, 3, 4, 5);
print(numbers.length); // 5
```

```js
var numbers = new Array(10);
print(numbers.length); // 10
```

```js
var objects = [1, "Joe", true, null];
```

```js
var number = 3;
var arr = 7, 4, 1776];
print(Array.isArray(number)); // false
print(Array.isArray(arr)); // true
```


###2.2.2 배열 요소 접근하고 값 고치기
```js
var nums = [];
for (var i = 0 ; i < 100 ; ++i) {
  nums[i] = i + 1;
}
```

```js
var nums = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
print(sum); // 15
```

```js
var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for(var i = 0 ; i < numbers.length ; ++i) {
  sum += numbers[i];
}
print(sum); // 53
```


###2.2.3 문자열로 배열 만들기
```js
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(' ');
for(var i = 0 ; i < words.length ; ++i) {
  print('word ' + i + ': ' + words[i]);
}
```

```js
var nums = [];
for (var i = 0 ; i < 10 ; ++i) {
  nums[i] = i+1;
}
var samenums = nums;
```

```js
var nums = [];
for (var i = 0 ; i < 10 ; ++i) {
  nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
print(samenums[0]); // 400
```

```js
function copy(arr1, arr2) {
  for(var i = 0 ; i < arr1.length ; ++i){
    arr2[i] = arr1[i];
  }
}
```

```js
var nums = [];
for (var i = 0 ; i < 10 ; ++i) {
  nums[i] = i+1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
print(samenums[0]); // 1
```

##2.3 접근자 함수

###2.3.1 값 검색하기
```js
var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];
putstr('Enter a name to search for: ');
var name = readline();
var position = names.indexOf(name);
if(position >= 0) print('Found' + name + ' at position ' + position);
else print(name + ' not found in array.');
```

```js
var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];
var name = 'Mike';
var firstPos = names.indexOf(name);
print('First found ' + name + ' at position ' + firstPos);
var lastPos = names.lastIndexOf(name);
print('Last found ' + name + ' at position ' + lastPos);
```

###2.3.2 배열을 문자열로 표현하기
```js
var names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];
var namestr = names.join();
print(namestr); // David,Cynthia,Raymond,Clayton,Jennifer
namestr = names.toString();
print(namestr); // David,Cynthia,Raymond,Clayton,Jennifer
```

###2.3.3 기존 배열을 이용해 새 배열 만들기
```js
var cisDept = ['Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer'];
var dmpDept = ['Raymond', 'Cynthia', 'Bryan'];
var itDiv = cisDept.concat(dmpDept);
print(itDiv); // Mike,Clayton,Terrill,Danny,Jennifer,Raymond,Cynthia,Bryan
itDiv = dmpDept.concat(cisDept);
print(itDiv); // Raymond,Cynthia,Bryan,Mike,Clayton,Terrill,Danny,Jennifer
```

```js
var itDiv = ['Mike', 'Clayton', 'Terrill', 'Raymond', 'Cynthia','Danny', 'Jennifer'];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
print(dmpDept); // Raymond,Cynthia,Danny
print(cisDept); // Mike,Clayton,Terrill,Jennifer
```

##2.4 변형자 함수
###2.4.1 배열에 요소 추가하기
```js
var nums = [1,2,3,4,5];
print(nums); // 1,2,3,4,5
nums.push(6);
print(nums); // 1,2,3,4,5,6
```

```js
var nums = [1,2,3,4,5];
print(nums); // 1,2,3,4,5
nums[nums.length] = 6;
print(nums); // 1,2,3,4,5,6
```

```js
var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N ; i >= 0 ; --i) nums[i] = nums[i-1];
nums[0] = newnum;
print(nums); // 1,2,3,4,5
```

```js
var nums = [2,3,4,5];
var newnum = 1;
nums.unshift(newnum);
print(nums); // 1,2,3,4,5
nums = [3,4,5];
nums.unshift(newnum, 2);
print(nums); // 1,2,3,4,5
```

###2.4.2 배열의 요소 삭제하기
```js
var nums = [1,2,3,4,5,9];
nums.pop();
print(nums); // 1,2,3,4,5
```

```js
var nums = [9,1,2,3,4,5];
print(nums); // 9,1,2,3,4,5
for(var i = 0 ; i < nums.length ; ++i) {
  nums[i] = nums[i+1];
}
print(nums); // 1,2,3,4,5,
```

```js
var nums = [9,1,2,3,4,5];
nums.shift();
print(nums); // 1,2,3,4,5
```

```js
var nums = [6,1,2,3,4,5];
var first = nums.shift();
nums.push(first);
print(nums); // 1,2,3,4,5,6
```

###2.4.3 배열 중간에 요솔르 추가하거나 배열의 중간에 있는 요소 삭제하기
```js
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
print(nums); // 1,2,3,4,5,6,7,8,9
```

```js
var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
print(nums); // 1,2,3,4,5
```

#2.4.4 배열 요소 정렬하기





