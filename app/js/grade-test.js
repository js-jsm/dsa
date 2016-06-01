const   ut = require('./utils/unit-test'); // unit test를 위한 모듈.

// main.js로 export할 내용. 즉시실행함수로 감싸여 있음.
module.exports = (()=>{

    /* =============
     * 실제 소스코드
       ============= */
    class Grades {
        constructor(...a){
            this.dataStore = a || [];
        }
        add(g){
            this.dataStore.push(g);
            return this;
        }
        average(){
            return +(this.dataStore.reduce((p,c)=>p+c) / this.dataStore.length).toFixed(2);
        }
    }

    /* =========
     * unit test
       ========= */
    let grades;

    // log : 화면상에 함수 내용을 그대로 출력
    ut.log(_=>{
        grades = new Grades(20, 40, 60, 80);
    });

    // equal : 함수(첫번째 인자)와 출력값(두번째 인자)가 같은지 여부를 판단.
    ut.equal(_=> grades.average(), 50);
    ut.log(_=> {
        grades.add(100).add(30).add(70).add(10)
    });
    ut.equal(_=> grades.average(), 51.35);
    ut.equal(_=> grades.average(), 51.25);

})();