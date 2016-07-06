const [NODE_ELEM, NODE_PREV, NODE_NEXT] = [
    {[Symbol('NODE_ELEMENT')]: 'elements'},
    {[Symbol('NODE_PREV')]: 'prev'},
    {[Symbol('NODE_NEXT')]: 'next'}
];
const Node = class {
    constructor(elem){
        this.info = new WeakMap();
        this.info.set(NODE_ELEM, elem);
    }
    get elem()      { return this.info.get(NODE_ELEM); }
    set elem(elem)  { this.info.set(NODE_ELEM, elem); }
    get prev()      { return this.info.get(NODE_PREV); }
    set prev(prev)  { this.info.set(NODE_PREV, prev); }
    get next()      { return this.info.get(NODE_NEXT); }
    set next(next)  { this.info.set(NODE_NEXT, next); }
};

const [HEAD, FOOT, CURR] = [
    {[Symbol('HEAD')]: 'headItem'},
    {[Symbol('FOOT')]: 'footItem'},
    {[Symbol('CURR')]: 'currentItem'}
];
const AdvDblLinkedList = class {
    constructor(){
        const head = new Node('head');
        this.info = new WeakMap();
        this.info.set(HEAD, head).set(FOOT, head).set(CURR, head);
    }
    get head()              { return this.info.get(HEAD); }
    get foot()              { return this.info.get(FOOT); }
    set foot(elem)          { this.info.set(FOOT, elem); }
    get current()           { return this.info.get(CURR); }
    set current(elem)       { this.info.set(CURR, elem); }
    next() {
        const nextNode = this.current.next;
        if(nextNode) this.current = nextNode;
    }
    prev() {
        const prevNode = this.current.prev;
        if(prevNode !== this.head) this.current = prevNode;
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
        console.log(this.current.elem);
        return this;
    }

    insert(newElem, item) {
        let prevNode = this.find(item);
        let nextNode = prevNode.next;
        let newNode = new Node(newElem);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        this.current = newNode;        
        if(nextNode) {
            nextNode.prev = newNode;
            newNode.next = nextNode;
        }
        if(prevNode === this.foot) this.foot = newNode;
        return this;
    }
    add(elem){
        return this.insert(elem, this.foot.elem);
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
    display(){
        let currNode = this.head;
        while(currNode.next){
            currNode = currNode.next;
            console.log(currNode.elem);
        }
    }
    displayReverse(){
        let currNode = this.foot;
        while(currNode.prev !== this.head){
            console.log(currNode.elem);
            currNode = currNode.prev;
        }
    }
    remove(item) {
        const currNode = this.find(item);
        if(currNode){
            let prevNode = currNode.prev;
            let nextNode = currNode.next;
            if(nextNode) {
                nextNode.prev = prevNode;
                prevNode.next = nextNode;
            } else {
                prevNode.next = null;
                this.foot = prevNode;
            }
            currNode.prev = currNode.next = null;
        }
    }
}

const list = new AdvDblLinkedList();
'0'.repeat(20).split('').forEach((v,i)=> list.add(i));
list.back(10).show().advance(5).show();