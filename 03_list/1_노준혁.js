/**
 * Created by jun on 2016. 6. 13..
 */
var List = (function(){
    function List(){
        //list에 값이 있다고 가정
        this.dataStore = [1,2,3,'a','b','c'];
    }

    List.prototype.length = function(){
        return this.dataStore.length;
    };

    List.prototype.insertMax = function(value){
        var listLength = this.length();
        var maxValue;
        if(isNaN(value) === true){
            //문자
            for(var i = 0; i < listLength; i++){
                if(isNaN(this.dataStore[i])){
                    if(maxValue){
                        if(maxValue < this.dataStore[i]){
                            maxValue = this.dataStore[i];
                        }
                    }else{
                        maxValue = this.dataStore[i];
                    }
                }
            }
        }else{
            //숫자
            for(var i = 0; i < listLength; i++){
                if(!isNaN(this.dataStore[i])){
                    if(maxValue){
                        if(maxValue < this.dataStore[i]){
                            maxValue = this.dataStore[i];
                        }
                    }else{
                        maxValue = this.dataStore[i];
                    }
                }
            }
        }

        if(value > maxValue){
            this.dataStore.push(value);
            console.log(true);
        }else{
            console.log(false);
        }
    };

    return List;
})();

var list = new List();

list.insertMax(1);
list.insertMax(5);
list.insertMax('a');
list.insertMax('d');