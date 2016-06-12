class List {
	constructor() {
		this.dataStore = [];
	}

	add(data) {
		this.dataStore.push(data);
	}

	getDataIndex(name) {
		for (var i=0, end=this.dataStore.length; i<end; ++i) {
			if (this.dataStore[i].getName() == name)
				return i;
		}
		return -1;
	}

	findBySex(sex) {
		var names = sex.concat(": ");

		for (var i=0, end=this.dataStore.length; i<end; ++i) {
			if (this.dataStore[i].getSex() == sex) {
				names = names.concat(this.dataStore[i].getName(), ",");
			}
		}

		// slice(start, end)
		// 양수는 앞에서부터 탐색, 음수는 뒤에서부터 탐색
		// 양수시 마지막 미포함, 음수시 처음 미포함
		names = names.slice(0, -1);
		console.log(names);
	}

}

class Person {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}

	getName() {
		return this.name;
	}

	getSex() {
		return this.sex;
	}

	toString() {
		console.log(this.name.concat(", ", this.sex));
	}
}

// Test
var susan = new Person('Susan', 'W');
susan.toString();
var lloyd = new Person('Lloyd', 'M');
lloyd.toString()
var john = new Person('John', 'M');
john.toString();

var personList = new List();
personList.add(susan);
personList.add(lloyd);
personList.add(john);

var lloydIndex = personList.getDataIndex('Lloyd');
if (lloydIndex < 0) {
	console.log("getDataIndex() Faild");
}

personList.findBySex('M');
personList.findBySex('W');