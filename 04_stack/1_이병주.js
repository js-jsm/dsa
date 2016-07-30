class Bracket{
        constructor(bracket,priority){
            this.bracket = bracket;
            this.priority = priority;
            this.isOpen = false;
        }
    }
    class Stack{
        constructor(){
            this.dataStore = [];
            this.top = 0;
        }

        pop(){
            return this.dataStore[--this.top];
        }

        peek(){
            return this.dataStore[this.top-1]
        }
        push(element){
            this.dataStore[this.top++] = element;
        }
        length(){
            return this.top;
        }
        clear(){
            this.top = 0;
        }

        pair(bracket){
            switch(bracket){
                case ']':
                    return '[';
                    break;
                case '}':
                    return '{';
                    break;
                case ')':
                    return '(';
                    break;
                case '(':
                    return ')';
                break;
                case '{':
                    return '}';
                break;
                case '[':
                    return ']';
                break;


            }


        }
        isError(str){
            const bracket = ['[','{','(',']','}',')'];

            let numberStack = new Stack();
            let bracketStack = new Stack();

            let result = "정상입니다.";
            str.split("").forEach((v,i) => {
                if(bracket.indexOf(v) !== -1){
                  if(bracket.indexOf(v) < 3){
                      bracketStack.push(v);
                  }else{
                      const peek = bracketStack.peek();
                      if(peek !== this.pair(v)){
                          result = "에러입니다 / "+i+"자리에서 에서.."+this.pair(peek)+"가 없습니다.";
                      }else{
                          bracketStack.pop();
                      }
                  }

                }
            });
            console.log(str+" // 의 결과");
            console.log(result);


        }

    }

    var test = new Stack();
    test.isError("[{1+(3+4}]");
