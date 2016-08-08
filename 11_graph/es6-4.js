/* 11.5 최단 경로 찾기 */

const Graph = class {
	constructor(v) {
		this.vertices = v;
		this.edges = 0;
		this.adj = '0'.repeat(this.vertices).split('').map(v=> []);
		this.marked = new Array(this.vertices).fill(false);
		this.edgeTo = [];
	}
	addEdge(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
	}
	showGraph() {
		return this.adj.map((v, i) =>
			i + ' -> ' + v.reduce((pp, cc) => pp + (cc ? ' ' + cc : ''))
		).join('\n');
	}
	bfs(s) {
		const queue = [];
		this.marked[s] = true;
		queue.push(s);
		do {
			const v = queue.shift();
			this.adj[v].forEach(w=> {
				if(!this.marked[w]) {
					this.marked[w] = true;
					this.edgeTo[w] = v;
					queue.push(w);
				}
			});
		} while(queue.length > 0)
	}
	pathTo(v) {
		let source = 0;
		if(!this.marked.every(w=> w === true)) { this.bfs(source); }
		if(!this.hasPathTo(v)) return;
		const path = [];
		for(let i = v; i !== source ; i = this.edgeTo[i]) {
			path.push(i);
		}
		path.push(source);
		return path;
	}
	hasPathTo(v) { return this.marked[v]; }
}

const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 5);
g.addEdge(2, 4);
g.addEdge(5, 6);
const paths = g.pathTo(6);
let res = '';
console.log(paths.reduceRight((p, c, i) => `${p} - ${c}`));

/**
 * 0 - 1 - 5 - 6
 */