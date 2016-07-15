class HashMap {
    constructor() {
        this.hashTable  = [];
        this.valueTable = [];
    }

    put([key = 0, data = null]) {
        let hash = this.makeHash(key);

        if(this.hashTable[hash] == undefined) {
            this.hashTable[hash] = key;
            this.valueTable[hash] = data;
        } else {
            if(this.hashTable[hash] == key) {
                this.valueTable[hash] = data;
            } else {
                while(this.hashTable[hash] != undefined)
                    hash++;

                this.hashTable[hash]  = key;
                this.valueTable[hash] = data;                
            }
        }
    }

    get(key) {
        let hash = this.makeHash(key);

        if(this.hashTable[hash] === key)
            return this.valueTable[hash];
    }

    makeHash(string) {
       const H = 37;
       let total = 0;

       for(let i = 0, len = string.length; i < len; i++) 
          total += H * total + string.charCodeAt(i);
       
       return parseInt(total % 100);
    }
}


const dictionary = 
    `abc:에이비씨
     cba:씨비에이
     cba:복사된씨비에이
     destructuring:파괴하다
     declaration:선언하다
     duplication:중복`;

let map = new HashMap();
    
dictionary
    .split('\n')
    .map(str => map.put(str.trim().split(':')));


console.log(map.get('cba'));










