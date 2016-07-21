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

class LinkedSet {
    constructor() {
        this.head    = null;
        this.current = null;
    }

    insert(data) {
        if(this.contains(data))
            return;

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

    contains(v) {
        let node = this.head; 

        if(!node)
            return false;

        while(true) {
            if(node.el == v) 
                return true;

            node = node.next;

            if(!node)
                break;
        }

        return false;
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

const set = new LinkedSet();

set.insert(3);
set.insert(33);
set.insert(3);
set.insert(3);
set.insert(3);
set.insert(3);
set.insert(3);
set.insert(3);

set.show();