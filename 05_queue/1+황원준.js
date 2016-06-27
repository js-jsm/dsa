//더효율적인 코드는없는지 참언 부탁드려요 .ㅠ.ㅠ

function Deque() {

    this.dataStore = [];
    this.enqueue = enqueue;
    this.frontEnqueue = frontEnqueue;
    this.dequeue = dequeue;
    this.frontDequeue = frontDequeue
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.isEmpty =isEmpty;
    this.count = count;
    this.clear = clear;

    function enqueue(element) {
        this.dataStore.push(element);
    }
    //앞에 추가
    function frontEnqueue(element) {
        this.dataStore.unshift(element);
    }
    function dequeue(){
            return this.dataStore.shift();
    }
    //앞에 요소 제거
    function frontDequeue(){
            return this.dataStore.pop();
    }

    function front(){
        return this.dataStore[0];
    }
    function back(){
        return this.dataStore[this.dataStore.length-1];
    }
    function toString(){
        var retStr ="";
        for( var i=0; i< this.dataStore.length; ++i){
            retStr += this.dataStore[i]+"\n";
        }
        return retStr;
    }
    function isEmpty(){
        if(this.dataStore.length ==0) {
            return true
        }else{
            return false;
        }
    }
    function count(){
        return this.dataStore.length;
    }
    function clear(){
        this.dataStore.length = 0;
    }
}

function palindromeCheck(inputStr){

var Deques = [];
var splitStr = inputStr.split(" ");
var splitLength = splitStr.length;
var palindromeArr = [];

    for ( var i = 0; i<splitLength; i++){
        Deques.push(new Deque());

    }

    for (var j =0; j<splitLength; j++){
            var tempStr = splitStr[j].split("");
            for( var k=0; k<tempStr.length; k++){
                Deques[j].enqueue(tempStr[k])
            }
    }

    //
   for ( var l = 0; l<Deques.length; l++ ){
        
          while( !Deques[l].isEmpty()  ){

                if( Deques[l].front() == Deques[l].back()  ){

                        if( Deques[l].count() ===1 ){
                            Deques[l].frontDequeue();
                            palindromeArr.push(splitStr[l])
                        }else if ( Deques[l].count() ===2 ){
                            Deques[l].dequeue();
                            Deques[l].frontDequeue();
                            palindromeArr.push(splitStr[l])
                        }else{
                            Deques[l].dequeue();
                            Deques[l].frontDequeue();
                        }
            
                }else {  
                    Deques[l].clear();
                } 

        } 
        
    }
    return palindromeArr;

}

palindromeCheck("palindrome band Evereve OOIOO abba");
