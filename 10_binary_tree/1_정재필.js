
class Node {
    constructor(data=null, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);

        if( this.root == null) {
            this.root = newNode;
        } else {
            let current = this.root;
            let parent;
            while ( true ) {
                parent = current;
                if ( data < current.data ) {
                    current = current.left;
                    if ( current == null ) {
                        parent.left = newNode;
                        break;
                    }
                } else {
                    current = current.right;
                    if ( current == null ) {
                        parent.right = newNode;
                        break;
                    }
                }
            }
        }
    }

    getMin() {
        let current = this.root;
        while ( current.left != null ) {
            current = current.left;
        }
        return current.data;
    }

    getMax() {
        let current = this.root;
        while ( current.right != null ) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data != data) {
            if ( data < current.data ) {
                current = current.left;
            } else {
                current = current.right;
            }
            if ( current == null ) {
                return null;
            }
        }
        return current;
    }

    inOrder(node) {
        if( !(node == null) ) {
            this.inOrder(node.left);
            console.log( node.show() );

            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if( node != null ) {
            console.log( node.show() );
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if( node != null ) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log( node.show() );
        }
    }

    calcNodeCount(node) {
        let count = 0;
        let nodeleft = node.left;
        let noderight = node.right;
        let left_lv;
        let right_lv;
        if( node.data != null ) {
            count++;
            left_lv = Object.assign({}, nodeleft);
            // console.log(left_lv);
            while( nodeleft.data != null ) {
                count++;
                if( !!nodeleft.left ) {
                    nodeleft = nodeleft.left;
                    console.log(nodeleft);
                } else {
                    if( !!left_lv.right && !!left_lv.right.left ) {
                        nodeleft = left_lv.right.left;
                        left_lv = Object.assign({}, left_lv.right.left);
                        // console.log(left_lv);
                    }
                }
            }

            right_lv = Object.assign({}, noderight);
            while ( noderight.data =! null ) {
                count++;
                if( !!noderight.right ) {
                    noderight = noderight.right;
                } else {
                    if( !!right_lv.left && !!right_lv.left.right ) {
                        noderight = right_lv.left.right;
                        right_lv = Object.assign({}, right_lv.left.right);;
                    }
                }
            }
            console.log( 'count : ' + count );
        }

    }

}

// 중위 탐색 테스트
var bst = new BST();
var arr = [23,45,16,37,3,99,22];
arr.forEach( v => bst.insert(v) );

bst.calcNodeCount(bst.root);
