


function weeklyTemps(){

	this.monthlyTemp =[[],[],[],[]];
	this.toArrayTemp = toArrayTemp;
	this.totalAvgMonthly = totalAvgMonthly;
	this.everyWeekly = everyWeekly;
	this.chooseWeekly = chooseWeekly;
	    
	for(var i =0; i<4; i++){
		for(var j =0; j<7; j++){

          this.monthlyTemp[i][j] = ((Math.random()*30)+1).toFixed(1);

		}
	}

    //전체 배열 출력
    function toArrayTemp(){
    	return this.monthlyTemp;
    }

    //지정한 주의 평균
    function chooseWeekly(week){

    var weekTemp =this.monthlyTemp[week].reduce(function(x,i){return Number(x)+Number(i) }) / 7;

    return "Select your "+week+"week  Temperature average : "+ weekTemp.toFixed(1);

    }

    
    //월간 토탈 평균
    function totalAvgMonthly(){
        var totalSum= 0;
    	for(var h=0; h<this.monthlyTemp.length; h++ ){
    		totalSum += this.monthlyTemp[h].reduce(function(x,i){return Number(x)+Number(i) }) /7 ;
    	}
		return "Monthly total Average : "+(totalSum/4).toFixed(1);    	
    }


    //모든주의 평균 출력
    function everyWeekly(){
        
        var averageWeek = [];
        var outPutString = "\n";
        for(var l=0; l<4; l++){
    		averageWeek.push(
                { 
            	week : l+1 ,
            	tempAvg: this.monthlyTemp[l].reduce(function(x,i){return Number(x)+Number(i) }) / 7
		    	}
	    	);
        }
        for(var p=0; p<averageWeek.length; p++){
             outPutString += averageWeek[p].week+"week average : "+averageWeek[p].tempAvg.toFixed(1)+"! \n"
        }

        return outPutString;	
    }

}

var testTemp = new weeklyTemps();

testTemp.chooseWeekly(2);
testTemp.totalAvgMonthly();
testTemp.everyWeekly();
