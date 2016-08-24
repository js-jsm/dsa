class Arr {
	constructor() {
		this._list = new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1);
	}

	bubbleSort() {
		let len  	  = this.list.length,
			cnt       = len,
			loopCount = 0;

		//100 -> 1 회차 -> 100회 
		//99 -> 2회차 -> 99회. 
		//98 -> 3회차 -> 98.. 
		//
		//
		//0 
		for(let i = 0; i < len; i++, cnt--)
			for(let j = 0; j < cnt; j++, loopCount++) 
				if(this.list[j] > this.list[j + 1])
					this.bitSwap(j, j + 1);

		//cnt를 사용하지 않고 루프를 돌릴 경우 약 5000회 이상의 반복문을 추가하게 된다. 
		console.log(this.list, loopCount);
	}

	swapTwo(i, j) {
		this.list[j] = [this.list[i], this.list[i] = this.list[j]][0];
	}

	swapOne(i, j) {
		[this.list[i], this.list[j]] = [this.list[j], this.list[i]];
	}

	bitSwap(i, j) {
		if(this.list[i] == this.list[j])
			return;

		this.list[i] ^= this.list[j];
		this.list[j] ^= this.list[i];
		this.list[i] ^= this.list[j];
	}

	set list(list) {this._list = list;}
	get list() {return this._list;}
}


new Arr().bubbleSort();