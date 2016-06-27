class Deque {
    constructor() {
        this.dataArray = [];
    }

    pushToFront(data) {
        this.dataArray.unshift(data);
    }

    popFromFront() {
        return this.dataArray.shift();
    }


    pushToBack(data) {
        this.dataArray.push(data);
    }

    popFromBack() {
        return this.dataArray.pop();
    }

    front() {
        return this.dataArray[0];
    }

    back() {
        let arrayLength = this.dataArray.length;
        return this.dataArray[arrayLength];
    }

    toString() {
        return this.dataArray.join()
    }

    empty() {
        if (this.dataArray.length == 0) {
            return true;
        } else {
            return false;
        }
    }


}


class CkPalindrome{
    constructor(targetString){
        this.deque = new Deque();
        this.str = targetString;
    }

    isPalindrome(){

        let targetString = this.str.replace( /(\s*)/g, "" );
        let stringLength = targetString.length;
        let i=0;
        while(i < stringLength){
            this.deque.pushToBack(targetString.charAt(i));
            i++;
        }


        i=0;
        let isPalindrome = true;
        while(!this.deque.empty()){
            let char = targetString.charAt(i);

            isPalindrome = ( char !== this.deque.popFromBack() ) ? false : true;
            i++;

        }

        return isPalindrome ? "'"+this.str+ "' 는 회문입니다" : "'"+this.str+"'는 회문이 아닙니다";

    }

}
let deque = new Deque();

deque.pushToFront("a");
console.log(deque.dataArray)
deque.pushToFront("b");
console.log(deque.dataArray)
deque.pushToFront("c");
console.log(deque.dataArray)
deque.pushToBack("d");
console.log(deque.dataArray)
deque.pushToBack("e");
console.log(deque.dataArray)
deque.pushToBack("f");
console.log(deque.dataArray)
deque.pushToBack("g");
console.log(deque.dataArray)
deque.pushToBack("h");
console.log(deque.dataArray)

let pal = new CkPalindrome('리 효 리');
console.log(pal.isPalindrome())