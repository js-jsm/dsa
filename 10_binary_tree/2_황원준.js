//1번 예제에 구현된 클래스에서 추가된 내용만 생성.
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
