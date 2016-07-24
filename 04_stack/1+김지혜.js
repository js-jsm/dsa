function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function peek(){
    return this.dataStore[this.top-1];
}

function pop(){
    return this.dataStore[--this.top];
}

function clear(){
    this.top = 0;
}

function length(){
    return this.top;
}

function checkPair(str){
    var word;
    var bracket =['(','[','{',')',']','}'];
    var bracketStack = new Stack();

    for(var i=0; i<str.length; i++){
        word = str.charAt(i);
   
        console.log(bracket.indexOf(word));
        
        if(bracket.indexOf(word) === 0){
            bracketStack.push(word);
        }
    }
    if(bracket.indexOf(word) == -1 && bracketStack.length() === 0){
      console.log('괄호가 없습니다.');
    }
}

checkPair('2.3+23/12+(3.14159*.24');