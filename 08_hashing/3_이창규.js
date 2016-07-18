class Hash {
    constructor(data){
        this.hashValue = [];
        this.date = data;
        this.init();
    }

    init() {

    }
}

class Dictionary {
    constructor(){
        this.datastore = {};
        this.length = 0;
    }

    add(key, value) {
        this.datastore.key = value;
        this.length++;
    }

    find(key) {
        console.log(this.datastore.key);
        return this.datastore.key;
    }

    remove(key) {
        delete this.datastore.key;
        --this.length;
    }

}

const textFile = 'That Memphis, Tennessee be gettin it in! Baby baby bring it back Baby baby bring it back Got 250 on the dash Supa pimped out Cadillacs I got sumthin that all smash Baby baby bring it back Baby baby bring it back';
const wordHash = new Hash();
const wordData = new Dictionary();



wordData.add('대한민국', '서울');
wordData.add('미국', '워싱턴');
wordData.find('대한민국');
console.log(wordData);
