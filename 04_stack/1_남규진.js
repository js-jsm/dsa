class Stack {
    constructor() {
        this.list = [];
        this.top = 0;
    }

    push(element) {
        this.list[this.top++] = element;
    }

    pop() {
        return this.list[--this.top];
    }

    length() {
        return this.top;
    }
}

// 괄호 쌍 체크 함수
function checkOptPair(str) {
    var char;
    var openPair;
    var stack = new Stack();
    var openParentheses  = ['(', '{', '['];
    var closeParentheses = [')', '}', ']'];

    for (var i=0, loopEnd = str.length; i<loopEnd; ++i) {
        char = str.charAt(i);

        if (openParentheses.indexOf(char) !== -1) {
           stack.push(char);

        } else if(closeParentheses.indexOf(char) !== -1) {
               if (stack.length() == 0) {
                    console.log(str + " => " + char + " 의 여는 괄호가 없음."); return;
                } else {
                    openPair = stack.pop();
                    var isWrongPair = 
                            (openPair == openParentheses[0] && char != closeParentheses[0]) || 
                            (openPair == openParentheses[1] && char != closeParentheses[1]) || 
                            (openPair == openParentheses[2] && char != closeParentheses[2]);

                    if(isWrongPair) {
                        console.log(str + " => " + char + " 의 여는 괄호가 없음."); return;
                    }
                }
        }
    }

    if (stack.length() == 0) {
        console.log(str + " => " + " 괄호가 올바름.");
    } else {
        openPair = stack.pop();
        console.log(str + " => " + openPair + " 의 닫는 괄호가 없음.");
    }
}


checkOptPair("2*3+(1+1+1)/4");
checkOptPair("2*3+(1+1+1/4");
checkOptPair("2*3+1+1+1/4)");
checkOptPair("{(2*3)+(1+1)+(1/4)");
checkOptPair("(2*3)+(1+1)+(1/4)}");
