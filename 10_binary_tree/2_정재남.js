class Node {
	constructor(data, left, right){
		this.data = data;
		this.left = left;
		this.right = right;
	}
	show(){ return this.data; }
}

class BST {
	constructor(){
		this.root = null;
		this.log = '';
		this.nodeLength = 0;
	}
	putLog(str) { this.log += str; }
	getLog() { return this.log; }
	cleanLog() { this.log = ''; }
	getNodes(){ return this.nodeLength; }
	getEdges(){ return this.nodeLength - 1; }

	insert(data) {
		const n = new Node(data, null, null);
		if(!this.root){
			this.root = n;
		} else {
			let current = this.root;
			let parent;
			while(true) {
				parent = current;
				if(data < current.data){
					current = current.left;
					if(current === null){
						parent.left = n;
						break;
					}
				} else {
					current = current.right;
					if(current === null){
						parent.right = n;
						break;
					}
				}
			}
		}
		this.nodeLength += 1;
	}
	getMax(){
		const getMax = node => {
			if(node.right) return getMax(node.right);
			return node.data;
		}
		return getMax(this.root);
	}
	getMin(){
		const getMin = node => {
			if(node.left) return getMin(node.left);
			return node.data;
		}
		return getMin(this.root);
	}
}

const nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(9);
nums.insert(22);
console.log('max node : ' + nums.getMax());
console.log('min node : ' + nums.getMin());
