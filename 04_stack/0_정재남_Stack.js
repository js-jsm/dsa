const dataStore = Symbol('stack');
class Stack {
    constructor(){
        this[dataStore] = [];
    }
    push(element){
        if(Array.isArray(element)) this[dataStore].push(...element);
        else this[dataStore].push(element);
    }
    getAllData(){
        return this[dataStore];
    }
    length(){
        return this[dataStore].length;
    }
    peek(){
        return this[dataStore][this.length() - 1];
    }
    pop(){
        return this[dataStore].pop();
    }
    clear(){
        this[dataStore].length = 0;
    }
}
module.exports = Stack;