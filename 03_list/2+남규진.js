class List {
	constructor() {
		this.dataStore = [];
	}

	add(data) {
		this.dataStore.push(data);
	}

	getDataIndex(name) {
		for (var i=0, end=this.dataStore.length; i<end; ++i) {
			if (this.dataStore[i].name == name)
				return i;
		}
		return -1;
	}

	findBySexUsingConcat(sex) {
		var names = sex.concat(": ");

		for (var i=0, end=this.dataStore.length; i<end; ++i) {
			if (this.dataStore[i].sex == sex) {
				names = names.concat(this.dataStore[i].name, ",");
			}
		}

		// slice(start, end)
		// 양수는 앞에서부터 탐색, 음수는 뒤에서부터 탐색
		// 양수시 마지막 미포함, 음수시 처음 미포함
		names = names.slice(0, -1);
		console.log(names);
	}

	findbySexUsingJoin(sex) {
		var names = [];

		for (var i=0, end=this.dataStore.length; i<end; ++i) {
			if (this.dataStore[i].sex == sex) {
				names.push(this.dataStore[i].name);
			}
		}

		console.log(names.join(","));
	}
}

class Person {
	constructor(name, sex) {
		this.personName = name;
		this.personSex = sex;
	}

	get name() {
		return this.personName;
	}

	get sex() {
		return this.personSex;
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

// Using concat
personList.findBySexUsingConcat('M');
personList.findBySexUsingConcat('W');

// Using join
personList.findbySexUsingJoin('M');
personList.findbySexUsingJoin('W');
