var words = ['one', 'two', 'three', 'four', 'five', 'six'];

class ArraySort {
	constructor ( array ) {
		this.arr = array;
		this.accurateReverse = array.reverse();
		this.accurateNormal = array.sort();
	}
	normal () {
		var arr = this.arr,
			result = null;
		if ( arr.sort() == this.accurateNormal )
			result = this.accurateNormal;
		else
			result = arr.sort()
		return console.log(result);
	}
	_reverse () {
		var arr = this.arr,
			result = null;
		if ( arr.reverse() == this.accurateReverse )
			result = this.accurateReverse;
		else
			result = arr.reverse();
		return result;
	}
}

var test = new ArraySort(words);
test.normal();
test._reverse();
