class Node {
        constructor(data, left, right) {
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
            this.totalCount = 0;
        }

        insert(data) {
            let n = new Node(data, null, null);
            if (this.root == null) {
                this.root = n;
            }
            else {
                let current = this.root;
                let parent;

                while (true) {
                    parent = current;
                    if (data < current.data) {
                        current = current.left;
                        if (current == null) {
                            parent.left = n;
                            break;
                        }
                    }
                    else {
                        current = current.right;
                        if (current == null) {
                            parent.right = n;
                            break;
                        }
                    }
                }
            }

            this.totalCount++;
        }

        inOrder(node) {
            if (node !== null) {
                this.inOrder(node.left);
                console.log(node.show());
                this.inOrder(node.right);
            }
        }

        getMin(){
            let current = this.root;
            while(current.left !== null){
                current = current.left;
            }
            return current.data;
        }
        getMax(){
            let current = this.root;
            while(current.right !== null){
                current = current.right;
            }
            return current.data;
        }

        getTotalNodeCount() {
            return this.totalCount;
        }

        getEdgeCount() {
            return this.totalCount - 1;
        }
    }

    let bst = new BST();
    bst.insert(5);
    bst.insert(8);
    bst.insert(7);
    bst.insert(4);
    bst.insert(88);
    bst.insert(6);
    bst.insert(3);
    bst.insert(2);
    bst.insert(9);
    bst.insert(100);

    console.log("노드 갯수 : "+bst.getTotalNodeCount());
    console.log("엣지 갯수 : "+bst.getEdgeCount());
    console.log("최솟값 : " + bst.getMin());
    console.log("최댓값 : " + bst.getMax());
