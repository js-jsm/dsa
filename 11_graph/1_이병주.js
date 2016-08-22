class Graph {
        constructor(json) {
            this.vertices = Object.keys(json).length;
            this.edges = 0;
            this.adj = [];
            this.edgeTo = [];
            this.initEdge(json);
            this.startTime = new Date().getTime();
            this.endTime = null;
            for (var i = 0; i < this.vertices; i++) {
                this.adj[i] = [];
            }
            this.marked = [];
            for (var i = 0; i < this.vertices; i++) {
                this.marked[i] = false;
            }
        }

        initEdge(json){
            const edgeArr = Object.keys(json);
            const _this = this;
            edgeArr.forEach(function(v){
                const edges = json[v];
                edges.forEach(function(value){
                    _this.addEdge(v,value);
                })
            })
        }

        addEdge(v, w) {
            if(!this.adj[v]){
                this.adj[v] = [];
            }
            if(!this.adj[w]){
                this.adj[w] = [];
            }
            this.adj[v].push(w);
            this.adj[w].push(v);
            this.edges++;
        }

        showGraph() {
            var str = '';

            for (var i = 0; i < this.vertices; i++) {
                str += i + ' - > ';
                for (var j = 0; j < this.vertices; j++) {
                    if (this.adj[i][j] != undefined) {
                        str += this.adj[i][j] + ' ';
                    }
                }
                str += '\n';
            }
            console.log(str);
        }

        dfs(v) {
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
            this.marked = this.marked.map(v=>false);
            this.endTime = new Date().getTime();
        }

        bfs(s) {
            console.log("start2")
            var self = this;
            var queue = [];
            this.marked[s] = true;
            queue.push(s);

            while(queue.length > 0) {
                var v = queue.shift();
                if(v != undefined) {
                    console.log('Visited vertex: ' + v);
                }

                this.adj[v].forEach(function(w) {
                    if(!self.marked[w]) {
                        self.edgeTo[w] = v;
                        self.marked[w] = true;
                        queue.push(w);
                    }
                });
            }
            this.endTime = new Date().getTime();
        }
        getTimeResult(){
            console.log(this.endTime - this.startTime);
        }
    }

    class Tester{
        constructor(){

        }
    }


    const json = {
        A : ["B","C"],
        B : ["D","E"],
        C : ["D"],
        D : ["A"],
        E : ["C","A"]
    }

    var g;
    g = new Graph(json);

    g.dfs("A");
    g.getTimeResult();
    var g2;
    g2 = new Graph(json);

    g2.bfs("A");
    g.getTimeResult();
