var weeklyTemps = [
	[34, 20, 35, 21, 29, 22, 40],
	[18, 16, 24, 31, 30, 38, 33],
	[22, 33, 40, 36, 8, 12, 15],
	[30, 32, 38, 43, 22, 26, 10]
];

class Temperature {
	constructor ( temps ) {
		this.temps = temps;
	}
	fourWeeksAverrage () {
		var temps = this.temps,
			allTemps = 0,
			allLength = 0,
			result = null;
		for ( var i=0; i<temps.length; i++ ) {
			allTemps += temps[i].reduce( (a, b) => { return a+b; } );
			allLength += temps[i].length;
		}
		result = allTemps/allLength;
		return console.log(result);
	}
	selectWeekAverage ( weekNumber ) {
		if ( typeof weekNumber !== 'number' || weekNumber > weeklyTemps.length )
			return console.log('숫자를 입력하지 않았거나 존재하지 않는 주차를 입력하였습니다.');
		var temps = this.temps,
			result = null;
		result = temps[weekNumber].reduce( (a, b) => { return a+b; } ) / temps[weekNumber].length;
		return console.log(weekNumber + '주차의 평균 온도 : ' + result);
	}
	WeekAverageAll () {
		var temps = this.temps,
			result = null;
		for ( var i=0; i<temps.length; i++ ) {
			console.log( (i+1) + '주차의 평균 온도 : ' + (temps[i].reduce( (a, b) => { return a+b; } ) / temps[i].length) );
		}
	}
}

var test = new Temperature( weeklyTemps );
test.fourWeeksAverrage();
test.selectWeekAverage(2);
test.WeekAverageAll();
