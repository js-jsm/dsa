class Graph {
    constructor(v) {
        this.edges     = 0;
        this.adjacency = {};
        this.queue     = [];
        this.depth     = -1;
    }

    addEdge(p, c) {
        if(c)
            this.adjacency[p] ? this.adjacency[p].push(c) : this.adjacency[p] = [c];
        else 
            this.adjacency[p] ? null : this.adjacency[p] = [];
 

        this.edges += 1;

        return this;
    }
    
    showGraph() {
        Object
            .keys(this.adjacency)
            .forEach(k => this.adjacency[k].forEach(v => console.log(`${k} -> ${v} `)));

        console.log(this.adjacency);

        console.log(this.edges);

        return this;
    }

    calcEnterCount() {
        //현재 그래프 노드에 있는 모든 정점을 초기화해줍니다. (인접 리스트의 모든 부모노드값을 초기화.)
        Object
            .keys(this.adjacency).forEach(k => this.adjacency[k].count = 0);

        //그리고 해당 루핑을 돌면서 자신을 호출하는 간선의 개수를 카운팅 합니다. 호출되면 + 1 되는 거에요 ! 
        Object
            .keys(this.adjacency)
            .forEach(k => this.adjacency[k].forEach(v => this.adjacency[v].count += 1));
        
        //queue를 위한 인덱스를 증가 시켜주어요 !
        this.depth += 1;

        //console.log(this.adjacency);
    }

    //위상정렬 타포로지퀄 ~ 이라고 읽네요. 
    topologicalSorting() {
        if(!Object.keys(this.adjacency).length) {

            this.queue.forEach(arr => console.log(`[${arr.join(',')}]`));

            return;
        }

        this.calcEnterCount();

        Object.keys(this.adjacency).forEach(k => {
            
            if(this.adjacency[k].count == 0) {
                this.queue[this.depth] ? this.queue[this.depth].push(k) : this.queue[this.depth] = [k];
                delete this.adjacency[k];
            }

        });

        this.topologicalSorting();
    }
}

new Graph()
    .addEdge('CS0', 'CS2')
    .addEdge('CS1', 'CS2')
    .addEdge('CS2', 'Data Structures')
    .addEdge('CS2', 'Assembly Language')
    .addEdge('CS2', 'Operating Systems')
    .addEdge('Data Structures', 'Algorithm')
    .addEdge('Assembly Language')
    .addEdge('Operating Systems')
    .addEdge('Algorithm')
    .showGraph()
    .topologicalSorting();




