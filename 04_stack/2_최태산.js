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

class Convert {
    constructor() {
        this._nums = new Stack();
        this._operator = new Stack();
    }

    convert(str) {
        for(let i = 0, s; s = str[i]; i++) {
            if(this.isOperator(s)) {
                this.operator = s;
            } else {

                if(s !== ' ') {
                    for(let j = i, n, num = ''; n = str[j]; j++) {
                        if(n === ' ') {
                            this.nums = num;
                            i = j;

                            if(str[i + 1]) {
                                for(let k = i + 1, s; s = str[k]; k++) {
                                    if(s != ' ') {
                                        if(this.isOperator(s))
                                            this.nums = 'operator';

                                        break;
                                    }
                                }
                            }

                            break;
                        } else {
                            num += n;

                            if(!str[j + 1])
                                this.nums = num;
                        }
                    }
                }
            }
        }

        return this;
    }

    print() {
        let r = '';
        for(let s; s = this.nums;) {
            if(s === 'operator')
                r += this.operator + ' ';
            else
                r += s + ' ';
        }

        let o;
        while(true) {
            o = this.operator;
            if(!o)
                break;

            r += o + ' ';
        }

        console.log(r);

        return this;
    }

    isOperator(s) {
        if(s === '+' || s === '-' || s === '*' || s === '/')
            return true;

        return false;
    }

    setTop(s) {
        s.top = s.length - 1;
    }

    get nums() {
        let num = this._nums.pop();
        this.setTop(this._nums);
        return num;
    }

    set nums(n) {
        this._nums.push(n);
        this.setTop(this._nums);
    }

    get operator() {
        let num = this._operator.pop();
        this.setTop(this._operator);
        return num;
    }

    set operator(o) {
        this._operator.push(o);
        this.setTop(this._operator);
    }
}

new Convert()
    .convert('* + 133 2 + 3 4')
    .print();
