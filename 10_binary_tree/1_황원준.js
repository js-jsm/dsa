//예제 풀이를 위한 코드 
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
    }

    insert(data) {
        let newNode = new Node(data)

        if(this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === undefined) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === undefined) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

  
    //작동안됨
     inOrder(node) {
        if(node !== null) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
    //작동됨
     inOrder(node) { 
        if (!(node == null)) { 
            this.inOrder(node.left); 
            console.log(node.show() + " "); 
            this.inOrder(node.right); 
        } 
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
