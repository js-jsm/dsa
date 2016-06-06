const ut = require('./utils/unit-test');

const dataStore = Symbol();
class Words {
    constructor(...a){
        if(Array.isArray(a) && a.every(v=> v.length === 1 && typeof v === 'string')) {
            this[dataStore] = a;
        } else if(typeof a === 'string' && a.length === 1) {
            this[dataStore] = [a];
        } else {
            this[dataStore] = [];
        }
    }
    [Symbol.iterator](){
        return this;
    }
    add(v){
        if(typeof v === 'string' && v.length === 1) {
            this[dataStore].push(v);
            return true;
        }
        return false;
    }
    next(){
        return {
            value: this[dataStore].pop(),
            done: this[dataStore].length <= 0
        }
    }
    makeStr(){
        return this[dataStore].join('');
    }
}

/* unit tests */
let words;

ut.log(_=>{
    words = new Words('I', ' ', 'a', 'm', ' ', 'a', ' ', 'p', 'e', 'r', 's', 'o', 'n');
});
ut.equal(_=> words.add('!'), true);
ut.equal(_=> words.add('yeah!'), false);
ut.equal(_=> words.makeStr(), 'I am a person!');