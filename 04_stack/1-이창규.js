class Stack {

	constructor(items){
		this.dataStore = items || [];
		this.top = 0;
	}

	push(item){
		this.dataStore[this.top++] = item;
	}

	pop(){
		return this.dataStore[--this.top];
	}

}

var Modify = function(target) {

	let modifyBit = new Stack();

	this.modifyText = target.split('') || [];

	this.modifyText.filter((item,index) => {
		if( item == '(' || item ==')' ){
			modifyBit.push(item);
		}
	});

	this.testMotion = function(){0
		let checkBool = true;

		for( var i = 0; modifyBit.dataStore.length > i; i++ ){
			if( modifyBit.pop() == '(' ){
				checkBool = false;
			}else if( modifyBit.pop() == ')' ) {
				checkBool = true;
			}
		}

		return checkBool? '문제없음' : '문제있음'

	};

}

let bogusModify = new Modify('10*(10+10)-(10');

console.log(bogusModify.testMotion());
