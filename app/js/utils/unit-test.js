const resultDom = document.getElementById('testResult');

module.exports = {
    equal(func, expect){
        let isEqual = func() === expect;
        resultDom.innerHTML += `
        <div class="test-wrap ${isEqual ? 'equal' : 'not-equal'}">
            <pre class="func">${func}</pre>
            <pre class="expect">${expect}</pre>
            <div class="result">${isEqual ? 'OK!' : 'NOT OK!!'}</div>
        </div>`;
    },
    log(func){
        let val = func();
        resultDom.innerHTML += `
        <div class="test-wrap">
            <pre class="func">${func}</pre>
            <pre class="value">${val !== undefined ? 'value : ' + val : 'no value'}</pre>
        </div>`;
    }
}