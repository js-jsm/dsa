const [NODE_ELEM, NODE_PREV, NODE_NEXT] = [
    {[Symbol('NODE_ELEM')]: 'elements'},
    {[Symbol('NODE_PREV')]: 'prev'},
    {[Symbol('NODE_NEXT')]: 'next'}
];
class Node {
    constructor(elem){
        this.map = new WeakMap();
        this.map.set(NODE_ELEM, elem);
    }
    get elem()      { return this.map.get(NODE_ELEM); }
    set elem(elem)  { this.map.set(NODE_ELEM, elem); }
    get prev()      { return this.map.get(NODE_PREV); }
    set prev(prev)  { this.map.set(NODE_PREV, prev); }
    get next()      { return this.map.get(NODE_NEXT); }
    set next(next)  { this.map.set(NODE_NEXT, next); }
}

const [HEAD, CURR] = [
    {[Symbol('HEAD')]: 'headItem'},
    {[Symbol('CURR')]: 'currentItem'}
];
class CircularLinkedList {
    constructor(){
        const head = new Node('head');
        this.info = new WeakMap();
        this.info.set(HEAD, head).set(CURR, head);
        const _HEAD = this.info.get(HEAD);
        _HEAD.next = _HEAD;
        _HEAD.prev = _HEAD;
    }
    get head()              { return this.info.get(HEAD); }
    get current()           { return this.info.get(CURR); }
    set current(elem)       { this.info.set(CURR, elem); }
    next() {
        this.current = this.current.next;
        if(this.current === this.head) this.current = this.current.next;
    }
    prev() {
        this.current = this.current.prev;
        if(this.current === this.head) this.current = this.current.prev;
    }
    advance(n) {
        for(let i = n ; i--;) this.next();
        return this;
    }
    back(n) {
        for(let i = n ; i--;) this.prev();
        return this;
    }
    show() {
        return this.current.elem;
    }
    find(item){
        let currNode = this.head;
        while(true) {
            if(currNode && currNode.elem === item) return currNode;
            if(!currNode.next) return false;
            currNode = currNode.next;
        }
        this.current = currNode;
        return currNode;
    }
    add(item) {
        let prevNode = this.current;
        let nextNode = prevNode.next;
        let newNode = new Node(item);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.current = newNode;
        return this;
    }
    remove() {
        let currNode = this.current;
        let prevNode = currNode.prev;
        let nextNode = currNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.current = prevNode;
    }
    display(){
        let currNode = this.head;
        do {
            currNode = currNode.next;
            console.log(currNode.elem);
        } while(currNode.next !== this.head)
    }
}

const KillSoldiers = class extends CircularLinkedList {
    constructor() {
        super();
        this.length = 0;
        this.killed = [];
    }
    addSoldier(soldier){
        this.add(soldier);
        this.length += 1;
    }
    remove() {
        super.remove();
        this.length -= 1;
    }
    kill(count) {
        this.current = this.head;
        while(this.length > 2) {
            this.advance(count);
            this.killed.push(this.current.elem);
            this.remove();
        }
        console.log('soldiers who killed : ' + this.killed.join(', '));
        console.log('\nsurvivors are : ');
        this.display();
    }
}

const soldiersToKill = (n, m) => {
    const soldiers = new KillSoldiers();
    new Array(n).fill(0).forEach((v, i) => soldiers.addSoldier(`Soldier #${i+1}`));
    soldiers.kill(m);
}
