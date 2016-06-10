var Grades = function(){
    var scoreArray = [];

    this.add = function(score){
        if(!isNaN(score)){
            scoreArray.push(parseInt(score));
        }else{
            console.log("점수는 숫자만 입력이 가능합니다.")
        }
    }

    this.printAvg = function(){
        var array = scoreArray;

        var result = 0;
        array.forEach(function(value, index){
            result += value;
        });

        console.log("평균 : "+ (result / array.length));
    }

    return {
        add : this.add,
        printAvg : this.printAvg
    }
}

var grade = new Grades();

var demoLength = Math.floor(Math.random()*10);

for(var i=0; i<demoLength; i++){
    var score = Math.floor(Math.random()*100);

    grade.add(score);
}

grade.printAvg();
