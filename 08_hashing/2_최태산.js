class HashMap {
    constructor() {
        this.hashTable  = [];
    }

    put([key = 0, data = null]) {
        let hash = this.makeHash(key);

        if(this.hashTable[hash] == undefined) {
            this.hashTable[hash] = [key, data];
        } else {
            let index = 0; 

            if(this.hashTable[hash][index] == key) {
                this.hashTable[hash][index]     = key;
                this.hashTable[hash][index + 1] = data;
            } else {
                while(this.hashTable[hash][index] != undefined) {
                    index += 2;
                    
                    if(this.hashTable[hash][index] == key) {
                        this.hashTable[hash][index]     = key;
                        this.hashTable[hash][index + 1] = data;
                        return;
                    }

                }

                this.hashTable[hash][index]     = key;
                this.hashTable[hash][index + 1] = data;    
            }
        }

    }

    get(key) {
        let hash  = this.makeHash(key);
        let index = 0;

        if(!this.hashTable[hash])
            return;
        
        while(this.hashTable[hash][index] != key) {
            index += 2;

            if(this.hashTable[hash][index] == key) 
                return this.hashTable[hash][index += 1];
        }

        return this.hashTable[hash][index + 1];
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
     duplication:중복되다`;

let map = new HashMap();
    
dictionary
    .split('\n')
    .map(str => map.put(str.trim().split(':')));


console.log(map.get('cba'));










