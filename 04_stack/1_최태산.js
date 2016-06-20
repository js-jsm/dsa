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

class Validate {
    constructor(s) {
        this._stack = new Stack()

        this.init(s);
    }

    init(s) {

        let arr = s.split('');

        this.validation(arr);

        for(let i = arr.length; i--;)
            this.stack = arr[i];

    }

    validation(arr) {
        let prev = 0,
            next = 0,
            pos;

        for (let i = 0, s; s = arr[i]; i++) {
            if(s === '(') {
                prev++;

                if(!pos)
                    pos = i;
            }



            if(s === ')')
                next++;

        }

        if(prev !== next)
            throw new Error('Uncaught SyntaxError: missing ) after argument list at : ' + pos);
    }

    convertingArray(s) {
        return s.replace(new RegExp(' ', 'g'), '').split('');
    }

    get stack() {
        let num = this._stack.pop();
        this.setTop(this._stack);
        return num;
    }

    set stack(s) {
        this._stack.push(s);
        this.setTop(this._stack);
    }

    setTop(s) {
        s.top = s.length - 1;
    }
}

new Validate('2.3 + 23 / 12 + (3.14159 * .24)');
