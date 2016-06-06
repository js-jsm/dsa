const ut = require('./utils/unit-test');

const dataStore = Symbol();
class WordFlip {
    constructor(...a){
        this[dataStore] = a.map(v => v.toString().trim());
        console.log(this[dataStore]);
        this[dataStore].curr = 0;
    }
    [Symbol.iterator](){
        this[dataStore].curr = 0;
        return this;
    }
    add(v){
        if(v !== undefined && v !== null) {
            this[dataStore].push(v.toString().trim());
            return true;
        }
        return false;
    }
    next(){
        return {
            value: this[dataStore][this[dataStore].curr++],
            done: !!(this[dataStore].curr > this[dataStore].length)
        }
    }
    prev(){
        return {
            value: this[dataStore][this[dataStore].curr--],
            done: !!(this[dataStore].curr < 0)
        }
    }
    print(dir){
        let result = [];
        if(dir === 'forward') {
            this[dataStore].curr = 0;
            for(let c of this){
                result.push(c);
            }
        } else if(dir === 'backward') {
            this[dataStore].curr = this[dataStore].length - 1;
            do {
                const res = this.prev();
                result.push(res.value);
                if(res.done) break;
            } while (true);
        }
        return result.join(' ');
    }
}


/* unit tests */

let wordflip;

ut.log(_=>{
    wordflip = new WordFlip('I', 'am', 'a', 'front-end');
});
ut.equal(_=> wordflip.add('developer'), true);
ut.equal(_=> wordflip.add(), false);
ut.equal(_=> wordflip.print('forward'), 'I am a front-end developer');
ut.equal(_=> wordflip.print('backward'), 'developer front-end a am I');