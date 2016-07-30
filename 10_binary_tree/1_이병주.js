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

        getTotalNodeCount() {
            return this.totalCount;
        }

        getEdgeCount() {
            return this.totalCount -1;
        }
    }

    let bst = new BST();
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(4);
    bst.insert(5);
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    bst.insert(10);

    console.log(bst.getTotalNodeCount());
    console.log(bst.getEdgeCount());
