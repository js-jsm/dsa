const Sorts = class {
	constructor(length) {
		this.originalRandomArray = new Array(length).fill(0).map(v=> Math.floor(Math.random()*length + 1));
		this.length = length;
		console.log(this.originalRandomArray);
	}

	/* merge sort. */
	mergeSort(arr){
		const sortArray = Object.assign([], arr);
	    if(this.length < 2) return;
	    let step = 1;
	    let left , right;
	    while(step < this.length) {
	        left = 0;
	        right = step;
	        while( right + step < this.length) {
	            this.mergeArrays(arr, left, left+step, right, right + step);
	            left = right + step;
	            right = left + step;
	        }
	        if(right < arr.length){
	            this.mergeArrays(arr,left,left+step,right,arr.length);
	        }
	        step *= 2;
	    }
	    return sortArray
	}
	mergeArrays(arr , startLeft , stopLeft, startRight , stopRight ){
	    let rightArr = new Array(stopRight - startRight +1);
	    let leftArr = new Array(stopLeft - startLeft +1);
	    let k = startRight;
	    for(let i=0; i< (rightArr.length-1); ++i){
	        rightArr[i] = arr[k];
	        ++k;
	    }
	    k = startLeft;
	    for(let i=0; i< (leftArr.length-1); ++i){
	        leftArr[i] = arr[k];
	        ++k;
	    }
	    rightArr[rightArr.length-1] = Infinity ; //특수값
	    leftArr[leftArr.length-1] = Infinity ; //특수값
	    let m = 0, n = 0;
	    for(let k = startLeft; k < stopRight; ++k){
	        if(leftArr[m] <=rightArr[n]){
	        arr[k] = leftArr[m];
	        m++;
	        } else{
	            arr[k] = rightArr[n];
	            n++;
	        }
	    }
	}

	quickSort(list) {
		if(list.length == 0 ){
	        return [];
	    }
	    var lesser = [];
	    var greater = [];
	    var pivot = list[0];
	    for(var i = 1; i < list.length; i++){
	        if(list[i] <pivot){
	            lesser.push(list[i]);
	        }else{
	            greater.push(list[i]);
	        }
	    }
	    return this.quickSort(lesser).concat(pivot,this.quickSort(greater));
	}

	/* 여기부터는 성능 테스트용 */
	getTime(method, arr) {
		const start = window.performance.now()
		this[method](arr);
		const end = window.performance.now()
		return end - start;
	}
	sortTest(times) {
		const trial = (resolve, reject) => {
			resolve({
				merge : this.getTime('mergeSort', this.originalRandomArray),
				quick : this.getTime('quickSort', this.originalRandomArray)
			});
		}
		const promises = new Array(times).fill(0)
			.map((v,i)=> new Promise(trial).then(result => {
				console.log(
`*** trial #${i+1} ***
merge : ${Math.round(result.merge*1000)/1000} milliseconds
quick : ${Math.round(result.quick*1000)/1000} milliseconds`
				);
				return result;
			}));
		Promise.all(promises).then(results => {
			results = results.reduce((p,c)=>({
				merge : p.merge + c.merge,
				quick : p.quick + c.quick
			}));
			console.log(
`======== RESULT ========
merge : ${Math.round(results.merge/times*1000)/1000} milliseconds in average.
quick : ${Math.round(results.quick/times*1000)/1000} milliseconds in average.`
			);
		});
	}
};
const mm = new Sorts(10000);
mm.sortTest(100);