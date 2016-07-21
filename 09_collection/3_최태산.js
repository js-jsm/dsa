class CollectionSet {
    constructor() {
        this._set = new Set();
    }

    add(v) {
        this.set.add(v);
    }

    higher(v) {
        return [...this.set].filter((i) => {
            if(v < i) 
                return i;
        });
    }

    lower(v) {
        return [...this.set].filter((i) => {
            if(v > i) 
                return i;
        });   
    }

    set set(s) {
        this._set = s;
    }

    get set() {
        return this._set;
    }
}


let set = new CollectionSet();

set.add(4);
set.add(2);
set.add(5);
set.add(52);
set.add(5);
set.add(53);
set.add(55);
set.add(3);

console.log(set.higher(2));
console.log(set.lower(5));