class Dictionary {
    constructor() {
        this._obj = {};
    }

    insert(str) {
        if(this.obj[str])
            this.obj[str] += 1;
        else 
            this.obj[str] = 1;
    }

    showAll() {
        for(let i in this.obj)
            console.log(`${i} : ${this.obj[i]}`);
    }

    set obj(o) {
        this._obj = o;
    }

    get obj() {
        return this._obj;
    }
}


class Calc {
    constructor() {
        this.dictionary = new Dictionary();

        this.init();
    }

    init() {
        let arr = `the brown fox jumped over the blue fox`.split(' ');

        for(let i = 0, o; o = arr[i]; i++)
            this.dictionary.insert(o);


        this.dictionary.showAll();
    }
}


new Calc();

















