class Person {
    constructor(data) {
        this.name = data.name;
        this.sex  = data.sex;
    }

    getName() {
        return this.name;
    }

    getSex() {
        return this.sex;
    }
}

class List {
    constructor() {
        this.list = [];

        this.setData();
    }

    setData() {
        for(let i = 0, len = Math.floor( Math.random() * 10) + 10; i < len; i++)
                this.add(new Person({
                    name : 'name' + i,
                    sex : i % 2 == 0 ? 'man' : 'girl'
                }));
    }

    add(person) {
        this.list.push(person);
    }

    print(sex) {
        for(let i = 0,arr = this.list, o; o = arr[i]; i++)
            o.getSex() == sex ? console.log(o) : null;
    }

    toString() {
        return this.list;
    }
}

new List()
    .print('girl');