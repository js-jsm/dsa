class Person {
    constructor(name) {
        this.name = name;
    }
}

class Node {
    constructor({el, prev, next}) {
        this._el   = el;
        this._prev = prev;
        this._next = next;
    }

    set el(el) {
        this._el = el;
    }

    get el() {
        return this._el;
    }

    set prev(el) {
        this._prev = el;
    }

    get prev() {
        return this._prev;
    }

    set next(el) {
        this._next = el;
    } 

    get next() {
        return this._next;
    }
}

class LinkedList {
    constructor() {
        this.head    = null;
        this.current = null;
    }

    insert(data) {
        let node;

        node = new Node({
            el : data,
            next : null
        });     

        if(this.head === null) 
            this.head = node;
        else 
            this.current.next = node;

        this.current = node;
    }

    show() {
        let node = this.head; 

        if(!node)
            throw new Error('list is empty');

        while(true) {
            console.log(node.el);

            node = node.next;

            if(!node)
                break;
        }
    }
}

const list = new LinkedList();


new Array(100)
        .fill(0)
        .map((v, i) => list.insert(i));

list.show();