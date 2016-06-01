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