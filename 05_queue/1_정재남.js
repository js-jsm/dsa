const ut = require('./utils/unit-test');

const dataStore = Symbol('queue');
class Deque {
    constructor(){
        this[dataStore] = [];
    }
    [Symbol.iterator](){
        let data = Object.assign([], this[dataStore]);
        return {
            next(){
                return {
                    done: data.length <= 0,
                    value: data.shift()
                }
            }
        };
    }
    push(element) {
        this[dataStore].push(element);
    }
    unshift(element) {
        this[dataStore].unshift(element);   
    }
    shift() {
        return this[dataStore].shift();
    }
    pop() {
        return this[dataStore].pop();   
    }
    length(){
        return this[dataStore].length;
    }
    toString() {
        return this[dataStore].join(', ');
    }
    isEmpty() {
        if (this[dataStore].length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

const palindrome = (str) => {
    let deque = new Deque();
    for(let char of str.split('')){
        if(!char.match(/[ ,.:;]/g)) deque.push(char.toLowerCase());
    }
    for(let i = 0 ; i < deque.length()/2 ; i++) {
        if(deque.pop() !== deque.shift()) return false;
    }
    return true;
};

ut.title('Palindrome check with Deque Class');
ut.equal(_=> palindrome('racecar'), true);
ut.equal(_=> palindrome('긔엽긔'), true);
ut.equal(_=> palindrome('귀요미'), false);
ut.equal(_=> palindrome('hello'), false);
ut.equal(_=> palindrome('1001'), true);
ut.equal(_=> palindrome('A man, a plan, a canal: Panama'), true);