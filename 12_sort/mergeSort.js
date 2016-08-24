class Arr {
	constructor() {
		//this._list = [6, 10, 1, 9, 4, 8, 2, 7, 3];
		this._list = new Array(10000).fill(0).map(v => Math.floor(Math.random() * 100) + 1);
	}

	mergeSort() {
		let timer 	= this.timer(),
			listLen = this.list.length,
			loopLen = listLen / 2;


		//listLen = 9; 
		//loopLen = 4.5;
		//step = 1 => 2 => 4 => 8 => 16
		//[6, 10, 1, 9, 4, 8, 2, 7, 3] 
		for(let step = 1; step < listLen; step *= 2)  //4번도네요 ! 
			//loopLen = 4.5; 
			//step : 1일때 i => 0 => 1 => 2 => 3 => 4 => 4번도네요 !
			for(let i = 0, start = 0, end = step; i < loopLen; i += step, start += step * 2, end = start + step) 
				this.merge( //step => 1일때. 
					this.getList(start, end), //[3]
					this.getList(end, start + step * 2), //[]
					start
				);
			
			// step : 1일때 0 + 1 * 2 => 2 //start: 0, end: 1 (leftArr) //end: 1, start + step * 2 => 2
			// step : 2일때 0 + 2 * 2 => 4 //start: 0, end: 2 (leftArr: [6, 10]) //end: 2, 4 (rightarr: [1, 9])
			
	    console.log(this.list,  timer() + ' : million Seccond');
	}

	merge(left, right, start) {

		//[6, 10, 1, 9, 4, 8, 2, 7, 3]
		//left.length => 1 : [6] 
		//right.length => 1 : [10]
		//
		//start => 0 , this.list = [6, 10, 1, 9, 4, 8, 2, 7, 3], 어디서부터 잘라왔어 ? 
		//left, right, start부터 저 두 배열의 길이를 합친것만큼이야. 
		//
		//this.list[0] -> left.length + right.length ; this.list[1] this.list[2] 전까지  

		//[3], [] -> right[0]
		for(let i = left.length + right.length; i--; start++) 
		 	this.list[start] = right[0] ? left[0] <= right[0] ? left.shift() : right.shift() : left.shift();
	}

	getList(start, end) {
		return this.list.slice(start, end);
	}
	
	timer() {
		let start = new Date().getTime();
		return () =>  new Date().getTime() - start;
	}

	set list(list) {this._list = list;}
	get list() {return this._list;}
}


new Arr().mergeSort();