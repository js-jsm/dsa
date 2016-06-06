
// ES6 below
var Grades = function( point ){
	this.points = [];
	if ( point !== undefined || typeof point == 'number'  ) {
		this.points.push(point);
	}
};

Grades.prototype.add = function( point ){
	this.points.push( point );
	console.log(this.points);
	return this;
};

Grades.prototype.average = function() {
	var points = this.points,
		sum = 0;
	for ( var i = 0; i<points.length; i++ ) {
		sum += points[i];
	}
	return console.log(sum/points.length);
};

//ES 6
class Grades {
	constructor( point ) {
		this.points = [];
		if ( point !== undefined || typeof point == 'number'  ) {
			this.points.push(point);
		}
	}
	add ( pointer ) {
		this.points.push( point );
		console.log(this.points);
		return this;
	}
	average () {
		var points = this.points,
		sum = points.reduce((a, b) => {return a+b});
		return console.log(sum/points.length);
	}
}
