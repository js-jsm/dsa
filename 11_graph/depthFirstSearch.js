class Graph {
    constructor(v) {
        this.edges     = 0;
        this.adjacency = {};
        this.marked    = {};
    }

    addEdge(p, n) {
        let newPrev = this.adjacency[p] ? this.adjacency[p].indexOf(n) === -1 && this.adjacency[p].push(n) : this.adjacency[p] = [n];
        let newNext = this.adjacency[n] ? this.adjacency[n].indexOf(p) === -1 && this.adjacency[n].push(p) : this.adjacency[n] = [p];
        
        if(newPrev && newNext) 
            this.edges += 1;

        Object.keys(this.adjacency).forEach(k => this.marked[k] = false);

        return this;
    }
    
    showGraph() {
        Object
            .keys(this.adjacency)
            .forEach(k => this.adjacency[k].forEach(v => console.log(`${k} -> ${v} `)));

        console.log(this.adjacency);

        return this;
    }

    depthFirstSearch(k) {
        this.marked[k] = true;

        console.log(`${k} 방문`);

        this.adjacency[k].forEach(k => {
            if(!this.marked[k]) 
                this.depthFirstSearch(k);
        });
    }

}

new Graph()
    .addEdge('철수', '영희')
    .addEdge('철수', '영희')
    .addEdge('진수', '철수')
    .addEdge('영희', '진희')
    .addEdge('진희', '진서')
    .showGraph()
    .depthFirstSearch('진수');
