const ut = require('./utils/unit-test');

const dataStore = Symbol();
class WeeksTemps {
    constructor(...weeks){
        if(weeks && weeks.length < 5) {
            this[dataStore] = weeks.map(week => (Array.isArray(week) && week.length) < 8 ? week : []);
        } else {
            this[dataStore] = new Array(4).fill([]);
        }
    }
    add(week, temp) {
        if(!this[dataStore][week] && week < 4) this[dataStore][week] = [];
        if(this[dataStore][week].length < 7) {
            this[dataStore][week].push(temp);
            return true;
        }
        return false;
    }
    wholeTemp(){
        return this[dataStore].reduce((p, c)=> `${p}[${c}]`, '');
    }
    weekTemp(week){
        return this[dataStore][week];
    }
    weekSum(week){
        if(this[dataStore][week]) return this[dataStore][week].reduce((p,c)=>p+c, 0);
    }
    weekAverage(week){
        let weekDays = this[dataStore][week].length;
        return +(this.weekSum(week) / weekDays).toFixed(2);
    }
    wholeAverage(){
        let wholeDays = this[dataStore].reduce((p, c)=> p + c.length, 0);
        let wholeSum = this[dataStore].reduce((pw, cw, iw)=> pw + this.weekSum(iw), 0);
        return +(wholeSum / wholeDays).toFixed(2);
    }
    eachWeekAverage(){
        return (this[dataStore].map((v,i)=> this.weekAverage(i), 0)).join(', ');
    }
}


/* unit tests */

let weeks;

ut.log(_=> {
    weeks = new WeeksTemps(
        [30, 31, 32, 30, 27],
        [26, 24, 30, 35],
        [30, 31, 32, 33, 32, 31, 30],
        [29, 28, 29, 28, 28]
    );
});
ut.equal(_=> weeks.add(0, 31), true);
ut.equal(_=> weeks.add(2, 32), false);
ut.log(_=> weeks.wholeTemp());
ut.equal(_=> weeks.weekAverage(2), 31.29);
ut.equal(_=> weeks.wholeAverage(), 29.86);
ut.equal(_=> weeks.eachWeekAverage(), '30.17, 28.75, 31.29, 28.4');
