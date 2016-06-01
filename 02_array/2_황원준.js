
function wordArray(){

this.wordArr = [];
this.addWord = addWord;
this.outPutWord = outPutWord;
this.r_outPutWord =r_outPutWord;

	function addWord(word){
	this.wordArr.push(word);
	}
	function outPutWord(){
	return this.wordArr.toString();
	}
	function r_outPutWord(){
	return this.wordArr.reverse().toString();	
	}

};

var outPutTest = new wordArray();

outPutTest.addWord("hello");
outPutTest.addWord("world");
outPutTest.addWord("javascript");

console.log(outPutTest.outPutWord());
console.log(outPutTest.r_outPutWord());


