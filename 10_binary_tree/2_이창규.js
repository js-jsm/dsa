class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  thisNodeShow() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let n = new Node(data, null, null);
    if(this.root == null){
        this.root = n;
    } else {
      let current = this.root;
      let parent;
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
  MinimumCheck(){
    let current = this.root;
    while(current.right !== null){
      current = current.left;
    }
    console.log(`이 트리의 최소값은 ${current.data}입니다.`);
  }
  MaximumCheck(){
    let current = this.root;
    while(current.right !== null){
      current = current.right;
    }
    console.log(`이 트리의 최대값은 ${current.data}입니다.`);
  }
}

const newbst = new BST();
newbst.insert(10);
newbst.insert(5);
newbst.insert(15);
newbst.insert(20);
newbst.insert(13);
newbst.MinimumCheck();
newbst.MaximumCheck();
