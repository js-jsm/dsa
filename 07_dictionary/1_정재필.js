class Dictionary
{
    constructor() {
        this.dataStore = [];
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        delete this.dataStore[key];
    }

    showAll() {
        Object.keys(this.dataStore).sort().map( (key, idx) => {
            console.log(` ${key} => ${this.dataStore[key]}`);
        });
    }

    count() {
        return Object.keys(this.dataStore).length;;
    }

    clear() {
        Object.keys(this.dataStore).map( (v, i) => delete this.dataStore[v] );
    }
}


class TellNumberMgt extends Dictionary
{
    constructor() {
        super();

    }

    setTellNumber() {
        let tels = [];
        let data = [];
        let text =
`영나미, 000-000-0000
일나미, 111-111-1111
이나미, 222-222-2222
삼나미, 333-333-3333
사나미, 444-444-4444`
;
        tels = text.split('\n');
        console.log(tels);
        tels.map( tel => {
            // tel.split(',').map( row => this.add( row[0].trim(), row[1].trim() ) );
                // console.log(tel);
            data = tel.split(',');
            //console.log(data, data[0], data[1]);
            this.add( data[0].trim(), data[1].trim() ) ;

        });
    }

    add(name, tel) {
        if( !name  || !tel ) {
            throw new Error('empty value');
            return;
        }

        super.add( name, tel );
    }

    show( key ) {
        console.log( `${key} => ${this.find(key)}` );
    }

}

var pbook = new TellNumberMgt();
pbook.setTellNumber();

console.log('Number of entries : ' + pbook.count());
pbook.show('일나미');
pbook.showAll();

pbook.remove('일나미');
pbook.showAll();

pbook.clear();
pbook.showAll();
console.log('Number of entries : ' + pbook.count());
