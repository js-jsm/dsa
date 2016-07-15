 class Dictionary {
	constructor() {
		this.datastore = [];
	}
	 
	_add(key,value){
		this.datastore[key] = value;
		return this;
	}
	 
	find(key){
		console.log("============\n" + key + " 전화번호 출력");
		return this.datastore[key];
	}
	 
	remove(key){
		delete this.datastore[key];
		console.log("=========");
		for (var i in this.datastore) {
			console.log(i + " -> " + this.datastore[i]);
		}
	}
	 
	showAll(){
		var keysArr = Object.keys(this.datastore).sort(),
		i = 0;
		console.log("=========");
		console.log(keysArr);
		this.datastore = this.datastore.sort();
		console.log("=========");
		for(var key in this.datastore ){
			console.log(keysArr[i] + " -> " + this.datastore[ keysArr[i] ]);
			++i;
		}
		return this;
	}
	 
	count(){
		var n = 0;
		for(var key in Object.keys(this.datastore)){
			n++;
		}
		return n;
	}
	 
	clear(){
		for(var key in this.datastore){
			delete this.datastore[key];
		}
		console.log(this.datastore);
	}
	
 }



//이름, 전화번호 저장
var phonebook = new Dictionary();
phonebook
	._add("피카츄", "023")
	._add("꼬부기", "112")
	._add("파이리", "445")
	._add("버터플", "983")
	._add("또가스", "345")
	._add("디그닥", "908")
	.showAll()
	.remove("피카츄");

console.log("============\n특정 전화번호 출력");
console.log(phonebook.find("꼬부기"));

console.log("============\n모든 전화번호 삭제");
phonebook.clear(); 