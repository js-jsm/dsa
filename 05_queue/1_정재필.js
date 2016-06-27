class Deque {
    constructor() {
        this.dataStore = [];
    }

    push(el) {
        this.dataStore.push(el);
    }

    pop() {
        return this.dataStore.pop();
    }

    unshift(el) {
        this.dataStore.unshift(el);
    }

    shift() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length -1];
    }

    toString(delimiter = '') {
        return this.dataStore.reduce( (a, b) => (a + delimiter + b) );
    }

    empty() {
        return this.dataStore.length == 0;
    }
}

// 테스트
var queue = new Deque();
queue.push("Meredith");
queue.push("Cynthia");
queue.pop();
console.log(queue.toString(', '));
queue.unshift('Jennifer');
console.log(queue.toString(', '));
queue.shift();
console.log(queue.toString(' ,'));

function isPalindrome(word) {
    let q1 = new Deque();
    let q2 = new Deque();
    let chr = ''
    word = word.replace(/\s/img, '');
    for( let i = 0 ; i < word.length; i ++ ) {
        chr = word.substr(i, 1).toLowerCase();
        q1.push(chr);
        q2.unshift(chr);
    }
    console.log(q1.toString());
    console.log(q2.toString());
    console.log(q1.toString() == q2.toString());

    return q1.toString() == q2.toString();
}

// 테스트
isPalindrome('request');
isPalindrome('야 이 달은 밝은 달이야');
isPalindrome('Was it a cat i saw');
