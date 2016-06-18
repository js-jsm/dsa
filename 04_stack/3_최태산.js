class Stack extends Array{
    constructor() {
        super();
        this._top = -1;
    }

    get top() {
        return this._top;
    }

    set top(t) {
        this._top = t;
    }
}

class Candy {
    constructor(color) {
        this._color = color;
    }

    get color() {
        return this._color;
    }
}

class Calc {
    constructor() {
        this._stack = new Stack();
        this._tmpStack = new Stack();

        this.init();
        this.candyDelete('yellow');
    }

    init() {
        let o = {
            0 : 'blue',
            1 : 'red',
            2 : 'orange',
            3 : 'yellow'
        };

        for(let i = 0; i < 100; i++)
            this.stack = new Candy(
                o[Math.floor( Math.random() * 4 )]
            );

        console.log(this._stack);
    }

    candyDelete(color) {
        for(let o; o = this.stack;)
            if(o.color !== color)
                this.tmp = o;

        for(let o; o = this.tmp;)
            this.stack = o;


        console.log(this._stack);
    }

    set tmp(o) {
        this._tmpStack.push(o);
        this.setTop(this._tmpStack);
    }

    get tmp() {
        let candy = this._tmpStack.pop();
        this.setTop(this._tmpStack);
        return candy;
    }

    set stack(o) {
        this._stack.push(o);
        this.setTop(this._stack);
    }

    get stack() {
        let candy = this._stack.pop();
        this.setTop(this._stack);
        return candy;
    }

    setTop(s) {
        s.top = s.length - 1;
    }
}

const c = new Calc();