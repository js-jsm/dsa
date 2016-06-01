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

    // ut.title( string )
    // : 화면상에 문자열을 제목으로 출력
    ut.title('성적 / 평균');

    // ut.log( function )
    // : 화면상에 함수 내용 출력.
    // : 반환되는 결과값이 있을 경우 `value : 결과값` 출력
    ut.log(function(){
        grades = new Grades(20, 40, 60, 80);
    });

    // ut.equal( function , expectValue )
    // : 함수(첫번째 인자)와 출력값(두번째 인자)가 같은지 여부를 판단.
    ut.equal(function (){ return grades.average(); }, 50);
    ut.log(_=> {
        grades.add(100).add(30).add(70).add(10);
    });
    ut.equal(_=> grades.average(), 51.35);
    ut.equal(_=> grades.average(), 51.25);

})();