const ut = require('./utils/unit-test');
const Stack = require('./classes/Stack');

const operate = {
    ['+'](v1, v2){ return v1 + v2; },
    ['-'](v1, v2){ return v1 - v2; },
    ['*'](v1, v2){ return v1 * v2; },
    ['/'](v1, v2){ return v1 / v2; }
};

const dataStore = Symbol('calculator');
class Calculator {
    constructor(str){
        this.operand = new Stack();
        this.operator = new Stack();
        this[dataStore] = str.split(' ');
        this.init();
    }
    [Symbol.iterator](){
        let data = Object.assign([], this[dataStore]);
        return {
            next(){
                return {
                    done : data.length <= 0,
                    value: data.pop()
                }
            }
        };
    }
    init(){
        for(let c of this){
            console.log(c)
            if(!Number.isNaN(+c)) this.operand.push(+c);
            else this.operator.push(c);
        }
        console.log(this);
    }
    calc(symbol, v1, v2){
        let res = operate[symbol](v1, v2);
        this.operand.push(res);
        console.log(`${v1} ${symbol} ${v2} = ${res}`);
    }
    getResult(){
        do {
            this.calc(this.operator.pop(), this.operand.pop(), this.operand.pop());
        } while(this.operator.length() > 0);
        return this.operand.pop();
    }
}

/* unit tests */
let c;

ut.log(_=>{
    c = new Calculator('10 + 30 / 20 * 4');
    return c.getResult();
});
ut.equal(_=>{
    c = new Calculator('10 30 20 4 + / *');
    return c.getResult();
}, 8);
ut.equal(_=>{
    c = new Calculator('+ / * 10 30 20 4');
    return c.getResult();
}, 8);