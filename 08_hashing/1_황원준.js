function wordDictionary() {
    this.dataStore = []; // { "Jacob" : 104 }
    this.hTable = []; // { 104 : "hello i am hashContents"}
    this.set = set;
    this.outPutContents = outPutContents;
    
    //사용자가 값을 입력 하는 기능
    function set(key, value) {
        this.dataStore[key] = hashSet(key);
        this.hTable[hashSet(key)] = value;
    }
    
    //사용자가 입력한 단어의 정의를 보여주는 기능
    function outPutContents(key) { 
        return this.hTable[this.dataStore[key]]
    }
    
    //해시 테이블에저장 하는 기능
    function hashSet(str) {
        var hash = 5381;
        for (var i = 0; i < str.length; i++) {
            hash = hash * 33 + str.charCodeAt(i);
        }
        return Math.round(hash % 1013)
    }    
    /*
    Another simple hash function that we can implement and is better than the "lose
    lose" hash function is djb2:
        var djb2HashCode = function (key) {
        var hash = 5381; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
        hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}
        };
    */
}
