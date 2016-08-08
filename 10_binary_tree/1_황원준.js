//예제1번 및 BST CLASS
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.count = 0; //used exam1
        this.edge = 0; //used exam1
    }

    insert(data) {
        let newNode = new Node(data)

        if(this.root === null) {
            this.root = newNode
            ++this.count;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === undefined) {
                node.left = newNode;
                ++this.count;
                ++this.edge;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === undefined) {
                node.right = newNode;
                ++this.count;
                ++this.edge;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    /* 트리 순회 */
    inOrder(node) {
        if(node !== undefined) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
    preOrder(node) {
           if(node !== undefined) {
            console.log(node.show());
            this.inOrder(node.left);
            this.inOrder(node.right);
        }
    }

    postOrder(node) {
           if(node !== undefined) {
            this.inOrder(node.left);
            this.inOrder(node.right);
            console.log(node.show());
        }
    }
    /*노드 갯수 엣지 갯수 exam*/
    getCount() {
        return this.count;
    }
    
    getEdge() {
        return this.edge;
    }

    /*최대값 최소값 exam*/
    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        if (node) {
            while (node && node.left !== undefined) {
                node = node.left
            }
            return node.data;
        }
        return null;
    }   
    
    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        if (node) {
            while (node && node.right !== undefined) {
                node = node.right;
            }
            return node.data;
        }
        return null;
    }

}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.inOrder(tree.root);
tree.preOrder(tree.root);
tree.postOrder(tree.root);

tree.min();
tree.max();
tree.getCount();
tree.getEdge();
