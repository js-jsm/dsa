const ut = require('./utils/unit-test');

const dataStore = Symbol();
class Grades {
    constructor(...a){
        this[dataStore] = a || [];
    }
    add(g){
        this[dataStore].push(g);
        return this;
    }
    average(){
        return +(this[dataStore].reduce((p,c)=>p+c) / this[dataStore].length).toFixed(2);
    }
}


/* unit tests */
let grades;

ut.log(_=>{
    grades = new Grades(20, 40, 60, 80);
});
ut.equal(_=> grades.average(), 50);
ut.log(_=> {
    grades.add(100).add(30).add(70).add(10);
});
ut.equal(_=> grades.average(), 51.25);