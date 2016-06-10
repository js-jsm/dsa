class WordToSentence {
	constructor (  ) {
		this.words = [];
	}
	addWord ( word ) {
		var words = this.words;
		words.push( word );
		console.log(words);
		return this;
	}
	toSentence () {
		var words = this.words,
			result = null;
		result = words.join(' ');
		return console.log(result);
	}
}

var test = new WordToSentence();
test.addWord('I').addWord('am').addWord('boy').addWord('!!');
test.toSentence();
