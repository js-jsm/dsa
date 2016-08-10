class Graph {
    constructor(v) {
        this.edges     = 0;
        this.adjacency = {};
        this.marked    = {};
        this.edgeTo    = {};
        this.ended     = false;
        this.subway    = [
            `소요산 - 동두천 - 보산 - 동두천중앙 - 지행 - 덕정 - 덕계 - 양주 - 녹양 - 가능 - 의정부 - 회룡 - 망월사 - 도봉산 - 도봉 - 방학 - 창동 - 녹천 - 월계 - 광운대 - 석계 - 신이문 - 외대앞 - 회기 - 청량리(서울시립대입구) - 제기동 - 신설동 - 동묘앞 - 동대문 - 종로5가 - 종로3가 - 종각 - 시청 - 서울역 - 남영 - 용산 - 노량진 - 대방 - 신길 - 영등포 - 신도림 - 구로 - 가산디지털단지 - 독산 - 금천구청 - 석수 - 관악 - 안양 - 명학 - 금정 - 군포 - 당정 - 의왕 - 성균관대 - 화서 - 수원 - 세류 - 병점 - 세마 - 오산대 - 오산 - 진위 - 송탄 - 서정리 - 지제 - 평택 - 성환 - 직산 - 두정 - 천안 - 봉명 - 쌍용(나사렛대) - 아산 - 배방 - 온양온천 - 신창(순천향대) - 병점 - 서동탄 - 금천구청 - 광명 - 구로 - 구일 - 개봉 - 오류동 - 온수 - 역곡 - 소사 - 부천 - 중동 - 송내 - 부개 - 부평 - 백운 - 동암 - 간석 - 주안 - 도화 - 제물포 - 도원 - 동인천 - 인천`,
            `대화 - 주엽 - 정발산 - 마두 - 백석 - 대곡 - 화정 - 원당 - 원흥 - 삼송 - 지축 - 구파발 - 연신내 - 불광 - 녹번 - 홍제 - 무악재 - 독립문 - 경복궁(정부서울청사) - 안국 - 종로3가 - 을지로3가 - 충무로 - 동대입구 - 약수 - 금호 - 옥수 - 압구정 - 신사 - 잠원 - 고속터미널 - 교대(법원·검찰청) - 남부터미널(예술의전당) - 양재(서초구청) - 매봉 - 도곡 - 대치 - 학여울 - 대청 - 일원 - 수서 - 가락시장 - 경찰병원 - 오금`,
            `당고개 - 상계 - 노원 - 창동 - 쌍문 - 수유(강북구청) - 미아(서울사이버대학) - 미아사거리 - 길음 - 성신여대입구(돈암) - 한성대입구(삼선교) - 혜화 - 동대문 - 동대문역사문화공원 - 충무로 - 명동 - 회현(남대문시장) - 서울역 - 숙대입구(갈월) - 삼각지 - 신용산 - 이촌(국립중앙박물관) - 동작(현충원) - 총신대입구(이수) - 사당 - 남태령 - 선바위 - 경마공원 - 대공원 - 과천 - 정부과천청사 - 인덕원 - 평촌 - 범계 - 금정 - 산본 - 수리산 - 대야미 - 반월 - 상록수 - 한대앞 - 중앙 - 고잔 - 초지 - 안산 - 신길온천 - 정왕 - 오이도`
        ];
    }

    init() {
        this.subway.forEach(str => {
            str
                .replace(new RegExp(/ /g), '')
                .split('-')
                .reduce((s1, s2) => {
                    this.addEdge(s1, s2);

                    return s2;
                });
        });


        return this;
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

    breadthFirstSearch(k) {
        let queue = [k];
        this.marked[k] = true;

        while(queue.length > 0) {
            k = queue.shift();

            console.log(`${k} 방문`);

            this.adjacency[k].forEach(k => {
                if(!this.marked[k]) {
                    this.marked[k] = true;

                    queue.unshift(k);
                }
            }); 
        }
    }

    //너비 우선으로 검색. 
    roadSearch(s, f) {
        let queue = [s];
        this.marked[s] = true;

        while(queue.length > 0) {
            let k = queue.shift();

            this.adjacency[k].forEach(v => {
                if(!this.marked[v]) {
                    this.edgeTo[v] = k; 
                    this.marked[v] = true;
                    queue.unshift(v);
                }
            }); 
        }


        if(!this.marked[s])
            return;

        queue = [];

        //찾아야할 놈을 시작으로 역행합니다. 
        for(let i = f; i != s; i = this.edgeTo[i])
            queue.unshift(i);

        queue.unshift(s);

        console.log(queue.length + '번 방문 : ' + queue.join(' -> '));
    }

    //깊이 우선 탐색으로 만들어낸 것. 
    startRoadSearch(startKey, finishKey) {
        this.ended = false;

        this.marked[startKey] = true;

        this.adjacency[startKey].forEach(k => {
            
            if(this.ended) 
                return;
            
            this.edgeTo = [startKey];

            if(!this.marked[k]) 
                this.againRoadSearch(k, finishKey);
        });

        //pathTo
        console.log(this.edgeTo.length + '번 방문 : ' +this.edgeTo.join(' -> '));
    }

    againRoadSearch(k, f) {
        if(this.ended)
            return;

        if(k == f) { //결과 노드까지 탐색하였고 그 결과값을 찾았을때 ! 
            this.edgeTo.push(k);
            this.ended = true;
            return;
        }

        this.marked[k] = true;
        this.edgeTo.push(k);

        this.adjacency[k].forEach(k => {
            if(!this.marked[k]) 
                this.againRoadSearch(k, f);
        });
    }
}

//너비우선 탐색이 좀더 빠른 결과. 
new Graph()
    .init()
    .roadSearch('금호', '명동');

//깊이 우선 검색은 오랜 결과를 발생시킴. 
new Graph()
    .init()
    .startRoadSearch('금호','명동');