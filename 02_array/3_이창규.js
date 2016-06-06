var Temperature = Temperature || {};

Temperature =function(){

	this.defultmonthTemp = [];
	this.insertTemP = [];


	this.intalArray = (weeks, days) => {

			this.defultmonthTemp = new Array(weeks).fill( new Array(days).fill(null) ) ;

	};

	this.tempAdd = function(high,row){

		this.insertTemP = this.defultmonthTemp.map( (arry,idx) => {
			
			return arry = this.defultmonthTemp[idx].map( (subarry, subidx) => {
				return ( (Math.random() * (high - row + 1)) + row ).toFixed(1);
			});

		});

	};

	
	/*평균 구하기*/
	this.monthAverage = ()  => {

		var totalmonth = 0;
		this.insertTemP.map( (val, idx) =>{
			this.insertTemP[idx].map( (subval, subidx) => {

				totalmonth = totalmonth + Number(subval);

			});

		});

		return console.log(`이번달 평균 온도 ${(totalmonth/28).toFixed(1)}`);
	};

	/*각주 평균 구하기*/
	this.weekAverage = ()  => {
		
		var firstweek = 0, secondweek = 0, thirdweek = 0, fourthweek = 0, thisweek = 0;

		this.insertTemP.map( (val, idx) =>{


			if(idx==0){
				this.insertTemP[0].map( (subval, subidx) => {
						
						firstweek = firstweek + Number(subval);

				});
			}else if(idx==1){
				this.insertTemP[1].map( (subval, subidx) => {
						
						secondweek = secondweek + Number(subval);

				});

			}else if(idx==2){
				this.insertTemP[2].map( (subval, subidx) => {
						
						thirdweek = thirdweek + Number(subval);

				});

			}else if(idx==3){
				this.insertTemP[3].map( (subval, subidx) => {
						
						fourthweek = fourthweek + Number(subval);

				});

			}


		});

		return console.log(`첫번째주 평균 온도는 ${(firstweek/7).toFixed(1)}, 두번째주 평균 온도는 ${(secondweek/7).toFixed(1)}, 세번째주 평균 온도는 ${(thirdweek/7).toFixed(1)}, 네번째주 평균 온도는 ${(fourthweek/7).toFixed(1)} `);

	};
	/*각주 평균 구하기*/
	this.thisweekAverage = (num)  => {
		
		var thisweek = 0;

		this.insertTemP[num].map( (val, idx) =>{
			thisweek = thisweek + Number(val);
		});

		return console.log(`지정주 평균 온도는 ${(thisweek/7).toFixed(1)} `);

	};



};

var weeklytemps = new Temperature();

weeklytemps.intalArray(4,7);
weeklytemps.tempAdd(30,20);

weeklytemps.monthAverage();
weeklytemps.weekAverage();
weeklytemps.thisweekAverage(1);

console.log(weeklytemps.insertTemP);