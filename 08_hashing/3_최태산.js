class HashMap {
    constructor() {
        this.hashTable  = [];
        this.hashTable.count = {};
        this.valueTable = [];
    }

    put(str) {
        let key, data;
            key = data = str;
        let hash = this.makeHash(key);

        if(this.hashTable[hash] == undefined) {
            this.hashTable[hash] = key;
            this.valueTable[hash] = data;

            this.hashTable.count[key] = 1; 
        } else {
            if(!this.hashTable.count[key]) 
                this.hashTable.count[key] = 0;

            if(this.hashTable[hash] == key) {
                this.valueTable[hash] = data;
            } else {
                while(this.hashTable[hash] != undefined)
                    hash++;

                this.hashTable[hash]  = key;
                this.valueTable[hash] = data;                
            }

            this.hashTable.count[key] += 1;
        }
    }

    get(key) {
        for(let key in this.hashTable.count) 
            console.log(`${key} : ${this.hashTable.count[key]}`);
    }

    makeHash(string) {
       const H = 37;
       let total = 0;

       for(let i = 0, len = string.length; i < len; i++) 
          total += H * total + string.charCodeAt(i);
       
       return parseInt(total % 100);
    }
}


const dictionary = `Write a program using hashing that reads a text file and compiles a list of the words in the file with the number of times each word appears in the file.`;

let map = new HashMap();
    
dictionary
    .split(' ')
    .map(str => map.put(str.trim()));


map.get();










