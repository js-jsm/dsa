#11 Graph And Graph Algorithm

## 11.3.1 정점 표현 

```js
function Vertex(label) {
  this.label = label;
}
```
##11.3.3 그래프 구현

```js
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for(var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  var str = '';

  for(var i = 0; i < this.vertices; i++) {
    str += i + ' - > ';
    for(var j = 0; j < this.vertices; j++) {
      if(this.adj[i][j] != undefined) {
        str += this.adj[i][j] + ' ';
      }
    }
    str += '\n';
  }

  console.log(str);
}


var g;
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

<!-- 
출력 결과 
0 - >  1 2 
1 - >  0 3 
2 - >  0 4 
3 - >  1 
4 - >  2  
-->
```

##11.4.1 깊이 우선 검색

```js
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for(var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for(var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  var str = '';

  for(var i = 0; i < this.vertices; i++) {
    str += i + ' - > ';
    for(var j = 0; j < this.vertices; j++) {
      if(this.adj[i][j] != undefined) {
        str += this.adj[i][j] + ' ';
      }
    }
    str += '\n';
  }

  console.log(str);
}

function dfs(v) {
  this.marked[v] = true;
  if(this.adj[v] != undefined) {
    console.log('Visited vertex: ' + v);
  }

  for( var w in this.adj[v]) {
    if(!this.marked[w]) {
      this.dfs(w);
    }
  }
}

var g;
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);


<!-- 
출력결과

0 - >  1 2 
1 - >  0 3 
2 - >  0 4 
3 - >  1 
4 - >  2 

Visited vertex: 0
Visited vertex: 1
Visited vertex: 2
 -->
```


##11.4.2 너비 우선 검색
```js
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for(var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.bfs = bfs;
  this.marked = [];
  this.edgeTo = [];
  for(var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  var str = '';

  for(var i = 0; i < this.vertices; i++) {
    str += i + ' - > ';
    for(var j = 0; j < this.vertices; j++) {
      if(this.adj[i][j] != undefined) {
        str += this.adj[i][j] + ' ';
      }
    }
    str += '\n';
  }

  console.log(str);
}

function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  
  while(queue.length > 0) {
    var v = queue.shift();
    if(v != undefined) {
      console.log('Visited vertex: ' + v);
    }

    for(var w in this.adj[v]) {
      if(!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

var g;
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);

<!-- 
출력결과

0 - >  1 2 
1 - >  0 3 
2 - >  0 4 
3 - >  1 
4 - >  2 

Visited vertex: 0
Visited vertex: 1
Visited vertex: 2
 -->
```

##11.5 최단 경로 찾기 

```js
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for(var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.bfs = bfs;
  this.marked = [];
  this.edgeTo = [];
  for(var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  var str = '';

  for(var i = 0; i < this.vertices; i++) {
    str += i + ' - > ';
    for(var j = 0; j < this.vertices; j++) {
      if(this.adj[i][j] != undefined) {
        str += this.adj[i][j] + ' ';
      }
    }
    str += '\n';
  }

  console.log(str);
}

function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  
  while(queue.length > 0) {
    var v = queue.shift();
    if(v != undefined) {
      console.log('Visited vertex: ' + v);
    }

    for(var w in this.adj[v]) {
      if(!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.push(w);
      }
    }
  }
}

function pathTo(v) {
  var source = 0; 
  if(!this.hasPathTo(v)) {
    return undefined;
  }

  var path = [];
  for(var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(s);
  console.log('path!!!', path);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

var g;
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

var vertex = 4;
var paths = g.pathTo(vertex);
var str = '';

while(paths.length > 0) {
  if(paths.length > 1) {
    str += paths.pop() + '-';
  } else {
    str += paths.pop();
  }
}

<!-- 
  소스코드 자체가 에러. 
  진짜 만든놈 명치 한방 겁나 쌔게 때리고 싶네-_-
  추후 해결. 
 -->
```

```js
/*
저도 태산씨와 같은 맘으로 짜증이나서 그만하려다가
이사람을 이해해 보려고 노력하면서 코드가 돌아가게 고쳐 봤어요.
*/
function pathTo(v) {
    var source = 0;
    // 찾을 값이 있는지 확인.
    if ( !this.hasPathTo(v) ) {
        return undefined;
    }
    var path = [];
    for ( var i = v; i != source; i = this.edgeTo[i] ) {
        path.push(i);
    }
    path.push(source);

    return path;
}

// Graph 클래스 테스트
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

//너비우선 검색을 이용하기 위해
g.bfs(0);

var vertex = 4;
var paths = g.pathTo(vertex);
var buffer = [];
while (paths.length > 0) {
    if (paths.length > 1) {
        buffer.push(paths.pop() + '-');
    } else {
        buffer.push(paths.pop());
    }
}
console.log(buffer.join(''));
```


##11.6 위상 정렬

```js
function Graph(v) {
  this.vertices = v;
  this.vertexList = [];
  this.edges = 0;
  this.adj = [];

  for(var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.marked = [];
  this.edgeTo = [];
  for(var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.topSortHelper = topSortHelper;
  this.topSort = topSort;
}

function topSort() {
  var stack = [];
  var visited = [];
  for(var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }
  
  for(var i = 0; i < this.vertices; i++) {
    if(visited[i] == false) {
        this.topSortHelper(i, visited, stack);
    }
  }
  
  for(var i = 0; i < stack.length; i++) {
    if(stack[i] != undefined && stack[i] != false) {
      console.log(this.vertexList[stack[i]]);
    }
  }
}

function topSortHelper(v, visited, stack) {
  visited[v] = true;
  for(var w in this.adj[v]) {
    if(!visited[w]) {
      this.topSortHelper(visited[w], visited, stack);
    }
  }

  stack.push(v);
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

//숫자대신 기호명을 출력
function showGraph() {
  var visited = [];
  var str = '';

  for(var i = 0; i < this.vertices; i++) {
    str += this.vertexList[i] + ' -> ';
    visited.push(this.vertexList[i]);

    for(var j = 0; j < this.vertices; j++) {
      if(this.adj[i][j] != undefined) {
        if(visited.indexOf(this.vertexList[j]) < 0) {
          str += this.vertexList[j] + ' ';
        }
      }
    }

    console.log(str);
    str = '';

    visited.pop();
  }
}

function dfs(v) {
  this.marked[v] = true;
  if(this.adj[v] != undefined) {
    console.log('Visited vertex: ' + v);
  }

  for(var w in this.adj[v]) {
    if(!this.marked[w]) {
      this.dfs(w);
    }
  }
}

function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.unshift(s);
  
  while(queue.length > 0) {
    var v = queue.shift();
    if(typeof(v) != 'string') {
      console.log('Visited vertex: ' + v);
    }

    for(var w in this.adj[v]) {
      if(!this.marked[w]) {
        this.edgeTo[w] = v;
        this.marked[w] = true;
        queue.unshift(w);
      }
    }
  }
}

function pathTo(v) {
  var source = 0; 
  if(!this.hasPathTo(v)) {
    return undefined;
  }

  var path = [];
  for(var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(s);
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

var g;
g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(4, 4);
g.addEdge(0, 1);
g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithm'];
g.showGraph();
g.topSort();


<!-- 
출력결과
CS2
Data Structures
Assembly Language
Operating Systems
Algorithm
 -->
```














