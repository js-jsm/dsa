/* 11.4.2 너비 우선 검색 */
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
		while(queue.length > 0) {
			const v = queue.shift();
			if(v !== undefined) {
				console.log('Visited vertex: ' + v);
			}
			this.adj[v].forEach(w=> {
				if(!this.marked[w]) {
					this.marked[w] = true;
					queue.push(w);
				}
			});
		}
	}
}

const g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 5);
g.addEdge(2, 4);
g.addEdge(5, 6);
g.bfs(0);

/*
0, 1, 2, 3, 5, 4, 6
*/