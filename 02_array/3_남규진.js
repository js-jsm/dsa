function monthTemps() {
	this.temperatures = [];
	this.addMonthData = addMonthData;
	this.eachMonthTempAverage = eachMonthTempAverage;
	this.totalMonthTempAverage = totalMonthTempAverage;
	this.findTempAverage = findTempAverage;
}

// 특정 지역의 월간 온도 자료 추가
function addMonthData(areaName) {
	var columns = [];
	columns[0] = areaName;
	for(var i=1; i<=12; i++) {
		columns[i] = randomRange(0, 100);
	}
	var index = this.temperatures.length;
	this.temperatures[index] = columns;
}

// 랜덤한 온도 데이터 생성
function randomRange(min, max) {
	return Math.floor( (Math.random() * (max - min + 1)) + min );
}

// 각 지역별 월간 평균 온도 출력
function eachMonthTempAverage() {
	var total = 0;
	var average = 0.0;
	
	for (var row=0; row<this.temperatures.length; ++row) {
		for (var col=1; col<this.temperatures[row].length; ++col) {
			total += this.temperatures[row][col];
		}
		average = total / (this.temperatures[row].length-1); // 0번 인덱스는 지역명
		console.log(this.temperatures[row][0] + " Avg: " + average.toFixed(2));

		total = 0;
		average = 0.0;
	}
}

// 총 월간 평균 온도 출력
function totalMonthTempAverage() {
	var total = 0;
	var average = 0.0;
	
	for (var row=0; row<this.temperatures.length; ++row) {
		for (var col=1; col<this.temperatures[row].length; ++col) {
			total += this.temperatures[row][col];
		}
	}

	average = total / (this.temperatures.length * 12);
	console.log("Total Avg: " + average.toFixed(2));
}

// 특정 지역 월간 평균 온도 출력
function findTempAverage(areaName) {
	var index;

	for (var row=0; row<this.temperatures.length; ++row) {
		if(areaName.toLowerCase() == this.temperatures[row][0].toLowerCase())
			index = row;
	}

	if(typeof index === 'number') {
		var total = 0;
		var average = 0.0;

		for (var col=1; col<this.temperatures[index].length; ++col) {
			total += this.temperatures[index][col];
		}
		average = total / (this.temperatures[index].length-1);
		console.log("Find " + areaName + " Avg: " + average.toFixed(2));

	} else {
		console.log("Can't Find Data of " + areaName);
	}
}

var thisMonth = new monthTemps();
// 각 지역별 데이터 생성
// ['지역명', '1월 온도', '2월 온도' ... '12월 온도'] 형식으로 데이터 저장.
thisMonth.addMonthData("Seoul");
thisMonth.addMonthData("Busan");
thisMonth.addMonthData("Daegu");
thisMonth.addMonthData("Gwangju");
console.log(thisMonth.temperatures);

// 지역별 월간 평균 온도 출력
thisMonth.eachMonthTempAverage();

// 총 월간 평균 온도 출력
thisMonth.totalMonthTempAverage();

// 특정 지역 월간 평균 온도 검색
thisMonth.findTempAverage('seoul');
thisMonth.findTempAverage('Arizona');