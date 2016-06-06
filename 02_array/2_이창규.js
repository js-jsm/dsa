// const Array_study = require('./array');

// Array_study.array_Access();

var StringArray = StringArray || {};

StringArray =function(){
	/*글자 배열*/
	this.stringFrame = [];

	/*배열 추가하기*/
	this.addStringatArray = function(sentence){
		this.stringFrame = sentence.split(' ');
	};

	/*단어배치*/
	this.theoremOutput = (aS, cV) => { 
		return aS + " " + cV 
	};

	/*정방향*/
	this.forwardOutput = () => this.stringFrame.reduce(this.theoremOutput);

	/*정방향*/
	this.backwardOutput = () => this.stringFrame.reduceRight(this.theoremOutput);

};

var newWords = new StringArray();
newWords.addStringatArray("현충일은 국토방위에 목숨을 바친 이의 충성을 기념하는 날");

console.log(newWords.forwardOutput());
console.log(newWords.backwardOutput());