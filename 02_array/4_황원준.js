//ES5

function oneByOneWord(){

this.wordArr = [];
this.tempArr = [];
this.insertWord = insertWord;
this.mergeResult = mergeResult;

	function insertWord(word){

	this.tempArr = word.split("");
	this.wordArr.push(this.tempArr[0]);
	console.log('insert word :"'+this.tempArr[0] +'" complete');
	};

	function mergeResult(){
		return this.wordArr.join("");		
	};
};


var outPutVal = new oneByOneWord();

outPutVal.insertWord("high");
outPutVal.insertWord("else");
outPutVal.insertWord("less");
outPutVal.insertWord("log");
outPutVal.insertWord("observe");

console.log(outPutVal.mergeResult());



