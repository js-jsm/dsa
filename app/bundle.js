/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1); // grade-test.js 파일 호출

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const   ut = __webpack_require__(2); // unit test를 위한 모듈.
	
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	const resultDom = document.getElementById('testResult');
	
	const trim = (func)=>
	    func.toString()
	    .replace(/^(function)( {0,}\()( {0,}\))/, '')
	    .replace(/^(_=>)( {0,}\{|)|(\{)/, '')
	    .replace(/\}$/, '')
	    .replace(/\s{2,}|(return )/g, '\n')
	    .trim();
	module.exports = {
	    title(str){
	        resultDom.innerHTML += `<h1>[ ${str} ]</h1>`;
	    },
	    equal(func, expect){
	        let isEqual = func() === expect;
	        resultDom.innerHTML += `
	        <div class="test-wrap ${isEqual ? 'equal' : 'not-equal'}">
	            <pre class="func">${trim(func)}</pre>
	            <pre class="expect">${expect}</pre>
	            <div class="result">${isEqual ? 'OK!' : 'NOT OK!!'}</div>
	        </div>`;
	    },
	    log(func){
	        let val = func();
	        resultDom.innerHTML += `
	        <div class="test-wrap">
	            <pre class="func">${trim(func)}</pre>
	            ${val !== undefined ? `<pre class="value">value : ${val}</pre>` : ''}
	        </div>`;
	    }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map