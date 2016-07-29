class Node {
	constructor(data, left, right){
		this.data = data;
		this.count = 1;
		this.left = left;
		this.right = right;
	}
	show(){ return this.data; }
}

class BST {
	constructor(){
		this.root = null;
		this.log = '';
	}
	putLog(str) { this.log += str; }
	getLog() { return this.log; }
	cleanLog() { this.log = ''; }

	insert(data) {
		const n = new Node(data, null, null);
		if(!this.root){
			this.root = n;
		} else {
			let current = this.root;
			let parent;
			while(true) {
				parent = current;
				if(data < current.data) {
					current = current.left;
					if(current === null){
						parent.left = n;
						break;
					}
				} else if(data > current.data) {
					current = current.right;
					if(current === null){
						parent.right = n;
						break;
					}
				} else {
					current.count += 1;
					break;
				}
			}
		}
	}
	inOrder(){
		this.cleanLog();
		const inOrder = (node) => {
			if(node !== null){
				inOrder(node.left);
				this.putLog(`str: ${node.data}${' '.repeat(15 - node.data.length)}count: ${node.count}\n`);
				inOrder(node.right);
			}
		}
		inOrder(this.root);
		return this.getLog();
	}
}

const strCount = new BST();
const string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, velit iure! Nemo impedit ipsam, odio distinctio dignissimos magni aperiam est, officiis eveniet repellat veritatis ratione, deserunt pariatur fugiat molestiae doloremque consectetur molestias maxime blanditiis dolor corporis nobis velit sed. Eaque saepe aspernatur consequatur non aut quo inventore culpa neque perferendis fugit, nulla ex, esse iusto nihil obcaecati sit minus corporis, deserunt quisquam voluptas voluptatem reprehenderit eum repudiandae sed. Est maxime sint minima commodi fugiat pariatur quaerat natus expedita dolorem, odit, tenetur non aliquam quidem ducimus ad quae consectetur voluptatibus, repellat explicabo. Assumenda excepturi, esse officia. Minus ad praesentium consequatur eligendi fugiat asperiores, mollitia! Natus ex quidem optio doloribus quasi ratione mollitia quaerat culpa libero sapiente ducimus, voluptatibus ab omnis fugiat molestias, autem minus soluta ad animi veniam? Esse suscipit quod magnam nobis iure ab animi aperiam minus earum unde deserunt laudantium fuga itaque illum laboriosam voluptas perspiciatis obcaecati qui consequatur necessitatibus assumenda in, recusandae repellendus dicta, a. Nobis laboriosam hic harum nemo voluptas rerum quisquam dignissimos sunt. Dicta corporis, deserunt, laboriosam explicabo dolorem numquam rem perferendis ipsa architecto suscipit quisquam ullam unde expedita omnis sunt est libero incidunt, pariatur esse, eveniet? Quas deserunt eaque, dignissimos saepe mollitia enim explicabo suscipit dolores molestiae, numquam animi laboriosam inventore officiis, eum debitis rem consectetur dicta unde quos id asperiores alias vitae veniam amet voluptatum. Asperiores quasi aliquid alias ipsa iste, similique sit inventore? Iste eaque iusto itaque ullam saepe, consequatur officia autem excepturi neque odio, repudiandae tenetur, rerum quo, facilis illo? Animi corporis nobis exercitationem nesciunt enim beatae quidem ad aspernatur nostrum quod labore totam asperiores molestiae, sequi laudantium reiciendis ab est in. Id non consequatur aperiam eum sit culpa ea tempora eos quaerat ipsum nulla hic velit quibusdam minus maiores assumenda delectus rem magnam, quidem esse ex nobis eveniet voluptatem pariatur suscipit? Veniam perferendis aperiam modi excepturi commodi est numquam aliquam a! Dolores, modi, natus? A sapiente, deleniti ipsam quaerat sit culpa nisi delectus corporis velit obcaecati, nihil fuga optio illo nobis, odio omnis repudiandae eos? Dignissimos reprehenderit, quo sint excepturi obcaecati vitae neque aliquam nostrum labore totam nihil molestiae aspernatur fuga qui magnam, minima dolore sunt laborum unde quia aperiam, id nesciunt quibusdam recusandae. Nihil modi nulla minima consequatur tenetur voluptatum at. Nam assumenda, optio voluptatem ad quidem doloribus ratione asperiores quas, molestias tempore excepturi possimus laudantium qui molestiae veritatis repellendus facilis odio laborum praesentium laboriosam quibusdam, similique quo est? Laudantium vero eligendi mollitia dignissimos delectus doloribus quisquam ab alias culpa ipsam voluptates, dolorem natus error ex? Deleniti quia molestias quod sint facilis in, repellat molestiae eaque, dolore officiis asperiores nemo aliquam nostrum minus pariatur fugiat esse consectetur odit aspernatur libero voluptatibus recusandae dolorum! Veritatis dolorem nam debitis illo sapiente officia molestiae, pariatur nesciunt totam consequuntur assumenda aliquid maiores voluptate eveniet repudiandae magni officiis iusto quis! Fugit hic omnis rem odit, eaque mollitia architecto quod aliquid animi totam eligendi commodi eveniet? Consequatur, fugit magnam ipsa unde! Sed velit quam, laboriosam amet eos optio eligendi provident accusamus dolorem quaerat odio, nihil hic.';

string
	.replace(/[,.?!]/g, '')
	.replace(/[A-Z]/g, str=> str.toLowerCase())
	.split(' ').forEach(v=>{ strCount.insert(v); });
console.log(strCount.inOrder());
