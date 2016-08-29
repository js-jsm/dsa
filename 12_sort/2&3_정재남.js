const Sorts = class {
	constructor(length) {
		this.originalRandomArray = new Array(length).fill(0).map(v=> Math.floor(Math.random()*length + 1));
		this.originalAscendArray = new Array(length).fill(0).map((v,i) => i);
		this.originalDescendArray = new Array(length).fill(0).map((v,i) => length - i);
		this.length = length;
		console.log(this.originalRandomArray);
		console.log(this.originalAscendArray);
		console.log(this.originalDescendArray);
	}
	swap(arr, i1, i2) {
        const [a1, a2] = [arr[i2], arr[i1]];
        arr[i1] = a1;
        arr[i2] = a2;
    }

	/* bubble sort */
	bubbleSort(arr){
		const sortArray = Object.assign([], arr)
		for(let outer = this.length; outer >= 2; --outer ){
		    for(let inner = 0; inner <= outer-1; ++inner){
		        if(sortArray[inner] > sortArray[inner+1]){
		            this.swap(sortArray,inner,inner+1);
		        }
		    }
		}
		return sortArray
	}

	/* selection sort */
	selectionSort(arr){
		const sortArray = Object.assign([], arr)
		let min;
	    for (let outer = 0 ; outer <= this.length-2; ++outer){
	        min =outer;
	        for(let inner = outer +1; inner<=this.length-1;++inner){
	            if(sortArray[inner] < sortArray[min]){
	                min = inner;
	            }
	        }
	        this.swap(sortArray,outer,min);
	    }
	    return sortArray
	}

	/* insertion sort */
	insertionSort(arr){
		const sortArray = Object.assign([], arr);
	    let temp,inner;
	    for(let outer = 1; outer <= this.length-1;++outer){
	        temp = sortArray[outer];
	        inner = outer;
	        while ( inner > 0  && (sortArray[inner-1] >= temp)) {
	            sortArray[inner] = sortArray[inner-1];
	            --inner;
	        }
	        sortArray[inner] = temp;
	    }
	    return sortArray
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
				bubbleRandom     : this.getTime('bubbleSort', this.originalRandomArray),
				bubbleAscend     : this.getTime('bubbleSort', this.originalAscendArray),
				bubbleDescend    : this.getTime('bubbleSort', this.originalDescendArray),
				selectionRandom  : this.getTime('selectionSort', this.originalRandomArray),
				selectionAscend  : this.getTime('selectionSort', this.originalAscendArray),
				selectionDescend : this.getTime('selectionSort', this.originalDescendArray),
				insertionRandom  : this.getTime('insertionSort', this.originalRandomArray),
				insertionAscend  : this.getTime('insertionSort', this.originalAscendArray),
				insertionDescend : this.getTime('insertionSort', this.originalDescendArray),
				mergeRandom      : this.getTime('mergeSort', this.originalRandomArray),
				mergeAscend      : this.getTime('mergeSort', this.originalAscendArray),
				mergeDescend     : this.getTime('mergeSort', this.originalDescendArray)
			});
		}
		const promises = new Array(times).fill(0)
			.map((v,i)=> new Promise(trial).then(result => {
				console.log(
`*** trial #${i+1} ***
bubbleRandom     : ${Math.round(result.bubbleRandom*1000)/1000} milliseconds
bubbleAscend     : ${Math.round(result.bubbleAscend*1000)/1000} milliseconds
bubbleDescend    : ${Math.round(result.bubbleDescend*1000)/1000} milliseconds
selectionRandom  : ${Math.round(result.selectionRandom*1000)/1000} milliseconds
selectionAscend  : ${Math.round(result.selectionAscend*1000)/1000} milliseconds
selectionDescend : ${Math.round(result.selectionDescend*1000)/1000} milliseconds
insertionRandom  : ${Math.round(result.insertionRandom*1000)/1000} milliseconds
insertionAscend  : ${Math.round(result.insertionAscend*1000)/1000} milliseconds
insertionDescend : ${Math.round(result.insertionDescend*1000)/1000} milliseconds
mergeRandom      : ${Math.round(result.mergeRandom*1000)/1000} milliseconds
mergeAscend      : ${Math.round(result.mergeAscend*1000)/1000} milliseconds
mergeDescend     : ${Math.round(result.mergeDescend*1000)/1000} milliseconds`
				);
				return result;
			}));
		Promise.all(promises).then(results => {
			results = results.reduce((p,c)=>({
				bubbleRandom     : p.bubbleRandom + c.bubbleRandom,
				bubbleAscend     : p.bubbleAscend + c.bubbleAscend,
				bubbleDescend    : p.bubbleDescend + c.bubbleDescend,
				selectionRandom  : p.selectionRandom + c.selectionRandom,
				selectionAscend  : p.selectionAscend + c.selectionAscend,
				selectionDescend : p.selectionDescend + c.selectionDescend,
				insertionRandom  : p.insertionRandom + c.insertionRandom,
				insertionAscend  : p.insertionAscend + c.insertionAscend,
				insertionDescend : p.insertionDescend + c.insertionDescend,
				mergeRandom      : p.mergeRandom + c.mergeRandom,
				mergeAscend      : p.mergeAscend + c.mergeAscend,
				mergeDescend     : p.mergeDescend + c.mergeDescend
			}));
			console.log(
`======== RESULT ========
bubbleRandom     : ${Math.round(results.bubbleRandom/times*1000)/1000} milliseconds in average.
selectionRandom  : ${Math.round(results.selectionRandom/times*1000)/1000} milliseconds in average.
insertionRandom  : ${Math.round(results.insertionRandom/times*1000)/1000} milliseconds in average.
mergeRandom      : ${Math.round(results.mergeRandom/times*1000)/1000} milliseconds in average.

bubbleAscend     : ${Math.round(results.bubbleAscend/times*1000)/1000} milliseconds in average.
selectionAscend  : ${Math.round(results.selectionAscend/times*1000)/1000} milliseconds in average.
insertionAscend  : ${Math.round(results.insertionAscend/times*1000)/1000} milliseconds in average.
mergeAscend      : ${Math.round(results.mergeAscend/times*1000)/1000} milliseconds in average.

bubbleDescend    : ${Math.round(results.bubbleDescend/times*1000)/1000} milliseconds in average.
selectionDescend : ${Math.round(results.selectionDescend/times*1000)/1000} milliseconds in average.
insertionDescend : ${Math.round(results.insertionDescend/times*1000)/1000} milliseconds in average.
mergeDescend     : ${Math.round(results.mergeDescend/times*1000)/1000} milliseconds in average.`
			);
		});
	}
};
const mm = new Sorts(1000);
mm.sortTest(100);