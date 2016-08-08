/* 11.4.1 깊이 우선 검색 */

const Graph = class {
	constructor(v) {
		this.vertices = v;
		this.edges = 0;
		this.adj = '0'.repeat(this.vertices).split('').map(v=> []);
		this.marked = new Array(this.vertices).fill(false);
	}
	addEdge(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	}
	showGraph() {
		return this.adj.map((v, i) =>
			i + ' -> ' + v.reduce((pp, cc) => pp + (cc ? ' ' + cc : ''))
		).join('\n');
	}
	dfs(v) {
		let queue = [v];
		do {
			let t = queue.shift();
			this.marked[t] = true;
			if(this.adj[t] !== undefined) {
				console.log('Visited vertex: ' + t);
			}
			queue = this.adj[t]
				.filter(w => !this.marked[w])
				.concat(queue);
		} while(queue.length);
		this.marked = this.marked.map(v=>false);
	}
}

const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 5);
g.addEdge(2, 4);
g.addEdge(5, 6);
g.dfs(0);

/**
 * 0, 1, 3, 5, 6, 2, 4
 */