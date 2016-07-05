class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
        this.length = 0;
    }

    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
        this.length++;
    }

    remove(item) {
        var currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
            currNode.next = null;
            currNode.prev = null;
            this.length--;
        }
    }

    findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {
        let currNode = this.head;
        let result = "";

        while (currNode.next != this.head) {
            result += currNode.next.element + " / ";
//                console.log(currNode.next.element);
            currNode = currNode.next;
        }

        console.log(result)
    }

}


class War {
    constructor(memberCount) {
        this.memberCount = memberCount;
        this.linkedList = new LinkedList();
        this.init();
    }

    init() {
        const memberCount = this.memberCount;
        this.linkedList.insert("soldier0", 'head')
        for (let i = 1; i < memberCount; i++) {
            let randMember = "soldier" + i;
            this.linkedList.insert("soldier" + i, "soldier" + (i - 1));
        }

//            this.linkedList.display();
    }

    lose() {

        let kill = 0;
        const soldierList = this.linkedList;
        let soldier = soldierList.find("head");
        let startSoldier;

        while (soldierList.length > 2) {
            for (let i = 0; i < 3; i++) {
                soldier = soldier.next;
            }

            if(soldier.element == "head"){
                soldier = soldier.next;
            }
            console.log("dead!! "+soldier.element);

            startSoldier = soldier.prev;
            soldierList.remove(soldier.element);
            soldier = startSoldier;
        }

        console.log("살았다!!!! 0부터 "+(this.memberCount-1)+"까지중 생존자");
        soldierList.display();

    }


}

const war = new War(52);
war.lose()
