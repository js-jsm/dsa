// List Class
const dataStore = Symbol('list');
class List {
  constructor() {
    this[dataStore] = [];
    this.curr = 0;
  }
  [Symbol.iterator](){
    this.curr = 0;
    return this;
  }
  find(element) { return this[dataStore].indexOf(element); }
  findElem(func) {
    return this[dataStore].filter(func)[0];
  }
  toString() { return this[dataStore]; }
  append(element) {
    this[dataStore].push(element);
    return this;
  }
  insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this[dataStore].splice(insertPos + 1, 0, element);
      return true;
    }
    return false;
  }
  remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this[dataStore].splice(foundAt,1);
      return true;
    }
    return false;
  }
  clear() {
    delete this[dataStore];
    this[dataStore] = [];
    this.curr = 0;
  }
  contains(element) { return this.find(element) > -1 ? true : false; }
  front() { this.curr = 0; }
  end() { this.curr = this[dataStore].length - 1; }
  prev() {
    let res = this.getElem();
    if(!res.done) this.curr--;
    return res;
  }
  next() {
    let res = this.getElem();
    if(!res.done) this.curr++;
    return res;
  }
  currPos() { return this.curr; }
  moveTo(pos) { this.curr = pos; }
  getElem() {
    if(this.curr >= 0 && this.curr < this.length()){
      return {
        done : false,
        value : this[dataStore][this.curr]
      };
    }
    return {
      done: true,
      value: undefined
    };
  }
  length() { return this[dataStore].length; }
}
module.exports = List;