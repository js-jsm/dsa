const dummy = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum perferendis tempore ratione odit in magni, repellendus culpa, eveniet, aut libero reprehenderit atque obcaecati placeat dolore dicta sint aliquid vel facere expedita nam suscipit. quidem odio quaerat voluptas deleniti laudantium possimus magnam dolor quas, reiciendis dolorum praesentium modi ea eius placeat, quae illo accusantium error voluptatibus ullam, quam fugit hic, eveniet aperiam. itaque sunt ullam illo in, omnis labore cum sint aperiam nihil ipsa praesentium est aspernatur et maxime magnam enim, eligendi. maxime modi dolore asperiores temporibus voluptatibus sed vitae, dicta fugit quas accusantium sint iusto, doloremque exercitationem laudantium dolores magni.'.replace(/[,.!?]/g, '').split(' ')

const Sorts = class {
	constructor(length) {
		this.originalArray = new Array(length).fill(0).map(v=> dummy[Math.floor(Math.random()*length + 1)%100])
		this.length = length
		console.log(this.originalArray)
	}
	swap(arr, i1, i2) {
        const [a1, a2] = [arr[i2], arr[i1]];
        arr[i1] = a1;
        arr[i2] = a2;
    }

	/* bubble sort */
	bubbleSort(){
		const sortArray = Object.assign([], this.originalArray)
		for(let outer = this.length; outer >= 2; --outer ){
		    for(let inner = 0; inner <= outer-1; ++inner){
		        if(sortArray[inner] > sortArray[inner+1]){
		            this.swap(sortArray,inner,inner+1);
		        }
		    }
		}
	    console.log('bubbleSort Result : ', sortArray);
	}

	/* selection sort */
	selectionSort(){
		const sortArray = Object.assign([], this.originalArray)
		let min
	    for (let outer = 0 ; outer <= this.length-2; ++outer){
	        min =outer;
	        for(let inner = outer +1; inner<=this.length-1;++inner){
	            if(sortArray[inner] < sortArray[min]){
	                min = inner;
	            }
	        }
	        this.swap(sortArray,outer,min);
	    }
	    console.log('selectionSort Result : ', sortArray);
	}

	/* insertion sort */
	insertionSort(){
		const sortArray = Object.assign([], this.originalArray)
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
	    console.log('insertionSort Result : ', sortArray);
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
				bubble    : this.getTime('bubbleSort'),
				selection : this.getTime('selectionSort'),
				insertion : this.getTime('insertionSort'),
			})
		}
		const promises = new Array(times).fill(0)
			.map((v,i)=> new Promise(trial).then(result => {
				console.log(
`*** trial #${i+1} ***
bubble    : ${Math.round(result.bubble*1000)/1000} milliseconds
selection : ${Math.round(result.selection*1000)/1000} milliseconds
insertion : ${Math.round(result.insertion*1000)/1000} milliseconds`
				)
				return result
			}));
		Promise.all(promises).then(results => {
			results = results.reduce((p,c)=>({
				bubble: p.bubble + c.bubble,
				selection: p.selection + c.selection,
				insertion: p.insertion + c.insertion
			}))
			console.log(
`======== RESULT ========
bubble    : ${Math.round(results.bubble/times*1000)/1000} milliseconds in average.
selection : ${Math.round(results.selection/times*1000)/1000} milliseconds in average.
insertion : ${Math.round(results.insertion/times*1000)/1000} milliseconds in average.`
			)
		})
	}
}
const mm = new Sorts(100)
mm.sortTest(100)