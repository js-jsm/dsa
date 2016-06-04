class Grades {
    constructor() {
        this.values = [];
    }

    addValues(v) {
        this.values.push(v);
    }

    getAverage() {
        return `students average : ${  Math.floor( (this.values.reduce((p, n) => p + n)) / this.values.length ) }` ;
    }
}

const students = new Grades();

for(let i = 0; i < 45; i++)
    students.addValues(
        Math.floor( Math.random() * 100 )
    );

console.log(
    students.getAverage()
);