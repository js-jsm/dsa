const mergeSort = class {
	constructor(length) {
		this.originalArray = new Array(length).fill(0).map(v=> Math.floor(Math.random()*length + 1))
		this.length = length
		console.log(this.originalArray)
	}

	/* es6 & queue ver. */
	sort() {
		if(this.length < 2) return;
		const tempArray = new Array(this.length)
		for(let i = 0, length = this.originalArray.length; i < length ; i++) {
			tempArray[i] = this.originalArray.slice(i, i+1)
		}
		while(tempArray.length > 1) {
			tempArray.push(this.mergeArray(tempArray.shift(), tempArray.shift()))
		}
		return tempArray[0]
	}
	mergeArray(arr1, arr2){
        const temp = new Array(arr1.length + arr2.length)
        let i = 0;
    	let a1 = arr1.shift(), a2 = arr2.shift()
        while(a1 !== Infinity || a2 !== Infinity) {
        	if(a1 < a2) {
        		temp[i++] = a1
        		a1 = arr1.shift() || Infinity
        	} else {
        		temp[i++] = a2
        		a2 = arr2.shift() || Infinity
        	}
        }
        return temp
    }

    /* 교재 ver. */
	sortFromBook(){
	    if(this.originalArray.length < 2) return;
	    let step =1;
	    let arr = Object.assign([], this.originalArray);
	    let left , right;
	    while ( step < arr.length) {
	        left = 0;
	        right = step;
	        while( right + step < arr.length) {
	            this.mergeArraysFromBook(arr, left , left+step, right , right + step);
	            left = right + step;
	            right = left + step;
	        }
	        if(right < arr.length){
	            this.mergeArraysFromBook(arr,left,left+step,right,arr.length);
	        }
	        step *= 2;
	    }
	    return arr
	}
	mergeArraysFromBook(arr , startLeft , stopLeft, startRight , stopRight ){
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
	getTime(method) {
		const start = window.performance.now()
		this[method]()
		const end = window.performance.now()
		return end - start
	}
	sortTest(times) {
		const trial = (resolve, reject) => {
			resolve({
				es6: this.getTime('sort'),
				book: this.getTime('sortFromBook')
			})
		}
		const promises = new Array(times).fill(0)
			.map((v,i)=> new Promise(trial).then(result => {
				console.log(
`${i+1} - es6  : ${Math.round(result.es6*1000)/1000} milliseconds
  - book : ${Math.round(result.book*1000)/1000} milliseconds`)
				return result
			}));
		Promise.all(promises).then(results => {
			results = results.reduce((p,c)=>({
				es6: p.es6 + c.es6,
				book: p.book + c.book
			}))
			console.log(`======== RESULT ========
es6  : ${Math.round(results.es6/times*1000)/1000} milliseconds in average.
book : ${Math.round(results.book/times*1000)/1000} milliseconds in average.`)
		})
	}
}
const mm = new mergeSort(1000)
console.log(mm.sort())
console.log(mm.sortFromBook())

mm.sortTest(100)