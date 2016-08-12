
class Dictionary {
  constructor() {
    this.store = []
  }

  append(key, value) {
    this.store[key] = value
  }

  get(key) {
    return this.has(key) ? this.store[key] : undefined
  }

  remove(key) {
    if (this.has(key)) {
      delete this.store[key]
      return true
    }
    return false
  }

  has(key) {
    return key in this.store
  }

  clear() {
    this.store = [];
    return console.log("clear complete storage")
  }

  printValues() {
    var values = []

    for (var k in this.store) {
      if(this.has(k)) {
        values.push(this.store[k])
      }
    }
    return values
  }

  printAll() {
    return this.store;
  }

}

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Dictionary(); //인접 리스트 사용
        this.time = 0; //used DFS 
    }

    initColor() {
        //탐색할 Vertex 를 white 로 초기화 시킨다.
        let color = [];
            for (var i = 0; i < this.vertices.length; i++) {
                color[this.vertices[i]] = 'white';
            }
        return color;
    }

    addVertex(vertex) {
        this.vertices.push(vertex); //vertices = ["A","B","C"]
        this.adjList.append(vertex, []); //adjList = ["A":[], "B":[], "C":[]]
    }

    addEdge(start, end) {
        this.adjList.get(start).push(end);
        this.adjList.get(end).push(start);
    }

    //너비 우선 탐색
    BFS(vertex) { 
        let color = this.initColor(),
            queue = [], 
            d = [], 
            pred = [];

            queue.push(vertex);

            //거리, 이전값 초기화
            for (let i = 0; i < this.vertices.length; i++) {
                d[this.vertices[i]] = 0;
                pred[this.vertices[i]] = null;
            }
        
        while (!queue.length == 0) {
            let u = queue.shift(),
                neighbors = this.adjList.get(u);

            color[u] = 'gray';//방문

            for(let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'gray'; 
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.push(w);
                }
            }
            color[u] = 'black';
        }
        return { distances: d, predecessors: pred };

    }
    
    //깊이 우선 탐색
    DFS() {
            
            let color = this.initColor(),
            d = [],
            f = [],
            p = [];

            for(let i = 0; i < this.vertices.length; i++) {
                f[this.vertices[i]] = 0;
                d[this.vertices[i]] = 0;
                p[this.vertices[i]] = null;
            }

            for(let i = 0; i < this.vertices.length; i++) {
                if (color[this.vertices[i]] === 'white') {
                    this.DFSVisit(this.vertices[i], color, d, f, p);
                }
            }
        
            return {
                discovery : d,
                finished: f,
                predecessors: p
            }
    }

    DFSVisit(u, color, d, f, p) {
        // console.log(`discovered ${u}`);
        color[u] = 'gray';
        d[u] = ++this.time;

        let neighbors = this.adjList.get(u);

        for(var i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                this.DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++this.time;
       // console.log(`explored ${u}`);
    }

    toString() {
        let s = '\n';
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} ->`;
            let neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `;
            }
            s += '\n';
        }
        return s;
    }

    printNode(value) {
        console.log(`Visited vertex: ${value}`);
    }

}

class TestBed {
    constructor() {
       this.vector = new Graph();
       const myVertices = 
        Array.from(new Array(26), (x,i) => String.fromCharCode(i+65));
        
       for (var i = 0; i < myVertices.length; i++) {
            this.vector.addVertex(myVertices[i]);
        }

        this.vector.addEdge('A', 'B'); 
        this.vector.addEdge('A', 'C');
        this.vector.addEdge('A', 'D');
        this.vector.addEdge('C', 'D');
        this.vector.addEdge('C', 'G');
        this.vector.addEdge('D', 'G');
        this.vector.addEdge('D', 'H');
        this.vector.addEdge('B', 'E');
        this.vector.addEdge('B', 'F');
        this.vector.addEdge('E', 'I');
        this.vector.addEdge('I', 'J');
        this.vector.addEdge('I', 'K');
        this.vector.addEdge('J', 'L');
        this.vector.addEdge('K', 'M');
        this.vector.addEdge('F', 'N');
        this.vector.addEdge('N', 'U');
        this.vector.addEdge('G', 'O');
        this.vector.addEdge('O', 'P');
        this.vector.addEdge('O', 'Q');
        this.vector.addEdge('P', 'X');
        this.vector.addEdge('Q', 'Y');
        this.vector.addEdge('Q', 'V');
        this.vector.addEdge('V', 'W');
        this.vector.addEdge('H', 'R');
        this.vector.addEdge('R', 'S');
        this.vector.addEdge('R', 'T');
        this.vector.addEdge('S', 'Z');

    }

    execute() {
        let t0  = performance.now();
        let dfs = this.vector.DFS();
        let t1  = performance.now();
         console.log(`Depth-fs: ${(t1 - t0).toFixed(4)} milliseconds`);
        let t2 = performance.now();
        let bfs = this.vector.BFS("A");
        let t3 = performance.now();
         console.log(`Breadth-fs: ${(t3 - t2).toFixed(4)} milliseconds`);
    }

}


var tb = new TestBed();
tb.execute();
