var WeeklyTemps = function () {
    var tempsArray = [];

    this.add = function(array){
        if(array.length <= 7){
            if(tempsArray.length<4){
                tempsArray.push(array);
            }else{
                console.log("한달은 4주차까지 입니다.")
            }

        }else{
            console.log("1주는 7일까지 입니다.")
        }

    }



    this.getWeeklyAvg = function(targetWeek){
        var targetWeekTempArray = tempsArray[targetWeek];
        var totalWeeklyTemp = 0;
        var avg = 0;
        targetWeekTempArray.forEach(function(v,i){
            totalWeeklyTemp += parseInt(v);
        });

        avg = totalWeeklyTemp/targetWeekTempArray.length;

        console.log((targetWeek+1)+"주차 온도 평균 : "+ avg );

        return avg;

    }

    this.printMonthlyAvg = function(){
        var avg = 0;

        var getWeeklyAvg = this.getWeeklyAvg;
        tempsArray.forEach(function(v,i){
            avg += getWeeklyAvg(i);
        })

        console.log("이달의 평균 온도 : "+avg/tempsArray.length);
    }

    return {
        add : this.add,
        printMonthlyAvg : this.printMonthlyAvg,
        getWeeklyAvg : this.getWeeklyAvg,
    }
}

var weeklyTempData1 = [30,25,27,37,22,33,21];
var weeklyTempData2 = [22,24,26,30,27,33,29];
var weeklyTempData3 = [20,23,25,26,28,30,32];
var weeklyTempData4 = [20,23,25,26,28,30,32];

var weeklyTemps = new WeeklyTemps();

weeklyTemps.add(weeklyTempData1);
weeklyTemps.add(weeklyTempData2);
weeklyTemps.add(weeklyTempData3);
weeklyTemps.add(weeklyTempData4);

weeklyTemps.printMonthlyAvg();
weeklyTemps.getWeeklyAvg(0);
weeklyTemps.getWeeklyAvg(1);
weeklyTemps.getWeeklyAvg(2);
weeklyTemps.getWeeklyAvg(3);