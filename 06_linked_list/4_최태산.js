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
        this.length  = 0;
    }

    init(n) {
        for(let i = 1; i <= n; i++) 
            this.insert(
                new Person(`name_${i}`)
            );

        return this;
    }

    insert(data) {
        let node;

        node = new Node({
            el : data,
            next : null
        });     

        if(this.head === null) {
            this.head = node;
        } else {
            this.current.next = node;
            node.next = this.head;
        }

        this.current = node;
        this.length += 1;
    }

    kill(n) {
        this.current = this.head;
        this.validation(n);


        let prevNode = null;


        while(true) {
            for(let i = n; i--;) {

                if(i == 0) {
                    prevNode.next = this.current.next;

                    console.log('delete', this.current.el.name);

                    this.current = prevNode;

                    this.length -= 1;

                    this.current = this.current.next;    

                    break;
                }

                prevNode = this.current;
                this.current = this.current.next;    
            }

            if(this.length == 2)
                break;
        }
        
        return this;
    }

    validation(n) {
        if(n <= 2) 
            throw Error('kill count must be overflow number 2');

        if(this.length <= n)
            throw Error('out of bounce list size');

        if(!this.current)
            throw Error('list is Empty.');
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


const list = new LinkedList()
                .init(40)
                .kill(3);