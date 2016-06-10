/**
 * Created by Jun on 2016-06-06.
 */

function Grades(){
    this.gradeStore = [];
}

Grades.prototype.addGrade = function(value){
    this.gradeStore.push(value);
};

Grades.prototype.getAverage = function(){
    var totalGrade = 0, gradeStoreLength = this.gradeStore.length;
    for(var i = 0; i < gradeStoreLength; i++){
        totalGrade += this.gradeStore[i];
    }

    console.log(totalGrade / gradeStoreLength);
};

var grades = new Grades();

grades.addGrade(90);
grades.addGrade(80);
grades.addGrade(70);
grades.addGrade(60);

grades.getAverage();