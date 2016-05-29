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

###2.4.3 배열 중간에 요소를 추가하거나 배열의 중간에 있는 요소 삭제하기
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

###2.4.4 배열 요소 정렬하기
```js
var nums = [1,2,3,4,5];
nums.reverse();
print(nums); // 5,4,3,2,1
```

```js
var names = ['David', 'Mike', 'Cynthia', 'Clayton', 'Bryan', 'Raymond'];
nums.sort();
print(names); // Bryan,Clayton,Cynthia,David,Mike,Raymond
```

```js
var nums = [3, 1, 2, 100, 4, 200];
nums.sort();
print(nums); // 1,100,2,200,3,4
```

```js
function compare(num1, num2){
  return num1 - num2;
}
var nums = [3, 1, 2, 100, 4, 200];
nums.sort();
print(nums); // 1,2,3,4,100,200
```

##2.5 반복자 함수

###2.5.1 배열을 만들지 않는 반복자 함수
```js
function square(num){
  print(num, num * num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);
```

```js
function isEven(num){
  return num % 2 === 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if(even) print('all numbers are even');
else print('not all numbers are even');
```

```js
function isEven(num) {
  return num % 2 == 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) print("some numbers are even");
else print("no numbers are even");
nums = [1,3,5,7,9];
var someEven = nums.some(isEven);
if (someEven) print("some numbers are even");
else print("no numbers are even");
```

```js
function add(runningTotal, currentValue){
  return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
print(sum);
```

```js
function concat(accumulatedString, item){
  return accumulatedString + item;
}
var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduce(concat);
print(sentence); // the quick brown fox
```

```js
function concat(accumulatedString, item){
  return accumulatedString + item;
}
var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduceRight(concat);
print(sentence); // fox brown quick the 
```

```js
function curve(grade){
  return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
print(newgrades); // 82,70,86,97,88
```

```js
function first(word){
  return word[0];
}
var words = ['for', 'your', 'information'];
var acronym = words.map(first);
print(acronym.join('')); // fyi
```

```js
function isEven(num) {
  return num % 2 === 0;
}
function isOdd(num) {
  return num % 2 !== 0;
}
var nums = [];
for (var i = 0; i < 20; ++i) {
  nums[i] = i+1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);
```

```js
function passing(num) {
  return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
  grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
print('All grades : ' + grades);
print('Passing grades : ' + passGrades);
```

```js
function afterc(str){
  if(str.indexOf('cie') > -1) return true;
  return false;
}
var words = ['recieve', 'deceive', 'percieve', 'deceit', 'concieve'];
var misspelled = words.filter(afterc);
print(misspelled); // ['recieve', 'percieve', 'concieve']
```


##2.6 이차원 배열과 다차원 배열

###2.6.1 이차원 배열 만들기
```js
var twod = [];
var rows = 5;
for(var i = 0 ; i < rows ; ++i){
  twod[i] = [];
}
```

```js
Array.matrix = function(numrows, numcols, initial) {
  var arr = [];
  for(var i = 0 ; i < numrows ; ++i){
   var columns = [];
   for(var j = 0 ; j < numcols ; ++j){
    columns[j] = initial;
   }
   arr[i] = columns;
  }
  return arr;
}
var nums = Array.matrix(5,5,0);
print(nums);
var names = Array.matrix(3,3,'Joe');
print(names);

/* :: ES6 :: */
Array.matrix = (numrows, numcols, initial) => 
  new Array(numrows).fill(new Array(numcols).fill(initial));
```


###2.6.2 이차원 배열 요소 처리하기
```js
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  print("Student " + parseInt(row+1) + " average: " +    
    average.toFixed(2));
  total = 0;
  average = 0.0;
}

/* :: ES6 :: */
const grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
const result = grades.reduce((p, c, i)=> 
`${p}Student ${i+1} average: ${(c.reduce((pg, cg) => 
  pg + cg) / c.length
).toFixed(2)}
`, ``);
```

```js
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
  for (var row = 0; row < grades[col].length; ++row) {
    total += grades[row][col];
  }
  average = total / grades[col].length;
  print("Test " + parseInt(col+1) + " average: " + 
    average.toFixed(2));
  total = 0;
  average = 0.0;
}

/* :: ES6 :: */
const grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
const result = grades[0].reduce((tp, tc, ti) => {
  let total = grades.reduce((gp, gc) => gp + gc[ti], 0);
  let average = (total / grades[0].length).toFixed(2);
  return `${tp}Test ${ti+1} average : ${average}
`;
}, '');
```

###2.6.3 들쭉날쭉한 배열
```js
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  print("Student " + parseInt(row+1) + " average: " +    
    average.toFixed(2));
  total = 0;
  average = 0.0;
}

/* :: ES6 :: */
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
const result = grades.reduce((p, c, i)=> 
`${p}Student ${i+1} average: ${(c.reduce((pg, cg) => 
  pg + cg) / c.length
).toFixed(2)}
`, ``);
```

##2.7 객체를 요소로 포함하는 배열
```js
function Point(x,y) {
  this.x = x;
  this.y = y;
}
function displayPts(arr) {
  for (var i = 0; i < arr.length; ++i) {
    print(arr[i].x + ", " + arr[i].y);
  }
}
var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i < points.length; ++i) {
  print("Point " + parseInt(i+1) + ": " + points[i].x + ", " + 
    points[i].y);
}
var p5 = new Point(12,-3);
points.push(p5);
displayPts(points);
points.shift();
displayPts(points);
```

##2.8 객체에 포함된 배열
```js
function weekTemps() {
  this.dataStore = [];
  this.add = function(temp) {
    this.dataStore.push(temp);
  };
  this.average = function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
      total += this.dataStore[i];
    }
    return total / this.dataStore.length;
  };
}
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // 54.875
```
