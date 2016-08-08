//과제 풀이를 위한 변형 그래프~ 개인참고용 입니다~


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
        this.adjList = new Dictionary();
        this.time = 0; //used DFS 
    }

    initColor() {
        let color = [];
        for (var i = 0; i < this.vertices.length; i++) {
            color[this.vertices[i]] = 'white';
        }
        return color;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjList.append(vertex, []);
    }

    addEdge(start, end) {
        this.adjList.get(start).push(end);
        this.adjList.get(end).push(start);
    }
    
    bfs(vertex) { //너비 우선 검색
        let color = this.initColor(),
            queue = [],
            d = [],
            pred = [];

            queue.push(vertex);

            for (let i = 0; i < this.vertices.length; i++) {
                d[this.vertices[i]] = 0;
                pred[this.vertices[i]] = null;
            }

        while (!queue.length == 0) {
            let u = queue.shift(),
                neighbors = this.adjList.get(u);

            color[u] = 'gray';

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

    dfs(cb) { //깊이 탐색
        let color = this.initColor();

        for (let i = 0; i < this.vertices.length; i++) {
            if (color[this.vertices[i]] === 'white') {
                this.dfsVisit(this.vertices[i], color, cb);
            }
        }
    }
    
    dfsVisit(u, color, cb) {
        color[u] = 'gray';
        if (cb) {
            cb(u);
        }

        let neighbors = this.adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, cb);
            }
        }
        color[u] = 'black';
    }
    DFS() {
            let color = this.initColor(),
            d = [],
            f = [],
            p = [];

            for(let i = 0; i < this.vertices.length; i++) {
                f[vertices[i]] = 0;
                d[vertices[i]] = 0;
                p[vertices[i]] = null;
            }

            for(i = 0; i < this.vertices.length; i++) {
                if (color[this.vertices[i]] === 'white') {
                    DFSVisit(vertices[i], color, d, f, p);
                }
            }
            return {
                discovery : d,
                finished: f,
                predecessors: p
            }
    }

    DFSVisit(u, color, d, f, p) {
        console.log(`discovered ${u}`);
        color[u] = 'gray';
        d[u] = ++this.time;
        let neighbors = this.adjList.get(u);
        for(var i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++this.time;
        console.log(`explored ${u}`);
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


var graph = new Graph();
var myVertices = Array.from(new Array(9), (x,i) => String.fromCharCode(i+65));

for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B'); 
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

var shortestPathA = graph.bfs(myVertices[0]);
console.log(shortestPathA);

var fromVertex = myVertices[0];
for (var i = 1; i < myVertices.length; i++) {
    var toVertex = myVertices[i],
        stack = [];

        for(var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
            stack.push(v);
        }

        stack.push(fromVertex);
        var s = stack.pop();
        while (!stack.length == 0) {
            s += ` - ${stack.pop()}`;
        }
        console.log(s);
}

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

var result = graph.DFS();
