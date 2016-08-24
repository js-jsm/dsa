class Arr {
	constructor() {
		//this._list = [61, 85, 19, 88, 68, 8, 70, 29];
		this._list = new Array(100).fill(0).map(v => Math.floor(Math.random() * 100) + 1);
		this._gaps = [];
	}

	shellSort() {
		let len  	  = this.list.length,
			loopCount = 0,
			timer = this.timer();

		this.getGaps();



		//[40, 13, 4, 1] gaps. 
		//gap => 몇칸씩 뛸거냐 !  [5, 3, 1]
		//g => gap배열의 몇번째 인덱스를 찾을거냐. 
		for(let g = 0, gap; gap = this.gaps[g]; g++) //3번순회 gap -> 5, 3, 1
		    for(let i = gap; i < len; i++) //i = 5, len = 8, -> 3번순회. 
		    	for(let j = i; j >= 0; j--) //j = 5; j--; 6번 돌져 ? 
		    		if(this.list[j - gap] > this.list[j]) 
		    			this.bitSwap(j - gap, j);

	    console.log(this.list, loopCount + ' : count', timer() + ' : million Seccond');
	}

	getGaps() {
		let len = this.list.length,
			gap = 1;

		if(!len)
			return;

		//gap의 시작값을 구하는 반복문
		while(gap < len / 3) 
			gap = 3 * gap + 1;

		this.gaps.push(gap);

		//gap의 다음 수를 구하는 반복문.
		while(gap >= 1) {
			gap = (gap - 1) / 3;

			if(gap != 0) //마지막 값은 0이 나올 수 있으므로 +ㅅ +/
				this.gaps.push(gap);
		}

		console.log(this.gaps, ' : gaps!');
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

	set gaps(list) {this._gaps = list;}
	get gaps() {return this._gaps;}
	set list(list) {this._list = list;}
	get list() {return this._list;}
}


new Arr().shellSort();