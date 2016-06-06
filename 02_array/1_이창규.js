// const Array_study = require('./array');

// Array_study.array_Access();

var Grades = Grades || {};

Grades =function(){
	/*학생들 점수 배열*/
	this.studentsGrade = [];

	/*추가하는 함수*/
	this.addGrade = function(...num){

		this.studentsGrade.push(...num);

	};

	/*평균 구하기*/
	this.averageGrade = ()  => {

		return this.studentsGrade.reduce((x,y)=>x+y) / this.studentsGrade.length;

	};

};

var student = new Grades();
student.addGrade(95,88,79,92,100);

console.log(`학생들의 평균은 ${student.averageGrade()}`);
