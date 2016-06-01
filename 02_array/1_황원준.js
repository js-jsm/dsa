function grades(){

this.studentsScore =[];
this.addScore = addScore;
this.averageOutput = averageOutput;

	function addScore(score){
	this.studentsScore.push(score);
	}
	function averageOutput(){
		var average = this.studentsScore.reduce(function(x,i){return x+i}) / this.studentsScore.length;
		return 'students average score : '+average.toFixed(2);
	}

};

var gradesTest = new grades();

gradesTest.addScore(60);
gradesTest.addScore(95);
gradesTest.addScore(55);
gradesTest.addScore(40);

console.log(gradesTest.averageOutput());

