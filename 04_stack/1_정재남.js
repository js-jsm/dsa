const ut = require('./utils/unit-test');
const Stack = require('./classes/Stack');

class StackWithBrackets extends Stack{
    constructor(){ super(); }
    [Symbol.iterator](){
        let data = Object.assign([], this.getAllData());
        return {
            next(){
                let [l, d] = [data.length, data.pop()];
                return {
                    value: { length: l, data : d },
                    done: l <= 0
                }
            }
        }
    }
    checkBracket(){
        let [openBracketPos, closeBracketPos] = [[], []];
        for(let c of this){
            if(c.data === ')') closeBracketPos.push(c.length - 1);
            else if(c.data === '(') {
                openBracketPos.push(c.length - 1);
            }
        }
        if(openBracketPos.length > closeBracketPos.length) {
            return `brackets are opened without closing at index ${openBracketPos.slice(closeBracketPos.length)}.`;
        } else if(openBracketPos.length < closeBracketPos.length) {
            return `brackets are closed without opening at index ${closeBracketPos.slice(openBracketPos.length)}.`;
        } else return `brackets are perfectly matched.`;
    }
}


/* unit tests */
let cb;
ut.log(_=>{
    cb = new StackWithBrackets();
    cb.push('(2.3 + 23 / 12 + (3.14159 * .24'.split(''));
    return cb.checkBracket();
});
ut.log(_=>{
    cb = new StackWithBrackets();
    cb.push('(2.3 + 23 / 12 + (3.14159 * .24))'.split(''));
    return cb.checkBracket();
});
ut.log(_=>{
    cb = new StackWithBrackets();
    cb.push('(2.3 + 23 / 12) + (3.14159 * .24)))'.split(''));
    return cb.checkBracket();
});