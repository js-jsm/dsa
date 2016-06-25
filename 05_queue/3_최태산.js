class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(o) {
        this.queue.push(o);
    }

    dequeue() {
        return this.queue.shift();
    }

    get queue() {
        return this._queue;
    }
}

class Patient {
    constructor(name) {
        this.name = name;
    }
}

class Haspital {
    constructor() {
        this.queue = new Queue();
        
        this.start();
    }

    addPetient() {
        this.queue.enqueue(
            new Patient(`name_${Math.floor( Math.random() * 100 )}`)
        )
    }

    seen() {
        let petient = this.queue.dequeue();

        if(!petient) {
            console.log('환자가 없습니다.');
            return; 
        }

        console.log(`의사가 환자 ${petient.name}님을 진료합니다.`);
    }

    print() {
        console.log(this.queue);
    }

    start() {
        let menu,
            isBreak = false;

        while(true) {
            menu = prompt(`1: 환자가 응급실에 들어옴.\n 2: 의사가 환자를 진료함.\n 3: 환자목록 출력.\n 4: 영업종료.`);

            switch(menu) {
                case '1' : 
                    this.addPetient();
                    break;

                case '2' : 
                    this.seen();
                    break;

                case '3' : 
                    this.print();
                    break;

                default : 
                    isBreak = true;
                    break;
            }

            if(isBreak)
                break;
        }

    }
}

new Haspital();