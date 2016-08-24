class Graph {
    constructor(v) {
        this.edges     = 0;
        this.adjacency = {};
        this.marked    = {};
        this.edgeTo    = {};
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

    //너비 우선으로 검색. 
    roadSearch(s, f) {
        let queue = [s];
        this.marked[s] = true;

        while(queue.length > 0) {
            let k = queue.shift();

            console.log(`${k} 방문`);

            this.adjacency[k].forEach(v => {
                if(!this.marked[v]) {
                    this.edgeTo[v] = k; 
                    this.marked[v] = true;
                    queue.push(v);
                }
            }); 
        }


        if(!this.marked[s])
            return;


        queue = [];

        //찾아야할 놈을 시작으로 역행합니다. 
        for(let i = f; i != s; i = this.edgeTo[i])
            queue.push(i);

        queue.push(s);

        console.log(queue.join(' <- '));
    }


    //깊이 우선 탐색으로 만들어낸 것. 
    startRoadSearch(startKey, finishKey) {
        this.ended = false;

        this.marked[startKey] = true;

        console.log(`${startKey} 방문`);

        this.adjacency[startKey].forEach(k => {
            
            if(this.ended) 
                return;

            this.edgeTo = [startKey];

            if(!this.marked[k]) 
                this.againRoadSearch(k, finishKey);
        });

        //pathTo
        console.log(this.edgeTo.join(' -> '));
    }

    againRoadSearch(k, f) {
        this.marked[k] = true;
        this.edgeTo.push(k);

        console.log(`${k} 방문`);

        if(k == f) { //결과 노드까지 탐색하였고 그 결과값을 찾았을때 ! 
            this.ended = true;
            return;
        }

        this.adjacency[k].forEach(k => {
            if(!this.marked[k]) 
                this.againRoadSearch(k, f);
        });
    }


    
}

new Graph()
    .addEdge('철수', '영희')
    .addEdge('철수', '영희')
    .addEdge('진수', '철수')
    .addEdge('영희', '진희')
    .addEdge('진희', '진서')
    //.addEdge('진서', '진수')
    .startRoadSearch('철수', '진서');
    //.roadSearch('진수', '진서');
