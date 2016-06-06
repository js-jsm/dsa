function grades() {
	this.dataSource = [];
	this.add = add;
	this.average = average;
}

function add(score) {
	this.dataSource.push(score);
}

function average() {
	var total = 0;
	for (var i=0; i<this.dataSource.length; ++i) {
		total += this.dataSource[i];
	}

	return total / this.dataSource.length;
}

function randomRange(min, max) {
  return Math.floor( (Math.random() * (max - min + 1)) + min );
}

var grades = new grades();
for (var i=0; i<=20; i++) {
	grades.add(randomRange(0, 100));
}
console.log(grades.dataSource);
console.log(grades
			.average()
			.toFixed(2));