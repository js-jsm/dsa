class Dictionary {
    constructor() {
        this.dataStore = [];
    }

    add(key) {
        if(this.find(key)) {
            this.dataStore[key] += 1;
        } else {
            this.dataStore[key] = 1;
        }
    }

    splitSentence(str) {
        let array = str.split(" ");

        for (let i=0, end=array.length; i<end; ++i) {
            this.add(array[i]);
        }
    }

    find(key) {
        return this.dataStore[key];
    }

    showAll() {
        let thisDataStore = this.dataStore;
        Object.keys(thisDataStore).forEach(function(key) {
           console.log(key+ ": " + thisDataStore[key]);
        });
    }
}

// test
let sentence = "the brown fox jumped over the blue fox.";
let dictionary = new Dictionary();
dictionary.splitSentence(sentence);
dictionary.showAll();
