class Dictionary {
    constructor() {
        this._obj = {};
    }

    set obj(o) {
        this._obj = o;
    }

    get obj() {
        return this._obj;
    }
}

class Phone {
    constructor() {
        this.obj = new Dictionary();

        this.init();
    }

    init() {
        let arr = `
            a:010-0000-0001,
            b:010-0000-0002,
            c:010-0000-0003,
            d:010-0000-0004,
            e:010-0000-0005,
            f:010-0000-0006,
            g:010-0000-0007,
            e:010-0000-0008,
            e:010-0000-0009
        `.split(',');

        for(let i = arr.length, o; i--;) {
            o = arr[i].split(':');
            this.insert(o[0].trim(), o[1].trim());
        }
    }

    insert(name, number) {
        if(this.obj[name]) {
            for(let i = 0; true; i++) 
                if(!this.obj[name + i]) {
                    this.obj[name + i] = number;
                    break;
                }
        } else {
            this.obj[name] = number;
        }

        return this;
    }

    delete(name) {
        if(this.obj[name])
            delete this.obj[name];

        return this;
    }

    deleteAll() {
        this.obj = {};

        return this;
    }

    showPhoneNumber(key) {
        let phone = this.obj[key];

        if(phone)
            console.log(`${key}님의 전화번호는 ${phone} 입니다.`);

        return this;
    }

    showPhoneNumberAll() {
        for(let i in this.obj) 
            console.log(`${i} : ${this.obj[i]}`);

        return this;
    }
}

new Phone()
    .insert('a', '010-0000-0011')
    .delete('a')
    .showPhoneNumber('e0')
    .showPhoneNumberAll()
    .deleteAll();






