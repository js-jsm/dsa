function Grade() {
    this.dataSource = [];
    this.add = add;
    this.average = average;
}

function add(score) {
    this.dataSource.push(score);
}

function average() {
    var total = 0;
    for (var i = 0, end = this.dataSource.length; i < end; ++i) {
        total += this.dataSource[i];
    }

    return total / this.dataSource.length;
}

// min 보다 크거나 같고, max 보다 작거나 같은 값을 반환한다
function randomRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var grade = new Grade();
for (var i = 0; i <= 20; i++) {
    grade.add(randomRange(0, 100));
}
console.log(grade.dataSource);
console.log(grade
    .average()
    .toFixed(2));
