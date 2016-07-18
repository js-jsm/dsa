class Vocabulary {
	constructor(txt) {
		this.words = new Array();
		this.dict = new Array(137);
		txt.split('\n').forEach(v => this.put(v.split(' : ')));
		this.showDistro();
	}
	put(data) {
		let pos = this.hash(data[0]);
		while(this.dict[pos] !== undefined) pos += 1;
		this.words.push(data[0]);
		this.dict[pos] = data;
	}
	get(word) {
		let index = this.hash(word) || 0;
		for( ; index < this.dict.length ; index++) {
			if(this.dict[index][0] === word) return this.dict[index][1];
		}
		return undefined;
	}
	showDistro() {
		this.words.forEach((v, i) => {
			if(v !== undefined) console.log(`${this.hash(v)} - ${v} : ${this.get(v)}`);
		});
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
	getDefinition(word) {
		return dict.get(word);
	}
	run(){
		const word = prompt('단어를 입력하세요');
		if(word) console.log(word + ' : ' + this.getDefinition(word));

		const keepGoing = confirm('그만할까요?');
		if(!keepGoing) this.run();
	}
}

const definitions = 
`circumstances : 상황, 환경
gather in : 거두어들이다
in a vacuum : 고립되어
refer to : 언급하다
attempt to : ~하려고 시도하다
as a result : 그 결과로서
be familiar to : ~에 익숙하다
fatal loss : 치명적 손실
ecological diversity : 생태계 다양성
social cohesion : 사회적 결속력
vital factor : 중대 요소
visual perception : 시지각
rely on : ~에 의지하다
wholly : 완전히, 전적으로
wheel : 바퀴, 핸들, 자동차
welfare : 복지, 보호, 행복, 후생
wandering : 헤매는, 방랑
virtually : 사실상, 거의, 가상으로, 실질적으로
variation : 변화, 변형, 다양한, 차이
urban : 도시의, 도심의
unwitnessed : 감지되지 않은, 목격되지 않은
universally : 도처에, 널리, 보편적으로`;

var dict = new Vocabulary(definitions);
dict.run();