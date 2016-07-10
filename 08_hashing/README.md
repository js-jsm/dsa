#08 Hashing

##8.2 Hash Table Class

```js
//hash table 클래스 생성자
function HashTable () {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;   //아래에서 살펴볼 것
}
```

###8.2.1 Hash 함수 선택하기

```js
//간단한 문자열 해시 함수의 정의
function simpleHash (data) {
    var total = 0;
    for ( var i = 0; i < data.length; ++i ) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}
```

```js
function HashTable () {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

function put (data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}

function simpleHash (data) {
    var total = 0;
    for ( var i = 0; i < data.length; ++i ) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function showDistro () {
    var n = 0;
    for ( var i = 0; i < this.table.length; ++i ) {
        if ( this.table[i] != undefined ) {
            console.log( i + " : " + this.table[i] );
        }
    }
}
```

[예제 8-1] 간단한 해시 함수를 이용한 해싱

```js
load("HashTable.js");
var someNames = ["David", "jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for ( var i = 0; i < someNames.length; ++i ) {
    hTable.put( someNames[i] );
}
hTable.showDistro();

/*
//출력결과
35 : Cynthia
45 : Clayton
57 : Donnie
77 : David
95 : Danny
116 : Mike
132 : Jennifer
134 : Jonathan
*/
```
[예제 8-1] print 추가

```js
function simpleHash(data) {
   var total = 0;
   for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
   }
   print("Hash value: " + data + " -> " + total);
   return total % this.table.length;
}
/* 출력결과
Hash value: David -> 488
Hash value: Jennifer -> 817
Hash value: Donnie -> 605
Hash value: Raymond -> 730
Hash value: Cynthia -> 720
Hash value: Mike -> 390
Hash value: Clayton -> 730
Hash value: Danny -> 506
Hash value: Jonathan -> 819
35: Cynthia
45: Clayton
57: Donnie
77: David
95: Danny
116: Mike
132: Jennifer
134: Jonathan
*/
```

###8.2.2 더 좋은 해시 함수

```js
function betterHash(string) {
   const H = 37;
   var total = 0;
   for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
   total = total % this.table.length;
   if (total < 0) {
      total += this.table.length-1;
   }
   return parseInt(total);
}
```

[예제 8-2] betterHash함수를 포함하는  HashTable 클래스

```js
function HashTable() {
   this.table = new Array(137);
   this.simpleHash = simpleHash;
   this.betterHash = betterHash;
   this.showDistro = showDistro;
   this.put = put;
   //this.get = get;
}

function put(data) {
   var pos = this.betterHash(data);
   this.table[pos] = data;
}
   
function simpleHash(data) {
   var total = 0;
   for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
   }
   print("Hash value: " + data + " -> " + total);
   return total % this.table.length;
}

function showDistro() {
   var n = 0;
   for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
         print(i + ": " + this.table[i]);
      }
   }
}

function betterHash(string) {
   const H = 37;
   var total = 0;
   for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
   total = total % this.table.length;
   if (total < 0) {
      total += this.table.length-1;
   }
   return parseInt(total);
}
```

[예제 8-3] betterHash함수 테스트

```js
load("HashTable.js");
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
                 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
   hTable.put(someNames[i]);
}
hTable.showDistro();
/*출력결과
17:Cynthia
25:Donnie
30:Mike
33:Jennifer
37:Jonathan
57:Clayton
65:David
66:Danny
99:Raymond
*/
```

###8.2.3 정수 키 해싱

```js
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
   for (var i = 0; i < arr.length; ++i) {
      var num = "";
      for (var j = 1; j <= 9; ++j) {
         num += Math.floor(Math.random() * 10);
      }
      num += getRandomInt(50,100);
      arr[i] = num;
   }
}
```

[예제8-4] 정수 키 해싱

```js
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
   for (var i = 0; i < arr.length; ++i) {
      var num = "";
      for (var j = 1; j <= 9; ++j) {
         num += Math.floor(Math.random() * 10);
      }
      num += getRandomInt(50,100);
      arr[i] = num;
   }
}

load("HashTable.js");
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
print ("Student data: \n");
for (var i = 0; i < students.length; ++i) {
   print(students[i].substring(0,8) + " " + 
         students[i].substring(9));
}
print("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
   hTable.put(students[i]);
}
hTable.showDistro();
/*출력결과
24553918 70
08930891 70
41819658 84
04591864 82
75760587 91
78918058 87
69774357 53
52158607 59
60644757 81
60134879 58

Data Distribution

41: 52158607059
42: 08930891470
47: 60644757681
50: 41819658384
53: 60134873958
54: 75760587691
61: 78918058787
*/
```

###8.2.4 해시 테이블에 테이터를 저장하거나 테이터 가져오기

```js
function put(key, data){
    var pos = this.betterHash(key);
    this.table[pos] = key;
}
```

```js
function get(key) {
   return this.table[this.betterHash(key)];
}
```

```js
load("HashTable.js");
var pnumbers = new HashTable();
var name, number;
for (var i = 0; i < 3; i++){
    putstr("Enter a name (space to quit): ");
    name = readline();
    putstr("Enter a number");
    number = readine();
}
name = "";
putstr("Name for number (Enter quit to staop): ");
while (name != "quit"){
    name = readine();
    if(name == "quit"){
        break;
    }
    print(name + "'s number is" + pnumbers.get(name));
    pustrt("Name for number (Enter quit to stop)")
}

```

##8.3 충돌 처리

###8.3.1 분리된 체인

```js
function buildChains(){
    for(var i = 0; i < this.table.length; ++i){
        this.table[i] = new Array();
    }
}
```

[예제8-5] 분리된 체인을 이용한 충돌 해결

```js
load("HashTable.js");
var hTable = new HashTable();
hTable.buildChains();
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
                 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for (var i = 0; i < someNames.length; ++i) {
   hTable.put(someNames[i]);
}
hTable.showDistro();
```

```js
function showDistro() {
   var n = 0;
   for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
         print(i + ": " + this.table[i]);
      }
   }
}
```

```js
/*출력결과
60: David
68: Jennifer
69: Mike
70: Donnie, Jonathan
78: Clayton, Danny
88: Raymond, Clayton
*/
```

```js
function put(key, data) {
   var pos = this.betterHash(key);
   var index = 0;
   if (this.table[pos][index] == undefined) {
      this.table[pos][index] = data;
   }
   ++index;
   else {
      while (this.table[pos][index] != undefined) {
         ++index;
      }
      this.table[pos][index] = data;
   }
}
```

```js
function get(key) {
   var index = 0;
   var hash = this.betterHash(key);
   if (this.table[pos][index] = key) {
      return this.table[pos][index+1];
   }
   index += 2;
   else {
      while (this.table[pos][index] != key) {
         index += 2;
      }
      return this.table[pos][index+1];
   }
   return undefined;
}
```

###8.3.2 선형 조사

```js
function put(key, data) {
   var pos = this.betterHash(key);
   if (this.table[pos] == undefined) {
      this.table[pos] = key;
      this.values[pos] = data;
   }
   else {
      while (this.table[pos] != undefined) {
         pos++;
      }
      this.table[pos] = key;
      this.values[pos] = data;
   }
}
```

```js
function get(key) {
   var hash = -1;
   hash = this.betterHash(key);
   if (hash > -1) {
      for (var i = hash; this.table[hash] != undefined; i++) {
         if (this.table[hash] == key) {
            return this.values[hash];
         }
      }
   }
   return undefined;
}
```
























