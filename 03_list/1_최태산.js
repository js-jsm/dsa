class List {
    constructor() {
        this.list = [];
    }

    smallAdd(v) {
        if(!this.checkIterator((listValue) => v >= listValue))
            this.add(v, true);

        return this;
    }

    bigAdd(v) {
        if(!this.checkIterator((listValue) => v <= listValue))
            this.add(v);

        return this;
    }

    add(v, isBefore) {
        if(isBefore)
            this.list.unshift(v);
        else
            this.list.push(v);
    }

    checkIterator(fnc) {
        for(let i = this.list.length; i--;) if(fnc(this.list[i]))
                return true;

        return false;
    }

    toString() {
        return this.list;
    }
}

console.log(
    new List()
        .smallAdd(0)
        .smallAdd('c')
        .bigAdd('d')
        .bigAdd(7)
        .toString()
);

