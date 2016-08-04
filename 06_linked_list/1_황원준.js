
class Node {
    constructor(el) {
        this.element = el
        this.next = null
        this.prev = null //doubly new
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null //doubly new
    }

    append(element) {
        let node = new Node(element),
            current = null

        if (this.head == null) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = node
        }

        this.length++
    }

    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0

                if (position === 0) {
                    this.head = current.next

                    if (this.length === 1) { //doubly new
                        this.tail = null
                    } else {
                        this.head.prev = null
                    }
                } else if (position === length-1) {
                    current = this.tail
                    this.tail = current.prev
                    this.tail.next = null
                } else {

                    while (index++ < position) {
                        previous = current
                        current = current.next
                    }

                    previous.next = current.next
                    current.next.prev = previous
                }

                length--

                return current.element
        } else {
            return null
        }
    }

    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            var node = new Node(element),
            current = this.head,
            previous,
            index = 0

            if(position === 0) {

                if (!this.head) { //doubly new
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node 
                    this.head = node
                }
            } else if (position === this.length) { //doubly new
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node

            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node //doubly new
                node.prev = previous //doubly new
            }
            length++

            return true
        } else {
            return false
        }
    }

    toString() {
        var current = this.head,
            string = ''

            while (current) {
                string = current.element
                current = current.next
            }
            return string
    }

    indexOf(element) {
        var current = this.head,
            index = -1

            while (current) {
                if (element === current.element) {
                    return index
                }
                index++
                current = current.next
            }

            return -1
    }

    remove(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    getHead() {
        return this.head
    }
 /* exam 1 */   
    advance(n) {
        for (;;) {
            if (n <= 0) break
            this.head = this.head.next
            n--
        } 
    }

    back(n) {
        for (;;) {
            if (n <= 0) break
            this.head = this.head.prev
            n--
        }
    }

    show() {
        return this.head.element
    }



}
