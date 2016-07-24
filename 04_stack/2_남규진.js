class Stack {
    constructor() {
        this.items = [];
        this.top = 0;
    }

    push(element) {
        this.items[this.top++] = element;
    }

    pop() {
        return this.items[--this.top];
    }

    length() {
        return this.top;
    }
}

// 중위표기식 -> 후위표기식 변환 함수
function toPostFix(inFixNotation) {
    let postFixNotation = [];
    let index = 0;
    let signsStack = new Stack();
    
    for (let i=0, end=inFixNotation.length; i<end; ++i) {
        let ch = inFixNotation.charAt(i);
        switch(ch) {
            case '+':
            case '-': 
            case '/': 
            case '*':
                signsStack.push(ch);
                break;
            case ')':
                postFixNotation[index++] = signsStack.pop();
                break;
            case '(':
                break;
            default:
                postFixNotation[index++] = ch; 
                break;
        }
    }

    if (signsStack.length() != 0) postFixNotation[index] = signsStack.pop();
    return postFixNotation.join("");
}


// Test
let infix = "(1+2)*(3+4)";
let postfix = toPostFix(infix);
if (postfix != "12+34+*") {
    console.log("Test#1 Failed");
} else {
    console.log(postfix);
}

infix = "(A+(B*C))-(D/E)";
postfix = toPostFix(infix);
if (postfix != "ABC*+DE/-") {
    console.log("Test#2 Failed");
} else {
    console.log(postfix);
}