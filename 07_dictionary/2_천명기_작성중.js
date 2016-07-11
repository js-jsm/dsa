class wordCount extends Dictionary {
	constructor(sentence){
		super();
		this.sentence = sentence;
		this._init();
		console.dir(this);
	}
	
	_init() {
		this.words = this.sentence.split(" ");
		console.log(this.words);
	}
	
	howMayTimes() {
		for ( var i = 0; i < this.words.length; ++i ) {
			this.words[i]
		}
	}
	
}

var words = "the musook in the wow calar to musook phil so like wow",
	wordCheck = new wordCount(words);