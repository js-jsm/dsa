const ut = require('./utils/unit-test.js');

class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}
const dataStore = Symbol('queue');
class PriorQueue {
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
    enqueue(element) {
        this[dataStore].push(element);
    }
    dequeue(){
        let entry = 0;
        for (let i=0; i<this[dataStore].length; ++i) {
            if (this[dataStore][i].code > this[dataStore][entry].code) {
                entry = i;
            }
        }
        return this[dataStore].splice(entry,1);    
    }
    toString() {
        return this[dataStore].reduce((p, c) => `${p}[#${c.code}] ${c.name}\n`, '');
    }
    front() {
        return this[dataStore][0];
    }
    back() {
        return this[dataStore][this[dataStore].length - 1];
    }
    isEmpty() {
        if (this[dataStore].length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

let queue;

ut.title('큰수 우선 큐');
ut.log(_=>{
    queue = new PriorQueue();
    queue.enqueue(new Patient('정재남', 5));
    queue.enqueue(new Patient('김지혜', 7));
    queue.enqueue(new Patient('남규진', 3));
    queue.enqueue(new Patient('노준혁', 2));
    queue.enqueue(new Patient('이병주', 4));
    queue.enqueue(new Patient('이창규', 1));
    queue.enqueue(new Patient('정재필', 6));
    queue.enqueue(new Patient('천명기', 8));
    queue.enqueue(new Patient('최태산', 4));
    queue.enqueue(new Patient('황원준', 9));
    return queue.toString();
});

ut.equal(_=> queue.dequeue()[0].name, '황원준');
ut.equal(_=> queue.dequeue()[0].name, '천명기');
ut.equal(_=> queue.dequeue()[0].name, '김지혜');
ut.equal(_=> queue.dequeue()[0].name, '정재필');
ut.equal(_=> queue.dequeue()[0].name, '이창규');
ut.equal(_=> queue.dequeue()[0].name, '이병주');