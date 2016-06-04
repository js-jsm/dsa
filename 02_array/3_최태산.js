class WeekTemps {
    constructor(selectWeek) {
        this.monthArr = [];
        this.selectWeek = selectWeek - 1;
        this.setTemperature();
    }

    setTemperature() {
        for(let i = 0, arr = this.monthArr; i < 4; i++) {
            arr.push([]);
            for(let j = 0, brr = arr[i]; j < 7; j++)
                brr.push(Math.floor( Math.random() * 100 ));
        }
    }

    getFourWeekAverage() {
        let cnt = 0;

        console.log(
            `4주 평균 온도 : ${Math.floor(
                this.monthArr.map((week) => {
                    cnt += week.length;
                    return week.reduce((p, n) => p + n);
                })
                .reduce((p, n) => p + n)

                / cnt
            )}`
        );

        return this;
    }

    getSelectWeekAverage() {
        let arr = this.monthArr[this.selectWeek];

        console.log(
            `선택한 ${this.selectWeek + 1}번째 주 평균 온도 : ${Math.floor(
                arr.reduce((p, n) => p + n) / arr.length
            )}`
        );

        return this;
    }

    getEachWeekAverage() {
        this.monthArr.map((week, i) => {
            console.log(
                `${i + 1}번째 주 평균온도 : ${
                    Math.floor(
                        week.reduce((p, n) => p + n) / week.length
                    )
                }`
            )
        });

        return this;
    }
}

new WeekTemps(2)
    .getFourWeekAverage()
    .getSelectWeekAverage()
    .getEachWeekAverage();