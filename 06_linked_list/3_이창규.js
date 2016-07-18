class Node {

    constructor(element){
        this.element = element;
        this.next = null;
    }

}

class LinkedList{

    constructor() {
        this.head = new Node("head");
        this.head.next = this.head;
        this.length = 0;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }


    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
        this.length++;
    }

    remove(item) {
        let currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
            this.length--;
        }
    }

    display() {
        let currNode = this.head;
        while (currNode.next != this.head) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

}

class SurvivorsFind {

    constructor(members) {
        this.members = members;
        this.soldierList = new LinkedList();
        this.init();
    }

    init() {
        this.soldierList.insert('1번째 군인', 'head')
        for (let i = 2; i <= this.members; i++) {
            this.soldierList.insert( i + '번째 군인', (i-1) + '번째 군인' );
        }
    }

    kill(){

        let startpoint = this.soldierList.find("head").next.next;

        while (this.soldierList.length > 2) {

            if(startpoint.next.element=="head"){
                startpoint =  startpoint.next;
            }
            this.soldierList.remove(startpoint.next.element);

            startpoint = this.soldierList.find(startpoint.next.element).next;
        }
        console.log(`살수 있는 군인은?`)
        this.soldierList.display();
    }


}

const killparty = new SurvivorsFind(41);
killparty.kill();
