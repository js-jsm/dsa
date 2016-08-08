/* 11.3.3 그래프 구현 */

const Graph = class {
	constructor(v) {
		this.vertices = v;
		this.edges = 0;
		this.adj = '0'.repeat(this.vertices).split('').map(v=> []);
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
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

