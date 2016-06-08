//
var Grades = function() {
    var _a_score = [1,2,3,4,5,6,7,8,9,10],
        _n_avg =  0
        ;

    this.reset = function() {
        _a_score = [];
        _n_avg = 0;
    };

    this.add = function(...args) {
        _a_score = _a_score.concat(args);
    };

    this.sum = function() {
        return _a_score.reduce( (p, c) => {return p + c} );
    };

    this.average = function() {
        _n_avg = ( this.sum() / _a_score.length ).toFixed(2) ;
        return _n_avg;
    };

    this.printAvg = function() {
        console.log(`average : ${this.average()}`);
    };

    this.getScore = function() {
        return _a_score;
    };
};

new Grades().printAvg();
