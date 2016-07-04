class Node()
{
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyList() {
    constructor(element) {
        this.head = new Node('head');
        this.current = this.head;
    }

    find(item) {
        let cur = this.head;
        while (cur.element != item) {
            cur = cur.next;
        }
        return cur;
    }

    insert(newEl, item) {
        let newNode = new Node(newEl);
        let cur = this.find(item);
        newNode.next = cur.next;
        newNode.prev = cur;
        cur.next = newNode;
    }

    display() {
        let curr = this.head;
        while( curr != null && curr.next.element != 'head' ) {
            console.log(curr.next.element);
            currNode = curr.next;
        }
    }

    remove(item) {
        let node = this.find(item);
        if ( node.next != null && node.element != 'head' ) {
            node.next.prev = node.prev;
            node.prev.next = node.next
        }
        node = null;
    }

    // 연결 리스트에서 n 노드만큼 전진(위치를 이동)
    advance(n = 1) {
        let cur = this.current;
        let next = cur.next;
        let i = 0;
        n = 1 < n ? 1 : n;
        while( cur.next != null && !(i > n)) {
            cur.next.prev = cur.prev;
            cur.next.next = cur.next;
            cur = cur.next;
            i++;
        }
        this.current = cur;
        return this.current
    }

    // 연결 리스트에서 n 노드만큼 뒤로 후진  (위치를 이동)
    back(n = 1) {
        let cur = this.current;
        let i = 0;
        n = 1 < n ? 1 : n;
        while( cur.prev != null && !(i > n)) {
            cur.prev.prev = cur.prev;
            cur.prev.next = cur.next;
            cur = cur.prev;
            i++;
        }
        this.current = cur;
        return this.current
    }

    // 현재 노드만 출력
    show( node = null ) {
        if ( node == null ) {
            node = this.current;
        }
        console.log(node.element);
    }

}
