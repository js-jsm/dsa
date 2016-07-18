class WordCount {
	constructor(txt) {
		this.words = new Set();
		this.dict = new Array(137);
		txt.split(' ').forEach(v => this.put(v.toLowerCase().replace(/[,.:?]/, '')))
	}
	put(data) {
		const pos = this.hash(data);
		let count = 0;
		if(this.dict[pos] === undefined) this.dict[pos] = new Map();
		else count = this.dict[pos].get(data) || 0;
		this.words.add(data);
		this.dict[pos].set(data, count + 1);
	}
	get(word) {
		let pos = this.hash(word) || 0;
		return this.dict[pos].get(word);
	}
	showDistro() {
		for(let v of this.words) {
			if(v !== undefined) console.log(`${v} : ${this.get(v)}`);
		}
	}
	hash(string) {
		const H = 37;
		let total = 0;
		for(let i = 0; i < string.length ; ++i) {
			total += H * total + string.charCodeAt(i);
		}
		total = total % this.dict.length;
		if(total < 0) {
			total += this.dict.length - 1;
		}
		return parseInt(total);
	}
}

const definitions = 
'When should I use Redux? You’ll know when you need Flux. If you aren’t sure if you need it, you don’t need it. Similarly, Dan Abramov, one of the creators of Redux, says: I would like to amend this: don’t use Redux until you have problems with vanilla React. In general, use Redux when you have reasonable amounts of data changing over time, you need a single source of truth, and you find that approaches like keeping everything in a top-level React component’s state are no longer sufficient.';
var dict = new WordCount(definitions);
dict.showDistro();