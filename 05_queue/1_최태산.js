class Deque {
	constructor() {
		this._deque = [];
	}

	frontPush(v) {
		this.deque.unshift(v);
		return this;
	}

	frontPop() {
		return this.deque.shift();
	}

	backPush(v) {
		this.deque.push(v);
		return this;
	}

	backPop() {
		return this.deque.pop();
	}

	

	print() {
		console.log(this.deque);
	}

	get deque() {
		return this._deque;
	}
}

class Calc {
	constructor(str) {
		this.str = str;
		this.deque = new Deque();

		this.init();
	}

	init() {
		this.str
		.replace(new RegExp(' ', 'g'), '')
		.split('')
		.map(str => this.deque.backPush(str));
	}

	checkStr() {
		let front 		 = this.deque.frontPop(), 
			back 		 = this.deque.backPop(),
			isPalindrome = true;

		while(!front || !back) {
			if(front !== back) {
				isPalindrome = false;
				break;
			}

			front = this.deque.frontPop();
			back  = this.deque.backPop();
		} 

		if(isPalindrome)	
			console.log('회문 입니다.');
		else
			console.log('회문이 아닙니다.');
	}
}

const deque = new Deque();


// 1-1 
deque
	.frontPush(3)
	.backPush(4)	
	.print();

deque.frontPop();
deque.backPop();
deque.print();


//1-2
new Calc('가련하시다 사장집 아들 딸들아 집장사 다시 하련가')
	.checkStr();