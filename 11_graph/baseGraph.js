//간단하게 구현해본 기본 인접리스트 그래프 자료구조. 
class Graph {
    constructor() {
        this.edges     = 0;
        this.adjacency = {};
    }

    addEdge(p, n) { //철수, 영희
        let newPrev = this.adjacency[p] ? this.adjacency[p].indexOf(n) === -1 && this.adjacency[p].push(n) : this.adjacency[p] = [n];
        let newNext = this.adjacency[n] ? this.adjacency[n].indexOf(p) === -1 && this.adjacency[n].push(p) : this.adjacency[n] = [p];
        
        newPrev && newNext ? this.edges += 1 : null;
        
        return this;
    }
    
    showGraph() {
        Object
            .keys(this.adjacency)
            .forEach(k => this.adjacency[k].forEach(v => console.log(`${k} -> ${v} `)));

            console.log(this.edges);
    }
}

new Graph()
    .addEdge('철수', '영희')
    .addEdge('철수', '영희')
    .addEdge('철수', '진수')
    .addEdge('영희', '진희')
    .addEdge('진희', '진서')
    .showGraph();
