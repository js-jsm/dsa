const Node = (()=>{
    const [ELEM, PREV, NEXT] = [
        {[Symbol('ELEMENT')]: 'elements'},
        {[Symbol('PREV')]: 'prev'},
        {[Symbol('NEXT')]: 'next'}
    ];
    return class {
        constructor(elem){
            this.map = new WeakMap();
            this.map.set(ELEM, elem);
        }
        get elem(){ return this.map.get(ELEM); }
        set elem(elem){ this.map.set(ELEM, elem); }
        get prev(){ return this.map.get(PREV); }
        set prev(prev){ this.map.set(PREV, prev); }
        get next(){ return this.map.get(NEXT); }
        set next(next){ this.map.set(NEXT, next); }
    }
})();

const DoublyLinkedList = (()=>{
    const [HEAD, FOOT] = [
        {[Symbol('HEAD')]: 'head'},
        {[Symbol('FOOT')]: 'foot'}
    ];
    return class {
        constructor(){
            this.map = new WeakMap();
            this.map.set(HEAD, new Node('head'));
        }
        get HEAD(){ return this.map.get(HEAD); }
        set HEAD(node){ this.map.set(HEAD, node); }
        get FOOT(){ return this.map.get(FOOT); }
        set FOOT(node){ this.map.set(FOOT, node); }

        add(elem){
            const prevNode = this.FOOT || this.HEAD;
            const newNode = new Node(elem);
            this.FOOT = newNode;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            return this;
        }
        insert(newElem, item) {
            let prevNode = this.find(item);
            let nextNode = prevNode.next;
            let newNode = new Node(newElem);
            prevNode.next = newNode;
            newNode.prev = prevNode;
            
            if(nextNode) {
                nextNode.prev = newNode;
                newNode.next = nextNode;
            }
            if(prevNode === this.FOOT) this.FOOT = newNode;
        }
        find(item){
            let currNode = this.HEAD;
            while(true) {
                if(currNode && currNode.elem === item) return currNode;
                if(!currNode.next) return false;
                currNode = currNode.next;
            }
            return currNode;
        }
        findEnd(){
            let currNode = this.FOOT || this.HEAD;
            while(currNode.next) {
                currNode = currNode.next;
            }
            this.FOOT = currNode;
            return currNode;
        }
        display(){
            let currNode = this.HEAD;
            while(currNode.next){
                currNode = currNode.next;
                console.log(currNode.elem);
            }
        }
        displayReverse(){
            let currNode = this.findEnd();
            while(currNode !== this.HEAD){
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
                    this.FOOT = prevNode;
                }
                currNode.prev = currNode.next = null;
            }
        }
    }
})();
module.exports = DoublyLinkedList;