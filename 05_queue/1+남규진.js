class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }

    set leftLink (element) {
        this.left = element;
    }

    get leftLink() {
        return this.left;
    }

    set rightLink(element) {
        this.right = element;
    }

    get rightLink() {
        return this.right;
    }
}

class DeQueue {
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
    }

    set front (newNode) {
        this.frontNode = newNode;
    }

    get front () {
        return this.frontNode;
    }

    set rear (newNode) {
        this.rearNode = newNode;
    }

    get rear () {
        return this.rearNode;
    }

    // 리스트의 앞에서 삽입
    enqueueFront(element) {
        var newNode = new Node(element);

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.front.leftLink = newNode;
            newNode.rightLink = this.front;
            newNode.leftLink = null;
            this.front = newNode;
        }
    }

    // 리스트의 끝에서 삽입
    enqueueRear(element) {
        var newNode = new Node(element);

        if (this.isEmpty()) {
            this.rear = newNode;
            this.front = newNode;
        } else {
            this.rear.rightLink = newNode;
            newNode.leftLink = this.rear;
            newNode.rightLink = null;
            this.rear = newNode;
        }
    }

    // 리스트의 앞에서 삭제
    dequeueFront() {
        var dequeueElement = null;

        if (this.isEmpty()) {
            console.log("Queue is Empty!");
        } else {
            if (this.front.rightLink == null) {
                dequeueElement = this.front.element;
                this.front = null;
                this.rear = null;
            } else {
                dequeueElement = this.front.element;
                this.front = this.front.rightLink;
                this.front.leftLink = null;
            }
        }
        return dequeueElement;
    }

    // 리스트의 끝에서 삭제
    dequeueRear() {
        var dequeueElement = null;

        if (this.isEmpty()) {
            console.log("Queue is Empty!");
        } else {
            if (this.rear.leftLink == null) {
                dequeueElement = this.rear.element;
                this.front = null;
                this.rear = null;
            } else {
                dequeueElement = this.rear.element;
                this.rear = this.rear.leftLink;
                this.rear.rightLink = null;
            }
        }
        return dequeueElement;
    }

    isEmpty() {
        return (this.front == null);
    }
    
    toString() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
        } else {
            var printData = [];
            var currNode = this.front;
            while (!(currNode == null)) {
                printData.push(currNode.element);
                currNode = currNode.rightLink;
            }

            console.log(printData.join(','));
        }
    }
}

function isPalindromeWord(word) {
    var deque = new DeQueue();

    var editedWord = word.toLowerCase();
        // editedWord = editedWord.trim();
        editedWord = editedWord.replace(/\s/gi, '');

    var wordLength = editedWord.length;
    for (var i=0; i<wordLength; ++i) {
        deque.enqueueRear(editedWord.charAt(i));
    }

    var endIdx = Math.floor(wordLength/2);
    var isPalindrome = " 회문입니다.";
    for (var i=0; i<endIdx; ++i) {
        if (deque.dequeueFront() != deque.dequeueRear()) {
            isPalindrome = " 회문이 아닙니다.";
        }
    }
    
    console.log(word + isPalindrome);
}
