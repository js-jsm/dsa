class Node {
    constructor(element) {
        this._element = element;
        this._left = null;
        this._right = null;
    }

    get element() {
        return this._element;
    }

    set left (element) {
        this._left = element;
    }

    get left() {
        return this._left;
    }

    set right(element) {
        this._right = element;
    }

    get right() {
        return this._right;
    }
}

class CircleLinkedList {
    constructor() {
        this._head = new Node("head");
        this.head.left = this.head;
        this.head.right = this.head;
        this._current = this.head;
    }

    get head() {
        return this._head;
    }

    set current(newNode) {
        if (!newNode instanceof Node) {
            return false;
        }
        this._current = newNode;
    }

    get current() {
        return this._current;
    }

    add(element) {
        let newNode = new Node(element);

        newNode.left = this.current;
        // newNode.right = this.head;
        newNode.right = this.current.right;
        
        if((this.current = newNode) == false) {
            console.log("추가에 실패");
            return;
        }

        newNode.left.right = this.current;
    }

    find(element) {
        let currNode = this.head;

        do {
            if (currNode.element == element)
                return currNode;

            currNode = currNode.right;
        } while(currNode.element != "head")
    }

    remove(element) {
        let found = this.find(element);

        if (found instanceof Node) {
            if (found === this.current)
                this.current = found.left;

            found.left.right = found.right;
            found.right.left = found.left;
            found.left = null;
            found.right = null;
        }
    }

    advance(step) {     
        for (let begin=0, end=step; begin<end; ++begin) {
            this.current = this.current.right;
        }
    }

    back(step) {
        for (let begin=0, end=step; begin<end; ++begin) {
            this.current = this.current.left;
        }
    }

    display() {
        let currNode = this.head;
        let array = [];

        do {
            if (this.current == currNode) {
                array.push("[" + currNode.element + "]");
            } else {
                array.push(currNode.element);
            }

            currNode = currNode.right;
        } while(currNode.element != "head")
        console.log(array.join(","));
    }
}

// example
function randomRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let linkedList = new CircleLinkedList();

for (var i=0; i<9; ++i) {
    linkedList.add(randomRange(1, 100));
}
linkedList.add(5);
console.log("====== add(5)");
linkedList.display(); // head,61,72,84,65,32,54,68,36,50,[5]

linkedList.remove(5);
console.log("====== remove(5)");
linkedList.display(); // head,61,72,84,65,32,54,68,36,[50]

linkedList.advance(2);
console.log("====== advance(2)");
linkedList.display(); // head,[61],72,84,65,32,54,68,36,50

linkedList.add(5);
console.log("====== add(5)");
linkedList.display(); // head,61,[5],72,84,65,32,54,68,36,50

linkedList.advance(2);
console.log("====== advance(2)");
linkedList.display(); // head,61,5,72,[84],65,32,54,68,36,50

linkedList.back(3);
console.log("====== back(3)");
linkedList.display(); // [head],61,5,72,84,65,32,54,68,36,50

linkedList.add(1);
console.log("====== add(1)");
linkedList.display(); // head,[1],61,5,72,84,65,32,54,68,36,50

linkedList.back(2);
console.log("====== back(2)");
linkedList.display(); // head,1,61,5,72,84,65,32,54,68,36,[50]