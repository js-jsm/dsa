const Node = (_=>{
    const [ELEM, NEXT] = [
        {[Symbol('ELEMENT')]: 'elements'},
        {[Symbol('NEXT')]: 'next'}
    ];
    class Node {
        constructor(elem){
            this.map = new WeakMap();
            this.map.set(ELEM, elem);
        }
        get elem(){
            return this.map.get(ELEM);
        }
        set elem(elem){
            this.map.set(ELEM, elem);
        }
        get next(){
            return this.map.get(NEXT);
        }
        set next(next){
            this.map.set(NEXT, next);
        }
    }
    return Node;
})();

const LinkedList = (_=>{
    const [HEAD, FOOT] = [
        {[Symbol('HEAD')]: 'head'},
        {[Symbol('FOOT')]: 'foot'}
    ];
    class LinkedList {
        constructor(){
            this.map = new WeakMap();
            this.map.set(HEAD, new Node('head'));
        }
        get HEAD (){ return this.map.get(HEAD); }
        get FOOT (){ return this.map.get(FOOT); }
        set HEAD (node){ this.map.set(HEAD, node); }
        set FOOT (node){ this.map.set(FOOT, node); }

        add(elem){
            const prevNode = this.FOOT || this.HEAD;
            const newNode = new Node(elem);
            this.FOOT = newNode;
            prevNode.next = newNode;
            return this;
        }
        insert(newElem, item) {
            let newNode = new Node(newElem);
            let prevNode = this.find(item);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            if(prevNode === this.FOOT) this.FOOT = newNode;
        }
        find(item){
            let currNode = this.HEAD;
            while (currNode && currNode.elem !== item) {
                currNode = currNode.next;
            }
            return currNode;
        }
        findPrev(item) {
            let currNode = this.HEAD;
            while (currNode.next && currNode.next.elem !== item) {
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
        remove(item) {
            const prevNode = this.findPrev(item);
            if(prevNode.next.next) prevNode.next = prevNode.next.next;
        }
    }
    return LinkedList;
})();

module.exports = LinkedList;