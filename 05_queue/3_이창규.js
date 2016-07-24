class Queue {

	constructor(items){
		this.dataStore = items || [];

	}

	total(){
		return this.dataStore.length;
	}

	enqueue(element){
		this.dataStore.push(element);
		console.log(`${element}님 대기실에 입장, 총 ${this.total()}명의 대기자`);
	}

	dequeue(){
		console.log(`치료가 완료되었습니다 다음 대기환자 들어오세요`)
		return	this.dataStore.shift();
	}

	front(){
		return this.dataStore[0];
	}

	back(){
		return this.dataStore[this.dataStore.length-1];
	}

	toString(){
		let reStr = ``;
		let alldata =  this.dataStore;
		this.dataStore.forEach(function (item, index, array) {
			reStr += `${index+1}번째손님은 ${item} `
		});
		reStr += `입니다.`
		console.log(reStr);
	}

	empty(){
		if( this.total() == 0 ){

		}
	}
}

let basicList = ["곽태림", "김윤웅"];
let waitRegisty = new Queue(basicList);

waitRegisty.enqueue("장슬기");
waitRegisty.enqueue("이창규");
waitRegisty.dequeue();
waitRegisty.toString();
