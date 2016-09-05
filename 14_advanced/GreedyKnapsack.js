class GreedyKnapsack {
    constructor(n) {
        this.profit = Array.from(new Array(n), x => x = Math.round(Math.random() * 48 + 22));
        this.weight = Array.from(new Array(n), x => x = Math.round(Math.random() * 44 + 8));
        this.takeit = new Array(n);
        this.result = [];
    }
    //단가 정렬 - bubble sort;
    unitPriceSort() {
        let profit = this.profit,
            weight = this.weight,
            temp,temp1;
        
        for (let i = 0; i < profit.length; i++) {
            for (let j = 1; j < (profit.length - 1); j++) {
                let x = profit[j - 1] / weight[j - 1],
                    y = profit[j] / weight[j];

                if (x <= y) {
                             temp = profit[j - 1];
                    profit[j - 1] = profit[j];
                        profit[j] = temp;

                            temp1 = weight[j - 1];
                    weight[j - 1] = weight[j];
                        weight[j] = temp1;
                }
            }
        }
    }
    //배낭 용량
    capacity(m) {
        this.clear();
        this.unitPriceSort();

        let profit = this.profit,
            weight = this.weight,
            j,total;

        this.takeit = new Array(profit.length).fill(0);

        total = m;

        for(j = 0; j < profit.length; j++) {

            if (weight[j] <= total) {
                this.takeit[j] = 1.00;
                total -= weight[j];
            } else {
                break;
            }
        }
        //용량이 맞아떨어지지않으면 소수단위로 나눠담는다.
        if (j < profit.length) {
            this.takeit[j]  = total / weight[j];
        }
    }
    //출력
    toString() {

        for (let i = 0; i < this.profit.length; i++) {
            this.result.push({
                    profit : this.profit[i],
                    weight : this.weight[i],
                    unitPrice : (this.profit[i] / this.weight[i]).toFixed(3),
                    takeit : this.takeit[i]
                });
        }
        return console.table(this.result);
    }
    //결과 누적 초기화
    clear() {
        this.result = [];
    }
}

var g = new GreedyKnapsack(10); // 기본값 설정
g.capacity(50); //배낭 용량 설정
g.toString(); // 결과 테이블 형식
g.capacity(120); 
g.toString();
