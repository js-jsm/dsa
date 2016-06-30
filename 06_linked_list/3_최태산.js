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
        for(let i = 1; i <= 5; i++) 
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

    remove(name) {
        let node = this.head; 

        if(!node)
            throw new Error('list is empty');

        while(true) {
            if(node.el.name === name) {
                let prevNode = node.prev,
                    nextNode = node.next;

                if(prevNode)
                    prevNode.next = nextNode;
                else
                    this.head = nextNode;

                if(nextNode)
                    nextNode.prev = prevNode;


                if(this.current.el.name === name)
                    this.current = prevNode;


                break;
            }

            node = node.next;

            if(!node)
                break;
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
    .remove('name_1');