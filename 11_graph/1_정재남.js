/* 1 */
const Graph = class {
	constructor() {
		this.adj = [];
		this.marked = [];
		this.edges = [];
	}
	addEdge(v, w) {
		this.edges.push([v, w]);
		if(!this.adj[v]) this.adj[v] = [];
		if(!this.adj[w]) this.adj[w] = [];
		this.adj[v].push(w);
		this.adj[w].push(v);
	}
	showGraph() {
		return this.adj.map((v, i) =>
			i + ' -> ' + v.reduce((pp, cc) => pp + (cc ? ' ' + cc : ''))
		).join('\n');
	}
	bfs(s) {
		console.log('bfs');
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
		this.marked = [];
	}
	dfs(v) {
		console.log('dfs');
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
		this.marked = [];
	}
	getTime(type, v) {
		var start = window.performance.now();
		this[type](v);
		var end = window.performance.now();
		return end - start;
	}
	compare(from, times) {
		const compare = (resolve, reject) => {
			const bfs = this.getTime('bfs', from);
			const dfs = this.getTime('dfs', from);
			resolve({bfs, dfs});
		}
		const promises = new Array(times).fill(0)
			.map((v,i)=> new Promise(compare).then(result => {
				console.log(`${i+1} : bfs - ${Math.round(result.bfs*1000)/1000}, dfs - ${Math.round(result.dfs*1000)/1000}`);
				return result;
			}));
		Promise.all(promises).then(results => {
			results = results.reduce((p,c)=>({
				bfs: p.bfs + c.bfs,
				dfs: p.dfs + c.dfs
			}));
			const res = results.bfs > results.dfs
				? ['dfs', 'bfs', (results.bfs - results.dfs)/times]
				: ['bfs', 'dfs', (results.dfs - results.bfs)/times];
			console.log(`RESULT : ${res[0]} is faster than ${res[1]} by ${Math.round(res[2]*1000)/1000} milliseconds in average.`);
		})
	}
	toJSON() {
		return this.edges;
	}
	fromJSON(json) {
		json.forEach(v => {
			this.addEdge(...v);
		});
	}
}

const g = new Graph();
g.fromJSON([['A','B'], ['A','C'], ['B','D'], ['B','G'], ['C','E'], ['F','G'], ['F','H'], ['G','I'], ['H','J']]);
g.compare('A', 10);
g.toJSON();