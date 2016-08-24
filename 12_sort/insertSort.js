class Arr {
	constructor() {
		this._list = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
		//this._list = new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1);
	}

	insertSort() {
		let len  	  = this.list.length,
			loopCount = 0,
			timer 	  = this.timer();

		for(let i = 0; i < len; i++) 
			for(let j = i; j >= 0; j--, loopCount++) 
				if(this.list[j - 1] > this.list[j]) 
					this.swapOne(j - 1, j);

		console.log(this.list, loopCount + ' : count', timer() + ' : million Seccond');
	}

	timer() {
		let start = new Date().getTime();
		return () =>  new Date().getTime() - start;
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

new Arr().insertSort();