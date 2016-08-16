
class ExecutionTime {
    constructor(testList = []) {
        this.start_dt = 0
        this.end_dt = 0;
        this.queue = [];
        this.result = [];
        this.log = [];

        testList.map( func => this.pushTest(func) );
    }

    pushTest(func) {
        this.queue.push(func);
    }

    execFunc(func) {
        this.start();
        func();
        this.end();
    }

    test() {
        let func;
        while ( this.queue.length > 0 ) {
            func = this.queue.shift();
            this.execFunc(func);
            this.result.push({
                'name' : func.name || '익명_'+this.queue.length,
                'time' : this.getTime()
            });
            this.log.push(`${this.start_dt} - ${this.end_dt} = ${this.getTime()}`);
        }
    }

    start() {
        this.start_dt = new Date().getTime();
    }

    end() {
        this.end_dt = new Date().getTime();
    }

    print() {
        let record =  JSON.parse(JSON.stringify( this.result ));
        let first = 0;
        let last = 0;

        record.sort( (a, b) => a.time > b.time );
        record.map( data => console.log(`${data.name} : ${data.time}`) );

        first = record[0];
        last = record[record.length - 1];
        console.log(`가장빠른 ${first.name} 는 가장느린 ${last.name} 보다 ${last.time - first.time} 빠르다.`);
    }

    getTime() {
        return (this.end_dt - this.start_dt) / 1000;
    }
}

class Graph {
    constructor(v = []) {
        this.edges = 0;     // 간선의 수
        this.adj = [];      // 인접 리스트
        this.marked = [];   // 방문 확인용 마킹
        this.visitedIndex = []; // 방문순서
    }

    addEdge(v, w) {
        if( !this.adj[v] ) this.adj[v]  = [];
        if( !this.adj[w] ) this.adj[w]  = [];

        if( this.adj[v].indexOf(w) < 0 && this.adj[w].indexOf(v) < 0 ) {
            this.adj[v].push(w);
            this.adj[w].push(v);
            this.edges++;
        }
    }

    /**
     * 한 정점에서 시작해 마지막 정점이 나올 때까지 모든 경로를 탐색한 다음,
     * 다시 이전 경로로 거슬러 올라가 다음 경로 찾기를 반복해 더 이상 방문할 경로가 없을 때까지 참색 수행.
     * @return {[type]} [description]
     */
    depthFirstSearch(v = 0) {
        if( !this.marked[v] ) this.marked[v] = true;
        if ( !!this.adj[v] ) { // 인접리스트가 존재하면.
            this.visitedIndex.push(v);
        }

        this.adj[v].forEach( (w, idx) => {
            if ( !this.marked[w] ) {
                this.depthFirstSearch(w);
            }
        });
    }

    /**
     * 너비 우선 검색에서는 첫 번째 정점에서 시작해 가능한 한 첫 번째 정점과 가까운 정점을 방문한다.
     * 기본적으로 너비 우선 검색은 그래프를 계층(layer)별로 탐색한다.
     * @param  {[type]} v =             0 [description]
     * @return {[type]}   [description]
     */
    breadthFirstSearch(v = 0) {
        let queue = [];

        queue.push(v);
        if( !this.marked[v] ) this.marked[v] = true;

        while ( queue.length > 0 ) {
            v = queue.shift();
            if ( !!this.adj[v] ) {
                this.visitedIndex.push(v);
            }
            this.adj[v].forEach( (w, idx) => {
                if ( !!!this.marked[w] ) {
                    queue.push(w);
                    this.marked[w] = true;
                }
            });
        }
    }

    makeEdge( limit = 10000 ) {
        let i = limit, r1 = 0, r2 = 0;
        while( i-- > 0 ) {
            r1 = Math.floor( (Math.random() * Math.floor(limit/2)) );
            r2 = Math.floor( (Math.random() * Math.floor(limit/2)) );

            if( r1 !== r2 ) {
                this.addEdge(r1, r2);
            }
            if( r1 != 0 && r1%5 == 0 ) {
                this.addEdge(0, r1);
            }

        }

    }

    reset() {
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        this.visitedIndex = [];
    }

    importJson(data) {
        this.reset();
        this.adj = JSON.parse(data);
    }

    exportJson() {
        return JSON.stringify(this.adj);
    }


}

let g1 = new Graph();
g1.makeEdge();

let g2 = new Graph();
g2.makeEdge();

let et = new ExecutionTime([
    g1.depthFirstSearch.bind(g1),
    g2.breadthFirstSearch.bind(g2),
    ( _=>{
        let i = 1000000, j = 0;
        while ( i-- > 0 ) {
             j = 0;
            while( j < 1000 ) j++
        }
    })
]);
et.test();
et.print();
