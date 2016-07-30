function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.getNodeCount = getNodeCount;
    this.getEdgeCount = getEdgeCount;
}

function show(){
    return this.data;
}

function insert(data){
    var n = new Node(data, null, null);
    if(this.root == null){
        this.root = n;
    }
    else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }
            else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function getNodeCount(node){
    if (node == null){ 
        return 0;
    }else{
        return this.getNodeCount(node.left) + this.getNodeCount(node.right) + 1;
    }
}

function getEdgeCount(node){
    if (node == null){ 
        return 0;
    }else{
        return this.getNodeCount(node) -1;
    }
}


var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

var totalNode = nums.getNodeCount(nums.root);
var totalEdge = nums.getEdgeCount(nums.root);

console.log('BST의 노드 개수 : '+ totalNode);
console.log('BST의 엣지 개수 : '+ totalEdge);