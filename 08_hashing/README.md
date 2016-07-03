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

아직 작성중입니다.




























