const ut = require('./utils/unit-test');
const Stack = require('./classes/Stack');

const candyNames = ['딸기', '레몬', '커피'];
class Candies {
    constructor(ammount){
        this.original = new Stack();
        this.temporal = new Stack();
        do {
            this.original.push(candyNames[Math.floor(Math.random()*3)]);
        } while (this.original.length() < ammount);
    }
    getStatus(){
        return this.original.getAllData();
    }
    getResult(){
        do {
            let c = this.original.pop();
            if(c !== '레몬') this.temporal.push(c);
        } while (this.original.length() > 0);
        do {
            this.original.push(this.temporal.pop());
        } while (this.temporal.length() > 0);
        return this.original.getAllData();
    }
}

let candies;
ut.log(_=> {
    candies = new Candies(12);
    return candies.getStatus();
});
ut.log(_=> {
    return candies.getResult();
});