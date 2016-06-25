class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(o) {
        this.queue.push(o);


        this.queue.sort((prev, next) => {
          if(prev.code > next.code) 
            return -1; 
          else if(prev.code < next.code) 
            return 1; 
          else 
            return 0;
        });
    }

    dequeue() {
        return this.queue.shift();
    }

    get queue() {
        return this._queue;
    }
}


class Patient {
    constructor({name, code}) {
        this.name = name;
        this.code = code;
    }
}

const queue = new Queue();

for(let i = 0; i < 30; i++)
    queue.enqueue(
        new Patient({
            name : `name_${Math.floor( Math.random() * 100 )}`, 
            code : Math.floor( Math.random() * 100 )
        })
    )

console.log(queue.dequeue());