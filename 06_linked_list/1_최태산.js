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

class TowayLinkedList {
    constructor() {
        this.head    = null;
        this.current = null;

        this.init();
    }

    init() {
        for(let i = 1; i <= 30; i++) 
            this.insert(
                new Person(`name_${i}`)
            );
    }

    insert(data) {
        let node;

        if(this.head === null) {
            node = new Node({
                el : data,
                prev : null,
                next : null
            });        

            this.head = node;

        } else {
            node = new Node({
                el : data,
                prev : this.current,
                next : null
            });

            this.current.next = node;
        }

        this.current = node;
    }

    advenced(n) {
        for(let i = n; i--;) {
            this.current = this.current.next;

            if(!this.current)
                throw new Error('out of bounce exception. next node is Empty.');
        }

        return this;
    }

    back(n) {
        for(let i = n; i--;) {
            this.current = this.current.prev;

            if(!this.current)
                throw new Error('out of bounce exception. prev node is Empty.');
        }

        return this;
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


new TowayLinkedList()
                    .back(2)
                    .show();