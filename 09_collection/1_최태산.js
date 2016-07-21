class CollectionSet {
    constructor() {
        this._set = new Set();
    }

    add(v) {
        this.set = new Set([...this.set.add(v)].sort());
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
set.add(3);