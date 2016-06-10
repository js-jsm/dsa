#05 Queue

##5.2 배열 기반의 큐 클래스 구현
```js
names = [];
names.push("Cynthia");
names.push("Jennifer");
console.log(names); // Cynthia,Jennifer 출력

```

```js
names.shift();
console.log(names); // Jennifer 출력
```

```js
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}
```

```js
function enqueue(element) {
	this.dataStore.push(element);
}
```

```js
function dequeue() {
	return this.dataStore.shift();
}
```

```js
function front() {
	return this.dataStore[0];
}
```

```js
function toString() {
	var retStr = "";
	for (var i=0; i<this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}
```

```js
function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}
```

### > 전체 코드
```js
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length-1];
}

function toString() {
	var retStr = "";
	for (var i=0; i<this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

// 테스트 프로그램
var queue = new Queue();
queue.enqueue("Meredith");
queue.enqueue("Cynthia");
queue.enqueue("Jennifer");
console.log(queue.toString());
queue.dequeue();
console.log("Front of Queue: " + queue.front());
console.log("End of Queue: " + queue.back());
```

##5.3 큐 클래스 사용하기: [스퀘어 댄스](https://www.youtube.com/watch?v=MfNMePQuoQU) 파티에서 파트너 정하기

```
F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney
```


```js
function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}
```

```js
function getDancers(males, females) {
	var dancertxt = "F Allison McMillan\nM Frank Opitz\nM Mason McMillan\nM Clayton Ruff\nF Cheryl Ferenback\nMRaymond Williams\nF Jennifer Ingram\nM Bryan Frazer\nM David Durr\nM Danny Martin\nF Aurora Adney";

	// var names = read("dancer.txt").split("\n");
	var names = dancertxt.split("\n"); 

	for (var i=0; i<names.length; ++i) {
		names[i] = names[i].trim();
	}

	for (var j=0; j<names.length; ++j) {
		var dancer = names[j].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == "F") {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}
```

```js
function dance(males, females) {
	console.log("The dance partenrs are: \n");
	while (!females.empty() && !males.empty()) {
		person = females.dequeue();
		console.log("Female Dancer is: " + person.name);
		person = males.dequeue();
		console.log(" and the male dance is: " + person.name);
	}
}
```

### > 전체 코드
```js
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length-1];
}

function toString() {
	var retStr = "";
	for (var i=0; i<this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}


var dancertxt = "F Allison McMillan\nM Frank Opitz\nM Mason McMillan\nM Clayton Ruff\nF Cheryl Ferenback\nMRaymond Williams\nF Jennifer Ingram\nM Bryan Frazer\nM David Durr\nM Danny Martin\nF Aurora Adney";

function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers(males, females) {
	// var names = read("dancer.txt").split("\n");
	var names = dancertxt.split("\n");

	for (var i=0; i<names.length; ++i) {
		names[i] = names[i].trim();
	}

	for (var j=0; j<names.length; ++j) {
		var dancer = names[j].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == "F") {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females) {
	console.log("The dance partenrs are: \n");
	while (!females.empty() && !males.empty()) {
		person = females.dequeue();
		console.log("Female Dancer is: " + person.name);
		person = males.dequeue();
		console.log(" and the male dance is: " + person.name);
	}
}

// 테스트 프로그램
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
	console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
	console.log(maleDancers.front().name + " is waiting to dance.");
}
```

```js
function count() {
	return this.dataStore.length;
}
```

```js
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	
	this.count = count; // 추가
}
```

```js
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (femaleDancers.count() > 0) {
	console.log("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}
if (maleDancers.count() > 0) {
	console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
}
```

##5.4 큐로 데이터 정렬하기
```js
function distribute(nums, queues, n, digit) { // digit는 1의 자리 숫자인지, 10의 자리 숫자인지 판단하는 인자
	for (var i=0; i<n; ++i) {
		if (digit == 1) {
			queues[nums[i]%10].enqueue(nums[i]);
		} else {
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}
	}
}
```

```js
function collect(queues, nums) {
	var i = 0;
	for (var digit=0; digit<10; ++digit) {
		while (!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}
```

### > 전체 코드
```js
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length-1];
}

function toString() {
	var retStr = "";
	for (var i=0; i<this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}


function distribute(nums, queues, n, digit) { // digit는 1의 자리 숫자인지, 10의 자리 숫자인지 판단하는 인자
	for (var i=0; i<n; ++i) {
		if (digit == 1) {
			queues[nums[i]%10].enqueue(nums[i]);
		} else {
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}
	}
}

function collect(queues, nums) {
	var i = 0;
	for (var digit=0; digit<10; ++digit) {
		while (!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function dispArray(arr) {
	console.log(arr);
}

// 테스트 프로그램
var queues = [];
for (var i=0; i<10; ++i) {
	queues[i] = new Queue();
}
var nums = [];
for (var i=0; i<10; ++i) {
	nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);

distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ")
dispArray(nums);
```
##5.5 우선순위 큐
```js
function Patient(name, code) {
	this.name = name;
	this.code = code;
}
```

```js
function dequeue() {
	var entry = 0;
	for (var i=0; i<this.dataStore.length; ++i) {
		if (this.dataStore[i].code < this.dataStore[entry].code) {
			entry = i;
		}
	}
	return this.dataStore.splice(entry,1);
}
```

```js
function toString() {
	var retStr = "";
	for (var i=0; i<this.dataStore.length; ++i) {
		retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
	}
	return retStr;
}
```


```js
// 테스트 프로그램
var patient= new Patient("Smith", 5);
var queue = new Queue();
queue.enqueue(patient)
patient = new Patient("Jones", 4);
queue.enqueue(patient);
patient = new Patient("Fehrenbach", 6);
queue.enqueue(patient);
patient = new Patient("Brown", 1);
queue.enqueue(patient);
patient = new Patient("Ingram", 1);
queue.enqueue(patient);
console.log(queue.toString());

var seen = queue.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(queue.toString());

// 다음 환자 치료
seen = queue.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(queue.toString());

seen = queue.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(queue.toString());
```