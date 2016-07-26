class Stack extends Array{
    constructor() {
        super();
    }

    isEmpty() {
        return this.length == 0;
    }
}


class Node {
    constructor({data = null, left = null, right = null}) {
        this._data  = data;
        this._left  = left;
        this._right = right;
    }

    set data(v) {this._data = v;}
    set left(v) {this._left = v;}
    set right(v) {this._right = v;}

    get data() {return this._data;}
    get left() {return this._left;}
    get right() {return this._right;}
}

class Tree {
    constructor() {
        this._root;
        this._stack;
        this._nodeCount = 0;
        this._edge      = 0;
    }

    insert(data) {
        let node    = new Node({data: data}),
            current = null,
            input   = () => {
                current = this.root;

                while(true) {
                    if(data < current.data) {
                        if(!current.left) {
                            current.left = node;
                            break;
                        }

                        current = current.left;
                    } else {
                        if(!current.right) {
                            current.right = node;
                            break;
                        }

                        current = current.right;
                    }
                }

                this.nodeCount = this.nodeCount + 1;
                this.edge = this.nodeCount - 1;
            };

        if(!this.root) {
            this.root = node;
            return this;
        }

        !this.contains(data) && input();

        return this;
    }

    contains(v) {
        let current = this.root;

        this.stack = new Stack();

        this.stack.push(current);

        while(!this.stack.isEmpty()) {

            if(current) {

                if(current.data == v) {
                    return true;
                }

                this.stack.push(current);
                current = current.left;

            } else {

                current = this.stack.pop().right;

            }

        }

        return false;
    } 

    //전위순회 
    preOrder() {
        let current = this.root;

        this.stack = new Stack();

        this.stack.push(current);

        while(!this.stack.isEmpty()) {

            if(current) {

                console.log(current.data);
                this.stack.push(current);
                current = current.left;

            } else {

                current = this.stack.pop().right;

            }

        }
    }   

    //중위순회
    inOrder() {
        let current = this.root;

        this.stack = new Stack();

        while(true) {
            while(current) {
                this.stack.push(current);
                current = current.left;
            }

            current = this.stack.pop();

            if(!current) break;

            console.log(current.data);
            current = current.right;
        }

    }

    //후위순회
    postOrder() {
        let printStack = new Stack(),
            current;
    
        this.stack = new Stack();

        this.stack.push(this.root);

        while(!this.stack.isEmpty()) {
            
            current = this.stack.pop();

            printStack.push(current);   

            if(current.left)
                this.stack.push(current.left);

            if(current.right)
                this.stack.push(current.right);
        }

        while(!printStack.isEmpty())
            console.log(printStack.pop().data);
    }

    getMin() {
        let current = this.root;

        while(true) 
            if(current.left)            
                current = current.left;
            else 
                return current.data;
        
    }

    getMax() {
        let current = this.root;

        while(true) 
            if(current.right)            
                current = current.right;
            else 
                return current.data;
    }

    set stack(v) {this._stack = v;}
    set root(v) {this._root = v;}
    set nodeCount(v) {this._nodeCount = v;}
    set edge(v) {this._edge = v;}

    get stack() {return this._stack;}
    get root() {return this._root;}
    get nodeCount() {return this._nodeCount;}
    get edge() {return this._edge;}
}

const tree = new Tree()
            .insert(5)
            .insert(5)
            .insert(4)
            .insert(8)
            .insert(2)
            .insert(6)
            .insert(9)
            .insert(1)
            .insert(3)
            .insert(7);

console.log(
    tree.getMin(),
    tree.getMax()
);





